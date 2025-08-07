// Show popup on clicking enroll button
document.getElementById('enrollBtn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'flex';
});

// Close popup on clicking close button
document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

// Optional: close popup if clicking outside popup-content
document.getElementById('popup').addEventListener('click', (e) => {
  if (e.target === document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
  }
});
