import copy
import random
# Consider using the modules imported above.

class Hat:
    # Inicializa a instância da classe Hat com bolas de várias cores
    def __init__(self, **kwargs):
      self.contents = []
      for color, count in kwargs.items():
          self.contents.extend([color] * count)

    # Remove aleatoriamente 'num_balls' bolas do chapéu e retorna a lista dessas bolas
    def draw(self, numero_bolas):
      drawn_balls = random.sample(self.contents, min(numero_bolas, len(self.contents)))
      for ball in drawn_balls:
          self.contents.remove(ball)
      return drawn_balls


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  
  ExperimentosSucedidos = 0
  for _ in range(num_experiments):
    hat_copy = copy.deepcopy(hat)  # Cria uma cópia do chapéu para cada experimento
    drawn_balls = hat_copy.draw(num_balls_drawn)

    # Verifica se as bolas desenhadas correspondem às bolas esperadas
    drawn_balls_dict = {color: drawn_balls.count(color) for color in set(drawn_balls)}
    if all(drawn_balls_dict.get(color, 0) >= count for color, count in expected_balls.items()):
      ExperimentosSucedidos += 1

  probability = ExperimentosSucedidos / num_experiments
  return probability 
    
