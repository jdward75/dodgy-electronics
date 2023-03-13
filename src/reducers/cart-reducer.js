const cartReducer = (prevState, action) => {
  if (action.type === "UPDATE") {
    const updatedItem = {
      title: action.data.title,
      brand: action.data.brand,
      quantity: action.data.quantity,
      price: action.data.price,
      total_value: action.data.quantity * action.data.price,
    };
    let prevItemTotalValue = prevState.items[action.data.id]?.total_value;
    if (prevItemTotalValue === undefined) {
      prevItemTotalValue = 0;
    }
    const newTotalValue =
      prevState.total_value - prevItemTotalValue + updatedItem.total_value;

    const updatedCart = { ...prevState, items: { ...prevState.items } };
    updatedCart.items[action.data.id] = updatedItem;
    updatedCart.total_value = newTotalValue;

    if (updatedItem.quantity === 0) {
      delete updatedCart.items[action.data.id];
    }

    return updatedCart;
  }
  return prevState;
};

export default cartReducer;
