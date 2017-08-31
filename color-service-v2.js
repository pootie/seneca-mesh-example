var Seneca = require('seneca');
var randomColor = require('randomcolor'); 

Seneca()
  // Uncomment to get detailed logs
  // .test('print')
  
  // provide an action for the format:hex pattern
  .add('random:hex', function (msg, reply) {
    var color = randomColor();
    reply({color: color})
  })

  // load the mesh plugin
  .use('mesh', {
    // this service will respond to the format:hex pattern
    pin: 'random:hex'
  });
