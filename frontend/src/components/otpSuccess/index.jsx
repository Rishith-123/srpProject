import { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import "./emailVerify.css"
import Success from "./Images/Success.jpg";
import Error from "./Images/404.svg";

const OtpSuccess = () => {
	

	return (
		<div className="otpVerify">
				<section className="Success-page">
					<img src={Success} alt="" />
					<h1>OTP Verification Successful</h1>
					<p>
						You have Successfully granted permission for the requested files!
					</p>
				</section>
			
		</div>
	);
};

export default OtpSuccess;