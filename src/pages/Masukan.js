import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default class Masukan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to handle form submission (send data to the server, etc.)
    console.log("Form submitted:", this.state);
    // Reset the form after submission if needed
    this.setState({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <Carousel>
          {/* Add your Carousel items here */}
        </Carousel>

        <section className="section">
          <div className="container" style={{ marginTop: 10 }}>
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Contact Form</h6>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label className="mb-1">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Full Name"
                          name="fullName"
                          value={this.state.fullName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone Number"
                          name="phoneNumber"
                          value={this.state.phoneNumber}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1">Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email Address"
                          name="emailAddress"
                          value={this.state.emailAddress}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1">Message</label>
                        <textarea
                          rows="3"
                          className="form-control"
                          placeholder="Type for message..."
                          name="message"
                          value={this.state.message}
                          onChange={this.handleChange}
                        ></textarea>
                      </div>
                      <div className="form-group py-3">
                        <Button type="submit" variant="primary shadow w-100">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 border-start">
                    <h5 className="main-heading">Address Information</h5>
                    <div className="underline"></div>
                    <p>Jalan Banjarsari, Tembalang, Semarang, Indonesia</p>
                    <p>Phone: 081234567890</p>
                    <p>Email: wartegonlineku@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
