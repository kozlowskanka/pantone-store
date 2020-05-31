import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './{{pascalCase name}}.module.scss';

const Component = ({ children}) => (
  <div className={styles.component}>
    <h2>{{pascalCase name}}</h2>
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
  Component as {{pascalCase name}},
  // Container as {{pascalCase name}},
  Component as {{pascalCase name}}Component,
};
