const scrollBtn = document.getElementById("scrollTopBtn");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const darkToggle = document.getElementById("darkModeToggle");
const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating-value');
let selectedRating = 0;

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");


  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const ratingDisplay = document.getElementById('rating-value');
  const reviewSummary = document.getElementById('review-summary');
  const submitBtn = document.getElementById('submitRating');

  let selectedRating = 0;
  let totalRatings = 0;
  let ratingSum = 0;

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('hovered', i <= index);
      });
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hovered'));
    });

    star.addEventListener('click', () => {
      selectedRating = index + 1;
      ratingDisplay.textContent = `Rating: ${selectedRating}`;
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < selectedRating);
      });
    });
  });

  submitBtn.addEventListener('click', () => {
    if (selectedRating === 0) {
      alert("Please select a rating before submitting!");
      return;
    }

    totalRatings++;
    ratingSum += selectedRating;
    const average = (ratingSum / totalRatings).toFixed(1);

    reviewSummary.textContent = `⭐ ${average} average from ${totalRatings} review${totalRatings > 1 ? "s" : ""}.`;

    // Reset for next person
    selectedRating = 0;
    ratingDisplay.textContent = "Rating: 0";
    stars.forEach(s => s.classList.remove('selected'));
  });
});
