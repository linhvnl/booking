// import React/Hook/Router...
import React, { useEffect } from "react";

// import CUSTOM HOOK
import useHttpBooking from "../../hooks/use-http-booking";

// function Component
const FormBookingRoom = (props) => {
  // lấy variable và function từ props
  const stateBooking = props.stateBooking;
  const actionHandler = props.onAction;

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpBooking();

  // sử dụng useEffect để lấy thông tin room available
  useEffect(() => {
    if (stateBooking.dateEnd > stateBooking.dateStart) {
      // send request POST
      customFetch({
        method: "POST",
        url: endPoints.fetchRoomAvailable,
        bodyObj: {
          hotelID: stateBooking.hotel,
          dateStart: stateBooking.dateStart,
          dateEnd: stateBooking.dateEnd,
        },
        errFunc: (data) => {
          console.log(data.message);
        },
        successFunc: (data) => {
          actionHandler({ type: "set-room-available", payload: data });
        },
      });
    }
  }, [
    stateBooking.dateStart,
    stateBooking.dateEnd,
    stateBooking.hotel,
    endPoints.fetchRoomAvailable,
    customFetch,
    actionHandler,
  ]);

  // render room available
  const renderRoomAvailable =
    stateBooking.roomsManage._id &&
    stateBooking.roomsManage.roomsAvailable.map((room) => {
      return (
        <div
          key={room._id}
          className="col-6 d-flex justify-content-between pe-5"
        >
          {/* thông tin room */}
          <div className="me-5">
            <h5 className="fw-bold mb-0">{room.title}</h5>
            <p className="text-secondary fs-5 mb-0">{room.desc}</p>
            <p className="fw-bolder mb-0">
              Max people: <span className="">{room.maxPeople}</span>
            </p>
            <p className="fw-bold fs-5 mb-0">${room.price}</p>
          </div>

          {/* số room available */}
          <div className="d-flex ps-2 pe-5">
            {room.roomNumbersChecked.map((n, i) => {
              return (
                <div
                  key={i}
                  className="d-flex flex-column justify-content-center align-content-center me-2"
                >
                  <label
                    className="text-secondary"
                    htmlFor={room._id + "_" + i}
                  >
                    {n.number}
                  </label>
                  <input
                    className="form-check-inut"
                    type="checkbox"
                    id={room._id + "_" + i}
                    name={room._id}
                    value={n.number}
                    checked={n.checked}
                    onChange={(e) => {
                      // Destructuring
                      const {
                        name: roomId,
                        value: roomNumber,
                        checked: isCheck,
                      } = e.target;
                      actionHandler({
                        type: "set-room-booking",
                        payload: { roomId, roomNumber, isCheck },
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    });

  // return
  return (
    <>
      {stateBooking.roomsManage._id ? (
        renderRoomAvailable
      ) : (
        <p className="text-warning fs-5">
          Please choose your check-in-date to see rooms available!
          <br />
          (Check-in-date is min 1 night!)
        </p>
      )}
    </>
  );
};

// export
export default FormBookingRoom;
