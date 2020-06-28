import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { RandomPantone } from '../../features/RandomPantone/RandomPantone';

class Component extends React.Component {

  render() {
    return (
      <footer className={styles.component}>
        <Grid>
          <Row>
            <Col
              xs
              align ="center">
              <RandomPantone/>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

Component.propTypes = {
  products: PropTypes.array,
};


export {
  Component as Footer,
  Component as FooterComponent,
};
