import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import './Project.scss'
const Projects = (props) => {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const detailsModalOpen = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };
  const detailsModalClose = () => setDetailsModalShow(false);

  if (props.resumeProjects && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.projects;
    var projects = props.resumeProjects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalOpen(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <section id="project">
      <div >
        <h1 className="section-title" style={{ color: "black" }}>
          <span >{sectionName}</span>
        </h1>
        <div >
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
};

export default Projects;
