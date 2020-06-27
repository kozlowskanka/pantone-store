import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts, fetchInStockProducts } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';
import { Grid, Row } from 'react-flexbox-grid';

import { ProductSummary } from '../../features/ProductSummary/ProductSummary';
import { Title } from '../../common/Title/Title';

class Component extends React.Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { products } = this.props;
    console.log('products', products);

    return (
      <div className={styles.component}>
        <Grid>
          <Title name='Available colors'/>
          <Row
            align ='center'>
            {products.map((pantone) => (
              <ProductSummary
                color={pantone.color}
                number={pantone.number}
                name={pantone.name}
                price={pantone.price}
                key={pantone._id}
                id={pantone._id}
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
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchInStockProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
