import store from '../store'

export const authorizeToken = (to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // if meta field has a `requiresAuth` in matched route,
    // check whether autorizeToken exists or not.
    // Although we should check authorizeToken via server side, 
    // this app omits it.
    if(!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}