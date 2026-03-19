import { useState } from "react";

function FilterBar() {
  const [filters, setFilters] = useState({
    apartment: false,
    plot: true,
    villas: false,
  });

  const toggle = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <span>Apartment / Flat</span>
        <div
          style={{
            ...styles.toggle,
            background: filters.apartment ? "green" : "#ccc",
          }}
          onClick={() => toggle("apartment")}
        >
          <div
            style={{
              ...styles.circle,
              transform: filters.apartment
                ? "translateX(20px)"
                : "translateX(0)",
            }}
          />
        </div>
      </div>

      <div style={styles.item}>
        <span>Plot</span>
        <div
          style={{
            ...styles.toggle,
            background: filters.plot ? "green" : "#ccc",
          }}
          onClick={() => toggle("plot")}
        >
          <div
            style={{
              ...styles.circle,
              transform: filters.plot
                ? "translateX(20px)"
                : "translateX(0)",
            }}
          />
        </div>
      </div>

      <div style={styles.item}>
        <span>Villas</span>
        <div
          style={{
            ...styles.toggle,
            background: filters.villas ? "green" : "#ccc",
          }}
          onClick={() => toggle("villas")}
        >
          <div
            style={{
              ...styles.circle,
              transform: filters.villas
                ? "translateX(20px)"
                : "translateX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "20px",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  toggle: {
    width: "40px",
    height: "20px",
    borderRadius: "20px",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s",
  },

  circle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "#fff",
    position: "absolute",
    top: "1px",
    left: "1px",
    transition: "0.3s",
  },
};

export default FilterBar;