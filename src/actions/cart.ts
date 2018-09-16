enum CART_ACTION_TYPES {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART= 'REMOVE_FROM_CART',
}

interface IAddToCart {
  type: CART_ACTION_TYPES.ADD_TO_CART;
  payload: {
    bookId: number,
  };
}

interface IRemoveFromCart {
  type: CART_ACTION_TYPES.REMOVE_FROM_CART;
  payload: {
    bookId: number,
  };
}

function addToCart(bookId: number): IAddToCart {
  return {
    payload: {
      bookId,
    },
    type: CART_ACTION_TYPES.ADD_TO_CART,
  };
}

function removeFromCart(bookId: number): IRemoveFromCart {
  return {
    payload: {
      bookId,
    },
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
  };
}

export { IAddToCart, IRemoveFromCart };
export default {
  addToCart,
  removeFromCart,
  types: {
    ...CART_ACTION_TYPES,
  },
};
