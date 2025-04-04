document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: "smooth",
    });
  });
});

const teamMembers = document.querySelectorAll(".team-member img");

teamMembers.forEach((member) => {
  member.addEventListener("mouseover", function () {
    this.style.filter = "brightness(1.2)";
  });

  member.addEventListener("mouseout", function () {
    this.style.filter = "brightness(1)";
  });
});
