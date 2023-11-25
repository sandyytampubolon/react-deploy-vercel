import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }


  handleRefreshClick = () => {
    // Navigate to "/"
    window.location.href = "/";

    // Reload the entire page after a delay (adjust the delay as needed)
    setTimeout(() => {
      window.location.reload();
    }, 1000); // 500 milliseconds delay as an example
  };

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.png" width="500" />
        <h2>Pesanan diterima</h2>
        <p>Terimakasih sudah memesan</p>
        <Button variant="primary" as={Link} to="/" onClick={this.handleRefreshClick}>
          kembali
        </Button>
      </div>
    );
  }
}
