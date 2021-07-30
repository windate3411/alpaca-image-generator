interface Action {
  type: string
  payload: PayloadType
}

export type PayloadType = {
  part: string
  path: string
}

export type BodyPartAction = Action
