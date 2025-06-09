const handleResponse = (res) => {
  return res.json();
};

const handleData = (profils) => {
  console.log(profils);

  profils = profils.map(({ title, body }) => {
    return `
      <div class="col-sm-6 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${body}</p>
        <a href="#" class="btn btn-info">Voir plus</a>
      </div>
    </div>
  </div>
        `;
  });

  const row = document.getElementById("row");
  row.innerHTML = profils.join("");
};

const getAllImages = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  try {
    fetch(URL)
      .then((res) => handleResponse(res))
      .then((profils) => handleData(profils));
  } catch (error) {
    console.log("Erreur lors du chargement des donées");
  }
};
