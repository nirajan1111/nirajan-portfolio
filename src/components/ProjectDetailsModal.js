import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "./../scss/light-slider.scss";
import AwesomeSliderStyles2 from "./../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = (props) => {
  const [technologies, setTechnologies] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (props.data) {
      const data = props.data;
      setTechnologies(data.technologies || []);
      setImages(data.images || []);
      setTitle(data.title || "");
      setDescription(data.description || "");
      setUrl(data.url || "");
    }
  }, [props.data]);

  const tech = technologies.map((icons, i) => (
    <li className="list-inline-item mx-3" key={i}>
      <span>
        <div className="text-center">
          <i style={{ fontSize: "3rem" }} className={icons.class}>
            <p style={{ fontSize: "0.3rem" }} className="text-center">
              {icons.name}
            </p>
          </i>
        </div>
      </span>
    </li>
  ));

  const img = images.map((elem, i) => (
    <div key={i} data-src={elem} style={{ maxWidth: "100%", maxHeight: "400px", margin: "auto", display:'block' }} />
  ));


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ padding: "50px" , backgroundColor: 'rgba(0,0,0,0.5)'}}
    >
      <span onClick={props.onHide} className="modal-close">
        <span style={{ height: '40px !important' }} aria-hidden="true">&times;</span>

      </span>
      <div style={{ margin: "auto" }} className="col-md-12">
        <div className="col-md-10" style={{ paddingBottom: "50px", margin: "auto" }}>
          <div className="slider-tab">
            <span
              style={{ marginLeft: "5px" }}
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10" style={{ margin: "auto" }}>
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <i style={{ marginLeft: "10px" }} className="devicon-github-original colored"></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div style={{ textAlign: 'center' }} className="col-md-12">
            <ul className="list-inline" style={{ margin: "auto" }}>{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;