/* eslint-env mocha */

import { assert } from 'chai'
import delay from '../'

describe('delay', () => {
  it('is function', () => {
    assert.isFunction(delay)
  })

  it('wait msec', async () => {
    const startAt = Date.now()
    await delay(1000)
    assert.isTrue(Date.now() - startAt > 1000)
  })
})
