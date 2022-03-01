function simpleAsyncTask() {
  return new Promise(
    resolve => setTimeout(resolve, 2000)
  )
}

module.exports = simpleAsyncTask