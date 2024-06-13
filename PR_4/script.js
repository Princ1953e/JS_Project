class shape {
  constructor(radius, width, height, pie) {
    this.radius = radius;
    this.width = width;
    this.height = height;
    this.pie = pie;
  }
  rectangle() {
    document.getElementById("rec").innerHTML = this.width * this.height;
  }
  circle() {
    document.getElementById("cir").innerHTML =
      this.pie * this.radius * this.radius;
  }
}

let r = new shape(5, 10, 10, 3.14);
r.rectangle();
r.circle();
