import { projects } from './projects.js';

export function card() {
    const projectContainer = document.getElementById("project-container");

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i]
        
        let projectCard = document.createElement("div");
        projectCard.className = "project-info";

        projectCard.innerHTML = `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" title="${project.attribution}" style="width: 50px; height:50px">
                </div>
                <div class="project-title">
                    ${project.title}
                </div>
                <div class="project-summary">
                    ${project.summary}
                </div>
            </div>
            <div class="project-explanation">
                ${project.explanation}
            </div>
        `;

        projectContainer.appendChild(projectCard);

    }
}

card();