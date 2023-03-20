import React from "react";
import { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import UploadForm from "components/UploadForm";

function User() {
  const [data, setData] = useState({ firstName: "", lastName: "", address: "", city: "", zipCode: "", aboutMe: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data)
      const id = localStorage.getItem("userId")
      const url = "http://localhost:5000/api/profileUpdate/" + id;
      console.log(url)
      const { data: res } = await axios.post(url, data);
      console.log(res)

      // window.location = "/admin";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
  };


  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Roll Number</label>
                        <Input
                          disabled
                          placeholder="Roll No."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          disabled
                          placeholder="Rishith Kumar"
                          type="text"
                          name="userName"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="5">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Input
                          placeholder="rishithkumar@gmail.com"
                          disabled
                          type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input

                          placeholder="First Name"
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          value={data.firstName}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input

                          placeholder="Last Name"
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          value={data.lastName}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input

                          placeholder="Address"
                          type="text"
                          name="address"
                          onChange={handleChange}
                          value={data.address}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input

                          placeholder="City"
                          type="text"
                          name="city"
                          onChange={handleChange}
                          value={data.city}
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          placeholder="ZIP Code"
                          type="number"
                          name="zipCode"
                          onChange={handleChange}
                          value={data.zipCode}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"

                          placeholder="Small Discription"
                          rows="4"
                          type="textarea"
                          name="aboutMe"
                          onChange={handleChange}
                          value={data.aboutMe}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <button type="submit" defaultValue="Login" className="loginBtn" >Submit</button>

                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h5 className="title">Rishith</h5>
                  </a>
                  <p className="description">Enthusiastic Student</p>
                </div>
                <p className="description text-center"> </p>
              </CardBody>
              <hr />



              <div className="button-container">
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="content">
        <Row>
          <Col md="4">
            <UploadForm displayName="Income Certificate" name="income"/>
          </Col>

          <Col md="4">
            <UploadForm displayName="10th Marksheet" name="10thMarksheet"/>
          </Col>

          <Col md="4">
            <UploadForm displayName="12th Marksheet" name="12thMarksheet"/>
          </Col>

          <Col md="4">
            <UploadForm displayName="Aadhar Card" name="aadhar"/>
          </Col>
        </Row>

      </div>

    </>
  );
}

export default User;
