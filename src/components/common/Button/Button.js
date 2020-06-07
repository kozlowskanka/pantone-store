import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

class Component extends React.Component {
  render() {
    const {
      children,
      variant,
      ...props
    } = this.props;

    const classes = [];

    if (variant) classes.push(styles[variant]);
    else classes.push('main');

    return (
      <button
        className={classes.join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export {
  Component as Button,
  Component as ButtonComponent,
};
