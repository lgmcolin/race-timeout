var timeout = require('..');
var Promise = require('native-or-bluebird');

function promiseA() {
  return new Promise(function (resolve) {
    setTimeout(function(){
      console.log('promiseA');
      resolve('1');
    },200);
  })
}

function promiseB() {
  return new Promise(function (resolve) {
    setTimeout(function(){
      console.log('promiseB');
      resolve('2');
    }, 100)
  })
}

describe("Promise.race", function(){
  
  it("return promiseA", function() {
      var p = timeout(promiseA(), 10000);
      p.then(function(v) {
          assert.equal(v, 1);
      });
  });

  it("return timeout", function() {
      var p = timeout(promiseA(), 10000);
      p.then(function(v) {
          assert.equal(v, "timeout");
      });
  });

  it("without param timeout", function() {
      var p = timeout(promiseA());
      p.then(function(v) {
          assert.equal(v, "1");
      });
  });

  it("with multi tasks", function() {

      var p = timeout([promiseA(),promiseB()]);
      p.then(function(v) {
          assert.equal(v, "2");
      });
  });

})
