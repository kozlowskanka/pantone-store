import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Form.module.scss';

const Component = ({ children}) => (
  <div className={styles.component}>
    <h2>Form</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Form,
  // Container as Form,
  Component as FormComponent,
};
