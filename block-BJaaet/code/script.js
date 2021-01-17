let inputFeild = document.getElementById("movie");

let ul = document.querySelector(".unordered");
let form = document.querySelector("form");

let movieArray = [];

function render() {
  ul.innerHTML = "";
  movieArray.forEach((movieName, index) => {
    let li = document.createElement("li");
    li.innerText = movieName;
    let crossIcon = document.createElement("button");
    crossIcon.innerText = "X";
    crossIcon.addEventListener("click", () => {
      movieArray.splice(index, 1);
      render();
    });
    li.append(crossIcon);
    ul.append(li);
    inputFeild.value = "";
  });
}
function inputHandler(e) {
  e.preventDefault();
  let inputVal = e.target.elements.movie.value;
  movieArray.push(inputVal);
  render();
  console.log(movieArray);
}

form.addEventListener("submit", inputHandler);
