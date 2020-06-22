import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts, fetchProducts } from '../../../redux/productsRedux.js';

import styles from './RandomPantone.module.scss';

import { randomProp } from '../../../utils/randomProp';

class Component extends React.Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { products } = this.props;

    const randomPantone = randomProp(products,'color');
    console.log('products', products);
    console.log('randomPantone', randomPantone);


    return (
      <div className={styles.component}>
        {
          <p>
            This is a random &nbsp;
            <span style = {{color: randomPantone}}>
              PANTONE<sup>&reg;</sup>
            </span>
          </p>
        }
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
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as RandomPantone,
  Component as RandomPantoneComponent,
};
