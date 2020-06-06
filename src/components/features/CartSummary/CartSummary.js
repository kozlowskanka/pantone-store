import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import { Link } from 'react-router-dom';
import Icon from '../../common/Icon/Icon';

import styles from './CartSummary.module.scss';

const Component = ({cart}) => {

  const cartLength = cart.length;
  console.log('cartLength', cartLength);

  return (
    <div className={styles.component}>
      <Link to='/cart'>
        <Icon name='shopping-cart'/>
      </Link>

      <p>{cartLength}</p>

    </div>
  );
};

Component.propTypes = {
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as CartSummary,
  Component as CartSummaryComponent,
};
