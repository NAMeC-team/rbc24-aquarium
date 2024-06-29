import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

type StateInfo = {
  mainState: string
  subState: string
}

export function GameStateBanner() {
  const [stateInfo, setStateInfo] = useState<StateInfo>({
    mainState: "error",
    subState: "no state",
  })

  const world = useSelector((state: RootState) => state.crabe.world)

  useEffect(() => {
    if (world == null) return
    else {
      const state = world.data.refOrders.state
      setStateInfo({
        mainState: Object.keys(state)[0],
        subState: Object.values(state)[0],
      } as StateInfo)
    }
  }, [world])

  return (
    <div className="gameStateBanner">
      <p>
        {stateInfo.mainState} : {stateInfo.subState}
      </p>
    </div>
  )
}
