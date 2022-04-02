import axios from "axios";
import { useEffect, useState } from "react";
import { Left } from "../left/Left";
import "./course.css";

export const Courses = () => {
  const [logindata, setLoginData] = useState({});
  const [content, setContent] = useState([]);
  const [model, setModel] = useState(false);

  useEffect(() => {
    getData();
    getContent();
    console.log(logindata);
    console.log(content);
  }, []);

  const getData = () => {
    let data = JSON.parse(localStorage.getItem("userdata"));
    setLoginData(data.user);
    console.log(data.user.userName);
  };

  const getContent = () => {
    const link =
      "https://shielded-reaches-27262.herokuapp.com/contents/classcontent/624710e7be01fd7692d36d3f";
    axios
      .get(link)
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const handelModal = () => {
    document.querySelector(".btn-close").click();
    setModel(true);
    console.log(content);
  };

  return (
    <>
      <div className="loginnameDisplay">
        <div className="name-div126">
          <div className="name_logo">
            <img
              src="https://user-images.githubusercontent.com/95956045/161323531-4bc1dc65-f340-43c1-aca3-009711dcf58a.png"
              alt=""
            />
          </div>
          <div className="login_name">
            <h4 id="lgn_name">{logindata.userName}</h4>
          </div>
        </div>
      </div>
      <div className="main126">
        <div>
          <Left />
        </div>
        <div className="courses">
          <div className="myCourses126">
            <div>
              <h3 id="mcourse">My courses</h3>
            </div>
            <div>
              <div>
                <div className="modal fade " id="openmodel">
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title modal_heading126">
                          Personalize Khan Academy
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="modalimg_div">
                          <img
                            id="modalimg"
                            src="https://user-images.githubusercontent.com/95956045/161276293-2d3bf452-2d04-41da-9cdd-6f02f73b7a06.png"
                            alt=""
                          />
                        </div>
                        <div id="cls">
                          <h5>Classes</h5>
                        </div>

                        <div className="classes">
                          <div className="classes_box1">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Class 1
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Class 2
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault3"
                              >
                                Class 3
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault4"
                              >
                                Class 4
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault5"
                              >
                                Class 5
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault6"
                              >
                                Class 6
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault7"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault7"
                              >
                                Class 7
                              </label>
                            </div>
                          </div>

                          <div className="classes_box1">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault8"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault8"
                              >
                                Class 8
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault9"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault9"
                              >
                                Class 9
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault10"
                              >
                                Class 10
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault11"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault11"
                              >
                                Class 11
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault12"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault12"
                              >
                                Class 12
                              </label>
                            </div>
                          </div>

                          {/* <p>Modal body text goes here.</p> */}
                        </div>
                        <div className="classes_box2"></div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handelModal}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-bs-toggle="modal"
                href="#openmodel"
                role="button"
                id="editbtn"
              >
                Courses{" "}
              </button>
            </div>
          </div>
          <div id="content126">
            <div>
              {model ? (
                <ul>
                  {content.map((el) => {
                    return (
                      <div key={el._id}>
                        <li>
                          <label>{"➤ " + el.title}</label>
                          {el.links.map((el, i) => {
                            return (
                              <div key={i}>
                                <a href={el} target="_blank">
                                  {" "}
                                  Video {i + 1}
                                </a>{" "}
                                <br />
                              </div>
                            );
                          })}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              ) : (
                <h4 style={{ marginTop: "20px" }}>
                  Please select your class from courses
                </h4>
              )}
            </div>
            <div id="addmedia"></div>
          </div>
          <div>
            <img
              src="https://user-images.githubusercontent.com/95956045/161326477-98a07571-8593-4028-a16f-6564540a6e00.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
