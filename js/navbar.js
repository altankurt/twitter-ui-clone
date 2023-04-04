// get all navigation buttons
const navButtons = document.querySelectorAll(".nav-button");

// reset the style of all navigation buttons
const resetNavButtons = () => {
  navButtons.forEach((btn) => {
    // set font weight to 400 and replace image source with non-filled version
    btn.style.fontWeight = 400;
    const img = btn.querySelector("img");
    if (img) {
      img.src = img.src.replace("-fill", "");
    }
  });
};
// set the style of the clicked navigation button
const setActiveNavButton = (button) => {
  // set font weight to 700 and replace image source with filled version
  button.style.fontWeight = 700;
  const img = button.querySelector("img");
  if (img) {
    img.src = img.src.replace(".svg", "-fill.svg");
  }
};

// when a navigation button is clicked, reset all styles and set the style of the clicked button
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetNavButtons(); // reset the style of all navigation buttons
    setActiveNavButton(button); // set the style of the clicked navigation button
  });
});
