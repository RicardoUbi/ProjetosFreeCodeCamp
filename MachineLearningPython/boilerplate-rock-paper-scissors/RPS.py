playsList = {}

def player(prev_play, opponent_history=[]):
  
  global playsList
  number = 4
  opponent_history.append(prev_play)
  
  # Jogada padrão
  play = "R"
  
  # Resume as últimas jogadas do oponente
  # Atualiza o dicionário de padrões observados
  # Fornece possíveis próximas jogadas
  if len(opponent_history)>number:
    resume = "".join(opponent_history[-number:])

    if "".join(opponent_history[-(number + 1):]) in playsList.keys():
      playsList["".join(opponent_history[-(number + 1):])] += 1
    else:
      playsList["".join(opponent_history[-(number + 1):])] = 1

    possible =[resume + "R", resume + "P", resume + "S"]
    
    # Escolhe a jogada que mais se repete
    for i in possible:
      if not i in playsList.keys():
        playsList[i] = 0

    predict = max(possible, key=lambda key: playsList[key])

    # Mapeamento das jogadas previstas para as jogadas correspondentes
    # Escolhe a jogada que ganha da previsão do oponente
    move_mapping = {"P": "S", "R": "P", "S": "R"}
    play = move_mapping[predict[-1]]

  return play
