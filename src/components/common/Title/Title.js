import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Component = ({name}) => (
  <div className={styles.component}>
    <h2 align="center">{name}</h2>
  </div>
);

Component.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
};

export {
  Component as Title,
  Component as TitleComponent,
};
