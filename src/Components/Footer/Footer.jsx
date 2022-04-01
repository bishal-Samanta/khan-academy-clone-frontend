import React from "react";
import Styles from "./footer.css";

// const Footer = () =>{
//   return(<>
//     Footer
//   </>)
// }

function Footer() {
  return (
    <footer className="foo-main-container">
      <div className="foo-container">
        <div className="foo-second-container">
          <div className="foo-our-mission-khan ">
            <div className="foo-our-mission-div">
              <span className="foo-social ">
                Our mission is to provide a free, world-class education to
                anyone, anywhere.
              </span>
            </div>

            <div className="foo-our-khan-div ">
              <span className="foo-social">
                Khan Academy is a 501(c)(3) nonprofit organization.{" "}
                <span className="f-donate">Donate</span> or{" "}
                <span className="f-donate">volunteer</span> today!
              </span>
            </div>
          </div>

          <div className="foo-link-container">
            <div className="foo-about-container ">
              <nav className="list-none ">
                <li>
                  <a className="text-gray-600">About</a>
                </li>
                <li>
                  <a className="text-gray-600">News</a>
                </li>
                <li>
                  <a className="text-gray-600">Impact</a>
                </li>
                <li>
                  <a className="text-gray-600">Our interns</a>
                </li>
                <li>
                  <a className="text-gray-600">Our content specialists</a>
                </li>
                <li>
                  <a className="text-gray-600">Our leadership</a>
                </li>
                <li>
                  <a className="text-gray-600">Our supporters</a>
                </li>
                <li>
                  <a className="text-gray-600">Our contributors</a>
                </li>
                <li>
                  <a className="text-gray-600">Our finances</a>
                </li>
                <li>
                  <a className="text-gray-600">Careers</a>
                </li>

                <li>
                  <a className="text-gray-600">Internships</a>
                </li>
              </nav>
            </div>

            <div className="foo-help-container">
              <p className="title-font ">Contact</p>
              <nav className="list-none">
                <li>
                  <a className="text-gray-600">Help center</a>
                </li>
                <li>
                  <a className="text-gray-600">Support community</a>
                </li>
                <li>
                  <a className="text-gray-600">Share your story</a>
                </li>
                <li>
                  <a className="text-gray-600">Press</a>
                </li>
              </nav>

              <h6 className="title-font">Download our apps</h6>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600">iOS app</a>
                </li>
                <li>
                  <a className="text-gray-600">Android app</a>
                </li>
              </nav>
            </div>

            <div className="foo-math-container">
              <p className="title-font">Courses</p>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600">Math - India</a>
                </li>
                <li>
                  <a className="text-gray-600">Math foundations</a>
                </li>
                <li>
                  <a className="text-gray-600">Math</a>
                </li>
                <li>
                  <a className="text-gray-600">Khan Kids, an app (ages 2-7)</a>
                </li>
                <li>
                  <a className="text-gray-600">Learn in Hindi (New)</a>
                </li>
                <li>
                  <a className="text-gray-600">Science - India</a>
                </li>
                <li>
                  <a className="text-gray-600">Science</a>
                </li>
                <li>
                  <a className="text-gray-600">Computing</a>
                </li>
                <li>
                  <a className="text-gray-600">Arts & humanities</a>
                </li>
                <li>
                  <a className="text-gray-600">Economics</a>
                </li>

                <li>
                  <a className="text-gray-600">Test prep</a>
                </li>
                <li>
                  <a className="text-gray-600">Khan for Educators</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <span className="f-change-langauge">Change language</span>
        </div>
        <hr />

        <div className="foo-bottom-container">
          <div className="foo-terms-container">
            <span className="f-privacy">© 2022 Khan Academy</span>

            <div className="foo-terms-div">
              <span className="f-privacy-policy">Terms of use</span>
              <span className="f-privacy-policy">Privacy Policy</span>
              <span className="f-privacy-policy">Cookie Notice</span>
            </div>
          </div>

          <div className="foo-social-media">
            <div className="social-icon-main-div">
              <img
                src="data:image/jpeg;base64,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"
                className="foo-social-icon"
              />
              <img
                src="data:image/png;base64,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"
                className="foo-social-icon"
              />
              <img
                src="data:image/jpeg;base64,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"
                className="foo-social-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;