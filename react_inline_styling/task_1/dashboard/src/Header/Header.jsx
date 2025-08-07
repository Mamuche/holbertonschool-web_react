import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottom: '3px solid #e1003c',
  },
  logo: {
    height: '200px',
  },
  title: {
    color: '#e1003c',
    marginLeft: '20px',
    fontWeight: 'bold',
  },
});

function Header() {
  return ( 
    <div className={css(styles.header)}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

export default Header;
