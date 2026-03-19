import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav style={styles.nav}>
      {/* Left Logo */}
      <div style={styles.logo}></div>

      {/* Right Section */}
      <div style={styles.right}>
        <ul style={styles.ul}>
          <li>Tools</li>
          <li>Research</li>
          <li>Home loans</li>
          <li>Consultation</li>
        </ul>

        {/* Profile Icon */}
        <div style={styles.profileContainer}>
          <div
            style={styles.profileIcon}
            onClick={() => setShowMenu(!showMenu)}
          >
            👤
          </div>

          {/* Dropdown */}
          {showMenu && (
            <div style={styles.dropdown}>
              <p>Profile</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#eee",
  },

  logo: {
    width: "50px",
    height: "50px",
    background: "#aaa",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  ul: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
  },

  profileContainer: {
    position: "relative",
  },

  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  dropdown: {
    position: "absolute",
    top: "50px",
    right: 0,
    background: "#ddd",
    borderRadius: "5px",
    padding: "10px",
    width: "120px",
  },
};

export default Navbar;