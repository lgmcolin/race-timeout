var Promise = require('native-or-bluebird');

function timeout(interval) {
  return new Promise(function (resolve) {
    setTimeout(function(){
      resolve('timeout');
    }, interval || 0)
  })
}

function RaceTimeout (longTask, interval){
  var longTask = Array.isArray(longTask) ? longTask : [longTask];  

  if(interval && typeof interval === 'number') {
      longTask = longTask.concat(timeout(interval));    
  }
  
  try {
    return Promise.race(longTask);
  } catch (err) {
    console.log(err.stack);
  }

}

module.exports = RaceTimeout;