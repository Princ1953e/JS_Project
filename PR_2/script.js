class person {
  constructor(fage, sage) {
    this.age = fage;
    this.sage = sage;
  }

  father(age) {
    document.getElementById(
      "fName"
    ).innerHTML = `My Name is Rajesh & My Age Is ${this.age}`;
  }
  son(age) {
    document.getElementById(
      "sName"
    ).innerHTML = `I am a Son Of Rajesh & My age is ${this.sage}`;
  }
}

let fa = new person(60, 20);
fa.father();
fa.son();
