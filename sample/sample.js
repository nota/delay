const delay = require('../')
// const delay = require('@notainc/delay')

async function main () {
  console.log('hello')
  console.log('(delay 3000 msec)')
  await delay(3000)
  console.log('world')
}

main()
