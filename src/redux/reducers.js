import { combineReducers } from 'redux';
import uuid from 'uuid';
import { SET_ACTIVETHREAD, ADD_MESSAGE,  DELETE_MESSAGE } from '../redux/actionTypes';


const initactive = '1-fca2';
const initThread = [ {
  id: '1-fca2',
  title: 'Buzz Aldrin',
  messages: messages(undefined, {}),
  }, {
  id: '2-be91', 
  title: 'Michael Collins',
  messages: messages(undefined, {}),
    },
  ]

export const reducer = combineReducers({
  activeThreadId,
  threads,
})


function activeThreadId(state = initactive, action) {
  switch (action.type) {
    case SET_ACTIVETHREAD: {
      return action.id
    }
    default: 
      return state;
  } 
}

function threads(state = initThread, action) {
  //state = state.threads
  switch (action.type) {
    case ADD_MESSAGE:
    case DELETE_MESSAGE: {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {...oldThread, messages: messages(oldThread.messages, action)}
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length)
      ]
    }
    default: {
      return state
    }
  }
}

function findThreadIndex(threads, action) {
  switch (action.type) {
    case ADD_MESSAGE:{
      return threads.findIndex((t) => t.id === action.id);
    }
    case DELETE_MESSAGE: {
      return threads.findIndex((t) => t.messages.find((m) => m.id === action.id));
    }
    default: { 
      return threads;
    }
  }
}




function messages(state = [], action) {
  // state = state.threads[i].messages
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        text: action.message,
        id: uuid.v4(),
        time: Date.now()
      }
      return state.concat(newMessage)
    }
    case DELETE_MESSAGE: {
      return state.filter((m) => m.id !== action.id)
    }
    default: {
      return state;
    }
  }
}