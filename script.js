let requestURL = "https://api.imgflip.com/get_memes";

function displayMeme(data) {
    let memeObject = data.data.memes[randInt(data.data.memes.length)];

    let imgContainer = document.querySelector("img");
    imgContainer.src = memeObject.url;

    let caption = document.querySelector("p");
    caption.innerHTML = memeObject.name; 
}

function randInt(upperLimit) {
    return Math.floor(Math.random()*upperLimit);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(displayMeme)

    .catch(function (error) {
        console.log("Error during fetch:", error);
    });