const delay = require('../')
// const delay = require('@notainc/delay')

async function main () {
  console.log('hello')
  await delay(3000)
  console.log('world')
}

main()
