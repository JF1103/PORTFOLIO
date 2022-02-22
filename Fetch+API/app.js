const container = document.getElementById("characters");
btnGetData.addEventListener("click", getData);
const URL = "https://finalspaceapi.com/api/v0/character/";

// function getData() {
// fetch("https://finalspaceapi.com/api/character/")
//      .then ((res) => res.json())
//      .then((json) => console.log(json));
// }

async function getData() {
    const res = await fetch(URL);
    const data = await res.json();
    renderData(data);
    
}


function renderData(characters) {
    characters.forEach((char) => {
        const cardBody = document.createElement("div");
        cardBody.classList.add("card");
        cardBody.innerHTML = `
            <p>${char.name}</p>
            <img src="${char.img_url}" alt="${char.name}"/>
            <p>Status: ${char.status}</p>
            <p>Species: ${char.species}</p>
            
            `;
        container.appendChild(cardBody);
    });
}
