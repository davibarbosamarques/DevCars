let listaCarros = [
    {
        "nome": "Drako GTE",
        "img": "img/drako-gte.webp",
        "descricao": "Chama-se Drako GTE, e embora à primeira vista pareça um superesportivo de dois lugares com um perfil baixo e largo com um aspecto agressivo, na realidade é um carro de quatro portas e quatro lugares. Segundo a marca, este modelo é o resultado de quase uma década de desenvolvimento de engenharia e design e para oferecer tal volume de potência utiliza quatro motores síncronos de imãs permanentes associados às suas próprias transmissões, uma por cada roda.",
        "preco": "$ 1,2 milhão"
    },
    {
        "nome": "De Tomaso P72",
        "img": "img/de-tomaso.webp",
        "descricao": "O nome P72 deriva do protótipo P70 que De Tomaso projetou para produzir com Carroll Shelby em 1964, mas que nunca foi concluído. O P70 foi nomeado assim pelo motor V8 de 7,0 litros que teria. O P72 recebe esse nome porque é a forma de homenagear esse design.",
        "preco": "$ 1,3 milhão"
    },
    {
        "nome": "Ferrari LaFerrari",
        "img": "img/ferrari-laferrari.webp",
        "descricao": "A LaFerrari (também conhecida pelo seu nome do projeto, F150) é um carro superesportivo coupé, duas portas, dois lugares, de motor central traseiro e tração traseira, produzido pela Ferrari.",
        "preco": "$ 1,4 milhões"
    },
    {
        "nome": "Pagani Huayra",
        "img": "img/pagani-huayra.webp",
        "descricao": "O Huayra tem um motor V12 central de 60º com 730 cv, concebido pela divisão AMG da Mercedes-Benz e assinado por um engenheiro da empresa. O Huayra é capaz de chegar aos 360 km/h.",
        "preco": "$ 5,4 milhões"
    },
    {
        "nome": "McLaren Elva",
        "img": "img/mclaren-elva.webp",
        "descricao": " O modelo traz um V8 4.0 de 815 cv que, em conspiração com os seus escassos 1.148 kg, permite fazer de 0 a 100 km/h em 2,8 segundos e 0 a 200 km/h em 6,8 segundos.",
        "preco": "$ 15 milhões"
    },
    {
        "nome": "Czinger 21C",
        "img": "img/czinger-21c.webp",
        "descricao": "Czinger Vehicles revelou no início de junho do ano passado as especificações do seu inovador hipercarro, o denominado Czinger 21C. Haverá apenas 80 unidades e todas são projetadas e construídas em suas instalações de Los Angeles. Agora a marca vai um passo além com o Czinger 21C V Max, uma versão de cauda longa do modelo standard.",
        "preco": "$ 1,7 milhões"
    }
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards")
    cardCarro.innerHTML += `
            <div class="col-md-4">
                <div class="card m-4">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <hr>
                      <div class="row footer-card">
                        <div class="preco col-6">
                        <h5>${carro.preco}</h5>
                        </div>
                        <div class="col-6 d-flex justify-content-end pe-2">
                        <a href="#" class="btn btn-secondary" onclick="zoomimg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    `
})

function zoomimg(posicao) {
    let carroSelecionado = listaCarros[posicao]
    document.getElementById("nomecarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaocarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgmodal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomimg').show()

}

function alterartemasite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme")
    if (tema == "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light")
        document.querySelector("#alterartemasite").innerHTML = '<i class="bi bi-moon-stars-fill text-secondary"></i>'
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark")
        document.querySelector("#alterartemasite").innerHTML = '<i class="bi bi-brightness-high-fill text-secondary"></i>'
    }
}