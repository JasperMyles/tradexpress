import React from "react";
import { Link } from "react-router-dom";
import "../Style/GetStartedPage.css";
import { Form } from "react-bootstrap";

const GetStartedPage = () => {
  return (
    <div className="Welcomeback1">
      <div className="wel">
      <h1>Welcome</h1>
      </div>
      <div className="getstarted1">
            <div className="bit1">
            <Link className="Link1" to="/getstarted">
              Individual
            </Link>
            </div>
            <div className="bit2">
            <Link className="Link2" to="/business">
              Business
            </Link>
            </div>
          </div>
        <Form className="Fullform1">
          <Form.Group className="mb-3 mt-3" controlId="Uname">
            <Form.Control type="Uname" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Fname">
            <Form.Control type="fname" placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="enterMail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Phone">
            <Form.Control
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRcode">
            <Form.Control type="rcode" placeholder="Referral Code (optional)" />
          </Form.Group>
          <div>
            <p>By clicking the Sign Up button below, you agree to TradExpress <Link className="terms">terms and services</Link></p>
          </div>
          <div className="getstarted3">
            <Link to='/signin' className="Get2">Sign Up</Link>
            </div>
          <div>
            <p>Already have an account? <Link to='/login' className="terms">Click here</Link></p>
          </div>
        </Form>
    </div>
  );
};

export default GetStartedPage;
