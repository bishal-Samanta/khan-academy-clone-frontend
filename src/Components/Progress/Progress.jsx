import React from "react";

function Progress() {
  return (
    <>
      <div className="pro-main-container">
        <div className="my-progress-container">
          <h1>
            My progress<sub className="SubScript ">Learn more.</sub>
          </h1>
          <p>Latest activity may take 10 mins to show below.</p>
        </div>

        <div className="pro-select-div">
          <select className="P-select">
            <option>Last 7 days</option>
            <option>Today</option>
            <option>Last 30 days</option>
            <option>Custom range</option>
          </select>

          <select className="P-select">
            <option>All content</option>
            <option>Course mastery goals</option>
          </select>

          <select className="P-select">
            <option>Exercises</option>
            <option>Videos</option>
            <option>Articles</option>
            <option>Quizzez</option>
            <option>Unit tests</option>
            <option>Course challenges</option>
            <option>Mastery Challenges</option>
            <option>All activities</option>
          </select>
          <h1>0 </h1>
          <p>exercise min</p>

          <hr />
          <h1>4</h1>
          <p>total learning</p>
        </div>

        <div className="pro-table">
          <table className="table-auto">
            <thead className="pro-thead">
              <tr className="pro-row">
                <th className="pro-th">ACTIVITY</th>
                <th>DATE</th>
                <th>LEVEL</th>
                <th>CHANGE</th>
                <th>
                  CORRECT/ <br />
                  <span className="pro-time-th">TOTAL PROBLEMS</span>
                </th>
                <th>
                  TIME <br />
                  <span className="pro-arithmatic-scann">(MIN)</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9y66p3NuyATv5HbsozqBj_UVxJcQ2EB4qLFWudfzMn4vMIuiO"
                      className="pro-table-image"
                    />
                  </span>
                  <span className="pro-arithmatic-scan">
                    Introduction to multiplication{" "}
                  </span>
                  <br />
                  <span className="pro-arithmatic-scann">Arithmetic</span>
                </td>
                <td>Mar 30, 2022 at 5:18 PM</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>0</td>
              </tr>

              <tr>
                <td>
                  <span>
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBbfRGYf2HFpoxsvSECQE-sn-KJH5rCz794uPVXy2gZ4ngYa66"
                      className="pro-table-image"
                    />
                  </span>
                  <span className="pro-arithmatic-scan ">
                    Creative commons and open source
                  </span>
                  <br />
                  <span className="pro-arithmatic-scann">
                    Computers and the Internet
                  </span>
                </td>
                <td>Mar 29, 2022 at 4:20 PM</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Progress;
