import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt={business.name} />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
            {/* <p class="call-button"><a href={business.phone} >Tel: {business.phone}</a></p> */}
            <a
              href="tel:{business.phone}"
              onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
            >
              <p class="call-button">{business.phone}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
