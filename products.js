const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "imagem de uvas crimson",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "imagem de varios cachos de bananas",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "imagem de mamões",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "imagem de maçã verde",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "imagem de refrigerante",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "imagem de uma garrafa de vinho",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "imagem de uma água tônica",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "imagem de varios cocos",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "imagem de dois sabonetes um rosado e outro esverdeado",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "imagem de um detergente",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "imagem de um limpa superfícies sendo usado no chão de madeira",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "imagem de um lustra móveis",
  },
];


const main1 = document.getElementById("fruits")

const listaFrutas = document.createElement("ul")

main1.appendChild(listaFrutas)



function createCard(){
  for(let i = 0; i<products.length; i++){
    if(products[i].category=="Frutas"){
      const item = document.createElement("li")
      const imagem = document.createElement("img")
      const main4 = document.createElement("main")
      const nome = document.createElement("h1")
      const categoria = document.createElement("h5")
      const preco = document.createElement("strong")

      listaFrutas.appendChild(item)
      item.appendChild(imagem)
      item.appendChild(main4)
      main4.appendChild(nome)
      main4.appendChild(categoria)
      
      item.className = "product"
      imagem.src = products[i].image
      imagem.className = "product-img"
      imagem.alt = ""
      imagem.title = ""
      main4.className = "product-main"
      nome.className = "product-title"
      nome.innerText = products[i].title
      categoria.className = "product-category"
      categoria.innerText = products[i].category
      preco.className = "product-price"
      preco.innerText = "R$ " + products[i].price
    }    
  }
}

createCard()

const main2 = document.getElementById("drinks")
const listaBebidas = document.createElement("ul")
main2.appendChild(listaBebidas)

function createCard2(){
  for(let i = 0; i<products.length; i++){
    if(products[i].category=="Bebidas"){
      const item = document.createElement("li")
      const imagem = document.createElement("img")
      const main4 = document.createElement("main")
      const nome = document.createElement("h1")
      const categoria = document.createElement("h5")
      const preco = document.createElement("strong")

      listaBebidas.appendChild(item)
      item.appendChild(imagem)
      item.appendChild(main4)
      main4.appendChild(nome)
      main4.appendChild(categoria)
      
      item.className = "product"
      imagem.src = products[i].image
      imagem.className = "product-img"
      imagem.alt = ""
      imagem.title = ""
      main4.className = "product-main"
      nome.className = "product-title"
      nome.innerText = products[i].title
      categoria.className = "product-category"
      categoria.innerText = products[i].category
      preco.className = "product-price"
      preco.innerText = "R$ " + products[i].price
    }    
  }
}

createCard2()

const main3 = document.getElementById("hygiene")
const listaHigiene = document.createElement("ul")
main3.appendChild(listaHigiene)

function createCard3(){
  for(let i = 0; i<products.length; i++){
    if(products[i].category=="Higiene"){
      const item = document.createElement("li")
      const imagem = document.createElement("img")
      const main4 = document.createElement("main")
      const nome = document.createElement("h1")
      const categoria = document.createElement("h5")
      const preco = document.createElement("strong")

      listaHigiene.appendChild(item)
      item.appendChild(imagem)
      item.appendChild(main4)
      main4.appendChild(nome)
      main4.appendChild(categoria)
      
      item.className = "product"
      imagem.src = products[i].image
      imagem.className = "product-img"
      imagem.alt = ""
      imagem.title = ""
      main4.className = "product-main"
      nome.className = "product-title"
      nome.innerText = products[i].title
      categoria.className = "product-category"
      categoria.innerText = products[i].category
      preco.className = "product-price"
      preco.innerText = "R$ " + products[i].price
    }    
  }
}

createCard3()
