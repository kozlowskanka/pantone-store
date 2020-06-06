import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Component = ({...otherProps}) => (
  <button
    {...otherProps}
    className={styles.component}
  />
);

// Component.propTypes = {

// };

export {
  Component as Button,
  Component as ButtonComponent,
};
