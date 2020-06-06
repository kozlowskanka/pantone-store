import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux.js';
import { getCart, addToCart } from '../../../redux/cartRedux.js';

import styles from './Product.module.scss';

import { Button } from '../../common/Button/Button';

const Component = ({ products, match, addToCart, cart }) => {

  const product = products[match.params.id];

  console.log ('products', products);
  console.log ('product', product);
  console.log ('cart', cart);

  const id = product.id;
  const color = product.color;
  const number = product.number;
  const name = product.name;

  return (
    <div
      className={styles.component}
      style={{
        backgroundColor: product.color,
      }}>
      <h1> {product.name}</h1>
      <Button onClick = {() => addToCart({
        id,color,number,name})
      }>
        ADD TO CART
      </Button>
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
};

const mapStateToProps = state => ({
  products: getProducts(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, color, number, name) => dispatch(addToCart(id, color, number, name)),
});

// const Container = connect(mapStateToProps)(Component);

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
