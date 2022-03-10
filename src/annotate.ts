import * as core from '@actions/core'

type ParamsType = {
  type: string
  msg: string
}

export const annotate = (params: ParamsType): void => {
  const {type, msg} = params
  switch (type) {
    case 'error':
    case 'warning':
    case 'notice':
      core[type](msg)
      break
    default:
      throw new Error(`type not "error", "warning", or "notice": ${type}`)
  }
}
