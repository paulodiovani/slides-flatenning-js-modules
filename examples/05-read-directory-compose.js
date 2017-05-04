const promisify = require('promisify-node')
const R = require('ramda')
const fs = promisify('fs')
const directory = process.argv[2]

const printFiles = R.compose(
  console.log,
  files => `JPEG FILES: \n${files.join('\n')}`,
  files => files.map(filename => `\t ${filename}`)
)

fs.readdir(directory)
  .then(files => files.filter(filename => filename.endsWith('.jpg')))
  .then(printFiles)
  .catch(console.error)
