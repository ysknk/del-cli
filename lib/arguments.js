import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import utils from 'node-package-utilities'

export const packageName = 'del'
export const packageWrapName = 'npms.config'
export const wrapConfig = await utils.value.fromConfig(packageWrapName)
export const baseConfig = await utils.value.fromConfig(packageName)
export const config = Object.assign(
  {},
  (wrapConfig && wrapConfig[packageName]) || {},
  baseConfig
)

export const argv = yargs(hideBin(process.argv))
  .config(config || {})
  .option('cwd', {
    alias: 'c',
    description: 'Current Working Directory',
    demandOption: true
  })
  .option('src', {
    alias: 's',
    description: 'Source Directory',
    demandOption: true
  })
  .option('dest', {
    alias: 'd',
    description: 'Dest Directory',
    // default: ''
    demandOption: false
  })
  .option('ext', {
    alias: 'e',
    description: 'Target Extention',
    // default: ''
    demandOption: false
  })
  .option('ignore', {
    alias: 'ig',
    description: 'Ignore Directory',
    default: '{**/_*,node_modules/**/*}',
    demandOption: false
  })
  .option('force', {
    alias: 'f',
    description: 'Allow deleting the current working directory and outside',
    default: true,
    type: 'boolean'
  })
  .option('dryRun', {
    alias: 'dry',
    description: 'List what would be deleted instead of deleting',
    default: false,
    type: 'boolean'
  })
  .argv

export default argv

