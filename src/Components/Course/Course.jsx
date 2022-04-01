import React from "react";

function Course() {
  return (
    <footer className="cor-main-container">
      <div className="cor-main-container-one"></div>
      <div className="cor-main-container-two">
        <div className="cor-main-container-right">
          <div className="cor-count-learn">
            <div className="cor-count-numbers">
              <h3>Counting small numbers</h3>
              <p>Learn</p>
              <div className="cor-video">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc92wXlHpDlC_LMQLw9D_lQ0SiUaNwNLfX5X96tUKY7yZY4pLk"
                  className="co-learn"
                />
                <a className="cor-paragraph">Counting with small numbers</a>
              </div>
              <div className="cor-video">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc92wXlHpDlC_LMQLw9D_lQ0SiUaNwNLfX5X96tUKY7yZY4pLk"
                  className="co-learn"
                />
                <a className="cor-paragraph">Counting in order</a>
              </div>
            </div>
            <div className="cor-practice">
              <h3 className="cors-blank-div"> </h3>
              <p>Practice</p>
              <hr className="co-hr-line" />
              <div className="cor-up-next">
                <div className="cor-up-next-for-you">
                  <div className="cor-up-next-for-you-one">
                    <p className="cors-upnext-para">Up next for you:</p>
                    <a className="cors-upnext-count">
                      Count with small numbers
                    </a>
                    <p>Get 5 of 7 questions to level up!</p>
                    <button className="co-start-button">Start</button>
                  </div>

                  <div className="cor-up-next-for-you-two">
                    <svg
                      aria-label="0 out of 100 Mastery points"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="0"
                      class="_1s2t3cl"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="35"
                      role="progressbar"
                      title="0 out of 100 Mastery points"
                      viewBox="-3 0 20 37"
                    >
                      <rect
                        class="_18qxreg"
                        x="0"
                        y="18"
                        width="14"
                        height="14"
                      ></rect>
                      <rect
                        class="_18qxreg"
                        x="0"
                        y="8"
                        width="14"
                        height="8"
                      ></rect>
                      <rect
                        class="_qvo65w"
                        x="0"
                        y="30"
                        width="14"
                        height="2"
                      ></rect>
                      <polygon
                        class="_18qxreg"
                        points="14 0 10.131 3.774 7 0 3.868 3.775 0 0 0 6 14 6"
                      ></polygon>
                    </svg>
                  </div>
                </div>

                <div className="cor-count-in-order">
                  <div className="cor-up-next-for-you-one">
                    <a className="cors-upnext-count">Count in order</a>
                    <p>Get 5 of 7 questions to level up!</p>
                    <button className="co-practice-button">Practice</button>
                  </div>

                  <div className="cor-up-next-for-you-two">
                    <svg
                      aria-label="0 out of 100 Mastery points"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="0"
                      class="_1s2t3cl"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="35"
                      role="progressbar"
                      title="0 out of 100 Mastery points"
                      viewBox="-3 0 20 37"
                    >
                      <rect
                        class="_18qxreg"
                        x="0"
                        y="18"
                        width="14"
                        height="14"
                      ></rect>
                      <rect
                        class="_18qxreg"
                        x="0"
                        y="8"
                        width="14"
                        height="8"
                      ></rect>
                      <rect
                        class="_qvo65w"
                        x="0"
                        y="30"
                        width="14"
                        height="2"
                      ></rect>
                      <polygon
                        class="_18qxreg"
                        points="14 0 10.131 3.774 7 0 3.868 3.775 0 0 0 6 14 6"
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Course;
