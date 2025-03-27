// All Different Methods to use with Promise
// Creating promise
function promisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}
//Method 1

promisified(1000).then(() => {
  console.log("First Hii!");
  promisified(2000).then(() => {
    console.log("second Hello");
  });
});

//**********************************************
//Method 2 (Using Function)

function callBackFirst() {
  console.log("Fisrt Hii!");
}
function callBackSecond() {
  console.log("Second Hello");
}

promisified(1000).then(callBackFirst);
promisified(2000).then(callBackSecond);

//**********************************************
//Method 3 (Calling Second with Return)

promisified(1000).then(() => {
  console.log("First Hii!");
  return promisified(2000).then(() => {
    console.log("Second Hello");
  });
});

//**********************************************
//Method 4 (Async)

async function solve() {
  await promisified(1000);
  console.log("first Hii!");
  await promisified(2000);
  console.log("Second Hello");
}
solve();
