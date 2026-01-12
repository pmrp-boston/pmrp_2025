const dialog = document.getElementById("mobileNavDialog");
const openButton = document.getElementById("mobileNavDialogOpenButton");
const closeButton = document.getElementById("closeMobileNavDialogButton");

// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close the dialog if the window is resized to not need the mobile nav
addEventListener("resize", () => {
  if (window.innerWidth >= 800 && dialog.open) {
    dialog.close();
  }
});
