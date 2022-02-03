var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));
app.get('*', (req, res, next) => {
    res.sendFile('index.html', { 'root': path.join(rootPath, 'app') })
});
app.listen(8000);
console.log('Listening on port ' + 8000 + '...');