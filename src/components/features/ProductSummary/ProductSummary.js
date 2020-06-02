import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductSummary.module.scss';

import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Component = ({ id, color, number, name }) => (
  <Col xs={12} lg={2} md={3} className={styles.component}>
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
            <p className={styles.description}>{name}</p>
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
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductSummary,
  // Container as ProductSummary,
  Component as ProductSummaryComponent,
};
