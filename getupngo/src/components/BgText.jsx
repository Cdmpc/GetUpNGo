import Toronto from "../images/Toronto.jpg";

const bgImg = {
  width: "100%",
  height: "750px",
  filter: "brightness(50%)",
};

const imgOnTextStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-90%, -60%)",
  color: "white",
};
const h1ImgStyle = {
  fontFamily: "Gotham Light",
  fontSize: "4.5rem",
  animation: "fadeinup 1.0s linear",
};
const h3ImgStyle = {
  fontFamily: "Gotham Light",
  fontSize: "2.0rem",
  marginTop: "30px",
  animation: "fadeinleft 1.3s linear",
};
export { bgImg, imgOnTextStyle, h1ImgStyle, h3ImgStyle };

const BgText = () => {
  return (
    <section
      className="background-img"
      style={{
        position: "relative",
        textAlign: "center",
      }}
    >
      <img src={Toronto} alt="Toronto Skyline at night" style={bgImg} />
      {/** DISPLAYS THE TEXT ON THE IMAGES */}
      <div className="textOnImg" style={imgOnTextStyle}>
        <h1 style={h1ImgStyle}>Grab Toronto by the handlebars</h1>
        <h3 style={h3ImgStyle}>
          Immerse yourself in the noise of the Scotiabank Arena, the glow of the
          CN Tower to the neon of Nathan Phillips Square.
        </h3>
      </div>
    </section>
  );
};
export default BgText;
