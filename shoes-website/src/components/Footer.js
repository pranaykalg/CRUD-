// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top"> {/* Changed class to className */}
        <div className="container"> {/* Changed class to className */}
          <div className="row"> {/* Changed class to className */}
            <div className="col-md-3 text-center"> {/* Changed class to className */}
              <h4>About Us</h4>
              <p>We are a leading shoe retailer with over 20 years of experience.</p>
            </div>
            <div className="col-md-3 text-center"> {/* Changed class to className */}
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Returns &amp; Exchanges</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="col-md-3 text-center"> {/* Changed class to className */}
              <h4>Contact Us</h4>
              <p>Email: <a href="mailto:yourshop@gmail.com">yourshop@gmail.com</a></p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Shoe St, Foot City, FC 12345</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"> {/* Changed class to className */}
        <div className="container"> {/* Changed class to className */}
          <div className="row"> {/* Changed class to className */}
            <div className="col-md-6 text-center"> {/* Changed class to className */}
              <p>&copy; 2024 Shoe Website. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;