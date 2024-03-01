// import React/Hook/Router...
import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { parse } from "date-fns";

// function Component
const SearchPopup = (props) => {
  // sử dụng Context
  const { keySearchHotel, setKeySearchHotel } = useOutletContext();

  // sử dụng useRef để lấy value input
  const inputDestination = useRef();
  const inputCheckInDate = useRef();
  const inputRoomQuantity = useRef();

  // thông tin hiển thị các input
  const inputInfo = [
    {
      label: "Destination",
      type: "text",
      name: "destination",
      ref: inputDestination,
      defaultValue: keySearchHotel.destination,
    },
    {
      label: "Check-in Date",
      type: "text",
      name: "checkInDate",
      ref: inputCheckInDate,
      // thêm cho DATE RANGE
      value: props.valueInputDate,
      onClickHandler: props.onShowDateRange,
    },
  ];

  // thông tin hiển thị các optional input
  const inputOptions = [
    {
      label: "Min price",
      type: "number",
      subLabel: " per night",
      placeholder: "",
    },
    {
      label: "Max price",
      type: "number",
      subLabel: " per night",
      placeholder: "",
    },
    { label: "Adult", type: "number", subLabel: "", placeholder: 1 },
    { label: "Children", type: "number", subLabel: "", placeholder: 0 },
    {
      label: "Room",
      type: "number",
      subLabel: "",
      // placeholder: 1,
      name: "roomQuantity",
      ref: inputRoomQuantity,
      defaultValue: keySearchHotel.roomQuantity,
    },
  ];

  // sử dụng useEffect mỗi khi keySearchHotel thay đổi
  useEffect(() => {
    // nếu user chưa nhập "destination" thì focus lại vào "destination"
    if (keySearchHotel.destination === "")
      return inputDestination.current.focus();
  }, [keySearchHotel]);

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
  };

  // render các input
  const renderInputInfo = inputInfo.map((item) => (
    <div key={item.label} className="mb-3">
      <label className="fw-bold mb-1">{item.label}</label>
      <br />
      <input
        type={item.type}
        className="px-1 py-2 border-0 w-100"
        placeholder={item.placeholder}
        name={item.name}
        ref={item.ref}
        defaultValue={item.defaultValue}
        // thêm cho DATE RANGE
        value={item.value}
        readOnly={item.name === "checkInDate" ? true : false}
        onClick={item.onClickHandler}
      />
    </div>
  ));

  // render các optional input
  const renderInputOptions = inputOptions.map((item) => (
    <div key={item.label} className="mb-2">
      <label className="text-secondary" style={{ width: "75%" }}>
        {item.label}
        <span style={{ fontSize: "14px" }}>{item.subLabel}</span>
      </label>
      <input
        type={item.type}
        className="border-light"
        style={{ width: "25%" }}
        placeholder={item.placeholder}
        name={item.name}
        ref={item.ref}
        defaultValue={item.defaultValue}
      />
    </div>
  ));

  // return
  return (
    <div className="card bg-warning rounded-4 border-0 shadow px-2 py-3">
      <h5 className="fw-bolder fs-4 mb-3">Search</h5>

      <form>
        {renderInputInfo}
        <label className="fw-bold mb-1">Options</label>
        <div className="p-2 mb-4">{renderInputOptions}</div>

        <span className="bg-info py-2">
          <button
            type="button"
            className="btn bg-btn-cus rounded-0 py-2 text-light w-100"
            onClick={searchHandler}
          >
            Search
          </button>
        </span>
      </form>
    </div>
  );
};

// export
export default SearchPopup;
