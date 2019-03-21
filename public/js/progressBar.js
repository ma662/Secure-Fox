var prg = $(".progress-bar");
var prgNumber = 10;

console.log(prg);

setInterval(function() {
  prgNumber = prgNumber + 10;

  console.log(prgNumber);

  prg.css("width", prgNumber + "%");
  prg.attr("aria-valuenow", prgNumber);

  if (prgNumber === 100) {
    prgNumber = 0;

    window.location.href = "/";
  }
}, 250);
