import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './HomePage.module.scss';

import { Products } from '../Products/Products';
import { Hero } from '../../layout/Hero/Hero';

const Component = () => (
  <div className={styles.component}>
    <Hero/>
    <Products/>
  </div>
);

Component.propTypes = {

};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as HomePage,
  // Container as HomePage,
  Component as HomePageComponent,
};
