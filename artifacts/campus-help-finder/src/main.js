const reminderButton = document.querySelector("#reminder-button");
const reminderMessage = document.querySelector("#reminder-message");

reminderButton.addEventListener("click", () => {
  reminderMessage.hidden = false;
  reminderButton.setAttribute("aria-expanded", "true");
  reminderButton.focus();
});
