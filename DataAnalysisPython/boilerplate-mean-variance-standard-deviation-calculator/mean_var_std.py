import numpy as np

def calculate(lst):
    if len(lst) != 9:
        raise ValueError("List must contain nine numbers.")

    # Converte a lista em uma matriz 3x3 usando o NumPy
    matrix = np.array(lst).reshape(3, 3)

    # Calcula a média ao longo dos eixos 0 e 1, e a média da matriz nivelada
    mean_result = [list(np.mean(matrix, axis=0)), list(np.mean(matrix, axis=1)), np.mean(matrix)]

    # Calcula a variância ao longo dos eixos 0 e 1, e a variância da matriz nivelada
    variance_result = [list(np.var(matrix, axis=0)), list(np.var(matrix, axis=1)), np.var(matrix)]

    # Calcula o desvio padrão ao longo dos eixos 0 e 1, e o desvio padrão da matriz nivelada
    std_dev_result = [list(np.std(matrix, axis=0)), list(np.std(matrix, axis=1)), np.std(matrix)]

    # Encontra os valores máximos ao longo dos eixos 0 e 1, e o valor máximo da matriz nivelada
    max_result = [list(np.max(matrix, axis=0)), list(np.max(matrix, axis=1)), np.max(matrix)]

    # Encontra os valores mínimos ao longo dos eixos 0 e 1, e o valor mínimo da matriz nivelada
    min_result = [list(np.min(matrix, axis=0)), list(np.min(matrix, axis=1)), np.min(matrix)]

    # Calcula a soma ao longo dos eixos 0 e 1, e a soma da matriz nivelada
    sum_result = [list(np.sum(matrix, axis=0)), list(np.sum(matrix, axis=1)), np.sum(matrix)]

    # Armazena os resultados em um dicionário
    calculations = {
        'mean': mean_result,
        'variance': variance_result,
        'standard deviation': std_dev_result,
        'max': max_result,
        'min': min_result,
        'sum': sum_result
    }

    # Retorna o dicionário com os resultados
    return calculations
