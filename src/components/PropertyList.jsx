import PropertyCard from "./PropertyCard";

const data = [
  {
    title: "2BHK Apartment",
    location: "Mysore",
    price: "₹45 Lakhs",
  },
  {
    title: "Residential Plot",
    location: "Bangalore",
    price: "₹60 Lakhs",
  },
  {
    title: "Luxury Villa",
    location: "Chennai",
    price: "₹1.2 Cr",
  },
];

function PropertyList() {
  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <PropertyCard key={index} {...item} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "30px",
    flexWrap: "wrap",
    background: "#eee",
  },
};

export default PropertyList;