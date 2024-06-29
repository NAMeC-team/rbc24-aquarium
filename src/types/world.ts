import type { Ball, Geometry } from "./geometry"

export type AllyInfo = {}

export type EnemyInfo = {}

export type Location = [number, number]

// uses template string pattern index signature
// available from typescript >= 4.4
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#symbol-template-signatures
export type GameState = {
  [key: string]: string
}

export type Pose = {
  position: Location
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

export type GameData = {
  ally: Team
  enemy: Team
  positiveHalf: string
  refOrders: RefereeOrders
}

export type RefereeOrders = {
  designatedPosition: Location | null
  event: string | null
  minDistFromBall: number | null
  speedLimit: number
  state: GameState
}

export type World = {
  data: GameData
  geometry: Geometry
  alliesBot: Record<number, Robot<AllyInfo>>
  enemiesBot: Record<number, Robot<EnemyInfo>>
  ball: Ball | null
  teamColor: TeamColor
}
