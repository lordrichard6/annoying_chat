import Angry from "../img/angry.png";
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
} from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', background: 'linear-gradient(to right top, #373b44, #4286f4)', height: '100vh' }}>
      <div>
        <img src={Angry} alt="logo" style={{ marginBottom: 10 }} height={300} />
        <CubeGrid color='#74ebd5' size={80} />
      </div>
    </center>
  );
}

export default Loading;
