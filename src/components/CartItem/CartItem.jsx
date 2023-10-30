import React from "react";
import "./CartItem.scss";
const CartItem = ({ item, handleClick, isChecked, handleDelete }) => {
  const { title, price, quantity, thumbnail } = item;
  const buyingPricePerItem = price * quantity;
  const displayPrice = `${buyingPricePerItem.toLocaleString()}원`;
  return (
    <div className="cartItem">
      <input type="checkbox" checked={isChecked} onChange={handleClick} />
      <img className="thumbnail" src={thumbnail} alt="" />
      <div className="itemInfo">
        <div>
          <div className="productName">{title}</div>
        </div>
        <div className="price">{displayPrice}</div>
      </div>
      <div onClick={handleDelete}>삭제</div>
    </div>
  );
};

export default CartItem;
