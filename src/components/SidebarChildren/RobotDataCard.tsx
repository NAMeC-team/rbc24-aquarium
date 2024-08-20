import React from "react"
import "./RobotData.css"
import imgBase from "../../icon.png"
import { sendCommand } from "../../middleware/clientMiddleware"
import { Command } from "../../types/command";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { set } from "zod";

interface RobotDataProps {
  id: number
  positionX: number
  positionY: number
  angVelo: number
  linVeloX: number
  linVeloY: number
  orientation: number
  hasBall: boolean
}

var interval: any;
var mouseDown = false;
const RobotDataCard: React.FC<RobotDataProps> = (props) => {
  const dispatch = useDispatch();

  function mouseDownHandler() {
    mouseDown = true;
    interval = setInterval(() => {
      manualControl();
    })
  } 

  function mouseUpHandler() {
    mouseDown = false;
    clearInterval(interval);
  }

  function manualControl() {
    const command: Command = {
      forwardVelocity: 10,
      leftVelocity: 0,
      angularVelocity: 0,
      charge: false,
      kick: null,
      dribbler: 0,
    };
    dispatch(sendCommand([props.id, command]));
  }
  return (
    <div className="mainRobot">
      <img id="imgRobot" src={imgBase} alt="robot" />
      <div className="infos">
        <p className="info id">ID : {props.id}</p>
        <p className="info position">
          Position : {props.positionX.toFixed(2)} ,{props.positionY.toFixed(2)}
        </p>
        <p className="info linVelo">
          linear velocity : {props.linVeloX.toFixed(2)} ,
          {props.linVeloY.toFixed(2)}
        </p>
        <p className="info linVelo">
          angular velocity : {props.angVelo.toFixed(2)}
        </p>
        <p className="info orientation">
          Orientation : {props.orientation.toFixed(2)}
        </p>
        <p className="info hasball">Has ball : {props.hasBall}</p>
        <button onMouseDown={() => mouseDownHandler()} onMouseUp={() => mouseUpHandler()}>Manual Control</button>
      </div>
    </div>
  )
}

export default RobotDataCard
