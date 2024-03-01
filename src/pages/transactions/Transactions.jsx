// import React/Hook/Router...
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// import CUSTOM HOOK
import useHttpBooking from "../../hooks/use-http-booking";
import TransactionTable from "./TransactionTable";

// function Component
const Transactions = function () {
  // state cho USER đang login
  const [transactions, setTransactions] = useState();

  // sử dụng Context
  const { username } = useOutletContext();

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpBooking();

  // sử dụng useEffect để lấy thông tin transactions khi render 1 lần đầu
  useEffect(() => {
    // send request POST
    customFetch({
      method: "POST",
      url: endPoints.fetchTransactions,
      bodyObj: { username },
      errFunc: (data) => {
        console.log(data.message);
      },
      successFunc: (data) => {
        setTransactions(data);
      },
    });
  }, [username, endPoints.fetchTransactions, customFetch, setTransactions]);

  // return
  return (
    <>
      <TransactionTable transactions={transactions} />
    </>
  );
};

// export
export default Transactions;
