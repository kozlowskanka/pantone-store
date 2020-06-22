import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductSummary.module.scss';

import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Component = ({ id, color, number, name, price }) => (
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

Component.propTypes = {
  id: PropTypes.number,
  color: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export {
  Component as ProductSummary,
  Component as ProductSummaryComponent,
};
