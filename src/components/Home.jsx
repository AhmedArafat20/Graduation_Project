import React, { useState, useRef } from "react"; // أضفنا useRef هنا
import {
  Container,
  Button,
  Modal,
  Row,
  Col,
  Card,
  Form,
  Alert,
} from "react-bootstrap"; // أضفنا Form, Alert
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import "./Home.css";

// استيراد EmailJS
import emailjs from "@emailjs/browser";

// استيراد أيقونات react-icons
import {
  FaUtensils,
  FaFire,
  FaDumbbell,
  FaChartLine,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";

// بيانات الميزات (تم تعريفها خارج المكون لتحسين الأداء)
const featuresData = [
  {
    icon: <FaUtensils size={40} className="mb-3 text-primary" />,
    title: "Meal Tracking",
    description:
      "Easily log your daily meals to stay aware of your diet and make informed choices.",
  },
  {
    icon: <FaFire size={40} className="mb-3 text-primary" />,
    title: "Calorie Counting",
    description:
      "Automatic calorie calculation from a vast database of foods and recipes.",
  },
  {
    icon: <FaDumbbell size={40} className="mb-3 text-primary" />,
    title: "Exercise Logging",
    description:
      "Track all your physical activities, from gym workouts to daily steps, and monitor your progress.",
  },
  {
    icon: <FaChartLine size={40} className="mb-3 text-primary" />,
    title: "Progress Reports",
    description:
      "Get detailed charts and reports that visualize your journey towards your health goals.",
  },
  {
    icon: <FaBookOpen size={40} className="mb-3 text-primary" />,
    title: "Healthy Recipes",
    description:
      "Browse a rich library of healthy and delicious recipes tailored to your dietary needs.",
  },
  {
    icon: <FaUsers size={40} className="mb-3 text-primary" />,
    title: "Supportive Community",
    description:
      "Connect with other members, share your successes, and get the motivation you need.",
  },
];

// متغيرات Framer Motion للحركة (تم تعريفها خارج المكون لتحسين الأداء)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null); // 'success' or 'error'
  const form = useRef(); // لربط النموذج

  // دالة لإرسال البريد الإلكتروني
  const sendEmail = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    emailjs
      .sendForm(
        "service_s6q46qj",
        "template_u24kc6k",
        form.current,
        "cd6XzKb4a3kF-2J8k"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setEmailStatus("success");
          form.current.reset(); // إعادة تعيين حقول النموذج بعد الإرسال الناجح
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setEmailStatus("error");
        }
      );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" id="home">
        <Container className="text-center text-white d-flex flex-column align-items-start justify-content-center h-100">
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            #1 nutrition tracking app
          </motion.h5>
          <motion.h1
            className="display-3 fw-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nutrition tracking <br />
            for <span className="highlight">real life</span>
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Make progress with the all-in-one food, exercise, and calorie
            tracker.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button className="cta-btn" onClick={() => setShowModal(true)}>
              START TODAY →
            </Button>
          </motion.div>
        </Container>
        <motion.div
          className="phone-image"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.5,
          }}
        >
          <img src="/home.png" alt="App Screenshot" />
        </motion.div>
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
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.yourapp",
                "_blank"
              )
            }
          >
            Google Play
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              window.open("https://apps.apple.com/app/id123456789", "_blank")
            }
          >
            App Store
          </Button>
        </Modal.Footer>
      </Modal>

      {/* --- Section 1 (Meal Tracking) --- */}
      <section className="feature-section bg-white">
        <Container>
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Col md={6}>
              <h2>Track Your Meals</h2>
              <p>
                Stay on top of your nutrition by logging every meal. Get
                detailed insights and make healthier choices.
              </p>
            </Col>
            <Col md={6}>
              <motion.img
                src="/meals.png"
                alt="Track Meals"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Col>
          </motion.div>
        </Container>
      </section>

      {/* --- Section 2 (Monitor Your Exercise) --- */}
      <section className="feature-section bg-light">
        <Container>
          <motion.div
            className="row align-items-center flex-md-row-reverse"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Col md={6}>
              <h2>Monitor Your Exercise</h2>
              <p>
                Track your workouts, steps, and calories burned. Keep your body
                moving and stay motivated every day.
              </p>
            </Col>
            <Col md={6}>
              <motion.img
                src="/workout.png"
                alt="Track Exercise"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Col>
          </motion.div>
        </Container>
      </section>

      {/* --- Section 3 (Smart Chatbot Support) --- */}
      <section className="feature-section bg-white">
        <Container>
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Col md={6}>
              <h2>Smart Chatbot Support</h2>
              <p>
                Our intelligent chatbot is available 24/7 to assist you with
                anything you need — whether it’s tracking your meals,
                understanding your fitness data, or navigating the app.
              </p>
            </Col>
            <Col md={6}>
              <motion.img
                src="/image-portrait.png"
                alt="Chatbot Support"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Col>
          </motion.div>
        </Container>
      </section>

      {/* --- Section 4 (Analyze Your Progress) --- */}
      <section className="feature-section bg-light">
        <Container>
          <motion.div
            className="row align-items-center flex-md-row-reverse"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Col md={6}>
              <h2>Analyze Your Progress</h2>
              <p>
                Visualize your progress with powerful charts and data. Stay
                accountable and crush your goals.
              </p>
            </Col>
            <Col md={6}>
              <motion.img
                src="/prog.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Col>
          </motion.div>
        </Container>
      </section>

      {/* --- About Us Section --- */}
      <section className="content-section bg-white text-dark py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2>About Us</h2>
            <p className="lead">
              Fit App Advisor helps you live a healthier life through smart,
              personalized nutrition tracking and insights.
            </p>
          </motion.div>
          <motion.div
            className="d-flex flex-wrap justify-content-center align-items-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              "/community.png",
              "/fav.png",
              "/healthcloud.png",
              "/news.png",
              "/profile.png",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                style={{ flex: "1 1 150px", maxWidth: "180px" }}
              >
                <img
                  src={src}
                  alt={`App screenshot ${i + 1}`}
                  className="img-fluid rounded shadow"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* --- Features Section --- */}
      <section
        className="content-section bg-light text-dark py-5"
        id="features"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2>Features</h2>
            <p className="lead">
              Track your meals, calories, exercise, and more with our all-in-one
              platform.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Row className="justify-content-center">
              {featuresData.map((feature, index) => (
                <Col key={index} lg={4} md={6} className="mb-4">
                  <motion.div
                    variants={itemVariants}
                    className="h-100"
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Card className="text-center h-100 border-0 shadow-sm">
                      <Card.Body className="p-4 d-flex flex-column">
                        {feature.icon}
                        <Card.Title as="h5" className="fw-bold mt-2">
                          {feature.title}
                        </Card.Title>
                        <Card.Text className="text-muted mt-2 flex-grow-1">
                          {feature.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="content-section bg-white text-dark text-center py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Us</h2>
            <p className="lead" style={{ maxWidth: "800px", margin: "0 auto" }}>
              Our app is a modern, AI-driven solution designed to meet the daily
              wellness needs of today’s fast-paced lifestyle. Built with the
              latest technology, it provides smart insights, personalized
              recommendations, and intuitive tracking — all for free.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* --- Contact Section with Form --- */}
      <section
        className="content-section bg-light text-dark text-center py-5"
        id="contact"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Contact Us</h2>
            <p className="lead">
              Have a question or want to get in touch? Send us a message!
            </p>

            <Row className="justify-content-center mt-4">
              <Col md={8} lg={6}>
                {emailStatus === "success" && (
                  <Alert variant="success" className="mb-3">
                    Message sent successfully!
                  </Alert>
                )}
                {emailStatus === "error" && (
                  <Alert variant="danger" className="mb-3">
                    Failed to send message. Please try again later.
                  </Alert>
                )}
                <Card className="shadow p-4">
                  <Card.Body>
                    <Form ref={form} onSubmit={sendEmail}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="from_name"
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="from_email"
                          placeholder="Enter your email"
                          required
                        />
      
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={5}
                          placeholder="Enter your message"
                          required
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100">
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* يمكنك إضافة روابط البريد الإلكتروني أو الهاتف هنا إذا أردت */}
            <div className="mt-5">
              <p>Or contact us directly:</p>
              <p className="lead">
                Email:{" "}
                <a
                  href="ahmedarafatt237@gmail.com"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  ahmedarafatt237@gmail.com
                </a>
              </p>
              <p className="lead">
                Phone:{" "}
                <a
                  href="tel:01091434793"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  01091434793
                </a>
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Home;
