// import React/Hook/Router...
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

// import CUSTOM HOOK
import useHttpBooking from "../../hooks/use-http-booking";

// import component
import FormBookingInfo from "./FormBookingInfo";
import FormBookingDate from "./FormBookingDate";
import FormBookingRoom from "./FormBookingRoom";
import FormBookingPayment from "./FormBookingPayment";

// import function reducer và initial state
import reducerBooking, {
  initialStateBooking,
} from "../../reducers/reducerBooking";

// function Component
const FormBooking = (props) => {
  // dùng reducer quản lý data form
  const [stateBooking, dispatchBooking] = useReducer(reducerBooking, {
    ...initialStateBooking,
    hotel: props.hotel._id,
  });

  // sử dụng điều hướng
  const navigate = useNavigate();

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpBooking();

  // function to handle submit booking
  const submitBookingHandler = function (e) {
    // ngăn mặc định của trình duyệt
    e.preventDefault();

    // trích xuất dữ liệu từ stateBooking để gửi submit
    const { user, dateStart, dateEnd, hotel, room, price, payment } =
      stateBooking;

    // send request POST
    customFetch({
      method: "POST",
      url: endPoints.fetchBooking,
      bodyObj: { user, dateStart, dateEnd, hotel, room, price, payment },
      errFunc: (data) => {
        console.log(data.message);
      },
      successFunc: (data) => {
        console.log(data.message);
        navigate("../../transactions");
      },
    });
  };

  // return
  return (
    <div className="container mb-5">
      {/* <PlayAround /> */}
      <form onSubmit={submitBookingHandler}>
        {/* Dates and Reserve Info */}
        <div className="row mb-3">
          {/* Dates */}
          <div className="col-5">
            <FormBookingDate onAction={dispatchBooking} />
          </div>

          {/* Reserve Info */}
          <div className="col ps-0">
            <FormBookingInfo
              user={stateBooking.user}
              onAction={dispatchBooking}
            />
          </div>
        </div>

        {/* Select Rooms  */}
        <h3 className="fw-bolder mb-4">Select Rooms</h3>
        <div className="row g-5 mb-4">
          <FormBookingRoom
            stateBooking={stateBooking}
            onAction={dispatchBooking}
          />
        </div>

        {/* Total Bill */}
        <h3 className="fw-bolder mb-2">Total Bill: ${stateBooking.price}</h3>

        <div className="d-flex align-items-center">
          {/* Payment Method */}
          <FormBookingPayment onAction={dispatchBooking} />

          {/* Reserve Button */}
          <div className="ms-5" style={{ width: "20%" }}>
            <button
              type="submit"
              className="btn btn-primary btn-lg fw-bold py-4 w-100"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormBooking;
