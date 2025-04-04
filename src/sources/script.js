const teamMembers = document.querySelectorAll(".team-member img");

teamMembers.forEach((member) => {
  member.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s ease";
  });

  member.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});