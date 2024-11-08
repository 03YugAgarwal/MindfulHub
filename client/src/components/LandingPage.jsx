import { useEffect } from "react";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "MindfulHub";
  }, []);

  return (
    <div className="landing_page_container">
      <section className="landing_hero">
        <h2>Welcome to MindfulHub</h2>
        <p>
          MindfulHub is a place where you can find support and resources for
          mental health. Join our community to share your thoughts, connect with
          others, and explore helpful resources.
        </p>
      </section>

      <section className="feature_section">
        <h2>Features</h2>
        <div>
          <div className="feature_item">
            <h3>1. Blogs and Discussions</h3>
            <p>
              Share your experiences through blogs and engage in discussions.
            </p>
          </div>
          <div className="feature_item">
            <h3>2. Live Chat</h3>
            <p>
              Connect with others in real-time through our live chat feature.
            </p>
          </div>
          <div className="feature_item">
            <h3>3. One-on-One Meetings</h3>
            <p>Schedule one-on-one meetings with mental health experts.</p>
          </div>
        </div>
      </section>

      <section className="testimonial_section">
        <h2>Testimonials</h2>
        <Testimonial />
      </section>

      <section className="getStarted_section">
        <h2>Get Started</h2>
        <p>
          Join MindfulHub today and take the first step towards improving your
          mental well-being.
        </p>
        <div className="btn">
          <button className="login" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup" onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
