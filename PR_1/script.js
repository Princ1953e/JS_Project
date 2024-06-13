class school {
  student(name, contact, email) {
    document.getElementById("mn1").innerHTML = `My Name Is ${name} `;
    document.getElementById(
      "mc1"
    ).innerHTML = `My Contact Number Is ${contact}`;
    document.getElementById("me1").innerHTML = `My Email Address Is ${email}`;
  }
  faculty(name, contact, email) {
    document.getElementById("fn1").innerHTML = `My Faculty Name Is ${name} `;
    document.getElementById(
      "fc1"
    ).innerHTML = `My Faculty Contact Number Is ${contact}`;
    document.getElementById(
      "fe1"
    ).innerHTML = `My Faculty Email Address Is ${email}`;
  }
  peon(name, contact, email) {
    document.getElementById("pn1").innerHTML = `Peon Name Is ${name} `;
    document.getElementById(
      "pc1"
    ).innerHTML = `Peon Contact Number Is ${contact}`;
    document.getElementById("pe1").innerHTML = `Peon Email Address Is ${email}`;
  }
}

let s1 = new school();
s1.student("Prince", 9978617374, "princ1953e@gmail.com");
let f1 = new school();
f1.faculty("K_G Sir", 8802377949, "k_g01@gmail.com");
let p1 = new school();
p1.peon("Manish_Bhai", 9937849272, "manu_33@gmail.com");
