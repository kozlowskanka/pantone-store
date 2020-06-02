import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getProducts } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';
import { Grid, Row } from 'react-flexbox-grid';

import { ProductSummary } from '../../features/ProductSummary/ProductSummary';

class Component extends React.Component {

  render() {
    const { products } = this.props;

    return (
      <div className={styles.component}>
        <Grid>
          <Row
            align ='center'>
            {products.map(pantone => (
              <ProductSummary
                key = {pantone.id}
                color = {pantone.color}
                number ={pantone.number}
                name ={pantone.name}
              />
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

Component.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Products,
  Container as Products,
  Component as ProductsComponent,
};
