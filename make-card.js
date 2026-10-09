import { projects } from './projects.js';
import { projectCarousel } from './carousel.js';

export function card() {
    const projectContainer = document.getElementById("project-container");

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i]
        
        let projectCard = document.createElement("div");
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <div class="project-image">
                <div class="frame"></div>
                <img src="${project.image}" title="${project.attribution}">
            </div>
            <div class="project-info">
                <div class="project-title titles">
                    ${project.title}
                </div>
                <div class="tool-container"></div>
                <div class="project-summary">
                    ${project.summary}
                </div>
            </div>
        `;

        const toolContainer = projectCard.querySelector(".tool-container");
        
        for (let tool of project.tool) {
            let projectTool = document.createElement("span");
            projectTool.className = "project-tools";

            projectTool.textContent = tool;

            toolContainer.appendChild(projectTool);
        }

        projectContainer.appendChild(projectCard);

    }

    projectCarousel();

}

card();