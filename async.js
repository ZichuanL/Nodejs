const fetchData1 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer2 is done");
  fetchData1()
    .then((text) => {
      console.log(text);
      return fetchData1();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 3000);

// const fetchData2 = (callback) => {
//   setTimeout(() => {
//     callback("Done");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("Timer1 is done");
//   fetchData2((text) => {
//     console.log(text);
//   });
// }, 2000);

console.log("Hello");
