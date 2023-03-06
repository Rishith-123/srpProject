import { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./emailVerify.css?inline";
import Success from "./Images/Success.jpg";
import Error from "./Images/404.svg";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;

				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
				// return
			} catch (error) {
				if (validUrl) setValidUrl(true);
				else setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
			{validUrl ? (
				<section className="Success-page">
					<img src={Success} alt="" />
					<h1>Email Verification Successful</h1>
					<p>
						Your Email has been verified Successfully.
						You have now become a member of our family.
						Further, login below and start receiving our services.
					</p>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</section>
			) : (
				<section className="page-not-found">
					<img src={Error} alt="" />
					<h1>Page Not Found</h1>
					<p>
						Sorry can't find the page you are looking for click<a href="#">Here </a> to
						come back to home page.
					</p>
					<button>Login</button>
				</section>
			)}
		</Fragment>
	);
};

export default EmailVerify;