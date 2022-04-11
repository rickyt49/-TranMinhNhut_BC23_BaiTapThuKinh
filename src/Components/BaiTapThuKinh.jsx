import React, { Component } from "react";
import KinhComponent from "./KinhComponent";

export default class BaiTapThuKinh extends Component {
  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glassesInfo: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return this.glassList.map((glassItem, index) => {
      return (
        <KinhComponent
          glassItem={glassItem}
          handleGlassesChange={this.handleGlassesChange}
        />
      );
    });
  };
  handleGlassesChange = (clickedGlasses) => {
    this.setState({
      glassesInfo: clickedGlasses,
    });
  };
  render() {
    let { id, name, price, url, desc } = this.state.glassesInfo;
    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: "0.7",
      transform: "rotate(0deg)",
      animation:
        "2s ease 0s 1 normal none running animChangeGlasses1649579760167",
    };

    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255, 127, 0, 0.5)",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          backgroundImage: `url("./glassesImage/background.jpg")`,
          backgroundRepeat: "no-repeat",
          minHeight: "2000px",
          backgroundSize: "2000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.8)", minHeight: "2000px" }}
        >
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    src="./glassesImage/model.jpg"
                    alt="modelImage"
                    style={{ width: "250px" }}
                    className="position-absolute"
                  />

                  <img
                    src={url}
                    className="position-absolute"
                    style={styleGlasses}
                  />
                  <div className="position-relative" style={infoGlasses}>
                    <span
                      className="font-weight-bold"
                      style={{ color: "rgb(171, 130, 255)", fontSize: 17 }}
                    >
                      {name}
                    </span>
                    <br />
                    <span
                      style={{ fontSize: 14, paddingRight: 5, fontWeight: 400 }}
                    >
                      {desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  alt="modelImage"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
            <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
