var Promise=require('bluebird');
var cmd=require('node-cmd');

	 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
 
getAsync('net start RohitService').then(data => {
  console.log('', data)
}).catch(err => {
  console.log('cmd err', err)
})
 