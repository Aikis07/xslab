export default async function ({ store, redirect }) {
  try {
    const statusCode = await store.dispatch('getUserToken')
    if (statusCode.status !== 200) {
      redirect('/sign-in')
    }
  } catch (error) {
    redirect('/sign-in')
  }
}