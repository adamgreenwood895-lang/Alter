function enterApp() {
  const loading = document.getElementById("loading");

  // show loading screen
  loading.classList.add("active");

  // simulate next screen
  setTimeout(() => {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:black;
        color:white;
        font-size:22px;
      ">
        Voice system initializing...
      </div>
    `;
  }, 2000);
}
