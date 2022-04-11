import React, { Component } from "react";

export default class KinhComponent extends Component {
  renderGlassesList = () => {
    let { glassItem } = this.props;

    return (
      <img
        key={glassItem.index}
        className="ml-2 p-2 border border-width-1"
        src={glassItem.url}
        style={{ width: 110, cursor: "pointer" }}
        onClick={() => {
          this.props.handleGlassesChange(glassItem)
        }}
      />
    );
  };
  render() {
    return this.renderGlassesList();
  }
}
