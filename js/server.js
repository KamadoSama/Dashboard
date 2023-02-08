const data = {};
// récupération des données du formulaire
document.querySelector("#login").addEventListener("submit", (event) => {
  event.preventDefault();
  // récupération de tous les champs de formulaire
  const fields = event.target.elements;

  for (let field of fields) {
    if (field.name) {
      data[field.name] = field.value;
      console.log(field.value);
    }
  }

  console.log(data);
  fetch("http://localhost:3000/authen/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      // affichage d'un message de réussite
      alert("user connecté !");
      window.location.replace("../html/dashboard.html")
    } else {
      // affichage d'un message d'erreur
      alert("Erreur lors de la conexion du l'utilisateur ");
    }
  });
});
