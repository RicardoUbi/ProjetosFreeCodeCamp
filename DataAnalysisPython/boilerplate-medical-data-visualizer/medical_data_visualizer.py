import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Import data
df = pd.read_csv('medical_examination.csv')

# Add 'overweight' column
df['overweight'] = (df['weight'] / (df['height'] / 100) ** 2).apply(lambda x: 1 if x > 25 else 0)

# Normalizar os dados tornando 0 sempre bom e 1 sempre ruim. Se o valor de 'cholesterol' ou 'gluc' for 1, faça o valor 0. Se o valor for maior que 1, faça o valor 1.
df['cholesterol'] = df['cholesterol'].apply(lambda x: 0 if x == 1 else 1)
df['gluc'] = df['gluc'].apply(lambda x: 0 if x == 1 else 1)

# Draw Categorical Plot
def draw_cat_plot():
    # Crie um DataFrame para o gráfico de categorias (cat plot) usando pd.melt utilizando apenas os valores de 'cholesterol', 'gluc', 'smoke', 'alco', 'active' e 'overweight'.
    df_cat = pd.melt(df, id_vars=['cardio'], value_vars=['cholesterol', 'gluc', 'smoke', 'alco', 'active', 'overweight'])

    # Agrupe e reformate os dados para dividir por 'cardio'. Mostre as contagens de cada característica. Você terá que renomear uma das colunas para que o catplot funcione corretamete.
    df_cat = df_cat.groupby(['cardio', 'variable', 'value']).size().reset_index(name='total')

    # Draw the catplot with 'sns.catplot()'
    fig = sns.catplot(data=df_cat, x='variable', y='total', hue='value' , col='cardio', kind='bar')

    # Get the figure for the output
    fig = fig.fig

    # Do not modify the next two lines
    fig.savefig('catplot.png')
    return fig

# Draw Heat Map
def draw_heat_map():
    # Clean the data
    df_heat = df[(df['ap_lo'] <= df['ap_hi']) & (df['height'] >= df['height'].quantile(0.025)) & (df['height'] <= df['height'].quantile(0.975)) & (df['weight'] >= df['weight'].quantile(0.025)) & (df['weight'] <= df['weight'].quantile(0.975))]

    # Calculate the correlation matrix
    corr = df_heat.corr()

    # Generate a mask for the upper triangle
    mask = np.triu(np.ones_like(corr, dtype=bool))

    # Set up the matplotlib figure
    fig, ax = plt.subplots(figsize=(11, 9))

    # Draw the heatmap with 'sns.heatmap()'
    sns.heatmap(corr, mask=mask, annot=True, fmt='.1f', linewidths=0.5, vmax=0.3, center=0, square=True, cbar_kws={'shrink': 0.5})
  
    # Do not modify the next two lines
    fig.savefig('heatmap.png')
    return fig
