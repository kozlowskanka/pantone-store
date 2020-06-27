import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCart, saveOrder } from '../../../redux/cartRedux.js';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Title } from '../../common/Title/Title';

import { Button } from '../../common/Button/Button';

import styles from './Form.module.scss';

const Component = ({cart, saveOrder}) => {

  const [order, newOrder] = React.useState({
    name: '',
    surname: '',
    mail: '',
    address: '',
    phone: '',
    cart: cart,
  });

  const handleChange = (e, name) => {
    newOrder({
      ...order,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('about to saveee');
    saveOrder(order);
  };

  return (
    <div className={styles.component}>
      <Grid>
        <Title name='Order details'/>
        <form onSubmit={e => handleSubmit(e)}>
          <Row className={styles.formLine}>
            <Col className={styles.label} xs={12}>
              <label>First Name</label>
            </Col>
            <Col className={styles.input} xs={12}>
              <input
                type="text"
                name="name"
                onChange={e => handleChange(e, 'name')}></input>
            </Col>
          </Row>
          <Row className={styles.formLine}>
            <Col className={styles.label} xs={12}>
              <label>Last Name</label>
            </Col>
            <Col className={styles.input} xs={12}>
              <input
                type="text"
                name="surname"
                onChange={e => handleChange(e, 'surname')}>
              </input>
            </Col>
          </Row>
          <Row className={styles.formLine}>
            <Col className={styles.label} xs={12}>
              <label>E-mail</label>
            </Col>
            <Col className={styles.input} xs={12}>
              <input
                type="text"
                name="mail"
                onChange={e => handleChange(e, 'mail')}></input>
            </Col>
          </Row>
          <Row className={styles.formLine}>
            <Col className={styles.label} xs={12}>
              <label>Address</label>
            </Col>
            <Col className={styles.input} xs={12}>
              <input
                type="text"
                name="address"
                onChange={e => handleChange(e, 'address')}>
              </input>
            </Col>
          </Row>
          <Row className={styles.formLine}>
            <Col className={styles.label} xs={12}>
              <label>Phone</label>
            </Col>
            <Col className={styles.input} xs={12}>
              <input
                type="text"
                name="phone"
                onChange={e => handleChange(e, 'phone')}>
              </input>
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

};

Component.propTypes = {
  saveOrder: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  saveOrder: order => dispatch(saveOrder(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Form,
  Component as FormComponent,
};
