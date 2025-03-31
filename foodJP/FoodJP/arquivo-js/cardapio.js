const produto = [
    {
        nome: "BOLINHO DE FRANGO CHINÊS",
        preco: "R$17,90",
        imgPrato: "./img/img.cardapio/bolinho-de-frango-chines.webp",
        imgCarrinho: "./img/img.cardapio/carrinho-compra.png",
        src: "./Checkout.html"
    },

    { 
        nome: "FRANGO XADREZ", 
        preco: "R$22,00", 
        imgPrato: "./img/img.cardapio/frango-xadrez.webp",
        imgCarrinho: "./img/img.cardapio/carrinho-compra.png"
    },

    {
        nome: "YAKISO-BA",
        preco: "R$ 25,50",
        imgPrato: "./img/img.cardapio/yakisoba.jpg",
        imgCarrinho: "./img/img.cardapio/carrinho-compra.png"

    },

    {
        nome: "WONTON FRITOS",
        preco: "R$ 35,95",
        imgPrato: "./img/img.cardapio/wonton-frito.webp",
        imgCarrinho: "./img/img.cardapio/carrinho-compra.png"
    }
    
];

let mostra = document.getElementById("container-cardapio");

for (let i = 0; i < produto.length; ++i) {
    mostra.innerHTML += `
        <div class="produto-1">
            <figure>
                <img src="${produto[i].imgPrato}" alt="Prato de ${produto[i].nome}" style="width: 130px; height: 90px; border-radius: 5px">
            </figure>
            <div class="text">
                <p><strong>${produto[i].nome}</strong></p>
                <div class="preco">
                    <h2>${produto[i].preco}</h2>
                    <div class="btn-carrinho">
                       <a href="${produto[i].src}">
                          <button type="submit" aria-label="Adicionar ${produto[i].nome} ao carrinho">
                          <img src="${produto[i].imgCarrinho}" alt="Ícone de carrinho de compras" style="width: 100px; height: auto; padding: 8px 40px;">
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
