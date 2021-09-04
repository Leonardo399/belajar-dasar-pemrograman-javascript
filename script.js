// class Mail {
//   constructor(author) {
//     this.from = author;
//     this._contacts = [];
//   }
//   sendMessage(msg, to) {
//     console.log(`you send: ${msg} to ${to} from ${this.from}`);
//     this._contacts.push(to);
//   }
//   showAllContacts() {
//     return this._contacts;
//   }
//   _privateFunction() {
//     console.log('ini private');
//   }
// }

// class WhatsApp extends Mail {
//   constructor() {
//     super();
//     this.username = 'dicoding';
//     this.isBussinessAccount = true;
//   }
//   myProfile() {
//     return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
//   }
// }

// const wa1 = new WhatsApp(080111000222);
// console.log(wa1.myProfile());

// [1] list of abstractions
const canSendMessage = self => ({
  sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
  isValid: () => console.log('valid phone', self.from)
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };

  const coba = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });

  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(coba), canSendMessage(coba), checkIsValidPhone(coba));
};

// const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
// pe1.createCatalog(); //Catalog has created:  Dicoding Store
// pe1.sendMessage(); //send message: hei produk baru nih'
// pe1.store = 'febri store';
// console.log(pe1);
// pe1.createCatalog();
// console.log(pe1.createCatalog);

class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age, isMammal = true) {
    super(name, age, isMammal);
  }
  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age, isMammal = false) {
    super(name, age, isMammal);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }

}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

console.log(myRabbit.eat());
console.log(myEagle.fly());