/*  TODO    Color rotation
 *
 *  Graham, G. (2017, December 14). Typewriter Effect. Retrieved
 *  from: css-tricks.com/snippets/css/typewriter-effect/#more
 */

var colorRotation = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];

var TxtType = function (el, toRotate, period, color) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick(color);
  this.isDeleting = false;
};

TxtType.prototype.tick = function (color) {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    var color = colorRotation[i % 4];

    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period, color);
    }
  }

  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid #fff }`;
  document.body.appendChild(css);
};
