// import React/Hook/Router...
import React from "react";

// import component
import TransactionTableRowContent from "./TransactionTableRowContent";

// function Component
const TransactionTable = function (props) {
  // lấy transactions từ props
  const transactions = props.transactions;

  //  list thông tin title
  const titleArr = [
    "#",
    "Hotel",
    "Room",
    "Date",
    "Price",
    "Payment Method",
    "Status",
  ];

  // render row title
  const renderRowTitle = titleArr.map((title, i) => (
    <th scope="col" key={i} className="text-white bg-info">
      {title}
    </th>
  ));

  // return
  return (
    <div className="container">
      <div className="p2 my-5">
        <table className="table table-striped table-hover table-bordered caption-top">
          <caption className="fs-4 fw-bold">Your Transactions</caption>
          {/* title */}
          <thead className="table-primary border-light">
            <tr>{renderRowTitle}</tr>
          </thead>

          {/* content transactions */}
          <tbody>
            <TransactionTableRowContent transactions={transactions} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export
export default TransactionTable;
