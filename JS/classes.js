class Ator
{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor
{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.cartaz = cartaz;
        this.sinopse = sinopse;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;

    }
    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes= () => {
        return this.btnDetalhes;
    }

    getCard = () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-title");
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    
    }

    getDetalhes = () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");
        let cardBody = document.createElement("div");
        cardBody.setAttribute("style","padding:0 10px 0 10px;");
        let titulo = document.createElement("h2");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let sinopse = document.createElement("div");
        sinopse.setAttribute("style","flex-grow:1;");
        sinopse.setAttribute("style","padding:10px 0 15px 0;");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        let divAvaliacao = document.createElement("div");
        divAvaliacao.setAttribute("style", "flex-grow:1;");
        let divGeneros = document.createElement("div");
        let divDirecao = document.createElement("div");
        let divElenco = document.createElement("div");



        titulo.appendChild(document.createTextNode(this.titulo));
        sinopse.appendChild(document.createTextNode(this.sinopse));
        divDuracao.appendChild(document.createTextNode("Duration: "+this.duracao));
        divClassificacao.appendChild(document.createTextNode("Rated: "+this.classificacao));
        divAvaliacao.appendChild(document.createTextNode("Rating: "+this.avaliacao));
        divGeneros.appendChild(document.createTextNode("Genres: "+this.genero));
        divDirecao.appendChild(document.createTextNode("Director: "+this.direcao));
        divElenco.appendChild(document.createTextNode("Cast: "+this.elenco));

        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divClassificacao);
        divDetalhes.appendChild(divAvaliacao);

        cardHeader.appendChild(titulo);

        cardBody.appendChild(sinopse);
        cardBody.appendChild(divDetalhes);
        cardBody.appendChild(divGeneros);
        cardBody.appendChild(divDirecao);
        cardBody.appendChild(divElenco);
        
        card.appendChild(cardHeader);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);

        return card;

    }
}