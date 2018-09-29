const fs = require('fs')
process.argv.slice(2).forEach(keyAndPath => {
  let [ key, path ] = keyAndPath.split('=')
  require('child_process').spawn('tail', ['-f', path]).stdout.on('data', data => io.emit('line', { key, data: data.toString('utf8').trim() }))
})
const app = require('http').createServer((_, res) => fs.readFile(`${__dirname}/index.html`, (_, data) => res.end(data)))
const io = require('socket.io')(app)
app.listen(process.env.PORT || 9090)
