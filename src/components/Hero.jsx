function Hero() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        A smarter way to discover real estate.
      </h1>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px 20px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  subtext: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },

  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Hero;