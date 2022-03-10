import * as core from '@actions/core'
import {annotate} from './annotate'

async function run(): Promise<void> {
  try {
    const type: string = core.getInput('type')
    const msg: string = core.getInput('msg')
    annotate({type, msg})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
