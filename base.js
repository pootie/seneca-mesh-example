var Seneca = require('seneca');
var randomColor = require('randomcolor'); 

Seneca()
  // Uncomment to get detailed logs
  // .test('print')
  
  // load the mesh plugin
  .use('mesh', {
    // this is a base node
    isbase: true,
  });