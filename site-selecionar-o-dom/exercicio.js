// Retorne no console todas as imagens do site
const imageAll = document.querySelectorAll('.animais img');
console.log(imageAll);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem]')
// Selecione todos os links internos (onde o href começa com #)
  const links = document.querySelectorAll('[href^="#"]');
  console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelectorAll('.animais-descricao h2')
console.log(primeiroH2[0]);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1])

