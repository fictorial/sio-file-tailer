process.argv.slice(2).forEach(keyAndPath => {
  let [ key, path ] = keyAndPath.split('=')
  console.log(key, path)
  if (!key || !path || !require('fs').existsSync(path)) throw new Error('args: key=path ...')
  require('child_process').spawn('tail', ['-f', path]).stdout
    .on('data', data => io.emit('line', { key, data: data.toString('utf8').trim() }))
})

const app = require('http').createServer((req, res) => {
  require('fs').readFile(__dirname + '/index.html', (err, data) => {
    if (err) { res.writeHead(500); res.end()     }
    else     { res.writeHead(200); res.end(data) }
  })
})

const io = require('socket.io')(app)
app.listen(9090)
