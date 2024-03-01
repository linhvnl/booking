// import React/Hook/Router...
import React from "react";

// function Component
const FormBookingPayment = (props) => {
  // lấy variable và function từ props
  const actionHandler = props.onAction;

  // return
  return (
    <div className="me-5" style={{ width: "30%" }}>
      <select
        className="form-select form-select-lg bg-light border-2 py-3"
        name="payment"
        id="payment"
        defaultValue=""
        required
        onChange={(e) =>
          actionHandler({
            type: "set-payment",
            payload: e.target.value,
          })
        }
      >
        <option value="">Select Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
      </select>
    </div>
  );
};

// export
export default FormBookingPayment;
