
import { readdir } from 'fs/promises'
import { join } from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { execSync } from 'child_process'


// const templates = (await readdir('./src/templates')).map(path => join('./src/templates', path))
const clean = () => {
  execSync('rm -rf www/*.js')
  return
}

const copyWorkers = () => {
  execSync('cp ./node_modules/@vandeurenglenn/editor-fields/exports/ts.worker.js www/ts.worker.js')
  execSync('cp ./node_modules/@vandeurenglenn/editor-fields/exports/html.worker.js www/html.worker.js')
  execSync('cp ./node_modules/@vandeurenglenn/editor-fields/exports/css.worker.js www/css.worker.js')
  execSync('cp ./node_modules/@vandeurenglenn/editor-fields/exports/editor.worker.js www/editor.worker.js')
  return
}

export default [{
  input: 'src/shell.js',
  output: {
    dir: './www',
    format: 'es'
  },
  plugins: [
    clean(),
    copyWorkers(),
    resolve({mainFields: ['browser', 'module', 'main']})
  ]
}]
