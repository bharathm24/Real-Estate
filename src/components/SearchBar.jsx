function SearchBar() {
  return (
    <div style={styles.container}>
      <div style={styles.searchBox}>
        <span style={styles.icon}>🔍</span>
        <input
          type="text"
          placeholder='Search for "kuvempunagar mysore"'
          style={styles.input}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "10px 15px",
    borderRadius: "10px",
    width: "500px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  icon: {
    marginRight: "10px",
    fontSize: "18px",
  },

  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "16px",
  },
};

export default SearchBar;