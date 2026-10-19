const display = document.getElementById("Display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const cheat = getCheatResult(display.value);
    if (cheat !== null) {
        display.value = cheat.text;
        if (cheat.url) window.open(cheat.url, "_blank");
        return;
    }

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

display.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Extra backup to stop page reload
        calculate();            // Runs your math
    }
});

const cheatToggle = document.getElementById("cheatToggle");

const cheats = {
  "2+2": { text: "youtube", url: "https://youtube.com" },
  "1+1": { text: "github",  url: "https://github.com" },
  "5*5": { text: "hello",   url: null }
};


function getCheatResult(expression) {
  const key = expression.replace(/\s/g, "");
  if (cheatToggle.checked && cheats[key] !== undefined) {
    return cheats[key];
  }
  return null;
}


