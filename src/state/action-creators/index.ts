import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
import { BodyPartAction, PayloadType } from '../actions'

// export const depositMoney = (amount: number) => {
//   return (dispatch: Dispatch<BodyPartAction>) => {
//     dispatch({
//       type: ActionType.DEPOSIT,
//       payload: amount,
//     })
//   }
// }

// export const withDrawMoney = (amount: number) => {
//   return (dispatch: Dispatch<BodyPartAction>) => {
//     dispatch({
//       type: ActionType.WITHDRAW,
//       payload: amount,
//     })
//   }
// }

export const setBodyPart = (payload: PayloadType) => {
  return (dispatch: Dispatch<BodyPartAction>) => {
    dispatch({
      type: ActionType.SET_BODYPART,
      payload: payload,
    })
  }
}
