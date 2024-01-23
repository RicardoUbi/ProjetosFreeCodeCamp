# Análise Estatística com Numpy

Este projeto implementa uma função que utiliza a biblioteca NumPy para calcular estatísticas básicas de uma matriz 3x3 de números. As estatísticas incluem média, variância, desvio padrão, máximo, mínimo e soma, calculadas ao longo das linhas, colunas e para toda a matriz. O objetivo é demonstrar o uso eficiente do NumPy para realizar análises estatísticas simples em conjuntos de dados numéricos.

## Tecnologias Utilizadas:

* [Python](https://www.python.org/): Linguagem de programação versátil e poderosa.
* [NumPy](https://numpy.org/): Biblioteca para computação numérica e funções matemáticas.


## Saida do terminal

```bash
{
  'mean': [
    [3.0, 4.0, 5.0],   # Média ao longo do eixo 1 (colunas)
    [1.0, 4.0, 7.0],   # Média ao longo do eixo 2 (linhas)
    4.0                # Média para toda a matriz
  ],
  'variance': [
    [6.0, 6.0, 6.0],   # Variância ao longo do eixo 1
    [0.6666666666666666, 0.6666666666666666, 0.6666666666666666],   # Variância ao longo do eixo 2
    6.666666666666667  # Variância para toda a matriz
  ],
  'standard deviation': [
    [2.449489742783178, 2.449489742783178, 2.449489742783178],   # Desvio padrão ao longo do eixo 1
    [0.816496580927726, 0.816496580927726, 0.816496580927726],   # Desvio padrão ao longo do eixo 2
    2.581988897471611  # Desvio padrão para toda a matriz
  ],
  'max': [
    [6, 7, 8],   # Valor máximo ao longo do eixo 1
    [2, 5, 8],   # Valor máximo ao longo do eixo 2
    8            # Valor máximo para toda a matriz
  ],
  'min': [
    [0, 1, 2],   # Valor mínimo ao longo do eixo 1
    [0, 3, 6],   # Valor mínimo ao longo do eixo 2
    0            # Valor mínimo para toda a matriz
  ],
  'sum': [
    [9, 12, 15],   # Soma ao longo do eixo 1
    [3, 12, 21],   # Soma ao longo do eixo 2
    36            # Soma para toda a matriz
  ]
}

```

## Instruções de Instalação:
1. Clone o repositório:
   ```bash
   git clone https://github.com/RicardoUbi/ProjetosFreeCodeCamp.git