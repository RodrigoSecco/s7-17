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

//uva

const main1 = document.getElementById("fruits")

const listaFrutas = document.createElement("ul")

main1.appendChild(listaFrutas)

const itemFruta1 = document.createElement("li")

listaFrutas.appendChild(itemFruta1)

itemFruta1.className = "product"

const imagemFruta1 = document.createElement("img")

itemFruta1.appendChild(imagemFruta1)

imagemFruta1.src = products[0].image

imagemFruta1.className = "product-img"

imagemFruta1.alt = ""

imagemFruta1.title = ""

const mainFruta1 = document.createElement("main")

itemFruta1.appendChild(mainFruta1)

mainFruta1.className = "product-main"

const uva = document.createElement("h1")

mainFruta1.appendChild(uva)

uva.className = "product-title"

uva.innerText = products[0].title

const categoriaFruta1 = document.createElement("h5")

mainFruta1.appendChild(categoriaFruta1)

categoriaFruta1.className = "product-category"

categoriaFruta1.innerText = products[0].category

const precoFruta1 = document.createElement("strong")

mainFruta1.appendChild(precoFruta1)

precoFruta1.className = "product-price"

precoFruta1.innerText = "R$ " + products[0].price

//banana

const itemFruta2 = document.createElement("li")

listaFrutas.appendChild(itemFruta2)

itemFruta2.className = "product"

const imagemFruta2 = document.createElement("img")

itemFruta2.appendChild(imagemFruta2)

imagemFruta2.src = products[1].image

imagemFruta2.className = "product-img"

imagemFruta2.alt = ""

imagemFruta2.title = ""

const mainFruta2 = document.createElement("main")

itemFruta2.appendChild(mainFruta2)

mainFruta2.className = "product-main"

const banana = document.createElement("h1")

mainFruta2.appendChild(banana)

banana.className = "product-title"

banana.innerText = products[1].title

const categoriaFruta2 = document.createElement("h5")

mainFruta2.appendChild(categoriaFruta2)

categoriaFruta2.className = "product-category"

categoriaFruta2.innerText = products[1].category

const precoFruta2 = document.createElement("strong")

mainFruta2.appendChild(precoFruta2)

precoFruta2.className = "product-price"

precoFruta2.innerText = "R$ " + products[1].price

//mamão

const itemFruta3 = document.createElement("li")

listaFrutas.appendChild(itemFruta3)

itemFruta3.className = "product"

const imagemFruta3 = document.createElement("img")

itemFruta3.appendChild(imagemFruta3)

imagemFruta3.src = products[2].image

imagemFruta3.className = "product-img"

imagemFruta3.alt = ""

imagemFruta3.title = ""

const mainFruta3 = document.createElement("main")

itemFruta3.appendChild(mainFruta3)

mainFruta3.className = "product-main"

const mamao = document.createElement("h1")

mainFruta3.appendChild(mamao)

mamao.className = "product-title"

mamao.innerText = products[2].title

const categoriaFruta3 = document.createElement("h5")

mainFruta3.appendChild(categoriaFruta3)

categoriaFruta3.className = "product-category"

categoriaFruta3.innerText = products[2].category

const precoFruta3 = document.createElement("strong")

mainFruta3.appendChild(precoFruta3)

precoFruta3.className = "product-price"

precoFruta3.innerText = "R$ " + products[2].price

//maçã

const itemFruta4 = document.createElement("li")

listaFrutas.appendChild(itemFruta4)

itemFruta4.className = "product"

const imagemFruta4 = document.createElement("img")

itemFruta4.appendChild(imagemFruta4)

imagemFruta4.src = products[3].image

imagemFruta4.className = "product-img"

imagemFruta4.alt = ""

imagemFruta4.title = ""

const mainFruta4 = document.createElement("main")

itemFruta4.appendChild(mainFruta4)

mainFruta4.className = "product-main"

const maca = document.createElement("h1")

mainFruta4.appendChild(maca)

maca.className = "product-title"

maca.innerText = products[3].title

const categoriaFruta4 = document.createElement("h5")

mainFruta4.appendChild(categoriaFruta4)

categoriaFruta4.className = "product-category"

categoriaFruta4.innerText = products[3].category

const precoFruta4 = document.createElement("strong")

mainFruta4.appendChild(precoFruta4)

precoFruta4.className = "product-price"

precoFruta4.innerText = "R$ " + products[3].price

//bebidas - refrigerante

const main2 = document.getElementById("drinks")

const listaBebidas = document.createElement("ul")

main2.appendChild(listaBebidas)

const itemBebida1 = document.createElement("li")

listaBebidas.appendChild(itemBebida1)

itemBebida1.className = "product"

const imagemBebida1 = document.createElement("img")

itemBebida1.appendChild(imagemBebida1)

imagemBebida1.src = products[4].image

imagemBebida1.className = "product-img"

imagemBebida1.alt = ""

imagemBebida1.title = ""

const mainBebida1 = document.createElement("main")

itemBebida1.appendChild(mainBebida1)

mainBebida1.className = "product-main"

const refrigerante = document.createElement("h1")

mainBebida1.appendChild(refrigerante)

refrigerante.className = "product-title"

refrigerante.innerText = products[4].title

const categoriaBebida1 = document.createElement("h5")

mainBebida1.appendChild(categoriaBebida1)

categoriaBebida1.className = "product-category"

categoriaBebida1.innerText = products[4].category

const precoBebida1 = document.createElement("strong")

mainBebida1.appendChild(precoBebida1)

precoBebida1.className = "product-price"

precoBebida1.innerText = "R$ " + products[4].price

//vinho

const itemBebida2 = document.createElement("li")

listaBebidas.appendChild(itemBebida2)

itemBebida2.className = "product"

const imagemBebida2 = document.createElement("img")

itemBebida2.appendChild(imagemBebida2)

imagemBebida2.src = products[5].image

imagemBebida2.className = "product-img"

imagemBebida2.alt = ""

imagemBebida2.title = ""

const mainBebida2 = document.createElement("main")

itemBebida2.appendChild(mainBebida2)

mainBebida2.className = "product-main"

const vinho = document.createElement("h1")

mainBebida2.appendChild(vinho)

vinho.className = "product-title"

vinho.innerText = products[5].title

const categoriaBebida2 = document.createElement("h5")

mainBebida2.appendChild(categoriaBebida2)

categoriaBebida2.className = "product-category"

categoriaBebida2.innerText = products[5].category

const precoBebida2 = document.createElement("strong")

mainBebida2.appendChild(precoBebida2)

precoBebida2.className = "product-price"

precoBebida2.innerText = "R$ " + products[5].price

//agua tonica

const itemBebida3 = document.createElement("li")

listaBebidas.appendChild(itemBebida3)

itemBebida3.className = "product"

const imagemBebida3 = document.createElement("img")

itemBebida3.appendChild(imagemBebida3)

imagemBebida3.src = products[6].image

imagemBebida3.className = "product-img"

imagemBebida3.alt = ""

imagemBebida3.title = ""

const mainBebida3 = document.createElement("main")

itemBebida3.appendChild(mainBebida3)

mainBebida3.className = "product-main"

const tonica = document.createElement("h1")

mainBebida3.appendChild(tonica)

tonica.className = "product-title"

tonica.innerText = products[6].title

const categoriaBebida3 = document.createElement("h5")

mainBebida3.appendChild(categoriaBebida3)

categoriaBebida3.className = "product-category"

categoriaBebida3.innerText = products[6].category

const precoBebida3 = document.createElement("strong")

mainBebida3.appendChild(precoBebida3)

precoBebida3.className = "product-price"

precoBebida3.innerText = "R$ " + products[6].price

//coco

const itemBebida4 = document.createElement("li")

listaBebidas.appendChild(itemBebida4)

itemBebida4.className = "product"

const imagemBebida4 = document.createElement("img")

itemBebida4.appendChild(imagemBebida4)

imagemBebida4.src = products[7].image

imagemBebida4.className = "product-img"

imagemBebida4.alt = ""

imagemBebida4.title = ""

const mainBebida4 = document.createElement("main")

itemBebida4.appendChild(mainBebida4)

mainBebida4.className = "product-main"

const coco = document.createElement("h1")

mainBebida4.appendChild(coco)

coco.className = "product-title"

coco.innerText = products[7].title

const categoriaBebida4 = document.createElement("h5")

mainBebida4.appendChild(categoriaBebida4)

categoriaBebida4.className = "product-category"

categoriaBebida4.innerText = products[7].category

const precoBebida4 = document.createElement("strong")

mainBebida4.appendChild(precoBebida4)

precoBebida4.className = "product-price"

precoBebida4.innerText = "R$ " + products[7].price

//higiene - sabonete

const main3 = document.getElementById("hygiene")

const listaHigiene = document.createElement("ul")

main3.appendChild(listaHigiene)

const itemHigiene1 = document.createElement("li")

listaHigiene.appendChild(itemHigiene1)

itemHigiene1.className = "product"

const imagemHigiene1 = document.createElement("img")

itemHigiene1.appendChild(imagemHigiene1)

imagemHigiene1.src = products[8].image

imagemHigiene1.className = "product-img"

imagemHigiene1.alt = ""

imagemHigiene1.title = ""

const mainHigiene1 = document.createElement("main")

itemHigiene1.appendChild(mainHigiene1)

mainHigiene1.className = "product-main"

const sabonete = document.createElement("h1")

mainHigiene1.appendChild(sabonete)

sabonete.className = "product-title"

sabonete.innerText = products[8].title

const categoriaHigiene1 = document.createElement("h5")

mainHigiene1.appendChild(categoriaHigiene1)

categoriaHigiene1.className = "product-category"

categoriaHigiene1.innerText = products[8].category

const precoHigiene1 = document.createElement("strong")

mainHigiene1.appendChild(precoHigiene1)

precoHigiene1.className = "product-price"

precoHigiene1.innerText = "R$ " + products[8].price

//detergente

const itemHigiene2 = document.createElement("li")

listaHigiene.appendChild(itemHigiene2)

itemHigiene2.className = "product"

const imagemHigiene2 = document.createElement("img")

itemHigiene2.appendChild(imagemHigiene2)

imagemHigiene2.src = products[9].image

imagemHigiene2.className = "product-img"

imagemHigiene2.alt = ""

imagemHigiene2.title = ""

const mainHigiene2 = document.createElement("main")

itemHigiene2.appendChild(mainHigiene2)

mainHigiene2.className = "product-main"

const detergente = document.createElement("h1")

mainHigiene2.appendChild(detergente)

detergente.className = "product-title"

detergente.innerText = products[9].title

const categoriaHigiene2 = document.createElement("h5")

mainHigiene2.appendChild(categoriaHigiene2)

categoriaHigiene2.className = "product-category"

categoriaHigiene2.innerText = products[9].category

const precoHigiene2 = document.createElement("strong")

mainHigiene2.appendChild(precoHigiene2)

precoHigiene2.className = "product-price"

precoHigiene2.innerText = "R$ " + products[9].price

//limpa superficies

const itemHigiene3 = document.createElement("li")

listaHigiene.appendChild(itemHigiene3)

itemHigiene3.className = "product"

const imagemHigiene3 = document.createElement("img")

itemHigiene3.appendChild(imagemHigiene3)

imagemHigiene3.src = products[10].image

imagemHigiene3.className = "product-img"

imagemHigiene3.alt = ""

imagemHigiene3.title = ""

const mainHigiene3 = document.createElement("main")

itemHigiene3.appendChild(mainHigiene3)

mainHigiene3.className = "product-main"

const limpaSuperficies = document.createElement("h1")

mainHigiene3.appendChild(limpaSuperficies)

limpaSuperficies.className = "product-title"

limpaSuperficies.innerText = products[10].title

const categoriaHigiene3 = document.createElement("h5")

mainHigiene3.appendChild(categoriaHigiene3)

categoriaHigiene3.className = "product-category"

categoriaHigiene3.innerText = products[10].category

const precoHigiene3 = document.createElement("strong")

mainHigiene3.appendChild(precoHigiene3)

precoHigiene3.className = "product-price"

precoHigiene3.innerText = "R$ " + products[10].price

//lustra moveis

const itemHigiene4 = document.createElement("li")

listaHigiene.appendChild(itemHigiene4)

itemHigiene4.className = "product"

const imagemHigiene4 = document.createElement("img")

itemHigiene4.appendChild(imagemHigiene4)

imagemHigiene4.src = products[11].image

imagemHigiene4.className = "product-img"

imagemHigiene4.alt = ""

imagemHigiene4.title = ""

const mainHigiene4 = document.createElement("main")

itemHigiene4.appendChild(mainHigiene4)

mainHigiene4.className = "product-main"

const lustraMoveis = document.createElement("h1")

mainHigiene4.appendChild(lustraMoveis)

lustraMoveis.className = "product-title"

lustraMoveis.innerText = products[11].title

const categoriaHigiene4 = document.createElement("h5")

mainHigiene4.appendChild(categoriaHigiene4)

categoriaHigiene4.className = "product-category"

categoriaHigiene4.innerText = products[11].category

const precoHigiene4 = document.createElement("strong")

mainHigiene4.appendChild(precoHigiene4)

precoHigiene4.className = "product-price"

precoHigiene4.innerText = "R$ " + products[11].price
