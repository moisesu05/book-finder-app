import React, { Component } from "react";

import Search from "../Common/Search";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default Home;
