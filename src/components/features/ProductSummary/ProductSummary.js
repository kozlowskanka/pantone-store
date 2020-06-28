import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ProductSummary.module.scss';

import { getProducts } from '../../../redux/productsRedux.js';

import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

class Component extends React.Component {

  render () {
    const { id, color, number, name, price } = this.props;

    return (
      <Col align="center" xs={12} lg={2} md={3} className={styles.component}>
        <Link to={`/product/${id}`}>
          <div className ={styles.product}>
            <article>
              <div
                className={styles.color}
                style={{
                  backgroundColor: color,
                }}>
              </div>
              <div className={styles.features}>
                <h4 className={styles.name}>Pantone<sup>&reg;</sup></h4>
                <h4 className={styles.number}> {number}</h4>
                <p className={styles.description}>{name} <br/>
                  <span className={styles.price}>
                    {price} $ </span>
                </p>
              </div>
            </article>
          </div>
        </Link>
      </Col>
    );
  }
}

Component.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as ProductSummary,
  Component as ProductSummaryComponent,
};
