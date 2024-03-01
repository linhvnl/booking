// import React/Hook/Router...
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// import CUSTOM HOOK
import useHttpBooking from "../../hooks/use-http-booking";

// import component
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

// function Component
const Search = () => {
  // sử dụng Context
  const { keySearchHotel } = useOutletContext();

  // state cho RESULTS search hotels
  const [resultSearchHotel, setResultSearchHotel] = useState();

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpBooking();

  // sử dụng useEffect để search hotels mỗi khi keySearchHotel thay đổi
  useEffect(() => {
    // nếu user đã nhập "destination" thì fetch để search hotels
    if (keySearchHotel.destination !== "") {
      // send request POST
      customFetch({
        method: "POST",
        url: endPoints.fetchSearchHotel,
        bodyObj: keySearchHotel,
        errFunc: (data) => {
          setResultSearchHotel(data.message);
        },
        successFunc: (data) => {
          setResultSearchHotel(data);
        },
      });
    }
  }, [
    keySearchHotel,
    endPoints.fetchSearchHotel,
    customFetch,
    setResultSearchHotel,
  ]);

  // return
  return (
    <div className="container mt-4">
      <div className="row">
        <SearchForm />
        <SearchResult result={resultSearchHotel} />
      </div>
    </div>
  );
};

// export
export default Search;
