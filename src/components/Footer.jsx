import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Modal } from "react-bootstrap";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-dark text-white pt-5 pb-3 px-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo + text */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Fitweb</h4>
            <p className="text-light">Nutrition tracking for real life.</p>
            <Button
              className="btn btn-light text-primary fw-bold rounded-pill hover-blue"
              onClick={() => setShowModal(true)}
            >
              START TODAY <i className="bi bi-arrow-right-short"></i>
            </Button>
          </div>

          {/* Links */}
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Products</h6>
            <ul className="list-unstyled text-light">
              <li>Exercise</li>
              <li>Apps</li>
              <li>Premium</li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled text-light">
              <li>Blog</li>
              <li>Community</li>
              <li>Contact Us</li>
              <li>Support Center</li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled text-light">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Advertise With Us</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-top border-secondary mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <p className="mb-3 mb-md-0 small text-light">
            ©2025 O+ Fitness, Inc. Community Guidelines · Feedback · Terms · Privacy · API · Cookie Preferences
          </p>

          <div className="d-flex justify-content-center gap-3 fs-5">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download the App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To continue, please download the app from one of the stores below.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.yourapp", "_blank")}
          >
            Google Play
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open("https://apps.apple.com/app/id123456789", "_blank")}
          >
            App Store
          </Button>
        </Modal.Footer>
      </Modal>

      <style>
        {`
          .hover-blue:hover {
            background-color: #0d6efd !important;
            color: white !important;
            border-color: #0d6efd !important;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
