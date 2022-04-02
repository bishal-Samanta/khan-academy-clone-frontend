import { Left } from "../left/Left";
import "./course.css";


export const Courses = () => {
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
            <h4 id="lgn_name">#####</h4>
          </div>
        </div>
      </div>
      <div className="main126">
        <div>
          < Left/>
        </div>
        <div className="courses">
          <div className="myCourses126">
            <div>
              <h3 id="mcourse">My courses</h3>
            </div>
            <div>
              <div>
                <div class="modal fade " tabindex="-1" id="openmodel">
                  <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title modal_heading126">
                          Personalize Khan Academy
                        </h4>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
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
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Class 1
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Class 2
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault3"
                              >
                                Class 3
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault4"
                              >
                                Class 4
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault5"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault5"
                              >
                                Class 5
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault6"
                              >
                                Class 6
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault7"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault7"
                              >
                                Class 7
                              </label>
                            </div>
                          </div>

                          <div className="classes_box1">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault8"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault8"
                              >
                                Class 8
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault9"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault9"
                              >
                                Class 9
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault10"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault10"
                              >
                                Class 10
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault11"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault11"
                              >
                                Class 11
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault12"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault12"
                              >
                                Class 12
                              </label>
                            </div>
                          </div>

                          {/* <p>Modal body text goes here.</p> */}
                        </div>
                        <div className="classes_box2"></div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
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
                Edit Courses{" "}
              </button>
            </div>
          </div>
          <div id="content126">
            <div></div>
            <div></div>
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