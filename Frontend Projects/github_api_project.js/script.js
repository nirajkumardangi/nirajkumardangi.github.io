const searchBox = document.querySelector("#searchbox");
const searchBtn = document.querySelector('#searchBtn');
const errorId = document.querySelector('#errorId');

const card = document.querySelector("#main");

const avatar = document.querySelector("#avatar");
const username = document.querySelector("#name");
const loginId = document.querySelector("#loginId");
const bio = document.querySelector("#bio");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const mail = document.querySelector("#mail");
const address = document.querySelector("#location");
const profileLink = document.querySelector("#profileLink");

var userId;
searchBtn.addEventListener("click", () => {
    userId = searchBox.value;
    displayCard()
});


async function getResponse() {
    const URL = `https://api.github.com/users/${userId}`;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        if (Object.keys(jsonData).length === 0) {
            throw new Error("Empty response from the server");
        }
        return jsonData;
    } catch (error) {
        errorId.textContent = error.message;
        card.style.display = "none";
    }
}

function displayCard() {
    getResponse()
        .then((data) => {
            avatar.src = data.avatar_url;
            username.innerText = data.name;
            loginId.innerText = data.login;
            bio.innerText = data.bio || "No bio available";
            followers.innerText = `${data.followers} followers`;
            following.innerText = `${data.following} following`;
            mail.innerHTML = `&#9993 ${data.email || "Email not provided"}`;
            address.innerHTML = `&#128205; ${data.location || "Location not provided"}`;
            profileLink.href = data.html_url;

            card.style.display = "block";
        })
}