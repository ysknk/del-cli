#!/usr/bin/env node

'use strict'

/* @author ysknk */

import fs from 'fs'
import path from 'path'
import glob from 'glob'

import { deleteAsync } from 'del'

import utils from 'node-package-utilities'

import argv from './lib/arguments.js'

glob.sync(argv.src, {
  ignore: argv.ignore,
  cwd: argv.base
}).map((key) => {
  let filepath = key

  if (argv.dest) {
    const ext = argv.ext || key.match(/\.[^/.]+$/)[0]
    const filename = key.replace(/\.[^/.]+$/, '')
    filepath = path.resolve(argv.dest, `${filename}${ext}`)
  }

  fs.readFile(filepath, (err, data) => {
    // if (err) { throw err }
    if (err) { return }

    (async () => {
      const files = await deleteAsync(filepath, {
        force: argv.force,
        dryRun: argv.dryRun
      })

      const message = `deleted${argv.dryRun ? '[dryrun]' : ''}: `
      utils.message.success(message + files.join('\n' + message), {ptime: false})
    })()
  })
})

