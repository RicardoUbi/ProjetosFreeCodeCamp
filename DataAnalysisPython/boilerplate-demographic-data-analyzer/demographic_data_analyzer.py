import pandas as pd


def calculate_demographic_data(print_data=True):
    # Lê os dados do arquivo
    df = pd.read_csv('adult.data.csv')
  
    # Quantos de cada raça estão representados neste conjunto de dados? 
    # Isso deve ser uma série Pandas com os nomes das raças como rótulos de índice.
    race_count = df['race'].value_counts()
  
    # Qual é a idade média dos homens?
    men_data = df[df['sex'] == 'Male']
    average_age_men = round(men_data['age'].mean(), 1)
  
    # Qual é a porcentagem de pessoas que têm um diploma de Bacharel?
    total_population = len(df)  # Total de pessoas no conjunto de dados
    bachelors_count = df[df['education'] == 'Bachelors'].shape[0]
    percentage_bachelors = round((bachelors_count / total_population) * 100, 1)
  
    # Qual a porcentagem de pessoas com educação avançada (`Bacharelado`, `Mestrado` ou `Doutorado`) que ganham mais de 50 mil?
    # Qual a porcentagem de pessoas sem educação avançada que ganham mais de 50 mil?
  
    # com e sem `Bacharelado`, `Mestrado` ou `Doutorado`
    higher_education = round(df[df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])], 1)
    lower_education = round(df[~df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])], 1)
  
    # porcentagem com salário >50K
    higher_education_rich = round((higher_education[higher_education['salary'] == '>50K'].shape[0]/higher_education.shape[0]) * 100, 1)
    lower_education_rich = round((lower_education[lower_education['salary'] == '>50K'].shape[0]/lower_education.shape[0]) * 100, 1)
  
    # Qual é o número mínimo de horas que uma pessoa trabalha por semana (recurso `horas-por-semana`)?
    min_work_hours = df['hours-per-week'].min()
  
    # Qual a porcentagem das pessoas que trabalham o número mínimo de horas por semana e têm um salário >50K?
    num_min_workers = df[df['hours-per-week'] == min_work_hours]
  
    rich_percentage = (num_min_workers[num_min_workers['salary'] == '>50K'].shape[0] / num_min_workers.shape[0]) * 100
  
    # Qual país tem a maior porcentagem de pessoas que ganham >50K?
    highest_earning_country = (df[df['salary'] == '>50K']['native-country'].value_counts() / df['native-country'].value_counts()).idxmax()
  
    highest_earning_country_percentage = round((df[df['salary'] == '>50K']['native-country'].value_counts() / df['native-country'].value_counts()).max() * 100, 1)

  
    # Identifique a ocupação mais popular para aqueles que ganham >50K na Índia.
    top_IN_occupation = (df[(df['native-country'] == 'India') & (df['salary'] == '>50K')]
                         ['occupation'].value_counts(normalize=True).idxmax())

  
    # NÃO MODIFIQUE ABAIXO DESTA LINHA

    if print_data:
        print("Number of each race:\n", race_count) 
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }
