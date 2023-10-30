import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const isAllChecked = cartList.length === selectedItems.length;

  const handleClickItem = (item) => {
    const isSelected = selectedItems.some(({ id }) => id === item.id);
    const remainItems = cartList.filter(({ id }) => id !== item.id);

    // const newSelectedItems = isSelected
    //   ? selectedItems.filter(({ id }) => id !== item.id)
    //   : selectedItems.concat(item);
    // setSelectedItems(newSelectedItems);

    if (isSelected) {
      setSelectedItems(remainItems);
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleCheckAll = () => {
    if (isAllChecked) {
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
    }).then((res) => {
      if (res.ok) {
        getCartsByUserId();
      } else {
        alert("처리 중 예기치 못한 오류가 발생했습니다!");
        return;
      }
    });
  };

  useEffect(() => {
    getCartsByUserId();
  }, []);

  const totalPrice = selectedItems
    .reduce((acc, cur) => cur.quantity * cur.price + acc, 0)
    .toLocaleString();

  return (
    <div className="cart">
      {cartList.length > 0 ? (
        <div className="cartList">
          <div>
            <input
              checked={isAllChecked}
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
                  isChecked={selectedItems.some(({ id }) => id === item.id)}
                  item={item}
                  handleClick={() => handleClickItem(item)}
                  handleDelete={() => removeCartItem(item.id)}
                />
              );
            })}
          </div>
          <div className="cartTotalInfo">
            <div>
              구매 품목 : {cartList.length}개 중 {selectedItems.length}개
            </div>
            <div className="remoteController">총가격 : {totalPrice}원</div>
          </div>
        </div>
      ) : (
        <div>장바구니가 비어있습니다</div>
      )}
    </div>
  );
};

export default Cart;
