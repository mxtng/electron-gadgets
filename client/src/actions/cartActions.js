import { ADD_ITEM, DECREMENT_ITEM, REMOVE_ITEM, CLEAR_CART } from './types';

export const addItem = (product) => ({
  type: ADD_ITEM,
  payload: product,
});

export const decrementItem = (product) => ({
  type: DECREMENT_ITEM,
  payload: product,
});

export const removeItem = (productId) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
