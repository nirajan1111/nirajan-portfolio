import "../styles.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        {/* <SkillSection heading="Languages" /> */}
        <div className="row justify-content-center">
          <h2 className="skill-title">Languages</h2>
        </div>
        <div className="row justify-content-center">
          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-dart-plain-wordmark colored"></i>
          </div>

          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-cplusplus-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-c-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-python-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-html5-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-css3-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-6 col-lg-2">
            <i className="devicon-javascript-plain colored"></i>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <h2 className="skill-title">Frameworks</h2>
        </div>
        <div className="row justify-content-center">
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-pandas-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-react-plain colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-tensorflow-original-wordmark colored"></i>
          </div>

          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="col devicon-django-plain-wordmark colored"></i>
          </div>

          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="col devicon-bootstrap-plain-wordmark colored"></i>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <h2 className="skill-title">Tools</h2>
        </div>
        <div className="row justify-content-center">
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-pycharm-plain colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-vscode-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-jupyter-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-wordpress-plain-wordmark colored"></i>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <h2 className="skill-title">Databases</h2>
        </div>
        <div className="row justify-content-center">
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-mongodb-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="col devicon-mysql-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="col devicon-sqlite-plain-wordmark colored"></i>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <h2 className="skill-title">Version Control</h2>
        </div>
        <div className="row justify-content-center">
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="devicon-git-plain-wordmark colored"></i>
          </div>
          <div className="skill-icon col-sm-6 col-md-4 col-lg-2">
            <i className="col devicon-github-original-wordmark colored"></i>
          </div>

        </div>
        <hr />
      </div>
      <p>
        Projects list coming soon
      </p>
    </section>
  );
}
