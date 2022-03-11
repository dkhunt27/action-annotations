/* eslint-disable filenames/match-regex */
import * as core from '@actions/core'
import {annotate} from '../annotate'
import {run} from '../main'
import {when} from 'jest-when'

jest.mock('@actions/core')
jest.mock('../annotate.ts')

test('should parse inputs', () => {
  when(core.getInput).calledWith('type').mockReturnValue('abc')
  when(core.getInput).calledWith('msg').mockReturnValue('def')
  run()
  expect(annotate).toHaveBeenCalledTimes(1)
  expect(annotate).toHaveBeenCalledWith({type: 'abc', msg: 'def'})
  expect(core.setFailed).toHaveBeenCalledTimes(0)
})

test('should error if missing input', () => {
  when(core.getInput)
    .calledWith('type')
    .mockImplementation(() => {
      throw new Error('test')
    })
  when(core.getInput).calledWith('msg').mockReturnValue('def')
  run()
  expect(annotate).toHaveBeenCalledTimes(0)
  expect(core.setFailed).toHaveBeenCalledTimes(1)
})
