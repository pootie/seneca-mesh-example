var seneca = require("seneca");                                                    
var chalk = require("chalk");                                                   
                                                                                
console.log(chalk.yellow("[p]"), "to prune failed services");                   
                                                                                
// You can monitor the status of your local development network                 
seneca({ log: "silent" })                                                       
  .use("mesh", {                                                                
    monitor: true,                                                              
    stop: false                                                                 
  });