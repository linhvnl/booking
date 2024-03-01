// import React/Hook/Router...
import React, { useState } from "react";
import { format } from "date-fns";

// import component
import HeaderFormSearchInput from "./HeaderFormSearchInput";
import HeaderFormDateRange from "./HeaderFormDateRange";

// function Component
const HeaderFormSearch = function () {
  // show / hidden modal Date Range
  const [showDateRange, setShowDateRange] = useState(false);

  const showDateRangeHandler = () => {
    setShowDateRange(!showDateRange);
  };

  // update new changed Dates
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // display value on input Dates, in "dd/MM/yyyy" formatting
  const datesValue = `${format(
    selectedDates[0].startDate,
    "dd/MM/yyyy"
  )} to ${format(selectedDates[0].endDate, "dd/MM/yyyy")}`;

  return (
    <div className="position-relative py-4">
      <HeaderFormSearchInput
        valueInputDate={datesValue}
        onShowDateRange={showDateRangeHandler}
      />

      {showDateRange && (
        <HeaderFormDateRange
          selectedDatesProp={selectedDates}
          onChangeSelectedDates={setSelectedDates}
        />
      )}
    </div>
  );
};

// export
export default HeaderFormSearch;
