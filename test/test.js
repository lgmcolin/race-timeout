var timeout = require('..');

function promiseA() {
  return new Promise(function (resolve) {
    setTimeout(function(){
      console.log('promiseA');
      resolve('1');
    },100);
  })
}

function promiseB() {
  return new Promise(function (resolve) {
    setTimeout(function(){
      console.log('promiseB');
      resolve('2');
    }, 200)
  })
}

var test1 = timeout(promiseA(), 1000).then(function(result){
  console.log('result=', result);
});
console.log('test1', test1);


var test2 = timeout([promiseA(), promiseB()], 1000).then(function(result){
  console.log('result=', result);
});
console.log('test2', test2);

var test3 = timeout([promiseA(), promiseB()], 1000).then(function(result){
  console.log('result=', result);
});

console.log('test3', test3);