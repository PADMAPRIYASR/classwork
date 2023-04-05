import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Contact Us</h4>
        <p>123 Main Street</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@company.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}