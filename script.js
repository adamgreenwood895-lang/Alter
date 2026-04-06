const tapZone = document.getElementById("tapZone");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const bgImage = document.getElementById("bgImage");
const aLetter = document.querySelector(".a-letter");

// AUTO DAY / NIGHT
const hour = new Date().getHours();

if (hour >= 7 && hour < 19) {
  document.body.classList.add("day");
  bgImage.src = "assets/day.png";
} else {
  bgImage.src = "assets/night.png";
}

// TAP ACTION
tapZone.addEventListener("click", () => {

  // A reacts
  aLetter.style.opacity = "1";
  aLetter.style.transform = "scale(1.1)";

  // Delay (realism)
  setTimeout(() => {

    screen1.classList.add("fade-out");

    setTimeout(() => {
      screen1.style.display = "none";
      screen2.classList.remove("hidden");
    }, 600);

  }, 500);

});
