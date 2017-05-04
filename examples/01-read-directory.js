const fs = require('fs')
const directory = process.argv[2]

fs.readdir(directory, (err, files) => {
  if (err) console.error(err)
  const jpgFiles = []

  files.forEach(filename => {
    if (filename.endsWith('.jpg')) {
      jpgFiles.push(filename)
    }
  })

  console.log('JPEG FILES:')
  jpgFiles.forEach(filename => console.log(`\t ${filename}`))
})
