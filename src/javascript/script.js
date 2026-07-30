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

    // Atualiza o número do slide visível, sempre com dois dígitos ("01", "02", ...).
    // Concatenar '0' na mão só funciona até 9 slides: no décimo sairia "010".
    indicators.querySelector('.number').textContent = String(active + 1).padStart(2, '0')
}


// =========================================================
// 4. LÓGICA DE NAVEGAÇÃO
//    Implementa as ações ao clicar nos botões.
// =========================================================

// Move o slider em uma direção.
// 'direction' vale 1 para AVANÇAR (o slide entra pela direita)
// e -1 para VOLTAR (o slide entra pela esquerda).
function moveSlider(direction){
    // Descobre qual slide vai entrar, com loop contínuo nas duas pontas:
    // ao passar do último volta ao primeiro, e ao passar do primeiro vai para o último.
    let nextActive
    if(direction === 1){
        nextActive = active + 1 > lastPosition ? firstPosition : active + 1
    } else {
        nextActive = active - 1 < firstPosition ? lastPosition : active - 1
    }

    let incoming = items[nextActive]

    // Estaciona o slide que vai entrar do lado certo ANTES de ele virar o ativo.
    // Sem isso, a variável CSS e a classe mudariam no mesmo ciclo e o navegador
    // usaria a posição ANTIGA como ponto de partida da transição - por isso, ao
    // inverter o sentido, o primeiro slide entrava pelo lado errado.
    // A transição fica desligada só durante o reposicionamento, para que esse
    // "pulo" nunca seja animado, independente do que o CSS defina para .item.
    incoming.style.transition = 'none'
    list.style.setProperty('--calculation', direction)
    void incoming.offsetWidth // força o recálculo agora, aplicando a nova posição
    incoming.style.transition = '' // devolve a transição do CSS, para a entrada animar

    active = nextActive

    // Executa a função de limpeza e atualização dos indicadores.
    setSlider()

    // Adiciona a classe 'active' ao novo slide, disparando as animações no CSS.
    incoming.classList.add('active')
}

// Lógica para o botão PRÓXIMO
nextButton.onclick = () => moveSlider(1)

// Lógica para o botão ANTERIOR
prevButton.onclick = () => moveSlider(-1)