function makeCoffee(callback) {
  let bijiKopi = true;
  callback(bijiKopi);
}

console.log('mulai');

makeCoffee((bijiKopi) => {
  if (bijiKopi) {
    console.log('siap dibuat');
  } else {
    console.log('biji kopi tidak ada');
  }
})

console.log('selesai');