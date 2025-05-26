document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const recommendationSection = document.getElementById("recommendation");

  const data = {
    beach: [
      { name: "Bora Bora", img: "images/beach.jpg" },
      { name: "Maldives", img: "images/maldives.jpg" }
    ],
    temple: [
      { name: "Angkor Wat", img: "images/italy.jpg" },
      { name: "Golden Temple", img: "images/amalfi.jpg" }
    ],
    country: [
      { name: "Japan", img: "images/japan.jpg" },
      { name: "Italy", img: "images/italy.jpg" }
    ]
  };

  function showRecommendations(type) {
    if (!recommendationSection) return;
    recommendationSection.innerHTML = "";

    if (!data[type]) {
      recommendationSection.textContent = "No recommendations found.";
      return;
    }

    data[type].forEach(dest => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3>${dest.name}</h3>
        <img src="${dest.img}" alt="${dest.name}" />
      `;
      recommendationSection.appendChild(card);
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase();

      if (query.includes("beach")) {
        showRecommendations("beach");
      } else if (query.includes("temple")) {
        showRecommendations("temple");
      } else if (query.includes("country")) {
        showRecommendations("country");
      } else {
        if (recommendationSection)
          recommendationSection.textContent = "Try searching for 'beach', 'temple', or 'country'.";
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      if (recommendationSection) recommendationSection.innerHTML = "";
    });
  }
});
