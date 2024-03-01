// import React/Hook/Router...
import React, { useState, useEffect } from "react";

// import package "date-range"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// function Component
const FormBookingDate = function (props) {
  // lấy variable và function từ props
  const actionHandler = props.onAction;

  // update new changed Dates
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // sử dụng useEffect để set dữ liệu check-in-date vào stateBooking
  useEffect(() => {
    actionHandler({
      type: "set-check-in-date",
      payload: {
        dateStart: selectedDates[0].startDate,
        dateEnd: selectedDates[0].endDate,
      },
    });
  }, [selectedDates, actionHandler]);

  // return
  return (
    <>
      <h3 className="fw-bolder mb-3">Dates</h3>
      <DateRange
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        className="date fs-6"
        minDate={new Date()}
        onChange={(dates) => setSelectedDates([dates.selection])}
        ranges={selectedDates}
      />
    </>
  );
};

export default FormBookingDate;
