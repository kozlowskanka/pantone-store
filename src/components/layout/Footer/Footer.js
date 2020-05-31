import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

import { Grid, Row, Col } from 'react-flexbox-grid';

const Component = ({children}) => (
  <footer className={styles.component}>
    <Grid>
      <Row>
        <Col
          xs
          align="left">
          <div>
            1 blok
          </div>

        </Col>
        <Col
          xs
          align ="center">
          <div>
            2 blok
          </div>
        </Col>
        <Col
          xs
          align ="right">
          <div>
            3 blok
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
