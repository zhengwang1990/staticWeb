var express = require('express'),
    app     = express(),
    path    = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

if (module === require.main) {
  // Start the server
  // [START server]
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}
