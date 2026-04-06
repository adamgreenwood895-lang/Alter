const tapZone = document.getElementById("tapZone");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const bgImage = document.getElementById("bgImage");

// AUTO DAY / NIGHT SWITCH
const hour = new Date().getHours();

if (hour >= 7 && hour < 19) {
  bgImage.src = "assets/day.png";
} else {
  bgImage.src = "assets/night.png";
}

// TAP ACTION
tapZone.addEventListener("click", () => {

  // subtle feedback
  document.body.style.opacity = "0.95";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 150);

  // transition
  setTimeout(() => {
    screen1.classList.add("fade-out");

    setTimeout(() => {
    screen1.classList.add("hidden");
screen2.classList.remove("hidden");
    }, 600);

  }, 400);

});
