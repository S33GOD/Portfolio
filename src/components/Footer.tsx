import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div id="Contacts">
        <div className="contacts-header">
          <img src="src/assets/img/Djinni.svg" />
          <a href="https://djinni.co/q/22027a5602/">Djinni</a>
        </div>
        <div className="contacts-header">
          <img src="src/assets/img/github.svg" />
          <a href="https://github.com/S33GOD">GitHub</a>
        </div>
        <div className="contacts-header">
          <img src="src/assets/img/Linkedin.svg" />
          <a href="https://www.linkedin.com/in/paul-suprun-4887091a6/">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        © Created and Designed <br />
        by Pavlo Suprun
      </div>
    </div>
  );
}

export default Footer;
