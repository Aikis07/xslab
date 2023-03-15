export default async function ({ app, store, redirect }) {
  const token = app.$cookies.get('user')
  if (store.state.user === null && token !== undefined) {
    await store.dispatch('getUserToken')
  }
  if (store.state.user === null) {
    redirect('/sign-in')
  }
}