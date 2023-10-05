import React from "react"; // Import React

import WhatsappIcon from "./img/Whatsapp.svg";
import EmailIcon from "./img/emailIcon.svg"; // Corrected the import name to match the component name
import NavIcon3 from "./img/nav-icon3.svg"; // Corrected the import name to match the component name

// Define and export the ContactButtons component
const ContactButtons = () => {
  return (
      <div className="social-icon">
        <a href="https://wa.me/972584591139">
          <img src={WhatsappIcon} alt="WhatsApp" /> {/* Added alt text */}
        </a>
        <a href="#">
          <img src={EmailIcon} alt="Email" /> {/* Added alt text */}
        </a>
        <a href="#">
          <img src={NavIcon3} alt="Nav Icon" /> {/* Added alt text */}
        </a>
      </div>
  );
};

export default ContactButtons; // Export the component properly
