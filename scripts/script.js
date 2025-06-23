function openImageModal(src) {
  const modal = document.getElementById('imageModal');
  const img = document.getElementById('modalImage');
  img.src = src;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

document.addEventListener("click", function (e) {
  const modal = document.getElementById("imageModal");
  if (e.target === modal) closeImageModal();
});
