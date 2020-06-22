import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux.js';
import { getCart, addToCart, removeFromCart } from '../../../redux/cartRedux.js';

import styles from './Product.module.scss';

import Icon from '../../common/Icon/Icon';
import { Button } from '../../common/Button/Button';

const Component = ({ products, match, cart, addToCart, removeFromCart }) => {

  const product = products[match.params.id];

  console.log ('products', products);
  console.log ('product', product);
  console.log ('cart', cart);

  const id = product.id;
  const color = product.color;
  const number = product.number;
  const name = product.name;
  const price = product.price;

  const alreadyInCart = cart.filter(product => product.id === id);

  const handleAddToCart = () => addToCart({
    id,color,number,name, price});

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div
      className={styles.component}
      style={{
        backgroundColor: product.color,
      }}>
      <div className={styles.title}>
        <h1> {name} / </h1> <h3>&nbsp; {price}$ </h3>
      </div>
      <div className={styles.action}>
        {alreadyInCart.length === 0
          ?
          <Button
            variant='dark'
            onClick = {handleAddToCart}
          >
            ADD TO CART
          </Button>
          :
          <div>
            This PANTONE is already in your cart
            <Button
              variant='transparent'
              onClick={handleRemoveFromCart}
            >
              <Icon name='trash'/>
            </Button>
          </div>
        }
      </div>
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getProducts(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, color, number, name, price) => dispatch(addToCart(id, color, number, name, price)),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
