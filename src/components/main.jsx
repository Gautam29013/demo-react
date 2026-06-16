import React from 'react';

const Main = () => {
  const styles = {
    container: { padding: '20px' },
    title: {
      fontSize: '64px',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      margin: '40px 0 16px 0',
    },
    text: { fontSize: '28px', fontFamily: 'Georgia, "Times New Roman", Times, serif' },
  };

  return (
    <main style={styles.container}>
      <h2 style={styles.title}>Main Content</h2>
      <p style={styles.text}>This is the main content.</p>
    </main>
  );
};

export default Main;
