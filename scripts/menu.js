const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const menuTitle = document.getElementById("menuTitle");

searchBtn.addEventListener("click", () => {
  if (searchBar.className === "disabled-searchbar") {
    searchBar.className = "enabled-searchbar";
    menuTitle.className = "title-off";
  } else {
    menuTitle.className = "title-on";
    searchBar.className = "disabled-searchbar";
  }
});
