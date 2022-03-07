const body = document.querySelector("body");
const section = document.querySelector("section");
const article = document.querySelector("article");
const button = document.querySelector("div");
const elements = [body, section, article, button];
let stopPropagationAt = "none";
let abortAt = "none";
let count = 0;

fixPropagation();

elements.forEach((element) => {
  addEvent(element, { capture: true });
  addEvent(element);
});

function addEvent(element, options) {
  element.addEventListener(
    "click",
    () => {
      if (options) {
        console.log(
          `${element.firstElementChild.textContent} capture | Event ${++count}`
        );
      } else {
        console.log(
          `${element.firstElementChild.textContent} bubbling | Event ${++count}`
        );
      }
    },
    options
  );
}

function fixPropagation() {
  document.querySelectorAll("select").forEach((element) => {
    element.addEventListener(
      "click",
      (e) => {
        stopPropagationAt = document.getElementById("propagation").value;
        abortAt = document.getElementById("abort-at").value;
        console.log(stopPropagationAt, abortAt);
        e.stopPropagation();
      },
      true
    );
  });

  button.addEventListener("click", (btnEvent) => {
    btnEvent.stopPropagation();
  });
  article.addEventListener("click", (btnEvent) => {
    btnEvent.stopPropagation();
  });
}
