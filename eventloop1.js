new Promise((resolve, reject) => {
  console.info("promise1 start"); // 1
  resolve();
}).then((res) => {
  console.info("promise1 end"); // 6
});

async function a() {
  console.info("asyncA start"); // 3
  await b();
  console.info("asyncA end"); // 7
}

async function b() {
  console.info("asyncB start"); // 4
}

console.info("script start"); // 2

a();

setTimeout(() => {
  console.info("setTimeout"); // 8
}, 500);

console.info("script end"); // 5
