const promisify = require('promisify-node')
const fs = promisify('fs')
const directory = process.argv[2]

fs.readdir(directory)
  .then(files => files.filter(filename => filename.endsWith('.jpg')))
  .then(files => files.map(filename => `\t ${filename}`))
  .then(files => `JPEG FILES: \n${files.join('\n')}`)
  .then(console.log)
  .catch(console.error)
