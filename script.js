function showRecommendation(type) {
  const rec = document.getElementById('recommendation');
  let content = '';

  if (type === 'beach') {
    content = `
      <h3>Top Beaches</h3>
      <img src="images/amalfi.jpg" alt="Beach 1" />
      <img src="images/maldives.jpg" alt="Beach 2" />
      <p>Enjoy serene coastlines and turquoise waters.</p>
    `;
  } else if (type === 'temple') {
    content = `
      <h3>Famous Temples</h3>
      <img src="images/italy.jpg" alt="Temple 1" />
      <img src="images/italy.jpg" alt="Temple 2" />
      <p>Discover ancient architecture and spiritual sites.</p>
    `;
  } else if (type === 'country') {
    content = `
      <h3>Explore Japan</h3>
      <img src="images/japan.jpg" alt="Japan 1" />
      <img src="images/beach.jpg" alt="Japan 2" />
      <p>From cherry blossoms to high-tech cities, Japan offers a mix of tradition and innovation.</p>
    `;
  }

  rec.innerHTML = content;
}