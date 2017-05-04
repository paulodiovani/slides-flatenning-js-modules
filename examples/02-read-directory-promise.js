const promisify = require('promisify-node')
const fs = promisify('fs')
const directory = process.argv[2]

fs.readdir(directory)
  .then(files => {
    const jpgFiles = []

    files.forEach(filename => {
      if (filename.endsWith('.jpg')) {
        jpgFiles.push(filename)
      }
    })

    console.log('JPEG FILES:')
    jpgFiles.forEach(filename => console.log(`\t ${filename}`))
  })
  .catch(console.error)
