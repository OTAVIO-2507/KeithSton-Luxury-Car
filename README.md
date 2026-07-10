<div align="center">

# KeithSton Luxury Car — Carrossel Interativo

Carrossel de carros de luxo com design escuro e transições direcionais animadas, construído com HTML, CSS moderno (aninhamento e variáveis) e JavaScript puro, sem bibliotecas de slider.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

[![Demonstração online](https://img.shields.io/badge/demonstra%C3%A7%C3%A3o-online-2EA44F?style=flat-square)](https://otavio-2507.github.io/KeithSton-Luxury-Car/)

</div>

## Visão geral

O projeto implementa um slider completo do zero, com atenção especial à direção das transições: uma variável CSS (`--calculation`) controla se os elementos entram pela esquerda ou pela direita conforme o sentido da navegação. O conteúdo de cada carro entra em cascata, e o controle de estado é feito apenas com classes e manipulação de DOM, demonstrando que um carrossel sofisticado não exige biblioteca externa.

## Funcionalidades

- Navegação por setas com loop contínuo (do último slide retorna ao primeiro)
- Transições direcionais controladas por variável CSS conforme o sentido da navegação
- Animações em cascata para título, descrição e detalhes de cada carro
- Indicadores visuais de posição atualizados dinamicamente
- Efeitos de hover nos botões de navegação
- Tipografia de impacto com League Gothic e Poppins

## Tecnologias

| Tecnologia | Aplicação no projeto |
| --- | --- |
| HTML5 | Estrutura do carrossel e da navegação |
| CSS3 | Aninhamento, variáveis (`--calculation`), grid, flexbox e transições |
| JavaScript (ES6+) | Controle de estado dos slides e manipulação de classes |
| Font Awesome | Ícones das setas de navegação |
| Google Fonts | Tipografia (League Gothic, Poppins) |

## Como executar

```bash
git clone https://github.com/OTAVIO-2507/KeithSton-Luxury-Car.git
cd KeithSton-Luxury-Car
```

Abra o arquivo `index.html` no navegador. As dependências são carregadas via CDN.

## Estrutura do projeto

```
KeithSton-Luxury-Car/
├── index.html              Página do carrossel
└── src/
    ├── javascript/
    │   └── script.js       Navegação e controle de slides
    ├── style/
    │   └── styles.css      Transições, variáveis e layout
    └── img/                Imagens dos carros e logotipos
```

