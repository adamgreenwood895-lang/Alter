function enterApp() {
  const loading = document.getElementById("loading");

  loading.classList.add("active");

  setTimeout(() => {
    window.location.href = "app.html"; // ✅ THIS IS THE KEY
  }, 2000);
}
