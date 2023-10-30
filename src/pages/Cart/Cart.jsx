import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClickItem = (item) => {
    const isDuplicate = selectedItems.includes((el) => el.id === item.id);
    const data = [...selectedItems];

    const handleUnCheckedItems = data.filter((el) => el.id !== item.id);
    if (!isDuplicate) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems(handleUnCheckedItems);
    }
  };

  const handleCheckAll = () => {
    if (selectedItems.length === cartList.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartList);
    }
  };

  const getCartsByUserId = () => {
    fetch("https://dummyjson.com/carts/user/5")
      .then((res) => res.json())
      .then((result) => setCartList(result.carts[0].products));
  };

  const removeCartItem = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getCartsByUserId());
  };

  useEffect(() => {
    getCartsByUserId();
  }, []);

  const isEmpty = cartList.length === 0;

  if (isEmpty) return null;

  const totalPrice =
    selectedItems
      .reduce((acc, cur) => cur.quantity * cur.price + acc, 0)
      .toLocaleString() || 0;

  return (
    <div className="cart">
      <div className="cartList">
        <div>
          <input
            checked={selectedItems.length === cartList.length}
            type="checkbox"
            id="checkAll"
            onClick={handleCheckAll}
          />
          <label htmlFor="checkAll">전체 선택</label>
        </div>

        <div className="productList">
          {cartList.map((item) => {
            return (
              <CartItem
                key={item.id}
                isChecked={selectedItems.includes((el) => el.id === item.id)}
                item={item}
                handleClick={() => handleClickItem(item)}
                handleDelete={() => removeCartItem(item.id)}
              />
            );
          })}
        </div>
        <div className="cartTotalInfo">
          <div>구매 품목 : ~개 중 n개</div>
          <div className="remoteControler">총가격 : {totalPrice}원</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
