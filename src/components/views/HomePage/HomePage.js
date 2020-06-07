import React from 'react';

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

export {
  Component as HomePage,
  Component as HomePageComponent,
};
