import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cookies.module.scss';

import { Button } from '../../common/Button/Button';

class Component extends React.Component {

  state = {
    show: true,
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  render () {
    const { show } = this.state;
    return (
      <>
        {show
          ?
          <div className={styles.component}>
            <h2>We use cookies</h2>
            <Button
              variant = 'dark'
              onClick = {this.handleClose}
            > OK
            </Button>
          </div>
          : ''
        }
      </>
    );
  }
}

Component.propTypes = {
  show: PropTypes.bool,
};

export {
  Component as Cookies,
  Component as CookiesComponent,
};
