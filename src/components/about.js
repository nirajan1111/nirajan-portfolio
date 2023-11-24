import "../styles.css";
import "./about.css";
import nirajan from "./images/nirajan-portfolio.png";
import { Modal } from "react-bootstrap";
import { useState } from "react";


export default function About() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section id="about">
      <div className="wrapper">
        <div className="profile-card js-profile-card container">
          <div className="profile-card__img">
            <img src={nirajan} alt="profile card" />
          </div>
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">Nirajan Sah</div>
            <div className="profile-card__txt">
              I am a machine learning enthusiast and a full stack web Developer
            </div>
            <div className="profile-card-loc">
              <span className="profile-card-loc__.profile-icon">
                <i
                  className="profile-icon fa fa-map-marker"
                  aria-hidden="true"
                ></i>
              </span>

              <span className="profile-card-loc__txt">Janakpurdham, Nepal</span>
            </div>

            <div className="profile-card-social">
              <a
                href="https://www.facebook.com/nirajansha45"
                className="facebookid"
              ></a>

              <a
                href="https://twitter.com/nirajansah"
                className="instagramid"
              ></a>
              <div>
                <a
                  href="https://www.linkedin.com/in/nirajan-sah-3a65a3234/"
                  className="linkednid"
                ></a>
              </div>

              <div>
                <a
                  href="https://github.com/nirajan1111"
                  className="githubid"
                ></a>
              </div>
            </div>

            <div className="profile-card-ctr">
              <button className="profile-card__button button--blue js-message-btn" onClick={toggleModal}>
                Message
              </button>
              <button
                className="profile-card__button button--orange"
                href="https://www.upwork.com/freelancers/nirajan1111"
              >
                Hire
              </button>
            </div>
          </div>
          <Modal show={showModal} className="profile-card-message js-message">
            <form className="profile-card-form" action="https://formspree.io/f/mknllndr" method="POST">
            <h2>Enter the required details</h2>
              <div className="container">
                <div className="row">
                  <input
                    className="col-md-5 col-sm-6 mr-lg-2"
                    placeholder="Your Name"
                    name="uname"
                    minLength="4"
                    maxLength="10"
                    required
                    style={{ height: '40px', marginBottom: '10px' }} 

                  />
                  <input
                    className="col"
                    placeholder="Your email"
                    type="email"
                    name="email"
                    minLength="5"
                    maxLength="50"
                    required
                    style={{ height: '40px', marginBottom: '10px' }} 
                  />
                </div>
                <div className="row">
                  <textarea
                    className="col"
                    placeholder="Say something..."
                    name="message"
                    minLength="10"
                    required
                    style={{ height: '80px' }}
                    
                  ></textarea>
                </div>
              </div>

              <div className="profile-card-form__bottom">
                <button
                  className="profile-card__button button--blue"
                  type="submit"
                  name="Submit"
                >
                  Send
                </button>

                <button className="profile-card__button button--gray js-message-close" onClick={toggleModal}>
                  Cancel
                </button>
              </div>
            </form>

            <div className="profile-card__overlay js-message-close"></div>
          </Modal>
        </div>
      </div>
    </section>
  );
}
