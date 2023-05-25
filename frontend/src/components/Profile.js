import React from "react";

const ProfilePage = () => {
  return (
    <>
      <h1> Header </h1>

      <div className="container bg-success bg-gradient text-light rounded">
        <div className="row p-4">
          <div className="col-8">
            <div className="row ">
              <p className="fs-1 text fw-semibold">First Name Second Name</p>
            </div>

            <div className="row fs-4 text fw-medium">
              <p>Contact No. : +91-1345678982</p>
            </div>

            <div className="row  fs-4 text fw-medium">
              <p>DOB : 23/04/2004</p>
            </div>

            <div className="row fs-4 text fw-medium">
              <p>Email ID : user.user@gmail.com</p>
            </div>
          </div>

          <div className="col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              id="profile"
            >
              <g data-name="<Group>">
                <path
                  fill="#ed664c"
                  d="M389.25 403.71v24.83a218.018 218.018 0 0 1-266.5 0V403.71a133.25 133.25 0 0 1 266.5 0zM304.09 124.82a67.514 67.514 0 1 1-47.64-19.67A67.064 67.064 0 0 1 304.09 124.82z"
                ></path>
                <path
                  fill="#fdc75b"
                  d="M256,38c120.4,0,218,97.6,218,218a217.579,217.579,0,0,1-84.75,172.54V403.71a133.25,133.25,0,0,0-266.5,0v24.83A217.579,217.579,0,0,1,38,256C38,135.6,135.6,38,256,38Zm67.76,134.46a67.158,67.158,0,1,0-19.67,47.63A67.064,67.064,0,0,0,323.76,172.46Z"
                ></path>
                <path d="M256,28A228.09,228.09,0,0,0,52.1,358.141a230.034,230.034,0,0,0,64.528,78.309,228.02,228.02,0,0,0,278.735,0A230.007,230.007,0,0,0,459.9,358.141,228.045,228.045,0,0,0,256,28ZM132.75,423.557V403.71a123.25,123.25,0,0,1,246.5,0v19.847a208.024,208.024,0,0,1-246.5,0Zm266.5-16.749v-3.1c0-78.988-64.262-143.25-143.25-143.25A143.257,143.257,0,0,0,112.75,403.71v3.1A206.439,206.439,0,0,1,48,256C48,141.309,141.309,48,256,48s208,93.309,208,208A206.444,206.444,0,0,1,399.25,406.808Z"></path>
                <path d="M256.45,95.15a77.158,77.158,0,1,0,54.713,22.6A76.787,76.787,0,0,0,256.45,95.15Zm40.566,117.872a57.513,57.513,0,1,1,16.745-40.562A56.931,56.931,0,0,1,297.016,213.022Z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <h1> Footer </h1>
    </>
  );
};

export default ProfilePage;