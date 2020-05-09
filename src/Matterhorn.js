import React from "react";
import "./Matterhom.css";
import { data } from "./items";

export default class Matterhom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: "",
      items: [],
    };
  }

  componentDidMount() {
    this.setState({
      bgImage: data.data.bgImage,
      items: [...this.state.items, data.data.items[0]],
    });
  }

  render() {
    return (
      <div>
        <div
          className="bgImage"
          style={{ backgroundImage: `url(${this.state.bgImage})` }}
        >
          {/* <img src={this.state.bgImage} /> */}
          <h1>Swiss Highlights</h1>
          {/* <h2>Home</h2> */}
        </div>
        <div className="FirstIndex2">
          {this.state.items.map((element) => (
            <div className="SecIndex2" key={element.id}>
              <h2>{element.site}</h2>
              <img src={element.image} alt={element.site} />
              <h5>{element.info}</h5>
              <embed src={element.videoEmbed} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// export default App;
