let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = async () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=57fd27e0&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                console.log(item);
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
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log(filme.getCard());
            listaFilmes.appendChild(filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = (id) => {
    fetch("http://www.omdbapi.com/?apikey=57fd27e0&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        console.log(resp);
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
        console.log(filme.getDetalhes());
        mostrarFilme.appendChild(filme.getDetalhes());
        
        ocultarFilmes();
    })
    

}

let ocultarFilmes = () => {
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.style.display = "none";
}