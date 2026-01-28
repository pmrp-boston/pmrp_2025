const headerLinkMenuButtons = document.querySelectorAll('nav.site-nav button[id^="menu-button-"]');

for (const button of headerLinkMenuButtons) {
  button.addEventListener("click", () => {
    const ariaExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", ariaExpanded ? "false" : "true");
  });

  const listItem = button.closest('li');
  document.addEventListener('click', (event) => {
    if (!listItem || !listItem.contains(event.target)) {
      button.setAttribute('aria-expanded', 'false');
    }
  });
}
