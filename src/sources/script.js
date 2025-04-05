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

const alertMess = () => {
  alert("Giảm 20%");
}

// Xu ly page tour
document.addEventListener('DOMContentLoaded', function () {
  // Search functionality
  const searchInput = document.querySelector('.search-container input');
  const destinationCards = document.querySelectorAll('.destination-card');

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();

    destinationCards.forEach(card => {
      const destinationName = card.querySelector('h3').textContent.toLowerCase();

      if (destinationName.includes(searchTerm)) {
        card.closest('.col-md-6').style.display = 'block';
      } else {
        card.closest('.col-md-6').style.display = 'none';
      }
    });
  });
});