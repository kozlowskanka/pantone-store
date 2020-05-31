import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import Icon from '../../common/Icon/Icon';

const Component = ({children}) => (
  <header className={styles.component}>
    <Grid>
      <Row>
        <Col
          xs
          align="left">
          <Link to='/'>
            <div className = {styles.logo}>
              <span className={styles.name}>Pantones
                <sup>
                  &reg;
                </sup>
              </span>
            </div>
          </Link>
        </Col>
        <Col
          xs
          align ="right">
          <Link to='/cart'>
            <div className={styles.icon}>
              <Icon name='shopping-cart'/>
            </div>
          </Link>
        </Col>
      </Row>
    </Grid>
  </header>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
