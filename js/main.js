document.getElementById("toggleGallery").addEventListener("click", function() {
  const gallerySection = document.getElementById("artGallerySection");
  if (gallerySection.classList.contains("hidden")) {
      gallerySection.classList.remove("hidden");
      this.textContent = "Hide Gallery";
  } else {
      gallerySection.classList.add("hidden");
      this.textContent = "Show Gallery";
  }
});
