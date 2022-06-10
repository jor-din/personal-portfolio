import {projectData} from "./project-data.js"

const cardContainer = document.getElementById('card-container')


let projectMarkup = projectData.map(project =>
`
<div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" src="${project.image}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">'${project.title}'</h5>
        <p class="card-text">'${project.description}</p>
        <div>
            <a href="${project.github}" class="btn btn-primary">Github</a>
            <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
        </div>
    </div>
</div>
`
    ).join('')

cardContainer.innerHTML = projectMarkup

const topButton = document.getElementById('up-btn')
topButton.addEventListener("click", backToTop);

window.onscroll = function (){
    scrollFunction();
    scrollColor();
}

function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const hamburgerButton = document.getElementById('menu')
// const burgerBar = document.getElementsByClassName('bar')

hamburgerButton.addEventListener('click', toggleButton)

function toggleButton() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// function scrollColor() {
//     if (
//       document.body.scrollTop > 950 ||
//       document.documentElement.scrollTop > 950
//     ) {
//       burgerBar.style.backgroundColor = "#354d4d";
//     } else {
//       burgerBar.style.color = "#eadbcd";
//     }
// };
