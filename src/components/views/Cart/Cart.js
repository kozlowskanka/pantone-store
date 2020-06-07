import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './Cart.module.scss';
import { Grid, Row } from 'react-flexbox-grid';

import { ProductSummary } from '../../features/ProductSummary/ProductSummary';

class Component extends React.Component {

  render() {
    const { cart } = this.props;

    console.log('cart', cart);

    return (
      <div className={styles.component}>
        <Grid>
          <div className={styles.title}>
            <h2>Your Colors</h2>
          </div>
          <Row
            align ='center'>
            {cart.map(pantone => (
              // eslint-disable-next-line react/jsx-key
              <ProductSummary
                key={pantone.id}
                id={pantone.id}
                color={pantone.color}
                number={pantone.number}
                name={pantone.name}
              />
            ))}
          </Row>
        </Grid>
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
  Container as Cart,
  Component as CartComponent,
};

