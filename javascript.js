var kbpsystem = 1;
function crasher() {
	do {
    var x = console.log(kbpsystem);
    document.getElementById("output").innerHTML = "Crashing your memory....";
  	kbpsystem = kbpsystem*7;
		} while (kbpsystem > 77);
  }
