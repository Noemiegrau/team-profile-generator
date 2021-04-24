// Generates intern card
function generateIntern(templateData, intern) {
  if (!intern) {
    return '';
  } else if (intern) {
    for (i = 0; i < 1; i++) {
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body identity">
            <h5 class="card-title">${templateData.name}</h5>
            <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
              </svg>  Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${templateData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${templateData.email}</a></li>
            <li class="list-group-item">School: ${templateData.school}</li>
        </ul>
    </div>
</div>`
}
}
};

// Generates engineer card
function generateEngineer(templateData, engineer) {
  if (!engineer) {
    return '';
  } else if (engineer) {
    for (i = 0; i < 1; i++) {
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body identity">
            <h5 class="card-title">${templateData.name}</h5>
            <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
              </svg>  Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${templateData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${templateData.email}</a></li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${templateData.github}">${templateData.github}</a></li>
        </ul>
    </div>
</div>`
}
}
};

// Generates HTML Page
module.exports = templateData => {
  return ` 
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" type="text/css" href="./src/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container my-5">

        <div class="row">

            <div class="col">
                <div class="card shadow-lg" style="width: 18rem;">
                    <div class="card-body identity">
                        <h5 class="card-title">${templateData.name}</h5>
                        <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                                <path
                                    d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
                            </svg> Manager</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${templateData.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:">${templateData.email}</a></li>
                        <li class="list-group-item">Office number: ${templateData.officeNumber}</li>
                    </ul>
                </div>
            </div>

            ${generateEngineer()}

            ${generateIntern()}

        </div>

    </main>
</body>

</html>
    `;
  };
  