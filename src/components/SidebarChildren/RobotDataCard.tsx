import React from "react"
import "./RobotData.css"
import imgBase from "../../icon.png"

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

const RobotDataCard: React.FC<RobotDataProps> = (props) => {
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
      </div>
    </div>
  )
}

export default RobotDataCard
