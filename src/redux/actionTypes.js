export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const SET_ACTIVETHREAD = 'ACTIVE_THREAD';

export function addMessage(message, id) {
  return {
    type: ADD_MESSAGE,
    message,
    id,
  }
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id,
  }
}

export function setActiveThread(id) {
  return {
    type: SET_ACTIVETHREAD,
    id,
  }
}