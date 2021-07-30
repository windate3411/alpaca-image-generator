import { BodyPartAction } from '../actions'
import { ActionType } from '../action-types'

export type BodyPartType = {
  [key: string]: string
}

const initialState = {
  backgroundsPath: '/alpaca/backgrounds/green50.png',
  neckPath: '/alpaca/neck/default.png',
  earsPath: '/alpaca/ears/default.png',
  hairPath: '/alpaca/hair/default.png',
  accessoriesPath: '/alpaca/accessories/flower.png',
  eyesPath: '/alpaca/eyes/default.png',
  nosePath: '/alpaca/nose.png',
  mouthPath: '/alpaca/mouth/default.png',
  legPath: '/alpaca/leg/default.png',
}

// const initialState = 0

const reducer = (
  state: BodyPartType = initialState,
  action: BodyPartAction
) => {
  switch (action.type) {
    case ActionType.SET_BODYPART:
      const { part, path } = action.payload
      const newState = state
      state[part] = path
      return { ...state, ...newState }
    default:
      return state
  }
}

export default reducer
