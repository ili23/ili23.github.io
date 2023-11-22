import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      <p>&copy; {currentYear} Iram Liu</p>
    </footer>
  );
};

export default Footer;
