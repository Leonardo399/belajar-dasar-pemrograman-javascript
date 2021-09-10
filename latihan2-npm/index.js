const makeCoffee = new Promise((resolve, reject) => {
  resolve('ok ini menggunakan new');
});

const makeCoffee2 = () => {
  return new Promise((resolve, reject) => {
    resolve('ini promise menggunakan function');
  })
}


let kopiRobusta = makeCoffee.then((result) => {
  console.log(result);
});

let kopiRobusta2 = makeCoffee2().then((result) => {
  console.log(result);
});

// async function cobaPromise() {
//   // const kopiHitam = await makeCoffee;
//   const kopiHitam2 = await makeCoffee2();
//   // console.log(kopiHitam);

// }

// cobaPromise();
console.log('mulai');
// let tmp = cobaPromise();
console.log('selesai');

// setTimeout(() => {
//   console.log(tmp);

// }, 100)