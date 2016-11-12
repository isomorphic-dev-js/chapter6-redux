import request from 'isomorphic-fetch';

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export function createNotification(data) {

  let headers = new Headers({
    "Content-Type": "application/json",
  });

  return dispatch => {
    return fetch('http://localhost:3000/add/', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then((response)=>{
      return dispatch({
        type: CREATE_NOTIFICATION,
        item: data
      });
    }).catch((error)=>{
      return dispatch({type: `${CREATE_NOTIFICATION}_ERROR`})
    })
  }
}

export function fetchNotifications() {
  return dispatch => {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return fetch(
        'http://localhost:3000/notifications',
        { headers: headers }
      )
      .then((response)=>{
        return response.json().then(data => {
          return dispatch({
            type: FETCH_NOTIFICATIONS,
            notifications: data
          })
        })
      })
      .catch((error)=>{
        return dispatch({
          type: `${FETCH_NOTIFICATIONS}_ERROR`
        })
      })
  }
}

export function clearNotification(index) {
  return dispatch => {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return fetch(
        `http://localhost:3000/notification/${index}`,
        {
          headers: headers,
          method: 'DELETE'
        }
      )
      .then((response)=>{
        return dispatch({
          type: CLEAR_NOTIFICATION,
          index: index
        })
      })
      .catch((error)=>{
        return dispatch({
          type: `${CLEAR_NOTIFICATION}_ERROR`
        })
      })
  }
}
