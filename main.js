const express = require('express')
const app = express()
const request = require('request')
const port = 3000
url = 'https://images.unsplash.com/photo-1603427200522-01df79305d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&auto=format&fit=crop&w=634&q=80';

app.get('/', (req, res) => {
  request(url).pipe(res);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})