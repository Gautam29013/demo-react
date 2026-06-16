import React from 'react';

const Header = () => {
  const styles = {
    container: { padding: '20px' },
    title: {
      fontSize: '45px',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      margin: '0 0 24px 0',
      lineHeight: 1,
    },
    nav: { display: 'flex', gap: '24px', fontSize: '32px', alignItems: 'center' },
    link: { color: 'purple', textDecoration: 'underline' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My Website!</h1>
      <nav style={styles.nav}>
        <a style={styles.link} href="/">Home</a>
        <a style={styles.link} href="/about">About</a>
        <a style={styles.link} href="/contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
