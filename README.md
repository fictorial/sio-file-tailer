# Socket.io File Tailer

Socket.io server and client that emits messages when any of a number
of tailed UTF-8 encoded files has some data appended to it.

```bash
node index.js access=/var/log/nginx/access.log error=/var/log/nginx/error.log
```
