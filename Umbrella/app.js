var listOfColors = ["Pink", "Blue", "Yello"];
var selectedColor = "Blue";
const container = document.querySelector(".container");
const umbrella = document.querySelector("#umbrella");
let fileInput = document.querySelector("#file-input");
const uploadImg = document.querySelector("#upload-img");
const uploadContainer = document.querySelector("#upload-container");
const label = document.querySelector("label");
const imagePreviewElement = document.querySelector("#preview-selected-image");
let numOfFiles = document.querySelector("#num-of-files");
const labelText = document.querySelector('label[for="file-input"]');
const img = document.querySelector("#upload-img");

function changeColor(value) {
  selectedColor = value;

  if (fileInput.files.length !== 0) {
    updateColor();
    handleFileInputChange();
  } else {
    updateColor();
  }
}

function updateColor() {
  const containerClassList = container.classList;
  const fileInputClassList = fileInput.classList;
  const uploadContainerClassList = uploadContainer.classList;

  if (selectedColor) {
    listOfColors.forEach((color) => {
      containerClassList.toggle(color, color === selectedColor);
      fileInputClassList.toggle(color.toLowerCase(), color === selectedColor);
    });

    uploadContainerClassList.value = "";
    containerClassList.add(selectedColor);
    fileInputClassList.add(selectedColor.toLowerCase());
    uploadContainerClassList.add(selectedColor.toLowerCase());
    if (fileInput.files.length === 0) {
      setUmbrella();
    }
  }
}

function setUmbrella() {
  umbrella.src = `/Umbrella/images/${selectedColor} umbrella.png`;
}

fileInput.addEventListener("change", handleFileInputChange);

function handleFileInputChange() {
  uploadImg.src = "/Umbrella/images/loader_icon.svg";
  uploadImg.classList.add("rotate");

  const fileName = fileInput.files[0].name;
  labelText.childNodes[2].textContent = fileName;

  umbrella.src = "/Umbrella/images/loader_icon.svg";
  imagePreviewElement.src = "";
  umbrella.classList.add("rotate");

  const imageSrc = URL.createObjectURL(fileInput.files[0]);
  setTimeout(() => {
    umbrella.src = `/Umbrella/images/${selectedColor} umbrella.png`;
    umbrella.classList.remove("rotate");
    imagePreviewElement.src = imageSrc;
    imagePreviewElement.style.display = "block";
    uploadImg.src = "/Umbrella/images/upload_icon.svg";
    updateColor();
  }, 3000);
  fileInput.removeEventListener("change", handleFileInputChange);
}
