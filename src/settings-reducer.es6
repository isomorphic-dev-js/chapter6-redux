export default function settings(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_REFRESH_DELAY':
      return Object.assign({}, state, {
        refresh: action.time
      })
    default:
      return state
  }
}
