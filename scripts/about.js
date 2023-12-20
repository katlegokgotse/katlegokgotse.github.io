let age = 20
const name = "Katlego Kgotse"
let description = "string description = 'I long to be in the technology industry. Motivated by the fast paced nature of it all. Continuous learning and daily growth are what keeps me interested in this field. But what is of most interest to me is the ability to change people's lives one line of code at a time.  The heart to serve everyone around me is a vital characteristic of mine.'"
let stack = "string[] techstack = {'Java', 'C#', 'dotnet', 'Javascript', 'HTML', 'CSS', 'Microsoft Sql Server'}"

let about_container = document.querySelector(".about_me");
container.className = "about_text"

let firstName = document.createElement('p');
firstName.innerHTML = name;

let userAge = document.createElement('p');
userAge.innerHTML = age;

about_container.appendChild(firstName);
about_container.appendChild(userAge);

let tech = document.createElement('p');
tech.innerHTML =   `Tech stack: ${stack.join(', ')}`;
about_container.appendChild(tech);
