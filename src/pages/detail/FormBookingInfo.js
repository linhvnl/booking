// import React/Hook/Router...
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// import CUSTOM HOOK
import useHttpBooking from "../../hooks/use-http-booking";

// function Component
const FormBookingInfo = (props) => {
  // lấy variable và function từ props
  const user = props.user;
  const actionHandler = props.onAction;

  // sử dụng Context
  const { username } = useOutletContext();

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpBooking();

  // sử dụng useEffect để lấy thông tin user khi render form 1 lần đầu
  useEffect(() => {
    if (user.userId === "") {
      // send request POST
      customFetch({
        method: "POST",
        url: endPoints.fetchUser,
        bodyObj: { username },
        errFunc: (data) => {
          console.log(data.message);
        },
        successFunc: (data) => {
          actionHandler({ type: "fetch-user", payload: data });
        },
      });
    }
  }, [user.userId, endPoints.fetchUser, customFetch, actionHandler, username]);

  // thông tin hiển thị các input
  const inputInfo = [
    {
      label: "Your Full Name",
      type: "text",
      placeholder: "Full Name",
      name: "fullName",
      defaultValue: user.fullName,
    },
    {
      label: "Your Email",
      type: "email",
      placeholder: "Email",
      name: "email",
      defaultValue: user.email,
    },
    {
      label: "Your Phone Number",
      type: "phone",
      placeholder: "Phone Number",
      name: "phoneNumber",
      defaultValue: user.phoneNumber,
    },
    {
      label: "Your Identity Card Number",
      type: "text",
      placeholder: "Card Number",
      name: "cardNumber",
      defaultValue: user.cardNumber,
    },
  ];

  // render các input
  const renderInputInfo = inputInfo.map((item) => (
    <div key={item.name} className="mb-3">
      <label htmlFor={item.name} className="form-label fs-5">
        {item.label}
      </label>
      <input
        type={item.type}
        className="form-control p-3"
        id={item.name}
        placeholder={item.placeholder}
        name={item.name}
        defaultValue={item.defaultValue}
        required
        onBlur={(e) =>
          actionHandler({
            type: "set-user-info",
            payload: { inputName: item.name, inputValue: e.target.value },
          })
        }
      />
    </div>
  ));

  // return
  return (
    <>
      <h3 className="fw-bolder mb-3">Reserve Info</h3>
      {renderInputInfo}
    </>
  );
};

export default FormBookingInfo;
