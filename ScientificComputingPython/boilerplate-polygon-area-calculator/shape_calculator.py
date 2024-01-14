class Rectangle:
  # Inicializa a instância da classe Rectangle com largura e altura
  def __init__(self, width, height):
      self.width = width
      self.height = height
    
  # Define a largura da instância da classe Rectangle
  def set_width(self, width):
      self.width = width
    
  # Define a altura da instância da classe Rectangle
  def set_height(self, height):
      self.height = height
    
  # Retorna a área da instância da classe Rectangle
  def get_area(self):
      return self.width * self.height
    
  # Retorna o perímetro da instância da classe Rectangle
  def get_perimeter(self):
      return 2 * self.width + 2 * self.height
    
  # Retorna a diagonal da instância da classe Rectangle
  def get_diagonal(self):
      return (self.width ** 2 + self.height ** 2) ** 0.5

  # Retorna uma representação visual da instância da classe Rectangle
  def get_picture(self):
      if self.width > 50 or self.height > 50:
          return "Too big for picture."
      else:
          return ("*" * self.width + "\n") * self.height
        
  # Retorna o número de vezes que a forma passada pode caber na instância da classe Rectangle
  def get_amount_inside(self, shape):
      return int(self.get_area() / shape.get_area())

  # Retorna uma representação em string da instância da classe Rectangle
  def __str__(self):
      return f"Rectangle(width={self.width}, height={self.height})"

class Square(Rectangle):
  
  # Inicializa a instância da classe Square com um lado
  def __init__(self, side):
      super().__init__(side, side)
    
  # Define o lado da instância da classe Square
  def set_side(self, side):
      self.width = side
      self.height = side

  # Retorna uma representação em string da instância da classe Square
  def __str__(self):
      return f"Square(side={self.width})"
