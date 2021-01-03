function getAll() {
	if (localStorage.pog) {
    document.getElementById("Poggers").innerHTML = localStorage.pog;
    pogs = Number(localStorage.pog);
  	} else {
    document.getElementById("Poggers").innerHTML = 0;
  	}
  if (localStorage.autopog) {
    document.getElementById("autoPoggers").innerHTML = localStorage.autopog;
    autopogs = Number(localStorage.autopog);
    } else {
    document.getElementById("autoPoggers").innerHTML = 0;
  }
  if (localStorage.autopogcost) {
    document.getElementById("autoPogCost").innerHTML = localStorage.autopogcost;
    autopogcost = Number(localStorage.autopogcost);
    } else {
    document.getElementById("autoPogCost").innerHTML = 10;
  }
}

function pogCounter() {
  pogs += 1;
  document.getElementById("Poggers").innerHTML = pogs;
}

function autoPog() {
  if (pogs >= autopogcost) {
    pogs -= autopogcost;
    autopogs += 1;
    document.getElementById("Poggers").innerHTML = pogs;
    document.getElementById("autoPoggers").innerHTML = autopogs;
    var incrementautopog = Math.round((autopogcost * 2) / 10);
    autopogcost += incrementautopog;
    document.getElementById("autoPogCost").innerHTML = autopogcost;
  }
}

function incrementPog() {
  pogs += autopogs;
  document.getElementById("Poggers").innerHTML = pogs;
}

function saveGame() {
  localStorage.pog = pogs;
  localStorage.autopog = autopogs;
  localStorage.autopogcost = autopogcost;
}

function resetAll() {
  localStorage.pog = 0;
  localStorage.autopog = 0;
  localStorage.autopogcost = 10;
  pogs = 0;
  autopogs = 0;
  autopogcost = 10;
  document.getElementById("autoPoggers").innerHTML = autopogs;
  document.getElementById("Poggers").innerHTML = pogs;
  document.getElementById("autoPogCost").innerHTML = autopogcost;
  localStorage.clear();
  location.reload();
}

pogs = 0;
autopogs = 0;
autopogcost = 10;

setInterval(saveGame, 30000);

setInterval(incrementPog, 1000);
