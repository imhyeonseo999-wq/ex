document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ script.js loaded");

  const buttons = document.querySelectorAll(".colorButton");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log(button.id + " clicked");
      if (buttons[index + 1]) {
        buttons[index + 1].style.display = "inline-block";
        buttons[index + 1].style.opacity = 0;
        setTimeout(() => {
          buttons[index + 1].style.transition = "opacity 0.4s ease";
          buttons[index + 1].style.opacity = 1;
        });
      }
    });
  });
});
