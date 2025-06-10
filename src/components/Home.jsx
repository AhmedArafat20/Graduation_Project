import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" id="home">
        <Container className="text-center text-white d-flex flex-column align-items-start justify-content-center h-100">
          <h5>#1 nutrition tracking app</h5>
          <h1 className="display-3 fw-bold">
            Nutrition tracking <br />
            for <span className="highlight">real life</span>
          </h1>
          <p className="lead">
            Make progress with the all-in-one food, exercise, and calorie
            tracker.
          </p>
          <Button className="cta-btn">START TODAY →</Button>
        </Container>
        <div className="phone-image">
          <img src="/home.png" alt="App Screenshot" />
        </div>
      </div>

      {/* Section 1 */}
      <section className="feature-section bg-white">
        <Container>
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-md-6">
              <h2>Track Your Meals</h2>
              <p>
                Stay on top of your nutrition by logging every meal. Get
                detailed insights and make healthier choices.
              </p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="/meals.png"
                alt="Track Meals"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Section 2 */}
      <section className="feature-section bg-light">
        <Container>
          <motion.div
            className="row align-items-center flex-md-row-reverse"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-md-6">
              <h2>Monitor Your Exercise</h2>
              <p>
                Track your workouts, steps, and calories burned. Keep your body
                moving and stay motivated every day.
              </p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="/workout.png"
                alt="Track Exercise"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </Container>
      </section>
      {/* Section 3 */}
      <section className="feature-section bg-light">
        <Container>
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-md-6">
              <h2>Smart Chatbot Supporte</h2>
              <p>
                Our intelligent chatbot is available 24/7 to assist you with
                anything you need — whether it’s tracking your meals,
                understanding your fitness data, or navigating the app. It
                provides instant answers, guides you through features
                step-by-step, and even offers personalized tips based on your
                activity. The chatbot is designed to feel like a real
                conversation, making your experience more interactive,
                responsive, and user-friendly.
              </p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="/public/image-portrait.png"
                alt="Track Exercise"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Section 3 */}
      <section className="feature-section bg-white">
        <Container>
          <motion.div
            className="row align-items-center flex-md-row-reverse"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="row align-items-center flex-md-row-reverse"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <div className="col-md-6">
              <h2>Analyze Your Progress</h2>
              <p>
                Visualize your progress with powerful charts and data. Stay
                accountable and crush your goals.
              </p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="/prog.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </Container>
      </section>
      {/* Section 4 */}
      <section className="feature-section bg-white">
        <Container>
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="row align-items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            <div className="col-md-6">
              <h2>Track Your Journey</h2>
              <p>
                See your improvements with insightful visuals and real-time
                data. Keep motivated and hit every milestone.
              </p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="/prog2.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- Extra Sections Below --- */}

      <section className="content-section bg-light text-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>About Us</h2>
            <p>
              Fit App Advisor helps you live a healthier life through smart,
              personalized nutrition tracking and insights. We offer a
              user-friendly app that adapts to your lifestyle, showing your
              progress through clear visuals and real app screenshots — so you
              know exactly what to expect before you start. Track better. Eat
              smarter. Live healthier.
            </p>
            <div className="col-md-6 d-flex justify-content-between align-items-center gap-3">
              <motion.img
                src="/public/community.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "48%" }}
              />

              <motion.img
                src="/public/fav.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "48%" }}
              />
              <motion.img
                src="/public/healthcloud.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "48%" }}
              />
              <motion.img
                src="/public/news.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "48%" }}
              />
              <motion.img
                src="/public/profile.png"
                alt="Track Progress"
                className="feature-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "48%" }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="content-section bg-white text-dark" id="features">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Features</h2>
            <p>
              Track your meals, calories, exercise, and more with our all-in-one
              platform.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="content-section bg-light text-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Us</h2>
            <p>
              Our app is a modern, AI-driven solution designed to meet the daily
              wellness needs of today’s fast-paced lifestyle. Built with the
              latest technology, it provides smart insights, personalized
              recommendations, and intuitive tracking — all for free. Whether
              you're planning your meals, tracking your workouts, or simply
              trying to stay consistent, our app adapts to you. With real-time
              feedback, a user-friendly interface, and continuous updates, it’s
              more than just a fitness tool — it’s your all-in-one health
              companion for a smarter, healthier life.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="content-section bg-white text-dark" id="contact">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Contact</h2>
            <p>Get in touch with us to learn more or ask any questions.</p>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Home;
