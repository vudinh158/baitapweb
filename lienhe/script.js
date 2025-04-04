const teamMembers = document.querySelectorAll(".team-member img");

teamMembers.forEach((member) => {
  member.addEventListener("mouseover", function () {
    this.style.filter = "brightness(1.2)";
  });

  member.addEventListener("mouseout", function () {
    this.style.filter = "brightness(1)";
  });
});
