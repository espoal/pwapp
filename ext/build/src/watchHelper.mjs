import { timeNow } from './timeNow.mjs'

export const watchHelper = (name) => ({
  onRebuild(error, result) {
    if (error) console.error('watch build failed:', error)
    else {
      console.log(`Build successful at time: ${timeNow()} for: ${name}`)
      const {errors, warnings} = result
      console.log({errors, warnings})
    }
  }
})
