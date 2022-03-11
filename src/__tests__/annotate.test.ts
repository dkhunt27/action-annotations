/* eslint-disable filenames/match-regex */
import * as core from '@actions/core'
import {annotate} from '../annotate'

jest.mock('@actions/core')

test('when invalid type, throw error', () => {
  expect(() => annotate({type: 'notValid', msg: 'some message'})).toThrow(
    'type not "error", "warning", or "notice": notValid'
  )
})

test('when type notice, should call core.notice', () => {
  annotate({type: 'notice', msg: 'some message'})
  expect(core.notice).toHaveBeenCalledTimes(1)
  expect(core.notice).toHaveBeenCalledWith('some message')
})

test('when type warning, should call core.warning', () => {
  annotate({type: 'warning', msg: 'some message'})
  expect(core.warning).toHaveBeenCalledTimes(1)
  expect(core.warning).toHaveBeenCalledWith('some message')
})

test('when type error, should call core.error', () => {
  annotate({type: 'error', msg: 'some message'})
  expect(core.error).toHaveBeenCalledTimes(1)
  expect(core.error).toHaveBeenCalledWith('some message')
})
