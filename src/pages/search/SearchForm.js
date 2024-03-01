// import React/Hook/Router...
import React, { useState } from "react";
import { format, parse } from "date-fns";
import { useOutletContext } from "react-router-dom";

// import component
import SearchFormDateRange from "./SearchFormDateRange";
import SearchPopup from "./SearchPopup";

// function Component
const SearchForm = function () {
  // sử dụng Context
  const { keySearchHotel } = useOutletContext();

  // show / hidden modal Date Range
  const [showDateRange, setShowDateRange] = useState(false);

  // function xử lý ẩn hiện Date Range
  const showDateRangeHandler = () => {
    setShowDateRange(!showDateRange);
  };

  // update new changed Dates
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: keySearchHotel.checkInDate
        ? parse(
            keySearchHotel.checkInDate.slice(0, 10),
            "dd/MM/yyyy",
            new Date()
          )
        : new Date(),

      endDate: keySearchHotel.checkInDate
        ? parse(keySearchHotel.checkInDate.slice(-10), "dd/MM/yyyy", new Date())
        : new Date(),

      key: "selection",
    },
  ]);

  // display value on input Dates, in "dd/MM/yyyy" formatting
  const datesValue = `${format(
    selectedDates[0].startDate,
    "dd/MM/yyyy"
  )} to ${format(selectedDates[0].endDate, "dd/MM/yyyy")}`;

  // return
  return (
    <div className="col-3 position-relative py-4">
      <SearchPopup
        valueInputDate={datesValue}
        onShowDateRange={showDateRangeHandler}
      />

      {/* DATE RANGE */}
      {showDateRange && (
        <SearchFormDateRange
          selectedDatesProp={selectedDates}
          onChangeSelectedDates={setSelectedDates}
        />
      )}
    </div>
  );
};

// export
export default SearchForm;
