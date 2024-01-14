class Category:

    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item['amount'] for item in self.ledger)

    def transfer(self, amount, budget_category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {budget_category.name}")
            budget_category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()
      
    def __str__(self):
      title = f"{self.name:*^30}\n"
      items = ""
      total = 0
      for item in self.ledger:
          items += f"{item['description'][:23]:23}{item['amount']:>7.2f}\n"
          total += item['amount']
      output = title + items + f"Total: {total:.2f}"
      return output

def create_spend_chart(categories):
  spent_dict = {}
  for i in categories:
    s = 0 
    for j in i.ledger:
      if j['amount'] < 0 :
        s+= abs(j['amount'])
    spent_dict[i.name] = round(s,2)
  total = sum(spent_dict.values())
  percent_dict = {}
  for k in spent_dict.keys():
    percent_dict[k] = int(round(spent_dict[k]/total,2)*100)
  output = 'Percentage spent by category\n'
  for i in range(100,-10,-10):
    output += f'{i}'.rjust(3) + '| '
    for percent in percent_dict.values():
      if percent >= i:
        output+= 'o  '
      else:
        output+= '   '
    output += '\n' 
  output += ' '*4+'-'*(len(percent_dict.values())*3+1)
  output += '\n     '
  dict_key_list = list(percent_dict.keys())
  max_len_category = max([len(i) for i in dict_key_list])
  
  for i in range(max_len_category):
  
    for name in dict_key_list:
      if len(name)>i:
        output+= name[i] +'  '
      else:
        output+= '   '
    if i < max_len_category-1:
      output+='\n     '
  
  return output