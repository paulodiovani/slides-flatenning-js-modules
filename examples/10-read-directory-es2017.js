const promisify = require('promisify-node')
const R = require('ramda')
const fs = promisify('fs')

const joinNewline = R.join('\n')
const prependText = R.prepend('JPEG FILES:')
const mapIndent = R.map(filename => `\t ${filename}`)
const jpegFiles = files => files.filter(filename => filename.endsWith('.jpg'))

const listFiles = async directory => {
  try {
    console.log(
    joinNewline(
    prependText(
    mapIndent(
    jpegFiles(
    await fs.readdir(directory))))))
  } catch (err) { console.error(err) }
}

listFiles(process.argv[2])
