const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const recommendationSection = document.getElementById("recommendation");

// Sample data
const data = {
  beach: [
    { name: "Bora Bora", img: "images/bora-bora.jpg" },
    { name: "Maldives", img: "images/maldives.jpg" }
  ],
  temple: [
    { name: "Angkor Wat", img: "images/angkor-wat.jpg" },
    { name: "Golden Temple", img: "images/golden-temple.jpg" }
  ],
  country: [
    { name: "Japan", img: "images/japan.jpg" },
    { name: "Italy", img: "images/italy.jpg" }
  ]
};

function showRecommendations(type) {
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

// Event listeners
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();

  if (query.includes("beach")) {
    showRecommendations("beach");
  } else if (query.includes("temple")) {
    showRecommendations("temple");
  } else if (query.includes("country")) {
    showRecommendations("country");
  } else {
    recommendationSection.textContent = "Try searching for 'beach', 'temple', or 'country'.";
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  recommendationSection.innerHTML = "";
});
