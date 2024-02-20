# Mecanismo de recomendação de livros usando KNN:

Neste projeto desenvolvi um algoritmo de recomendação de livros utilizando o método dos vizinhos K-mais próximos (KNN).
A função retorna cinco livros similares a um título fornecido, considerando as avaliações dos usuários. O objetivo era proporcionar recomendações relevantes e significativas para os leitores com base em suas preferências.

## Tecnologias Utilizadas:

- [Python](https://www.python.org/): Linguagem de programação.
- [scikit-learn](https://scikit-learn.org/): Biblioteca para aprendizado de máquina e desenvolvimento de modelos de aprendizado.
- [Pandas](https://pandas.pydata.org/): Biblioteca de análise de dados em Python.
- [NumPy](https://numpy.org/): Biblioteca para computação numérica em Python.

## Resultados
A função get_recommends recebe o título de um livro como argumento e retorna uma lista de 5 livros similares, juntamente com as distâncias entre eles.

```bash
["Where the Heart Is (Oprah's Book Club (Paperback))", [["I'll Be Seeing You", 0.8016211], ['The Weight of Water', 0.77085835], ['The Surgeon', 0.7699411], ['I Know This Much Is True', 0.7677075], ['The Lovely Bones: A Novel', 0.7234864]]]
You passed the challenge! 🎉🎉🎉🎉🎉
```


## Instruções de Instalação:
1. Clone o repositório:
   ```bash
   git clone https://github.com/RicardoUbi/ProjetosFreeCodeCamp.git
