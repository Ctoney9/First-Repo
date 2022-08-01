const btn = document.getElementById("mySupportBtn");
const leftSideDiv = document.querySelector(".left-side");

btn.addEventListener("click", () => {
  if (leftSideDiv.style.backgroundColor === "red") {
    return (leftSideDiv.style.backgroundColor = "#68cfff");
  }

  return (leftSideDiv.style.backgroundColor = "red");
});
