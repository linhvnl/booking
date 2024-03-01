// import React/Hook/Router...
import React from "react";

// function Component
const FormInputItem = (props) => {
  // tạo mảng các thông tin input
  const inputInfoList = [
    {
      input: props.items.inputUsername,
      type: "text",
      id: "username",
      name: "username",
      placeholder: "Username",
      errMessage: "Username must be not empty.",
    },
    {
      input: props.items.inputPassword,
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Password",
      errMessage: "Passwork must have least 6 character.",
    },
  ];

  // tạo html cho các input từ mảng thông tin input
  const inputList = inputInfoList.map((info) => {
    return (
      <div key={info.id} className="mb-3">
        <input
          type={info.type}
          id={info.id}
          name={info.name}
          placeholder={info.placeholder}
          onChange={info.input.inputChangeHandler}
          onBlur={info.input.inputBlurHandler}
          value={info.input.enteredValue}
          className="bg-transparent border border-secondary rounded-1 w-100 p-3 me-2"
        />
        {info.input.hasError && (
          <p
            className="text-danger border-top pt-1 mb-0"
            style={{ fontSize: "10px" }}
          >
            {info.errMessage}
          </p>
        )}
      </div>
    );
  });

  // return
  return inputList;
};

// export
export default FormInputItem;
