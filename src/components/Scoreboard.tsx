import { Ref, useEffect, useRef, useState } from "react"
import "./Scoreboard.css"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

export function Scoreboard() {
  const scoreboardRef: Ref<HTMLDivElement> = useRef(null)
  let world = useSelector((state: RootState) => state.crabe.world)

  let nameLeftTeam = "NAMeC"
  let nameRightTeam = "TIGERS"
  let [scoreAlly, setScoreAlly] = useState(-1)
  let [scoreEnemy, setScoreEnemy] = useState(-1)
  let [minutes, setMinutes] = useState(-1)
  let [seconds, setSeconds] = useState(-1)

  function getInfos() {
    nameLeftTeam = world.data.ally.info.name
    nameRightTeam = world.data.enemy.info.name
    setScoreAlly(world.data.ally.info.score)
    setScoreEnemy(world.data.enemy.info.score)

    setMinutes(Math.round(world.data.stageInfo.time_left_secs / 60))
    setSeconds(world.data.stageInfo.time_left_secs % 60)
  }

  useEffect(() => {
    if (world == null) return
    getInfos()
  }, [world])

  return (
    <div ref={scoreboardRef} className="mainScore">
      <div className="containerScore">
        <div className="Team yellow">
          <h3 className="nameTeam">{nameLeftTeam}</h3>
          <h3 className="scoreTeam">{scoreAlly}</h3>
        </div>
        <div className="time">
          <h3 id="time">
            {minutes} : {seconds}
          </h3>
        </div>
        <div className="Team blue">
          <h3 className="scoreTeam">{scoreEnemy}</h3>
          <h3 className="nameTeam">{nameRightTeam}</h3>
        </div>
      </div>
    </div>
  )
}
