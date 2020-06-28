import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts, fetchInStockProducts } from '../../../redux/productsRedux.js';

import styles from './RandomPantone.module.scss';

import { randomProp } from '../../../utils/randomProp';

class Component extends React.Component {

  state = {
    color: '#fff',
  };

  randomColor() {

    setTimeout(() => {
      const { products } = this.props;
      const color = randomProp(products, 'color');
      this.setState({
        color: color,
      });
    }, 1000);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
    this.randomColor();
  }

  render() {
    return (
      <div className={styles.component}>
        {
          <p>
            This is a random &nbsp;
            <span style = {{color: this.state.color}}>
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
  fetchProducts: () => dispatch(fetchInStockProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as RandomPantone,
  Component as RandomPantoneComponent,
};
