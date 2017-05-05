const promisify = require('promisify-node')
const R = require('ramda')
const fs = promisify('fs')
const directory = process.argv[2]

const printFiles = R.compose(
  console.log,
  R.join('\n'), // String → [a] → String
  R.prepend('JPEG FILES:'), // a → [a] → [a]
  R.map(filename => `\t ${filename}`) // Functor f => (a → b) → f a → f b
)

fs.readdir(directory)
  .then(R.filter(filename => filename.endsWith('.jpg')))
  .then(printFiles)
  .catch(console.error)
