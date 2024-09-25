import "./styles.css";

function App() {
  return (
    <div className="container">
      <header>
        <div className="profile">
          <h1>Zh Rimel</h1>
          <p>Data Scientist</p>
        </div>
        <div className="contact-info">
          <p>
            Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
          <p>
            Web:
            <a href="https://abc.github.io/abc" target="_blank">
              abc.github.io/abc
            </a>
          </p>
          <p>Mobile: 01234567890</p>
        </div>
      </header>

      <section className="section personal-profile">
        <h2>Personal Profile</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <hr />

      <section className="section work-experience">
        <h2>Work Experience</h2>
        <div className="jobs">
          <div className="job">
            <h3>Job Title at Company (August 2022 – December 2023)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="job">
            <h3>Job Title 2 at Company 2 (August 2020 – December 2021)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="section key-skills">
        <h2>Key Skills</h2>
        <div className="skills">
          <div className="skill-pack">
            <span>A Key skill</span>
            <span>A Key skill</span>
            <span>A Key skill</span>
          </div>
          <div className="skill-pack skill-pack-1">
            <span>A Key skill</span>
            <span>A Key skill</span>
            <span>A Key skill</span>
          </div>
          <div className="skill-pack skill-pack-2">
            <span>A Key skill</span>
            <span>A Key skill</span>
            <span>A Key skill</span>
          </div>
        </div>
      </section>

      <hr />

      <section className="section education">
        <h2>Education</h2>
        <div>
          <div className="education-item">
            <h3>New Jersey Institute of Technology</h3>
            <p>BS in Computer Science</p>
            <p>2018 - 2022</p>
            <p>GPA: 3.9</p>
          </div>
          <div className="education-item">
            <h3>New Jersey Institute of Technology</h3>
            <p>MS in Data Science</p>
            <p>2022 - 2023</p>
            <p>GPA: 4.0</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
