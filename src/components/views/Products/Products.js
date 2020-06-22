import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';
import { Grid, Row } from 'react-flexbox-grid';

import { ProductSummary } from '../../features/ProductSummary/ProductSummary';
import { Title } from '../../common/Title/Title';

class Component extends React.Component {

  render() {
    const { products } = this.props;

    return (
      <div className={styles.component}>
        <Grid>
          <Title name='Available colors'/>
          <Row
            align ='center'>
            {products.map(pantone => (
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


const Container = connect(mapStateToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
