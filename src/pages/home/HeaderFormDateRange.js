// import React/Hook/Router...
import React from "react";

// import package "date-range"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// function Component
const HeaderFormDateRange = function (props) {
  return (
    <div
      className="position-absolute"
      style={{ width: "40%", top: "170%", left: "35%", zIndex: 1 }}
    >
      <DateRange
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        className="date"
        minDate={new Date()}
        onChange={(dates) => props.onChangeSelectedDates([dates.selection])}
        ranges={props.selectedDatesProp}
      />
    </div>
  );
};

// export
export default HeaderFormDateRange;
