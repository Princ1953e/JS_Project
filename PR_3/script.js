class Employee {
  constructor(msg) {
    this.msg = msg;
  }
  pMsg() {
    document.getElementById("msgPrint").innerHTML = `${this.msg}`;
  }
}
let mssg = new Employee("Jay Hoo !!");
mssg.pMsg();
