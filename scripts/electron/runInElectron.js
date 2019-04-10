
const spawn = require('child_process').spawn
const subProcess = spawn('bash')
let isStart = false 
/* 子进程标准输出和标准错误 */
subProcess.stdout.on('data', function (data) { process.stdout.write(data)})
subProcess.stderr.on('data', function (data) { process.stdout.write(data)})

function runInElectron (options) {
  options || (options = {})
  this.url = options.url // electron要打开的url
}

runInElectron.prototype.apply = function (compiler) {
  const url = this.url
  compiler.plugin('done', function doneCallback (stats) {
    if (!isStart && !stats.hasErrors()) {
      isStart = true
      subProcess.stdin.write(`npm run electron`)
      subProcess.stdin.end()
    }
  })
}

module.exports = runInElectron