var app = require('express')();

require('./config/express')(app);
require('./config/jwt')(app);
require('./db')(app);
require('./api')(app);

app.listen(3000, function(){
  console.log('Sever listening on port 3000');
});