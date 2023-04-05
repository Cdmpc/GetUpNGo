import { Button } from "primereact/button";

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

const BackgText = (props) => {
  let include = props.includeButtons;
  if (include) {
    return (
      <section
        className="background-img"
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <img src={props.bgimg} alt={props.bgalt} style={bgImg} />
        {/** DISPLAYS THE TEXT ON THE IMAGES */}
        <div className="textOnImg" style={imgOnTextStyle}>
          <h1 style={h1ImgStyle}>{props.TitleText}</h1>
          <h3 style={h3ImgStyle}>{props.TitleSub}</h3>
          <div
            className="Reg-Guest-btns"
            style={{ transform: "translate(-2%, 0%)" }}
          >
            <Button
              className="p-button-help"
              label="Become a Go-Getter"
              style={{
                fontFamily: "Gotham Light",
                fontSize: "1.2rem",
                transform: "translate(-15%, 30px)",
                borderRadius: "50px",
                width: "250px",
                animation: "fadein 2.5s",
              }}
            />
            <Button
              className="p-button-success"
              label="Continue as Guest"
              style={{
                fontFamily: "Gotham Light",
                fontSize: "1.2rem",
                transform: "translate(15%, 30px)",
                borderRadius: "50px",
                width: "220px",
                animation: "fadein 2.5s",
              }}
            />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className="background-img"
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <img src={props.bgimg} alt={props.bgalt} style={bgImg} />
        {/** DISPLAYS THE TEXT ON THE IMAGES */}
        <div className="textOnImg" style={imgOnTextStyle}>
          <h1 style={h1ImgStyle}>{props.TitleText}</h1>
          <h3 style={h3ImgStyle}>{props.TitleSub}</h3>
        </div>
      </section>
    );
  }
};
export default BackgText;
