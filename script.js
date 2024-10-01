// Modal functionality for all images with custom captions
function setupModal(imageId, customCaption) {
  const img = document.getElementById(imageId);
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = customCaption;  // Set custom caption
  }

  // Get the <span> element that closes the modal
  const closeModal = document.getElementsByClassName("close")[0];
  closeModal.onclick = function () {
    modal.style.display = "none";
  }
}

// Apply the modal to each image with custom captions
setupModal("ytImage", "YouTube Homepage Clone - A project to mimic YouTube's interface");
setupModal("bkImage1", "Bike Kitchen Website - Login Page");
setupModal("bkImage2", "Bike Kitchen Website - Dynamic Progress Bar");
setupModal("bkImage3", "Bike Kitchen Website - Interactive calendar to RSVP to voluneteer");
setupModal("parksImage1", "National Parks Website - Home page with interactive flipcards");
setupModal("parksImage2", "National Parks Website - Description and weather chart for Zion National Park");
setupModal("parksImage3", "National Parks Website - Featured hikes for Zion National Park");
