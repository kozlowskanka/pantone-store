import React from 'react';
import styles from './Hero.module.scss';

const backgrounds = [
  {
    color: '#fb4e68',
  },
  {
    color: '#fdb410',
  },
  {
    color: '#1ec0b1',
  },
  {
    color: '#1188f5',
  },
];

const Component = () => (

  <div className={styles.component}>
    <div className={styles.colors}>
      {backgrounds.map(background => (
      // eslint-disable-next-line react/jsx-key
        <div
          className={styles.stripe}
          style={{
            backgroundColor: background.color,
          }}>
        </div>
      ))}
    </div>
    <div className={styles.overlay}>
      <h1>Choose<br/> your<br/> favourite <br/> colors</h1>
    </div>
  </div>
);

Component.propTypes = {
};

export {
  Component as Hero,
  Component as HeroComponent,
};
