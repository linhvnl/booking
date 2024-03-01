// import React/Hook/Router...

// initial state
const initialStateBooking = {
  // user: Username của người đặt phòng
  user: {
    userId: "",
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
  },

  // dateStart: Ngày nhận phòng - dateEnd: Ngày trả phòng
  dateStart: "",
  dateEnd: "",

  // hotel: _Id của khách sạn đã đặt
  hotel: "",

  // all room available // state nội bộ (không submit)
  roomsManage: {},

  // room: Danh sách các phòng đã đặt
  // room: [ { roomId: "", roomNumbers: [], }, ],
  room: [],

  // price: Chi phí (total bill)
  price: 0,

  // payment: Hình thức thanh toán (Credit Card, Cash)
  payment: "",
};

// function reducer
const reducerBooking = function (state, action) {
  switch (action.type) {
    // _______________________________
    // fetch user sau đó lưu thông tin người dùng hiện có
    case "fetch-user": {
      return {
        // copy
        ...state,
        user: { ...action.payload },
      };
    }

    // _______________________________
    // set user info khi user nhập input thông tin đặt hàng
    case "set-user-info": {
      // copy
      const newState = { ...state };
      // set value từ input vào state
      newState.user[action.payload.inputName] = action.payload.inputValue;

      return newState;
    }

    // _______________________________
    // set check-in-date
    case "set-check-in-date": {
      // copy
      const newState = { ...state };
      // set ngày nhận và trả phòng dự kiến
      newState.dateStart = action.payload.dateStart;
      newState.dateEnd = action.payload.dateEnd;

      // reset roomsManage - room - price
      newState.price = 0;
      newState.roomsManage = {};
      newState.room = [];

      return newState;
    }

    // _______________________________
    // set room available mỗi khi chọn lại check-in-date
    case "set-room-available": {
      // copy
      const newState = { ...state };

      // lưu thông tin phòng trống đã fetch từ Server
      newState.roomsManage = { ...action.payload };

      // tạo mảng number-checked để quản lý dữ liệu từ check-box
      newState.roomsManage.roomsAvailable.forEach((item, i) => {
        newState.roomsManage.roomsAvailable[i].roomNumbersChecked = [];
        item.roomNumbers.forEach((number) => {
          newState.roomsManage.roomsAvailable[i].roomNumbersChecked.push({
            number: number,
            checked: false,
          });
        });
      });

      return newState;
    }

    // _______________________________
    // set room booking
    case "set-room-booking": {
      // copy
      const newState = { ...state };

      // lấy dữ từ payload
      const { roomId, roomNumber, isCheck } = action.payload;

      // ______ update input checked from user
      // data structure: roomsManage.roomsAvailable: [ { _id: "", price: "", roomNumbers: [], roomNumbersChecked: [ {number, checked} ]  }, ],
      // index of room type theo roomId
      const indexOfRoom = newState.roomsManage.roomsAvailable.findIndex(
        (r) => r._id === roomId
      );
      // index of room number theo roomNumber
      const indexOfNumber = newState.roomsManage.roomsAvailable[
        indexOfRoom
      ].roomNumbersChecked.findIndex((n) => n.number.toString() === roomNumber);

      // update value input checked into room number
      newState.roomsManage.roomsAvailable[indexOfRoom].roomNumbersChecked[
        indexOfNumber
      ].checked = isCheck;

      // ______ update room: Danh sách các phòng đã đặt
      // data structure: room: [ { roomId: "", roomNumbers: []  }, ],
      // reset array room
      newState.room = [];
      // reset tổng tiền phòng theo từng room type
      const totalPriceEachRoom = [];

      // map room booked from roomsManage, roomNumbersChecked2
      newState.roomsManage.roomsAvailable.forEach((r, i, arr) => {
        const roomNumberBooked = r.roomNumbersChecked.filter(
          (n) => n.checked === true
        );
        if (roomNumberBooked.length > 0) {
          newState.room.push({
            roomId: r._id,
            roomNumbers: roomNumberBooked.map((n) => n.number),
          });
          // tính tiền phòng
          totalPriceEachRoom.push(r.price * roomNumberBooked.length);
        }
      });

      // ______ update price: Chi phí (total bill)
      // khi người dùng chọn các phòng muốn đặt. Hệ thống sẽ tính tổng giá tiền tương ứng (số tiền 1 phòng * số phòng * số ngày).
      // số ngày
      const dates =
        (newState.dateEnd - newState.dateStart) / (1000 * 60 * 60 * 24);

      // tổng tiền phòng cuối cùng
      newState.price =
        dates * totalPriceEachRoom.reduce((acc, cur) => acc + cur, 0);

      // ______ return
      return newState;
    }

    // _______________________________
    // set input payment
    case "set-payment": {
      // copy
      const newState = { ...state };
      // set value từ input vào state
      newState.payment = action.payload;

      return newState;
    }

    // _______________________________
    // default return
    default: {
      return state;
    }
  }
};

// export state khởi tạo và function reducer
export { initialStateBooking };
export default reducerBooking;
