//This code allows for centralized state management and utility functions that can be easily accessed and modified across different components in the application.

// createGlobalState function is used to create a global state that can be accessed and modified from any component in the React application
import { createGlobalState } from 'react-hooks-global-state'

// calls createGlobalState with an initial state object and destructures its return values into setGlobalState (update), useGlobalState(access the global state in a React component), getGlobalState(get current value)
// the objects define the initial state for the global state
const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: 'scale-0',
  updateModal: 'scale-0',
  showModal: 'scale-0',
  alert: { show: false, msg: '', color: '' },
  loading: { show: false, msg: '' },
  connectedAccount: '',
  nft: null,
  nfts: [],
  transactions: [],
  contract: null,
})

// setAlert function which sets an alert message
const setAlert = (msg, color = 'green') => {
  setGlobalState('loading', false)
  setGlobalState('alert', { show: true, msg, color })
  //sets a timer to hide the alert message after 6 sec by updating the global state
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
  }, 6000)
}

// setLoadingMsg function sets a loading message
const setLoadingMsg = (msg) => {
  const loading = getGlobalState('loading')
  setGlobalState('loading', { ...loading, msg })
}

//function truncate which truncates a text string if it exceeds a certain length
const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars)
    var end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  setAlert,
  setLoadingMsg,
  truncate,
}