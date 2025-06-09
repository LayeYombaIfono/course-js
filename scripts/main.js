// Fonction flècher
const handleResponse = (response) => {
  return response.json();
};

const handleData = (data) => {
  let tableLines = "";
  for (let i = 0; i < data.length; i++) {
    const user = data[i];

    let tableLine = `
      <tr>
        <td>${user.id} </td>
        <td>${user.name} </td>
        <td>${user.phone} </td>
        <td>${user.email} </td>
        <td>${user.address.city} </td>
        <td>
          <button class ="btn btn-primary">Voir</button>
           <button class ="btn btn-warning">Modifier</button>
            <button class ="btn btn-danger">Supprimer</button>
        </td>
      </tr>
    `;

    tableLines = `${tableLines} ${tableLine}`;

    document.getElementById("table-body").innerHTML = tableLines;

    console.log(user);
  }

  return data;
};

function fetchUsers() {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => handleResponse(response))
      .then((data) => handleData(data));
  } catch (error) {
    console.log(error);
  }
}

const handleUserData = (users) => {
  const userData = users.map(
    (user) =>
      `
      <div class="col-sm-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> ${user.name}</h5>
            <p class="card-text">Téléphone : ${user.phone}</p>
            <p class="card-text">Email : ${user.email}</p>
            <p class="card-text"> Ville :  ${user.address.city}</p>
          </div>
          </div>
        </div>
        `
  );
  document.getElementById("row-users").innerHTML = userData.join("");

  // for (let i = 0; i < users.length; i++) {
  //   const user = users[i];

  //   let userCard = `
  //     <div class="col-sm-6 mb-3">
  //       <div class="card">
  //         <div class="card-body">
  //           <h5 class="card-title"> ${user.name}</h5>
  //           <p class="card-text">Téléphone : ${user.phone}</p>
  //           <p class="card-text">Email : ${user.email}</p>
  //           <p class="card-text"> Ville :  ${user.address.city}</p>
  //         </div>
  //         </div>
  //       </div>
  //       `;

  //   card = `${card} ${userCard}`;
  //   console.log((card = `${card} ${userCard}`));

  //   document.getElementById("row-users").innerHTML = card;
  // }
};

const handleUsers = () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => handleResponse(response))
      .then((data) => handleUserData(data));
  } catch (error) {
    console.log(error);
  }
};

// Fonction de recherche
const search = (user) => {
  const getInpuSearch = document.getElementById("search");
  let valueFilter = getInpuSearch.value;
  filter((u) => {
    const name = u.name;
    return name.toLowercase().indexOf(valueFilter.toLowercase()) > -1;
  });
  user.map(
    (user) =>
      `
      <div class="col-sm-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> ${user.name}</h5>
            <p class="card-text">Téléphone : ${user.phone}</p>
            <p class="card-text">Email : ${user.email}</p>
            <p class="card-text"> Ville :  ${user.address.city}</p>
          </div>
          </div>
        </div>
        `
  );
};
