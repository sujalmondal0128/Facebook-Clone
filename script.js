const searchicon = document.getElementById("searchicon");
const searchInput = document.getElementById("search");
const searchbar = document.querySelector(".searchbar");
const searchBoard = document.querySelector(".searchBoard");
const stories = document.querySelector(".content");
let thisStory = 0;
const Peopleyoumayknow = document.querySelector(".findfriends");
const contentfindfriends = document.querySelector(".contentfindfriends");

function setupHoverButtons(containerSelector) {
  const container = document.querySelector(containerSelector);
  const nextButton = container.querySelector(".next");
  const previousButton = container.querySelector(".previous");
  scrolling(containerSelector);
  container.addEventListener("mouseenter", () => {
    nextButton.style.opacity = "1";
    previousButton.style.opacity = "1";
  });

  container.addEventListener("mouseleave", () => {
    setTimeout(() => {
      nextButton.style.opacity = "0";
    }, 2000);
    setTimeout(() => {
      previousButton.style.opacity = "0";
    }, 2000);
  });
}

setupHoverButtons(".findfriends-container");
setupHoverButtons(".storiescontainer");

function scrolling(container) {
  const containerElement = document.querySelector(container);
  const nextButton = containerElement.querySelector(".next");
  const previousButton = containerElement.querySelector(".previous");

  nextButton.addEventListener("click", () => {
    if (container === ".findfriends-container") {
      contentfindfriends.scrollLeft += 300;
    } else if (container === ".storiescontainer") {
      stories.scrollLeft += 300;
    }
  });

  previousButton.addEventListener("click", () => {
    if (container === ".findfriends-container") {
      contentfindfriends.scrollLeft -= 300;
    } else if (container === ".storiescontainer") {
      stories.scrollLeft -= 300;
    }
  });
}

searchbar.addEventListener("click", () => {
  searchBoard.style.display = "inline-block";
});
const inputsearch = searchbar.querySelector("input");

document.addEventListener("click", (event) => {
  if (
    !searchbar.contains(event.target) &&
    !searchBoard.contains(event.target)
  ) {
    inputsearch.innerText = "";
    searchBoard.style.display = "none";
  }
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => showUsers(users));

function showUsers(users) {
  const ulSearch = document.createElement("ul");
  const searchcontainer = document.querySelector(".searchcontainer");
  for (let user of users) {
    const searchProfile = document.createElement("div");
    searchProfile.classList.add("searchProfile");
    const liSearch = document.createElement("li");
    liSearch.innerText = user.name;
    ulSearch.appendChild(liSearch);
  }
  searchcontainer.appendChild(ulSearch);
}

searchInput.oninput = filterSearch;

function filterSearch() {
  const liItems = document.querySelectorAll(".searchcontainer li");
  const searchContent = searchInput.value.toLowerCase();
  for (let li of liItems) {
    const searchInputList = li.innerText.toLowerCase();
    if (!searchInputList.includes(searchContent)) {
      li.setAttribute("hidden", true);
    } else {
      li.removeAttribute("hidden");
    }
  }
}

const users = [
  {
    name: "Beth",
    profile: "dp.jpg",
    story:
      "https://img.freepik.com/premium-photo/sand-beach-sea-waves_303714-363.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "Zayn",
    profile: "dp2.png",
    story:
      "https://img.freepik.com/free-photo/waterfall-cascada-de-texolo-xico-mexico_181624-20415.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "Harry",
    profile: "dp3.png",
    story:
      "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "Alice",
    profile: "dp4.jpeg",
    story:
      "https://img.freepik.com/free-photo/aerial-view-mountain-covered-fog-beautiful-pink-sky_181624-4676.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "David",
    profile: "dp5.jpg",
    story:
      "https://img.freepik.com/free-photo/lot-rock-formations-peninsula-near-ocean-during-daytime_181624-5287.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "Ben",
    profile: "dp6.jpg",
    story:
      "https://img.freepik.com/free-photo/vertical-shot-goat-herd-crossing-street-countryside_181624-3638.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "Joe",
    profile: "dp7.jpg",
    story:
      "https://img.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13668.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
  {
    name: "John",
    profile: "dp8.jpg",
    story:
      "https://img.freepik.com/free-photo/beautiful-vertical-shot-taj-mahal-building-agra-india-cloudy-sky_181624-16913.jpg?size=626&ext=jpg&ga=GA1.1.1834738657.1698000677&semt=sph",
  },
];
const storiesContainer = document.querySelector(".story");
let currentIndex = 0;

users.forEach((user, index) => {
  const stories = document.createElement("div");
  stories.classList.add("stories");

  const imagesInStory = document.createElement("img");
  imagesInStory.src = user.story;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  overlay.onclick = () => showFullView(user, index);

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundImage = `url(${user.profile})`;

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = user.name;

  overlay.appendChild(circle);
  overlay.appendChild(name);
  stories.appendChild(imagesInStory);
  stories.appendChild(overlay);
  storiesContainer.appendChild(stories);
});

const contact = [
  { name: "Beth Micheal", profile: "dp.jpg" },
  { name: "Zayn Robert", profile: "dp2.png" },
  { name: "Harry Andrew", profile: "dp3.png" },
  { name: "Alice Joseph", profile: "dp4.jpeg" },
  { name: "Emma David", profile: "dp5.jpg" },
  { name: "Ben Anthony", profile: "dp6.jpg" },
  { name: "Oliver Joe", profile: "dp7.jpg" },
  { name: "Billie Charles", profile: "dp8.jpg" },
  { name: "Max Benjamin", profile: "p17.avif" },
  { name: "Jonathan Blue", profile: "p18.avif" },
  { name: "Grace Theodre", profile: "p16.avif" },
  { name: "Charles John", profile: "p12.avif" },
  { name: "Sarah Alexander", profile: "p13.avif" },
  { name: "William Ron", profile: "p14.avif" },
];

const rightContent = document.querySelector(".right-content");

contact.forEach((user) => {
  const singleContact = document.createElement("div");
  singleContact.classList.add("single-contact");

  const circle = document.createElement("div");
  circle.classList.add("circlecontact");
  circle.style.backgroundImage = `url(${user.profile})`;

  const online = document.createElement("div");
  online.classList.add("online");

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = user.name;

  circle.appendChild(online);
  singleContact.appendChild(circle);
  singleContact.appendChild(name);
  rightContent.appendChild(singleContact);
});

const ImgOpen = document.querySelector(".storyOpen img");
function showFullView(user, index) {
  currentIndex = index;

  const StoryfullView = document.querySelector(".storyOpen");
  const CrossIcon = document.querySelector(".fa-times-circle");
  ImgOpen.src = user.story;

  StoryfullView.classList.add("active");

  CrossIcon.addEventListener("click", () => {
    StoryfullView.classList.remove("active");
  });
}

const previousStoryFullview = document.querySelector(".previousStory");
const nextStoryFullview = document.querySelector(".nextStory");

previousStoryFullview.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    ImgOpen.src = users[currentIndex].story;
  }
});

nextStoryFullview.addEventListener("click", () => {
  if (currentIndex < users.length - 1) {
    currentIndex++;
    ImgOpen.src = users[currentIndex].story;
  }
});

const cards = [
  { name: "Kelly Cai", profile: "p1.jpeg" },
  { name: "Hatty Ken", profile: "p2.jpeg" },
  { name: "Dox Zhe", profile: "p3.jpeg" },
  { name: "Tou Nikkie", profile: "p4.jpeg" },
  { name: "Morgan John", profile: "p5.jpeg" },
  { name: "You Sonk", profile: "p6.jpeg" },
  { name: "Natalia Dyer", profile: "p7.jpeg" },
  { name: "Conel Will", profile: "p8.jpeg" },
];

cards.forEach((card) => {
  const cardsPeople = document.createElement("div");
  cardsPeople.classList.add("cards");
  const imgdp = document.createElement("div");
  imgdp.classList.add("imgdp");
  const imgInCard = document.createElement("img");
  imgInCard.src = card.profile;

  imgdp.appendChild(imgInCard);

  const profilenameSpan = document.createElement("span");
  profilenameSpan.classList.add("profilename");
  profilenameSpan.innerHTML = card.name;

  const addfriend = document.createElement("div");
  addfriend.classList.add("addfriend");
  const iconAddFriend = document.createElement("i");
  iconAddFriend.classList.add("bx", "bx-child");

  const addFriendText = document.createElement("span");
  addFriendText.innerText = "Add Friend";

  addfriend.appendChild(iconAddFriend);
  addfriend.appendChild(addFriendText);

  cardsPeople.appendChild(imgdp);
  cardsPeople.appendChild(profilenameSpan);
  cardsPeople.appendChild(addfriend);
  Peopleyoumayknow.appendChild(cardsPeople);
});
