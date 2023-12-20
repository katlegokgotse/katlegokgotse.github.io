const projects = [
    {
        name: "Brilliant Books",
        description: "Pork belly Carles Wes Anderson semiotics, Thundercats Truffaut iPhone chambray blog normcore direct trade Pinterest gentrify. Pinterest gentrify fanny pack Truffaut, bitters brunch hella kogi craft beer readymade. Synth whatever trust fund Marfa before they sold out, chillwave lomo. Bespoke polaroid Williamsburg, jean shorts literally Etsy Banksy Intelligentsia. Organic Brooklyn shabby chic ennui semiotics, brunch Tumblr mustache Helvetica PBR&B. Literally fanny pack scenester sartorial selfies post-ironic flexitarian tattooed, pork belly hashtag Vice fingerstache squid hella.",
        url: "",
        imageUrl:"./../assets/images/bookstore.webp",
        publisher: "Katlego Kgotse"
    },
    {
        name: "Trinity Sites",
        description: "Pork belly Carles Wes Anderson semiotics, Thundercats Truffaut iPhone chambray blog normcore direct trade Pinterest gentrify. Pinterest gentrify fanny pack Truffaut, bitters brunch hella kogi craft beer readymade. Synth whatever trust fund Marfa before they sold out, chillwave lomo. Bespoke polaroid Williamsburg, jean shorts literally Etsy Banksy Intelligentsia. Organic Brooklyn shabby chic ennui semiotics, brunch Tumblr mustache Helvetica PBR&B. Literally fanny pack scenester sartorial selfies post-ironic flexitarian tattooed, pork belly hashtag Vice fingerstache squid hella.",
        url: "https://trinity-sites.vercel.app/",
        imageUrl: "./../assets/images/trinity.webp",
        publisher: "Katlego Kgotse"
    },
    {
        name: "Student study planner",
        description: "Pork belly Carles Wes Anderson semiotics, Thundercats Truffaut iPhone chambray blog normcore direct trade Pinterest gentrify. Pinterest gentrify fanny pack Truffaut, bitters brunch hella kogi craft beer readymade. Synth whatever trust fund Marfa before they sold out, chillwave lomo. Bespoke polaroid Williamsburg, jean shorts literally Etsy Banksy Intelligentsia. Organic Brooklyn shabby chic ennui semiotics, brunch Tumblr mustache Helvetica PBR&B. Literally fanny pack scenester sartorial selfies post-ironic flexitarian tattooed, pork belly hashtag Vice fingerstache squid hella.",
        url: "https://github.com/katlegokgotse/student-study-planner/",
        imageUrl: "./../assets/images/trinity.webp",
        publisher: "Katlego Kgotse"
    },
]

const projectsLists = document.querySelector(".projects-list");
projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.className = "project";
        const imageElement = document.createElement("img");
        imageElement.src = project.imageUrl;
        imageElement.alt = "Project Image";
       ;
        const projectDetailsElement = document.createElement("div");
        projectDetailsElement.className = "project-details";

        const projectNameElement = document.createElement("div");
        projectNameElement.className = "project-name";
        projectNameElement.textContent = project.name;

        const projectDescriptionElement = document.createElement("div");
        projectDescriptionElement.className ="project-description";
        projectDescriptionElement.textContent = project.description;

        const projectPublisherElement = document.createElement("div");
        projectPublisherElement.className = "project-publisher";
        projectPublisherElement.textContent = `By ${project.publisher}`;

        const projectLaunchLink = document.createElement("a");
        projectLaunchLink.className = "project-hyperlink";
        projectLaunchLink.text = project.name;
        projectLaunchLink.href = project.url;

        const projectShowDescription = document.createElement("a");
        projectShowDescription.className = "project-display";
        projectShowDescription.textContent = `See Description`;
        projectShowDescription.href = project.url;

        projectElement.appendChild(imageElement);
        projectDetailsElement.appendChild(projectNameElement);
        projectDetailsElement.appendChild(projectShowDescription);
        projectDetailsElement.appendChild(projectDescriptionElement);
        projectDetailsElement.appendChild(projectPublisherElement);
        projectElement.appendChild(projectDetailsElement);
        projectElement.appendChild(projectLaunchLink);
        projectsLists.appendChild(projectElement);
    });
