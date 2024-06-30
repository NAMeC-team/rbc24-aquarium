import { Ref, useEffect, useRef, useState } from "react"
import "./Scoreboard.css"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

export function Scoreboard() {
  const scoreboardRef: Ref<HTMLDivElement> = useRef(null)
  let world = useSelector((state: RootState) => state.crabe.world)

  let nameLeftTeam = "NAMeC"
  let nameRightTeam = "TIGERS"
  let [scoreAlly, setScoreAlly] = useState(0)
  let [scoreEnemy, setScoreEnemy] = useState(0)
  let [minutes, setMinutes] = useState(5)
  let [seconds, setSeconds] = useState(36)

  function getInfos() {
    /*    nameLeftTeam = world.ally.name
    nameRightTeam = world.enemy.name
    setScoreAlly(world.ally.score)
    setScoreEnemy(world.enemy.score)
    
    setMinutes(Il faut trouver ou recup les minutes)
    setSeconds(Il faut trouver ou recup les secondes)
    */
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
