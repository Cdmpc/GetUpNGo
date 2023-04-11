import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const bgImg = {
  width: "100%",
  height: "800px",
  filter: "brightness(42%)",
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
  fontSize: "5.5vw", //Makes the text size become relative to the window size.
  animation: "fadeinup 1.0s linear",
};
const h3ImgStyle = {
  fontFamily: "Gotham Light",
  fontSize: "2vw",
  marginTop: "30px",
  animation: "fadeinleft 1.3s linear",
};
export { bgImg, imgOnTextStyle, h1ImgStyle, h3ImgStyle };

const BackgText = (props) => {
  let nav = useNavigate();
  let include = props.includeButtons;
  if (include) {
    return (
      <section
        className="background-img"
        style={{
          position: "relative",
          alignItems: "center",
        }}
      >
        <img src={props.bgimg} alt={props.bgalt} style={bgImg} />
        {/** DISPLAYS THE TEXT ON THE IMAGES */}
        <div className="textOnImg" style={{ ...imgOnTextStyle }}>
          <h1 style={h1ImgStyle}>{props.TitleText}</h1>
          <h3 style={h3ImgStyle}>{props.TitleSub}</h3>
          <div className="Reg-Guest-btns flex flex-wrap justify-content-center gap-5 mt-5">
            <Button
              className="p-button-help translate-y-100"
              label="Become a Go-Getter"
              style={{
                fontFamily: "Gotham Light",
                fontSize: "1.2rem",
                borderRadius: "50px",
                width: "250px",
                animation: "fadein 2.5s",
              }}
              onClick={() => nav("/signup")}
            />
            <Button
              className="p-button-primary translate-y-100"
              label="Log In"
              icon="pi pi-sign-in"
              style={{
                fontFamily: "Gotham Light",
                fontSize: "1.2rem",
                borderRadius: "50px",
                width: "250px",
                animation: "fadein 2.5s",
              }}
              onClick={() => nav("/login")}
            />
            <Button
              className="p-button-success translate-y-100"
              label="Continue as Guest"
              icon="pi pi-user"
              style={{
                fontFamily: "Gotham Light",
                fontSize: "1.2rem",
                borderRadius: "50px",
                width: "250px",
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
