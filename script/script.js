let burger = document.querySelector(".header__burger"),
  menu = document.querySelector(".header__menu"),
  body = document.querySelector("body"),
  items = document.querySelectorAll(".header__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger-selected");
  menu.classList.toggle("header__menu-selected");
  body.classList.toggle("lock");
});

for (let item of items) {
  item.addEventListener("click", function () {
    burger.classList.remove("header__burger-selected");
    menu.classList.remove("header__menu-selected");
    body.classList.remove("lock");
  });
}

const letters = [
  "  function typeText() {\n",
  "    let line = 0;\n",
  "    let count = 0;\n",
  "    let out = '';\n",
  "    let result = document.querySelector('.code');\n",
  "    function typeLine() {\n",
  "      let interval = setTimeout(function () {\n",
  "        out += letters[line][count];\n",
  "        result.innerHTML = out + '|';\n",
  "        count++;\n",
  "        if (count >= letters[line].length) {\n",
  "          count = 0;\n",
  "          line++;\n",
  "          if (line == letters.length) {\n",
  "            clearTimeout(interval);\n",
  "            result.innerHTML = out;\n",
  "            return true;\n",
  "          }\n",
  "        }",
  "        typeLine();\n",
  "      }, 50);\n",
  "    }\n",
  "    typeLine();\n",
  "  }\n",
  "  typeText();\n",
];

function typeText() {
  let line = 0;
  let count = 0;
  let out = "";
  let result = document.querySelector(".code");
  function typeLine() {
    let interval = setTimeout(function () {
      out += letters[line][count];
      result.innerHTML = out + "|";
      count++;
      if (count >= letters[line].length) {
        count = 0;
        line++;
        if (line == letters.length) {
          clearTimeout(interval);
          result.innerHTML = out;
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(100 * 1.5)));
  }
  typeLine();
}
typeText();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
