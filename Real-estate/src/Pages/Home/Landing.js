import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaQuestion,
  FaArrowRight,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Landing.css";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

const initialState = {
  name: "",
  email: "",
  message: "",
};
function home() {
  const [{ name, email, message }, setState] = useState(initialState);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const handlePrev = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
    updateActiveDot(-1);
  };

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
    updateActiveDot(1);
  };

  const updateActiveDot = (direction) => {
    const newIndex = activeDotIndex + direction;
    setActiveDotIndex(
      newIndex < 0 ? events.length - 1 : newIndex % events.length
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data from the form
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value, // Assuming the form field has the name attribute set to "lastname"
      message: e.target.message.value, // Assuming the form field has the name attribute set to "message"
    };

    // Make an HTTP POST request to your backend API
    axios
      .post("http://localhost:3001/api/message", formData)
      .then((response) => {
        console.log(response.data.message);
        clearState();
        alert("MESSSGE SENT SUCCESSFULLY!!!!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // Fetch event data from the API endpoint
    axios
      .get("http://localhost:3001/api/Events")
      .then((response) => {
        // Set the retrieved event data in state
        const updatedEvents = response.data.map((event) => {
          // Extract the file name from the given path
          const fileName = event.image.split("\\").pop();
          const myeventId = event.id;
          console.log("data", myeventId);
          // Create a new image path with a corrected format
          const imagePath = `images/${fileName}`.replace(/\\/g, "/");
          return {
            ...event,
            image: imagePath,
          };
        });
        setEvents(updatedEvents);
        console.log("data", updatedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const SocialIcons = () => {
    //const linkedinUrl = 'https://www.linkedin.com/login'; // Replace with your LinkedIn login URL
    const facebookUrl = "https://www.facebook.com/login"; // Replace with your Facebook login URL
    const instagramUrl = "https://www.instagram.com/accounts/login/"; // Replace with your Instagram login URL
    const closeUrl = "https://www.twitter.com/i/flow/login/"; // Placeholder since there's no specific "close" login page

    return (
      <div className="socialicoins">
        <a href={facebookUrl} style={{ backgroundColor: "blue" }}>
          <FaFacebookF style={{ fontSize: "28px" }} />
        </a>
        <a href={closeUrl} style={{ backgroundColor: "#1e1a1b" }}>
          <FaTimes style={{ fontSize: "28px", color: "white" }} />
        </a>
        <a
          href={instagramUrl}
          style={{
            background:
              "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80)",
          }}
        >
          <FaInstagram style={{ fontSize: "28px" }} />
        </a>
      </div>
    );
  };

  return (
    <div>
      <div className="header">
        <div className="top">
          <diV> </diV>
          <nav>
            <ul>
              <li>
                <Link to="/Login" className="link">
                  SIGN IN
                </Link>
              </li>
              <li>
                <Link to="/Register" className="link2">
                  SIGN UP
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bottom">
          <nav>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#buy">BUY</a>
              </li>
              <li>
                <a href="#sell">SELL</a>
              </li>
              <li>
                <a href="#events">EVENTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div id="home" className="landingContainer">
        <h1 className="realestate">Real estate</h1>
        <SocialIcons />
      </div>

      <div className="" style={{ background: "white" }}>
        <div id="buy" className="landingContainer">
          <h1 className="containerHead">Buy</h1>
          <div className="cont_row">
            <div className="cont_row_col">
              <img src="images/buy.jpeg" className="img-responsive" alt="" />

              <div className="about-text">
                <h2 className="text1">Buying a house</h2>
                <h3 className="text2">
                  SEarch for properties in DIFFERENT areas
                </h3>
                <p></p>
                <Link to="/About" className="link3">
                  Buy
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="sell" className="landingContainer">
          <h1 className="containerHead">Sell</h1>
          <div className="cont_row">
            <div className="cont_row_col">
              <img src="images/sell.jpeg" className="img-responsive" alt="" />

              <div className="about-text">
                <h2 className="text1">Selling a house</h2>
                <h3 className="text2">sell a house to a million house owner</h3>
                <p>sell a house through an agent or by yourself</p>
                <Link to="/About" className="link3">
                  Sell <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="events" className="landingContainer">
          <h1 className="containerHead">Events</h1>

          <div className="Eventslider">
            <div className="arrow1" onClick={handlePrev}>
              <FaArrowLeft />
            </div>

            {events.map((event, index) => (
              <div
                key={event.id}
                className={`Events ${
                  index === currentEventIndex ? "active" : ""
                }`}
              >
                <div className="Event">
                  <div
                    className="EventImage"
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="Overlay"></div>
                  </div>
                  <div className="Eventtext">
                    <h>{event.name}</h>
                    <p>Date : {formatDate(event.date)}</p>
                    <p>Time : {event.time}</p>
                    <p>Location : {event.venue}</p>
                    <p>Description : {event.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="arrow2" onClick={handleNext}>
              <FaArrowRight />
            </div>
          </div>
          <div className="dots">
            {events.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeDotIndex ? "active" : ""}`}
                onClick={() => updateActiveDot(index - activeDotIndex)}
              ></div>
            ))}
          </div>
        </div>
        <div id="contact" className="landingContainer">
          <div className="contact-info">
            <h1 className="containerHead">Contact</h1>
            <br></br>
            <div className="contact-info-title">
              <h3>For more information:</h3>
            </div>
            <form>
              <div
                className="contact-details"
                style={{ background: "rgba(0, 0, 0, 0.5)", height: "300px" }}
              ></div>
            </form>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default home;
