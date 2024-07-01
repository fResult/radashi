import * as _ from 'radashi'
import { bench } from 'vitest'

describe('isFloat', () => {
  bench('with non-number value', () => {
    _.isFloat(undefined)
  })

  bench('with integer', () => {
    _.isFloat(22)
  })

  bench('with float', () => {
    _.isFloat(22.0567)
  })
})
