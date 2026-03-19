function PropertyCard({ title, location, price }) {
  return (
    <div style={styles.card}>
      <div style={styles.image}></div>

      <h3>{title}</h3>
      <p>{location}</p>
      <h4>{price}</h4>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  image: {
    height: "120px",
    background: "#ccc",
    borderRadius: "10px",
    marginBottom: "10px",
  },
};

export default PropertyCard;