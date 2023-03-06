import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./otpverify.css";

const UserPermit = () => {
  const param = useParams();
  const [otp, SetOtp] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
    const url = `http://localhost:5000/api/usersPermission/${param.email}/verify/${param.token}`;
    console.log(url);
    const { msg } = await axios.post(url, { otp: otp });
    window.location = "/otpSuccess";
  };

  return (
    <div className="otpVerify">
      <form className="otpForm">
        <h2 className="title">OTP Verfication</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="number"
            name="otp"
            className="inputFie otpNum"
            value={otp}
            placeholder="OTP"
            onChange={(e) => SetOtp(e.target.value)}
          />
        </div>
        <button className="loginBtn" onClick={handleSubmit}>
          Proceed
        </button>
      </form>
    </div>
  );
};

export default UserPermit;
