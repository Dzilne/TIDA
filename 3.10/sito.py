import math

def sito_eratostenesa(n):
    
    A = [True] * (n + 1)
    
    A[0] = A[1] = False
    
    for i in range(2, int(math.sqrt(n)) + 1):
        if A[i]:
            for j in range(i * i, n + 1, i):
                A[j] = False
    
    primes = [i for i in range(2, n + 1) if A[i]]
    return primes

n = 100
liczby_pierwsze = sito_eratostenesa(n)

print("Liczby pierwsze od 2 do", n, "to:", liczby_pierwsze)
