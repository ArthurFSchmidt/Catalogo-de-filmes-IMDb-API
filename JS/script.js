let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let navFavoritos = document.querySelector("#nav-favoritos");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=57fd27e0&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);

            });
            listarFilmes(filmes);

        })
    }
    return false;
}

let listarFilmes = (filmes) => {
    let mostrarFilme = document.querySelector("#mostrar-filme");
    mostrarFilme.innerHTML = "";
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    listaFilmes.style.display = "flex";
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(filme.getCard(0));
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = (id) => {
    fetch("https://www.omdbapi.com/?apikey=57fd27e0&plot=full&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre,
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors,
            resp.Rated,
            resp.imdbRating
        );
        let mostrarFilme = document.querySelector("#mostrar-filme");
        mostrarFilme.appendChild(filme.getDetalhes());

        filme.getBtnSalvar().onclick=()=>{
            if(localStorage.getItem("filmesSalvos") == null)
            {
                let listaFilmesSalvos = new Array();
                listaFilmesSalvos.push(filme);
                localStorage.setItem("filmesSalvos",JSON.stringify(listaFilmesSalvos));
            }else{
                let listaFilmesSalvos = new Array();
                listaFilmesSalvos = JSON.parse(localStorage.getItem("filmesSalvos"));
                listaFilmesSalvos.push(filme);
                localStorage.setItem("filmesSalvos",JSON.stringify(listaFilmesSalvos));
            }
        }
        
        ocultarFilmes();
    })
    

}

let ocultarFilmes = () => {
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.style.display = "none";
}

navFavoritos.onclick = () => {
    listarFavoritos();
}

let listarFavoritos = () => {
    let mostrarFilme = document.querySelector("#mostrar-filme");
    mostrarFilme.innerHTML = "";
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    listaFilmes.style.display = "flex";

    let listaFilmesSalvos = JSON.parse(localStorage.getItem("filmesSalvos"));
    let filmes = new Array();
    listaFilmesSalvos.forEach((item) =>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.sinopse,
            item.diretor,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    });

    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(filme.getCard(1));
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
            filme.getBtnExcluir().onclick=()=>{
                excluirFilme(filme.id);
            }
        });
    }
}

let excluirFilme = (filmeId) => {

    let listaFilmesSalvos = JSON.parse(localStorage.getItem("filmesSalvos"));
    const idTest = (element) => element.id == filmeId;
    let excluido = listaFilmesSalvos.findIndex(idTest);
    listaFilmesSalvos.splice(excluido, 1);
    localStorage.setItem("filmesSalvos",JSON.stringify(listaFilmesSalvos));

    listarFavoritos();
}

// Teste -----------------------------------------------------------------------

let filmes = new Array();
fetch("https://www.omdbapi.com/?apikey=57fd27e0&s="+"puss")
.then((resp)=> resp.json())
.then((resp)=>{
    resp.Search.forEach((item)=>{
        let filme = new Filme(
            item.imdbID,
            item.Title,
            item.Year,
            null,
            null,
            item.Poster,
            null,
            null,
            null,
            null,
            null
        );
        filmes.push(filme);

    });
    listarFilmes(filmes);

})