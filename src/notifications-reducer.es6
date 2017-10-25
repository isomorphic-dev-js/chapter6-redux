import { FETCH_NOTIFICATIONS, CLEAR_NOTIFICATION, CREATE_NOTIFICATION } from './action-creators';

export default function notifications(state = {}, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        all: action.notifications.items
      }
    case CLEAR_NOTIFICATION: {
      return {
        ...state,
        all: [
          ...state.all.slice(0, action.index),
          ...state.all.slice(action.index + 1)
        ]
      }
    }
    case CREATE_NOTIFICATION: {
      return {
        ...state,
        all: [...state.all, action.item]
      }
    }
    default:
      return state
  }
}
