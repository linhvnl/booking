// import React/Hook/Router...
import React, { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { parse } from "date-fns";

// function Component
const HeaderFormSearchInput = function (props) {
  // sử dụng Context
  const { setKeySearchHotel } = useOutletContext();

  // sử dụng useRef để lấy value input
  const inputDestination = useRef();
  const inputCheckInDate = useRef();
  const inputRoomQuantity = useRef();

  // sử dụng điều hướng
  const navigate = useNavigate();

  // thông tin hiển thị các input
  const dummyInputLabel = [
    {
      id: "01",
      name: "destination",
      ref: inputDestination,
      type: "text",
      icon: "fa-bed",
      label: "Where are you going?",
    },
    {
      id: "02",
      type: "text",
      name: "checkInDate",
      ref: inputCheckInDate,
      icon: "fa-calendar",
      label: "06/24/2022 to 06/24/2022",
    },
    {
      id: "03",
      type: "number",
      name: "roomQuantity",
      ref: inputRoomQuantity,
      icon: "fa-female",
      label: "1 adult · 0 children · 1 room",
    },
  ];

  // function xử lý nút Search
  const searchHandler = () => { 
    // set search key
    setKeySearchHotel({
      destination: inputDestination.current.value,
      checkInDate: inputCheckInDate.current.value,
      dateStart: parse(
        inputCheckInDate.current.value.slice(0, 10),
        "dd/MM/yyyy",
        new Date()
      ),
      dateEnd: parse(
        inputCheckInDate.current.value.slice(-10),
        "dd/MM/yyyy",
        new Date()
      ),

      roomQuantity: inputRoomQuantity.current.value || "1",
    });

    // chuyển đến Search Page
    return navigate("/search");
  };

  // input Destination and Options
  const inputList = dummyInputLabel.map((item) => (
    <span key={item.id} className="col d-flex align-items-center">
      <i className={`fa ${item.icon} ms-3 me-2 text-secondary`}></i>
      <input
        type={item.type}
        name={item.name}
        ref={item.ref}
        placeholder={item.label}
        className="border-0 flex-grow-1"
      />
    </span>
  ));

  // return
  return (
    <form className="w-100 position-absolute top-100 start-50 translate-middle">
      <div className="p-2 mt-4 border border-3 border-warning rounded-2 bg-light shadow d-flex justify-content-between align-items-center">
        <div className="row row-cols-3 flex-grow-1">
          {/* input Destination  */}
          {inputList[0]}

          {/* input Dates  */}
          <span
            key={dummyInputLabel[1].id}
            className="col d-flex align-items-center"
          >
            <i
              className={`fa ${dummyInputLabel[1].icon} ms-3 me-2 text-secondary`}
            ></i>
            <input
              readOnly
              type={dummyInputLabel[1].type}
              name={dummyInputLabel[1].name}
              ref={dummyInputLabel[1].ref}
              value={props.valueInputDate}
              className="border-0 flex-grow-1"
              onClick={props.onShowDateRange}
            />
          </span>

          {/* input Options  */}
          {inputList[2]}
        </div>

        <span className="bg-info mx-2">
          <button
            type="button"
            className="btn bg-primary-cus rounded-0 text-light"
            onClick={searchHandler}
          >
            Search
          </button>
        </span>
      </div>
    </form>
  );
};

// export
export default HeaderFormSearchInput;
