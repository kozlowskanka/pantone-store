import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';
import { Link } from 'react-router-dom';

import styles from './PriceSummary.module.scss';

import { sumPrice } from '../../../utils/sumPrice';

class Component extends React.Component {

  render() {
    const { cart } = this.props;

    const price = sumPrice(cart, 'price');

    return (
      <div className={styles.component}>
        <div className={styles.price}>{price}$</div>
        <Link to={`/form`}>
          <div className={styles.order}>order</div>
        </Link>
      </div>
    );
  }
}

Component.propTypes = {
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PriceSummary,
  Component as PriceSummaryComponent,
};
