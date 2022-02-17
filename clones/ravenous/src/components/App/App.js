import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/Yelp";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div class="App">
        <h1>Craven</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <h1>What'cha Craven?</h1>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
