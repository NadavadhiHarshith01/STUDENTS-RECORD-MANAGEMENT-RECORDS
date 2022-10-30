import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="parafooter">
      <p>Copyright © {year} COLLEGE ANVESH </p>
    </footer>
  );
}

export default Footer;
