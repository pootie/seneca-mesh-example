var Seneca = require('seneca');
var chalk = require('chalk');

Seneca({log: 'test'})

  // load the mesh plugin
  .use('mesh', {
    bases: ['127.0.0.1']
  })
  .ready(function() {
    var si = this; // seneca instance

    setInterval(function() {
      // send a message out into the network
      // the network will know where to send format:hex messages
      si.act({ random: 'hex'}, function (err, out) {
    
        // prints random
        console.log(out ? chalk.hex(out.color).bold(out.color) : 'null');
      })
    }, 1000);    
  });
