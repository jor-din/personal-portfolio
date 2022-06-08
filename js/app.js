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