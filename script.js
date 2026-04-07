alert("JS LOADED");

window.onload = function () {

  const orb = document.querySelector(".orb-hitbox");

  if (!orb) {
    alert("ORB NOT FOUND");
    return;
  }

  orb.addEventListener("click", function () {
    alert("Tapped!");
  });

};
