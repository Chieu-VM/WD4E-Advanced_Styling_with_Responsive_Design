function upDate(previewPic) {
  console.log("Image focused or hovered");

  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";

  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  console.log("Mouse left or image lost focus");

  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over or focus on an image below to display details here.";
}

function addTabFocus() {
  console.log("Page loaded. Adding tabindex to figures.");

  const figures = document.querySelectorAll("figure");

  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}
