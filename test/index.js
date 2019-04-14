/* eslint-env mocha */

import { assert } from 'chai'
import delay from '../'

describe('delay', () => {
  it('is function', () => {
    assert.isFunction(delay)
  })
})
