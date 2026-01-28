const dialog = document.getElementById("mobileNavDialog");
const openButton = document.getElementById("mobileNavDialogOpenButton");
const closeButton = document.getElementById("closeMobileNavDialogButton");

const html = document.querySelector("html");

// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
  dialog.showModal();
  html.style.overflow = "hidden";
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
  html.style.overflow = "unset";
});

// Close the dialog if the window is resized to not need the mobile nav
addEventListener("resize", () => {
  if (window.innerWidth >= 850 && dialog.open) {
    dialog.close();
    html.style.overflow = "unset";
  }
});
