import React from "react";
import "./ContactUs.css";

// React-Leaflet for map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const ContactUs = () => {
  return (
    <section id="contactus" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Left: Mini Map */}
        <div className="map-container">
          <MapContainer
            center={[13.0827, 80.2707]} // Chennai lat/long
            zoom={13}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[13.0827, 80.2707]} icon={markerIcon}>
              <Popup>
                Our Catering Service <br /> Chennai, India
              </Popup>
            </Marker>
          </MapContainer>
          <p className="address">
            📍 Address: No. 123, Anna Salai, Chennai, Tamil Nadu, India
          </p>
        </div>

        {/* Right: Contact details */}
        <div className="contact-info">
          <a href="tel:+919876543210" className="icon-link">
            📞 Call Us
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            💬 WhatsApp
          </a>
          <a href="mailto:catering@email.com" className="icon-link">
            📧 Email
          </a>
          <a
            href="https://instagram.com/catering_service"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            📷 Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
