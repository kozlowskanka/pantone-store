import Axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getCart = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const EMPTY_THE_CART = createActionName('EMPTY_THE_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const emptyTheCart = payload => ({ payload, type: EMPTY_THE_CART });

/* thunk creators */

export const saveOrder = (order) => {
  return () => {

    Axios
      .post(`${API_URL}/orders`, order)
      .then(res => {
        console.log(':: get response');
      })
      .catch(err => {
        console.log(':: error');
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
      };
    }

    case ADD_TO_CART: {
      return [...statePart, action.payload];
    }

    case REMOVE_FROM_CART: {
      console.log('remove');
      return statePart.filter(products => products.id !== action.payload);
    }

    case EMPTY_THE_CART: {
      return statePart = [];
    }

    default:
      return statePart;
  }
};
