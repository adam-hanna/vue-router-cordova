const store = {}
export default store
store['state'] = {
  'appData': {
    'foo': 'bar'
  },
  'appContext': {
    'initialized': false,
    'foo': 'bar'
  }
}

/* INIT THE STORE */
store.init = () => {
  store.state.appContext.initialized = true
}

/* MUTATIONS TO CHANGE STORE STATE */
store.mutations = {}