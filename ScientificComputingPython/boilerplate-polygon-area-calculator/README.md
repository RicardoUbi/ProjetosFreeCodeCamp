# Calculadora de Área de Polígono

Este projeto visa criar duas classes em Python reponsaveis pela manipulação de dimensões e cálculos geométricos, como área, perímetro, diagonal, entre outros. O projeto também tem métodos específicos para representação visual das formas.

## Tecnologias utilizadas:

* [Python](https://www.python.org/): linguagem de programação
  

## Exemplo de uso

```python
rect = shape_calculator.Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = shape_calculator.Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))

```
```bash
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8  
```

## Instruções de Instalação:
1. Clone o repositório:
   ```bash
   git clone https://github.com/RicardoUbi/ProjetosFreeCodeCamp.git
