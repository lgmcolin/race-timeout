# race-timeout
---

returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects

race-timeout is similar with [timeout-then](https://github.com/thenables/timeout-then), but race-timeout will return the firse-exec promise task between some promise tasks and the timeout promise.

# Installation
---
npm install race-timeout

# Usage
---

```
  var timeout = require('race-timeout');

  function promiseA() {
    return new Promise(function (resolve) {
      setTimeout(function(){
        console.log('promiseA');
        resolve('1');
      },100);
    })
  }

  var result = timeout(promiseA(), 1000).then(function(res){
    //get the result
  });

```
