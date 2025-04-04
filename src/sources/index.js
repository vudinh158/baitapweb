// Example JavaScript to handle form submission (basic demonstration)
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    alert(
      `Thank you for contacting us, ${name}! We will get back to you soon.`
    );
  });
