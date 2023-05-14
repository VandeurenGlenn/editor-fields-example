
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

export default [{
  input: 'src/shell.js',
  output: {
    dir: './www',
    format: 'es'
  },
  plugins: [
    clean(),
    resolve({mainFields: ['browser', 'module', 'main']})
  ]
}]
