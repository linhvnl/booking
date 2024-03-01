// import React/Hook/...
import { useCallback } from "react";

//________________________________
// function custom hook
// => tạo object chứa endPoints đầy đủ và các phương thức để fetch API từ SERVER
const useHttpBooking = () => {
  //________________________________
  // server
  const origin = process.env.REACT_APP_API_ENDPOINT_ORIGIN;

  // url - route
  const requests = {
    // authorization
    fetchSignup: `/signup`,
    fetchLogin: `/login`,

    // ---------- fetch dữ liệu home page => dùng loader
    fetchGetHotels: `/client/hotels`,
    // ---------- fetch dữ liệu 1 khách sạn => dùng loader
    fetchHotel: `/client/hotel/:hotelID`,

    // fetch search dữ liệu
    fetchSearchHotel: `/client/search`,

    // fetch user information
    fetchUser: `/client/user-info`,

    // fetch dữ liệu phòng trống
    fetchRoomAvailable: `/client/room-available`,

    // fetch post booking
    fetchBooking: `/client/booking`,

    // fetch transactions
    fetchTransactions: `/client/transactions`,
  };

  // tạo object chứa endPoints đầy đủ để fetch
  let endPoints = {};
  for (const key in requests) {
    const endPoint = origin + requests[key];
    endPoints[key] = endPoint;
  }

  //________________________________
  // phương thức để fetch
  const customFetch = useCallback(async function ({
    method = "GET",
    url,
    bodyObj = null,
    errFunc = (data) => {},
    successFunc = (data) => {},
  }) {
    // cấu hình gửi fetch nếu method là POST
    const options = method === "POST" && {
      method,
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // fetch và nhận response
    const response =
      method === "GET" ? await fetch(url) : await fetch(url, options);

    const data = await response.json();

    // xử lý response data
    response.status === 200 ? successFunc(data) : errFunc(data);
  },
  []);

  //________________________________
  // return về 1 object
  return {
    endPoints,
    customFetch,
  };
};

// export
export default useHttpBooking;

/*
// ____________________
// sử dụng CUSTOM HOOK
// ____________________
// import CUSTOM HOOK
import useHttpBooking from "../../hooks/use-http-booking";

// dùng Custom Hook để fetch to Server
const { endPoints, customFetch } = useHttpBooking();

// send request POST
customFetch({
  method: "POST",
  url: endPoints.fetchSignup,
  bodyObj: { username: inputUsername.enteredValue,},
  errFunc: (data) => {console.log(data.message)},
  successFunc: (data) => {},
});

// send request GET
customFetch({
  url: endPoints.fetchSignup,
  errFunc: (data) => {console.log(data.message)},
  successFunc: (data) => {},
});
*/

/*
// ____________________
// sử dụng ROUTE LOADER
// ____________________
// import React/Hook/Router...
import { useLoaderData } from "react-router-dom";

// a hotel detail trả về từ Server
const hotel = useLoaderData();

// hàm loader để lấy dữ liệu HOTELS từ API
export async function loader({ request, params }) {
  // lấy id của hotel từ params
  const hotelID = params.hotelID;

  // fetch dữ liệu
  return fetch("process.env.API_ENDPOINT_ORIGIN/client/detail/" + hotelID);
}
*/
