export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const UPDATE_REFRESH_DELAY = 'UPDATE_REFRESH_DELAY';

export function updateRefreshDelay(time) {
  return {
    type: UPDATE_REFRESH_DELAY,
    time: time
  }
}
