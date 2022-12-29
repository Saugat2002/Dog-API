const dogImageDiv = document.getElementById("dogImage");
const getNewDogDiv = document.getElementById("getNewDog");

const fetchDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src=${json.message} alt="DogImage" height="400">`;
    });
};

getNewDogDiv.onclick = () => {
    fetchDog();
};
