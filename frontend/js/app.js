const listaEstudos = document.getElementById("lista-estudos");

fetch("/estudos")
.then(response => response.json())
.then(estudos => {

listaEstudos.innerHTML = "";

estudos.forEach(estudo => {

const artigo = document.createElement("article");

artigo.classList.add("estudo");

artigo.innerHTML = `
<h3>${estudo.titulo}</h3>
<p>${estudo.descricao}</p>
<p><strong>Data:</strong> ${estudo.data}</p>
<p><strong>Status:</strong> ${estudo.status}</p>
`;

listaEstudos.appendChild(artigo);
});

});
