// =========================================================
// 1. SELEÇÃO DE ELEMENTOS (DOM MANIPULATION)
//    Seleciona e armazena os elementos HTML necessários em variáveis.
// =========================================================

let prevButton = document.getElementById('prev')
// Seleciona o botão de navegação "Anterior" pelo seu ID.

let nextButton = document.getElementById('next')
// Seleciona o botão de navegação "Próximo" pelo seu ID.

let container =document.querySelector('.container')
// Seleciona o container principal do carrossel (que envolve a lista de slides).

let items = container.querySelectorAll('.list .item')
// Seleciona TODOS os slides individuais (os carros) dentro da lista.

let indicators = document.querySelector('.indicators')
// Seleciona o bloco que contém o número do slide e as barras indicadoras.

let dots = indicators.querySelectorAll('ul li')
// Seleciona TODOS os itens da lista de indicadores (as pequenas barras de navegação).

let list = container.querySelector('.list')
// Seleciona o elemento que contém a lista de itens, onde a variável CSS será aplicada.


// =========================================================
// 2. VARIÁVEIS DE ESTADO DO SLIDER
//    Definição do estado inicial e limites de navegação.
// =========================================================

let active = 0
// Variável que armazena o índice do slide ATUALMENTE ATIVO (começa no índice 0).

let firstPosition = 0
// Define o índice do primeiro slide (limite inferior, sempre 0).

let lastPosition = items.length - 1
// Calcula o índice do último slide (limite superior: total de slides - 1).


// =========================================================
// 3. FUNÇÃO PRINCIPAL DE ATUALIZAÇÃO DO SLIDER
//    Responsável por remover o estado ativo do slide anterior e atualizar os indicadores.
// =========================================================

function setSlider(){
    // Localiza e remove a classe 'active' do slide que estava ativo.
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    // Localiza e remove a classe 'active' do indicador de barra que estava ativo.
    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    
    // Adiciona a classe 'active' ao novo indicador correspondente ao índice 'active'.
    dots[active].classList.add('active')

    // Atualiza o número do slide visível.
    // O '0' + (active + 1) garante o formato "01", "02", etc.
    indicators.querySelector('.number').innerHTML = '0' + (active + 1)
}


// =========================================================
// 4. LÓGICA DE NAVEGAÇÃO
//    Implementa as ações ao clicar nos botões.
// =========================================================

// Lógica para o botão PRÓXIMO
nextButton.onclick = () => {
    // Define a variável CSS '--calculation' como 1.
    // No CSS, isso move os elementos para a esquerda (entram da direita).
    list.style.setProperty('--calculation', 1) 
    
    // Calcula o próximo índice ativo (com loop contínuo - vai do último para o primeiro).
    // Se o próximo índice for maior que o último, 'active' volta a ser 0. Senão, incrementa 1.
    active = active + 1 > lastPosition ? 0 : active + 1
    
    // Executa a função de limpeza e atualização dos indicadores.
    setSlider() 
    
    // Adiciona a classe 'active' ao novo slide, disparando as animações no CSS.
    items[active].classList.add('active')
}

// Lógica para o botão ANTERIOR
prevButton.onclick = () => {
    // Define a variável CSS '--calculation' como -1.
    // No CSS, isso move os elementos para a direita (entram da esquerda).
    list.style.setProperty('--calculation', -1) 
    
    // Calcula o índice ativo anterior (com loop contínuo - vai do primeiro para o último).
    // Se o próximo índice for menor que o primeiro (0), 'active' volta a ser o último índice. Senão, decrementa 1.
    active = active - 1 < firstPosition ? lastPosition : active - 1
    
    // Executa a função de limpeza e atualização dos indicadores.
    setSlider() 
    
    // Adiciona a classe 'active' ao novo slide, disparando as animações no CSS.
    items[active].classList.add('active')
}