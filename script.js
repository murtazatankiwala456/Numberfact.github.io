const input = document.querySelector("#input");
const fact = document.querySelector("#fact");
const text = document.querySelector("#para");
const audio = document.querySelector("#beep");

input.addEventListener("input", getFetch);

function getFetch() {
  let inputValue = input.value; // fetching input value from box
  fetch(`http://numbersapi.com/${inputValue}`) //call API and set input value to endpoint
    .then((response) => response.text()) //returning data in text form
    .then((data) => {
      //redirecting data if box is not empty and set fact box display none to block as well as fetch data in paragraph text
      if (inputValue != "") {
        fact.style.display = "block";
        para.innerText = data;
        audio.play();
      } else {
        //if input box is emoty again set display to none
        fact.style.display = "none";
      }
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
  }

