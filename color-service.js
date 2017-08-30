var Seneca = require('seneca');
var randomColor = require('randomcolor'); 

Seneca()
  // Uncomment to get detailed logs
  // .test('print')
  
  // provide an action for the format:hex pattern
  .add('format:hex', function (msg, reply) {
    var color = randomColor();
    reply({color: color})
  })

  // load the mesh plugin
  .use('mesh', {

    // this is a base node
    isbase: true,

    // this service will respond to the format:hex pattern
    pin: 'format:hex'
  });
