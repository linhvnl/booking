// import React/Hook/Router...
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

// import CUSTOM HOOK
import useInput from "../../hooks/use-input";
import useHttpBooking from "../../hooks/use-http-booking";
import useLocalStorage from "../../hooks/use-local-storage";

// import component
import FormInputItem from "../UI/FormInputItem";

/////////////////////////
// logic xác thực là hợp lệ
// email có "@" // const isEmail = (value) => value.includes("@");
// value không được rỗng
const isNotEmpty = (value) => value.trim() !== "";
// value có ít nhất 6 ký tự
const is6Chars = (value) => value.trim().length >= 6;

/////////////////////////
// function Component
function FormLogin(props) {
  // sử dụng state username
  const { setUsername } = useOutletContext();

  // state message phản hồi xác thực
  const [authMessage, setAuthMessage] = useState(null);

  // dùng điều hướng
  const navigate = useNavigate();

  // dùng Custom Hook cho mỗi đầu vào
  const { input: inputUsername } = useInput(isNotEmpty);
  const { input: inputPassword } = useInput(is6Chars);

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpBooking();

  // dùng Custom Hook làm việc với Local Storage
  const { save } = useLocalStorage();

  // hiệu lực form tổng, form chỉ valid khi tất cả input đều valid
  let isValidForm = false;
  if (inputUsername.isValidValue && inputPassword.isValidValue) {
    isValidForm = true;
  }

  // hàm xử lý Submit cho form
  const submitFormHandler = async (event) => {
    event.preventDefault();

    // submit là đã "touch"
    inputUsername.inputBlurHandler();
    inputPassword.inputBlurHandler();

    // tổng form không hợp lệ thì return
    if (!isValidForm) return;

    // logic muốn thực hiện khi tổng form hợp lệ => send request
    customFetch({
      method: "POST",
      url: endPoints.fetchLogin,
      bodyObj: {
        username: inputUsername.enteredValue,
        password: inputPassword.enteredValue,
      },
      errFunc: (data) => setAuthMessage(data.message),
      successFunc: (data) => {
        // cập nhật state username
        setUsername(data.username);
        // lưu username xuống Local Storage
        save("username", data.username);
        // chuyển về trang Home
        return navigate("/");
      },
    });
  };

  // return
  return (
    <div className="container d-flex justify-content-center py-5 my-5">
      <div className="py-5" style={{ minWidth: "360px" }}>
        <h1 className="text-center fw-bold pb-4">Login</h1>

        {/* phản hồi SIGN UP có lỗi gì hay không */}
        {authMessage && (
          <p className="text-danger text-center">
            __VALIDATION__
            <br />
            {authMessage}
          </p>
        )}

        {/* form input */}
        <form onSubmit={submitFormHandler}>
          <FormInputItem items={{ inputUsername, inputPassword }} />

          {/* nút submit CREATE ACCOUNT */}
          <div className="">
            <button
              type="submit"
              disabled={!isValidForm}
              className="btn btn-primary w-100 fw-bold fs-5 p-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export
export default FormLogin;
