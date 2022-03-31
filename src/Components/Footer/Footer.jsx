import React from "react";
// import styles from "./footer.css"


const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">
              Our mission is to provide a free, world-class education to anyone,
              anywhere.
            </span>
          </a>

          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">
              Khan Academy is a 501(c)(3) nonprofit organization.{" "}
              <span className="f-donate hover:underline">Donate</span> or{" "}
              <span className="f-donate hover:underline">volunteer</span> today!
            </span>
          </a>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:underline">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">News</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Impact</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Our interns</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Our content specialists
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Our leadership</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Our supporters</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Our contributors
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Our finances</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Careers</a>
              </li>

              <li>
                <a className="text-gray-600 hover:underline">Internships</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:underline">Help center</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Support community
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Share your story
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Press</a>
              </li>
            </nav>

            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Download our apps
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:underline">iOS app</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Android app</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Courses
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:underline">Math - India</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Math foundations
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Math</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Khan Kids, an app (ages 2-7)
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Learn in Hindi (New)
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Science - India</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Science</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Computing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Arts & humanities
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Economics</a>
              </li>

              <li>
                <a className="text-gray-600 hover:underline">Test prep</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">
                  Khan for Educators
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <span className="f-change-langauge hover:underline">
          Change language
        </span>
        <hr />
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 Khan Academy
          </p>
          <div className="f-privacy-policy">
            <span className="f-privacy-policy hover:underline">
              Terms of use
            </span>
            <span className="f-privacy-policy hover:underline">
              Privacy Policy
            </span>
            <span className="f-privacy-policy hover:underline">
              Cookie Notice
            </span>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
