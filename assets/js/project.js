let dataProject = [];

function addProject(event) {
  event.preventDefault();

  let inputProject = document.getElementById("input-project").value;
  let inputStartDate = document.getElementById("input-start-date").value;
  let inputEndDate = document.getElementById("input-end-date").value;
  let inputDescription = document.getElementById("input-description").value;
  let inputImage = document.getElementById("input-image").files;

  inputImage = URL.createObjectURL(inputImage[0]);

  let project = {
    name: inputProject,
    startDate: inputStartDate,
    endDate: inputEndDate,
    description: inputDescription,
    image: inputImage,
  };

  dataProject.push(project);
  console.log("data array:", dataProject);
  renderProject();
}

function renderProject() {
  document.getElementById("content").innerHTML = "";

  for (let i = 0; i < dataProject.length; i++) {
    document.getElementById("content").innerHTML += `
    <div class="content-container">
          <div>
            <img class="content-img" src="${dataProject[i].image}" alt="image upload" />
          </div>
          <div class="title-container">
            <p class="content-title">${dataProject[i].name}</p>
            <p class="content-date">Durasi : 3 bulan</p>
          </div>
          <div>
            <p class="content-description">${dataProject[i].description}</p>
          </div>
          <div class="content-tech-container">
            <img class="content-tech" src="assets/img/nodejs.png" alt="NodeJS" />
            <img class="content-tech" src="assets/img/nextjs.png" alt="NextJS" />
            <img class="content-tech" src="assets/img/reactjs.png" alt="ReactJS" />
            <img class="content-tech" src="assets/img/typescript.png" alt="TypeScript" />
          </div>
          <div class="btn-container">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
          </div>
        </div>`;
  }
}
