const tapZone = document.getElementById("tapZone");
const screen2 = document.getElementById("screen2");
const bgImage = document.getElementById("bgImage");

// DAY / NIGHT
const hour = new Date().getHours();

if (hour >= 7 && hour < 19) {
  bgImage.src = "assets/day.png";
} else {
  bgImage.src = "assets/night.png";
}

// TAP
tapZone.addEventListener("click", () => {
  document.querySelector(".ui").style.opacity = "0";

  setTimeout(() => {
    screen2.classList.remove("hidden");
  }, 400);
});
