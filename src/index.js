console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    imgCont = document.getElementById("dog-image-container");
    for (image in json.message) {
        imgElement = document.createElement("img")
        imgElement.src = json.message[image]
        imgCont.appendChild(imgElement)
    }
});

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds

window.addEventListener('DOMContentLoaded', (event) => {
  filterBreeds()
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => { 
      breeds = json.message
      breedUl = document.getElementById("dog-breeds")
      for (breed in breeds) {
          breedLi = document.createElement("li")
          breedLi.innerHTML = breed
          breedLi.onclick = function(event){
	          event.target.style.color = 'red';
          }
          breedUl.appendChild(breedLi)
      }
  })
});
function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function filterBreeds() {
  document.querySelector("#breed-dropdown").addEventListener('change', (event) => {
    firstLetter = event.target.value
    console.log(firstLetter)
    removeChildren(document.getElementById("dog-breeds"))
    for (breed in breeds) {
      if (breed.startsWith(firstLetter)) {
        breedLi = document.createElement("li")
        breedLi.innerHTML = breed
        breedLi.onclick = function(event){
          event.target.style.color = 'red';
        }
        breedUl.appendChild(breedLi)
      }
    }
  })
}