import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { Grid, Row, Col } from 'react-flexbox-grid';
// import { Grid, Row, Col, Form, FormGroup, Label, Input } from 'react-flexbox-grid';
import { Title } from '../../common/Title/Title';

import { Button } from '../../common/Button/Button';

import styles from './Form.module.scss';

const Component = () => (
  <div className={styles.component}>
    <Grid>
      <Title name='Order details'/>
      {/* <Row className={styles.form}> */}
      <form>
        <Row className={styles.formLine}>
          <Col className={styles.label} xs={12}>
            <label>First Name</label>
          </Col>
          <Col className={styles.input} xs={12}>
            <input type="text" name="First name"></input>
          </Col>
        </Row>
        <Row className={styles.formLine}>
          <Col className={styles.label} xs={12}>
            <label>Last Name</label>
          </Col>
          <Col className={styles.input} xs={12}>
            <input type="text" name="Last name"></input>
          </Col>
        </Row>
        <Row className={styles.formLine}>
          <Col className={styles.label} xs={12}>
            <label>E-mail</label>
          </Col>
          <Col className={styles.input} xs={12}>
            <input type="text" name="mail"></input>
          </Col>
        </Row>
        <Row className={styles.formLine}>
          <Col className={styles.label} xs={12}>
            <label>Address</label>
          </Col>
          <Col className={styles.input} xs={12}>
            <input type="text" name="address"></input>
          </Col>
        </Row>
        <Row className={styles.formLine}>
          <Col className={styles.label} xs={12}>
            <label>Phone</label>
          </Col>
          <Col className={styles.input} xs={12}>
            <input type="text" name="phone"></input>
          </Col>
        </Row>
        <Col className={styles.submit} xs={12}>
          <Button
            variant='dark'
            align = "center"
            type="submit">
            SEND
          </Button>
        </Col>
      </form>
    </Grid>
  </div>
);

// Component.propTypes = {

// };

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
