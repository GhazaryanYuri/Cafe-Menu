const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const menuTitle = document.getElementById("menuTitle");
const pageLocalData = localStorage.getItem("horecaData");
const pageURLIndex = localStorage.getItem("cafeIdIndex");
const pageLang = localStorage.getItem("language");

// ---------------------------------------------------------

const backPreviousPageBtn = document.querySelectorAll(".backPreviousPage");

backPreviousPageBtn.forEach((btnLink) => {
  btnLink.setAttribute("href", `http://23.20.175.90/api/${pageURLIndex}`);
});

// ---------------------------------------------------------

searchBtn.addEventListener("click", () => {
  if (searchBar.className === "disabled-searchbar") {
    searchBar.className = "enabled-searchbar";
    menuTitle.className = "title-off";
  } else {
    menuTitle.className = "title-on";
    searchBar.className = "disabled-searchbar";
  }
});

// ------------------------------------------------------------

const menuLinks = document.querySelectorAll(".link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.remove("active");
    }

    link.classList.add("active");
  });
});

// ----------------------------------------------------------------------

const Food_API_Link = "http://23.20.175.90/api/api/menu-filter/by-kind/food/";
const foodCont = document.getElementById("foodCont");

async function foodCategories(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      foodCont.innerHTML += `<div class="item" id=${data[i].id}>
                              <div class="likeBtn">
                                <img src="../static/icons/liked.svg" alt="liked" />
                              </div>
                              <img
                                src="${data[i].image_src}"
                                alt="meal"
                                class="item-img"
                              />
                              <div class="info">
                                <p class="name">${data[i].name}</p>
                                <p class="price">AMD${data[i].price}</p>
                              </div>
                            </div>`;
    }
  } catch (error) {
    console.log("Error fetchind api", error);
  }
}

foodCategories(Food_API_Link + pageLang + `?horekaclient_id=${pageURLIndex}`);

foodCont.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (!item) return;

  const name = item.querySelector(".name").textContent;
  const price = item.querySelector(".price").textContent;
  const imgURL = item.querySelector(".item-img").src;
  const itemID = item.id;

  const mealInfo = {
    name,
    price,
    imgURL,
    itemID,
  };

  localStorage.setItem("selectedMeal", JSON.stringify(mealInfo));

  // Test Link
  // window.location.href = "../pages/about-meal.html";

  // Real Link
  window.location.href = "http://23.20.175.90/api/cafe/menu/get-about-meal";
});

// ------------------------------------------------------------

const Salad_API_Link = "http://23.20.175.90/api/api/menu-filter/by-kind/salad/";
const saladCont = document.getElementById("saladCont");

async function saladCategories(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      saladCont.innerHTML += `<div class="item" id=${data[i].id}>
                              <div class="likeBtn">
                                <img src="../static/icons/liked.svg" alt="liked" />
                              </div>
                              <div class="item-img">
                                <img
                                  src="${data[i].image_src}"
                                  alt="meal"
                                />
                              </div>  
                              <div class="info">
                                <p class="name">${data[i].name}</p>
                                <p class="price">AMD${data[i].price}</p>
                              </div>
                            </div>`;
    }
  } catch (error) {
    console.log("Error fetchind api", error);
  }
}

saladCategories(Salad_API_Link + pageLang + `?horekaclient_id=${pageURLIndex}`);

saladCont.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (!item) return;

  const name = item.querySelector(".name").textContent;
  const price = item.querySelector(".price").textContent;
  const imgURL = item.querySelector(".item-img").src;
  const itemID = item.id;

  const mealInfo = {
    name,
    price,
    imgURL,
    itemID,
  };

  localStorage.setItem("selectedMeal", JSON.stringify(mealInfo));
  console.log(Salad_API_Link + pageLang + `?horekaclient_id=${pageURLIndex}`);
  console.log(JSON.parse(localStorage.getItem("selectedMeal")));

  // Test Link
  // window.location.href = "../pages/about-meal.html";

  // Real Link
  window.location.href = "http://23.20.175.90/api/cafe/menu/get-about-meal";
});

// ------------------------------------------------------------

const Drink_API_Link = "http://23.20.175.90/api/api/menu-filter/by-kind/drink/";
const drinkCont = document.getElementById("drinkCont");

async function drinkCategories(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      drinkCont.innerHTML += `<div class="item" id=${data[i].id}>
                              <div class="likeBtn">
                                <img src="../static/icons/liked.svg" alt="liked" />
                              </div>
                              <img
                                src="${data[i].image_src}"
                                alt="meal"
                                class="item-img"
                              />
                              <div class="info">
                                <p class="name">${data[i].name}</p>
                                <p class="price">AMD${data[i].price}</p>
                              </div>
                            </div>`;
    }
  } catch (error) {
    console.log("Error fetchind api", error);
  }
}

drinkCategories(Drink_API_Link + pageLang + `?horekaclient_id=${pageURLIndex}`);

drinkCont.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (!item) return;

  const name = item.querySelector(".name").textContent;
  const price = item.querySelector(".price").textContent;
  const imgURL = item.querySelector(".item-img").src;
  const itemID = item.id;

  const mealInfo = {
    name,
    price,
    imgURL,
    itemID,
  };

  localStorage.setItem("selectedMeal", JSON.stringify(mealInfo));

  // Test Link
  // window.location.href = "../pages/about-meal.html";

  // Real Link
  window.location.href = "http://23.20.175.90/api/cafe/menu/get-about-meal";
});

// ------------------------------------------------------------

const Dessert_API_Link =
  "http://23.20.175.90/api/api/menu-filter/by-kind/desert/";
const dessertCont = document.getElementById("dessertCont");

async function dessertCategories(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      dessertCont.innerHTML += `<div class="item" id=${data[i].id}>
                              <div class="likeBtn">
                                <img src="../static/icons/liked.svg" alt="liked" />
                              </div>
                              <img
                                src="${data[i].image_src}"
                                alt="meal"
                                class="item-img"
                              />
                              <div class="info">
                                <p class="name">${data[i].name}</p>
                                <p class="price">AMD${data[i].price}</p>
                              </div>
                            </div>`;
    }
  } catch (error) {
    console.log("Error fetchind api", error);
  }
}

dessertCategories(
  Dessert_API_Link + pageLang + `?horekaclient_id=${pageURLIndex}`
);

dessertCont.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (!item) return;

  const name = item.querySelector(".name").textContent;
  const price = item.querySelector(".price").textContent;
  const imgURL = item.querySelector(".item-img").src;
  const itemID = item.id;

  const mealInfo = {
    name,
    price,
    imgURL,
    itemID,
  };

  localStorage.setItem("selectedMeal", JSON.stringify(mealInfo));

  // Test Link
  // window.location.href = "../pages/about-meal.html";

  // Real Link
  window.location.href = "http://23.20.175.90/api/cafe/menu/get-about-meal";
});

// -------------------------------------------------------------------------
