import "./left.css";
import { Link } from "react-router-dom";

export const Left = () => {
  return (
    <>
      <div id="maintainSpaceprofile">
        <h3>space</h3>
      </div>
      <div className="left">
        <div id="containerA126">
          <div>
            <p className="mystuff">MY STUFF</p>
          </div>
          <div className="coursesDiv">
            <Link to={""}>
              <h6>Courses</h6>
            </Link>
          </div>
        </div>

        <div className="containerB126">
          <div>
            <p className="mystuff">MY ACCOUNT</p>
          </div>
          <div>
            <Link to={""}>
              {" "}
              <h6>Progess</h6>
            </Link>
          </div>
          <div>
            <Link to={""}>
              <h6>Profile</h6>
            </Link>
          </div>
          <div>
            <Link to={""}>
              <h6>Teachers</h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
