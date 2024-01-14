def add_time(start, duration, day=None):
    # Extrai a hora inicial, minuto inicial e meridiano do tempo inicial
    TempoInicial, meridiem = start.split()
    HoraInicial, MinutoInicial = map(int, TempoInicial.split(':'))
    HoraDuracao, MinutoDuracao = map(int, duration.split(':'))

    # Calcula a hora final e o minuto final após adicionar a duração
    Minutofinal = MinutoInicial + MinutoDuracao
    Horafinal = HoraInicial + HoraDuracao
    Dias = 0

    # Loop para ajustar a hora final e o meridiano
    while True:
      if Minutofinal >= 60:
        Horafinal += 1
        Minutofinal -= 60
        
      if Horafinal > 12:
        if meridiem == "PM":
          meridiem = "AM"
          Dias += 1
        else:
          meridiem = "PM"
          
        Horafinal-= 12
        
      if Minutofinal < 60 and Horafinal <= 12:
        if Horafinal == 12 and Minutofinal > 0:
          meridiem = "AM" if meridiem == "PM" else "PM"
          if meridiem == "AM":
            Dias += 1
        break
        
    # Formata o novo tempo como uma string
    NovoTempo = "{}:{:02d} {}".format(Horafinal, Minutofinal, meridiem)

    # Adiciona o dia da semana ao novo tempo se especificado
    if day:
      DiasSemana = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      NovoDia = DiasSemana[(DiasSemana.index(day.capitalize()) + Dias) % 7]
      NovoTempo += ", " + NovoDia

    # Adiciona informações sobre dias adicionais, se houver
    if Dias == 1:
      NovoTempo += " (next day)"
    elif Dias > 1:
      NovoTempo += " ({} days later)".format(Dias)
    return NovoTempo
      





        