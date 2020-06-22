import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux.js';

import styles from './RandomPantone.module.scss';

import { randomProp } from '../../../utils/randomProp';

class Component extends React.Component {

  render() {
    const { products } = this.props;

    const randomPantone = randomProp(products,'color');

    console.log('randomPantone', randomPantone);

    return (
      <div className={styles.component}>
        <p>
          This is a random &nbsp;
          <span style = {{color: randomPantone}}>
            PANTONE<sup>&reg;</sup>
          </span>
        </p>
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

const Container = connect(mapStateToProps)(Component);

export {
  Container as RandomPantone,
  Component as RandomPantoneComponent,
};
