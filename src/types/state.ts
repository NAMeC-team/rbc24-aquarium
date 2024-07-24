import { AllyInfo, Robot, World } from "./world"
import { Annotation } from "./annotation"

export interface CrabeState {
  world: World,
  annotations: Record<string, Annotation>
}

export type AquariumState = {
  clickedRobot: Robot<AllyInfo> | null
}
