import "./profile.css";
import { Left } from "../left/Left";
import { useEffect, useState } from "react";

export const Profile = () => {
  const [logindata, setLoginData] = useState({});
  useEffect(() => {
    getData();
    // getContent();
    console.log(logindata);
  }, []);

  const getData = () => {
    let data = JSON.parse(localStorage.getItem("userdata"));
    setLoginData(data.user);
    console.log(data.user.userName);
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

        <div className="right126">
          {/* <div className="MyProfile">My profile</div> */}
          <h2 className="MyProfile">My profile</h2>
          <div className="row1126">
            <div className="box1">
              <div className="showcase126">
                <h5>Showcase</h5>
                <h6>Coaches</h6>
              </div>

              <div className="showCaseImg">
                <img
                  src="https://user-images.githubusercontent.com/95956045/160841142-1d3df56d-fce8-4a38-8939-4a5242755762.png"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="datejoin">
                <h4>User Statistics</h4>
              </div>
              <div className="datejoin">
                <p>Date Joined</p>
                <p>Enegy point earn</p>
                <p>Video Completed</p>
              </div>
            </div>

            <div className="box2">
              <div className="badge126">
                <h5>Badges Count</h5>
                <h6>Coaches</h6>
              </div>
              {/* <hr /> */}
              <div className="showCaseImg">
                <img
                  src="https://user-images.githubusercontent.com/95956045/160854904-eb6c58e2-2514-46b2-9b9a-31a57f4b7f03.png"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="badge126">
              <h5>Project</h5>
              <h6>Coaches</h6>
            </div>
            <div className="showCaseImg">
              <h5 id="pro">You Do not have any project yet</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
