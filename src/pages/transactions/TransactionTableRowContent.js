// import React/Hook/Router...
import React from "react";

// function Component
const TransactionTableRowContent = function (props) {
  // lấy transactions từ props
  const transactions = props.transactions;

  // render row transactions
  const renderRowTransactions = transactions?.map((t, i) => {
    // xử lý render value số thứ tự từ mảng dữ liệu
    const numOrderCol = (i + 1).toString().padStart(2, "0");

    // xử lý render value room từ mảng dữ liệu
    const roomCol = t.room.flatMap((item) => item.roomNumbers).join(", ");

    // xử lý render value date từ mảng dữ liệu
    const dateCol = new Intl.DateTimeFormat("vi-VN").formatRange(
      new Date(t.dateStart),
      new Date(t.dateEnd)
    );

    // style className cho status
    const classNameStatus =
      t.status === "Booked"
        ? "bg-danger"
        : t.status === "Checkin"
        ? "bg-success"
        : t.status === "Checkout"
        ? "bg-secondary"
        : "";

    // return render content
    return (
      <tr key={i}>
        <th scope="row" className="fw-normal">
          {numOrderCol}
        </th>
        <td>{t.hotel.name}</td>
        <td>{roomCol}</td>
        <td>{dateCol}</td>
        <td>${t.price}</td>
        <td>{t.payment}</td>
        {/* render status với class động */}
        <td>
          <span
            className={`bg-opacity-50 rounded text-success p-1 ${classNameStatus}`}
          >
            {t.status}
          </span>
        </td>
      </tr>
    );
  });

  // return
  return <>{renderRowTransactions}</>;
};

// export
export default TransactionTableRowContent;
