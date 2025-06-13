import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { Button, Modal } from "react-bootstrap"; // حافظنا على Button و Modal لأجل زر "START TODAY" والمودال

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-dark text-white pt-4 pb-2 px-4"> {/* قللنا الـ padding قليلاً */}
      <div className="container text-center"> {/* جعلنا المحتوى في المنتصف دائماً للتبسيط */}
        <div className="row justify-content-center"> {/* لتوسيط المحتوى */}
          {/* Logo + text (أبقينا هذا الجزء كما هو لأنه يمثل التطبيق) */}
          <div className="col-md-6 col-lg-4 mb-3"> {/* عدلنا الـ col ليناسب التخطيط الأبسط */}
            <h4 className="fw-bold">Fitweb</h4>
            <p className="text-light mb-3">Nutrition tracking for real life.</p>
            <Button
              className="btn btn-light text-primary fw-bold rounded-pill hover-blue"
              onClick={() => setShowModal(true)}
            >
              START TODAY <i className="bi bi-arrow-right-short"></i>
            </Button>
          </div>

          {/* Contact & Legal Info - دمجناها في قسم واحد */}
          <div className="col-md-6 col-lg-4 mb-3"> {/* عدلنا الـ col ليناسب التخطيط الأبسط */}
            <h6 className="fw-bold mb-2">Contact Us</h6>
            <ul className="list-unstyled text-light">
              <li>Email: <a href="mailto:ahmedarafatt237@gmail.com" className="text-white text-decoration-none">ahmedarafatt237@gmail.com</a></li>
              <li>Phone: <a href="tel:01091434793" className="text-white text-decoration-none">01091434793</a></li>
              <li className="mt-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li> {/* يمكن أن يكون هذا رابطًا وهميًا أو لصفحة بسيطة */}
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li> {/* يمكن أن يكون هذا رابطًا وهميًا أو لصفحة بسيطة */}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-top border-secondary mt-3 pt-3 d-flex justify-content-center gap-3 fs-5"> {/* وسّطنا الأيقونات */}
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

        {/* Copyright */}
        <p className="mt-3 mb-0 small text-light"> {/* عدلنا الـ margin */}
          ©2025 Fitweb. All rights reserved.
        </p>
      </div>

      {/* Modal - أبقيناه كما هو */}
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
            className="d-flex align-items-center justify-content-center gap-2" // لجعل الأيقونة والنص في سطر واحد وبتوسيط
          >
            <FaGooglePlay size={20} /> Google Play
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open("https://apps.apple.com/app/id123456789", "_blank")}
            className="d-flex align-items-center justify-content-center gap-2" // لجعل الأيقونة والنص في سطر واحد وبتوسيط
          >
            <FaApple size={20} /> App Store {/* استخدمنا FaApple هنا، يمكنك تغييرها إذا أردت FaAppStoreIos */}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Style block - أبقيناه كما هو */}
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