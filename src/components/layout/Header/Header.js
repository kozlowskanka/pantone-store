import React from 'react';

import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import { CartSummary } from '../../features/CartSummary/CartSummary';

const Component = () => (
  <header className={styles.component}>
    <Grid>
      <Row>
        <Col
          xs
          align="left">
          <div className = {styles.logo}>
            <Link to='/'>
              <span className={styles.name}>Pantones
                <sup>
                  &reg;
                </sup>
              </span>
            </Link>
          </div>

        </Col>
        <Col
          xs
          align ="right">
          <CartSummary/>
        </Col>
      </Row>
    </Grid>
  </header>
);

Component.propTypes = {
};

export {
  Component as Header,
  Component as HeaderComponent,
};
