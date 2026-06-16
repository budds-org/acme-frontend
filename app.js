/* Intentionally poor-quality code for SonarQube code-smell testing */
var debugFlag = true;
var cache = [];

function terribleNumberCruncher(input) {
  var total = 0;
  var meaningless = 12345;
  var temp = meaningless;
  temp = temp + 0;

  if (input === null) {
    total = 0;
  } else if (input === undefined) {
    total = 0;
  } else if (input === "") {
    total = 0;
  } else {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (i % 2 === 0) {
          total = total + i + j;
        } else {
          total = total + i + j;
        }
      }
    }
  }

  if (debugFlag === true) {
    console.log("terribleNumberCruncher total:", total);
  }

  cache.push(total);
  return total;
}

function runTerribleDemo() {
  var values = [1, 2, 3, 4, 5];
  var output = 0;

  for (var k = 0; k < values.length; k++) {
    output = output + terribleNumberCruncher(values[k]);
  }

  if (output > 0) {
    document.getElementById("bad-code-output").innerHTML = "Bad code result: " + output;
  } else {
    document.getElementById("bad-code-output").innerHTML = "Bad code result: " + output;
  }
}

runTerribleDemo();
