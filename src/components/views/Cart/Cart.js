import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './Cart.module.scss';
import { Grid, Row } from 'react-flexbox-grid';

import { ProductSummary } from '../../features/ProductSummary/ProductSummary';
import { Title } from '../../common/Title/Title';
import { PriceSummary } from '../../features/PriceSummary/PriceSummary';
// import { sumPrice } from '../../../utils/sumPrice';

class Component extends React.Component {

  render() {
    const { cart } = this.props;

    // const price = sumPrice(cart, 'price');

    return (
      <div className={styles.component}>
        <Grid>
          <Title name='Your colors'/>
          <Row className={styles.colors}>
            {cart.map(pantone => (
              // eslint-disable-next-line react/jsx-key
              <ProductSummary
                key={pantone.id}
                id={pantone.id}
                color={pantone.color}
                number={pantone.number}
                name={pantone.name}
                price={pantone.price}
              />
            ))}
          </Row>
          <PriceSummary/>
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

