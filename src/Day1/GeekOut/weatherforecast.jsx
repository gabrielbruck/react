import React from "react";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="top-part">
          <div>
            <h3 className="weather-day">{this.props.day}</h3>
            <h3 className="weather-date">{this.props.date}</h3>
          </div>
          <img
            className="image"
            src={this.props.image}
            alt={this.props.condition}
          />
          <div>
            <h2 className="weather-condition">{this.props.condition}</h2>
            <h2 className="weather-degrees">{this.props.degrees}</h2>
          </div>
        </div>
        <div className="bottom-part">
          <div>
            <i className="fa fa-leaf image-drop"></i>
            <h5 className="wind">{this.props.wind}</h5>
          </div>
          <div>
            <i className="fa fa-tint image-drop"></i>
            <h5 className="humidity">{this.props.humidity}</h5>
          </div>
          <div>
            <i className="fa fa-cloud image-drop"></i>
            <h5 className="probabilty">{this.props.probabilty}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
