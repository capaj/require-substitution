'use strict'
import test from 'ava'
import requireSubstitution from './index'

const testSub = (path) => {
  if (path === 'test') {
    return null
  }
}

test('it should run and return null', (t) => {
  requireSubstitution.add(testSub)
  const val = require('test')
  t.true(val === null)
})

test('it should be removed', (t) => {
  requireSubstitution.remove(testSub)
  t.throws(() => {
    require('test')
  }, "Cannot find module 'test'")
})
