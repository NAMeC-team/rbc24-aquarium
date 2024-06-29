import type { Ball, Geometry } from "./geometry"

export type AllyInfo = {}

export type EnemyInfo = {}

export type Pose = {
  position: [number, number]
  orientation: number
}

export type RobotVelocity = {
  linear: [number, number]
  angular: number
}

export type Robot<T> = {
  id: number
  pose: Pose
  hasBall: boolean
  velocity: RobotVelocity
  robotInfo: T
}

export enum TeamColor {
  Blue = "blue",
  Yellow = "yellow",
}

export type Team = {
  color: string
  name: string
  score: number
}

export type GameState = {
  ally: Team
  enemy: Team
  positiveHalf: string
}

export type World = {
  state: GameState
  geometry: Geometry
  alliesBot: Record<number, Robot<AllyInfo>>
  enemiesBot: Record<number, Robot<EnemyInfo>>
  ball: Ball | null
  teamColor: TeamColor
}
