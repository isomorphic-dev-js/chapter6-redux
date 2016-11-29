import { UPDATE_REFRESH_DELAY } from './settings-action-creators';

export default function settings(state = {}, action) {
  switch (action.type) {
    case UPDATE_REFRESH_DELAY:
      return {
        ...state,
        refresh: action.time
      }
    default:
      return state
  }
}
