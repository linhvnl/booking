// import React/Hook/Router...
import React from "react";

// import package "date-range"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// function Component
const SearchFormDateRange = function (props) {
  // return
  return (
    <div
      className="position-absolute"
      style={{ width: "100%", top: "40%", left: "0%", zIndex: 10 }}
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
export default SearchFormDateRange;
