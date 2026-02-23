import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Treat props as immutable or read only. Notify app component that used clicked clear */}
      {/* Component that holds stae is responsible for updating it  */}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
