import random
"""
nazwa: rzut_koscmi
opis: Funkcja przyjmuje parametr liczba_kosci 
parametry: liczba_kosci - int

zwracany typ i opis: tablica intów z wynikami rzutów kostką
autor: Krzysztof Dzilne 5D
"""
def rzut_koscmi(liczba_kosci):
    wyniki = [random.randint(1, 6) for _ in range(liczba_kosci)]
    return wyniki

def policz_punkty(wyniki):
    licznik = {}
    suma = 0
    
    for wynik in wyniki:
        if wynik in licznik:
            licznik[wynik] += 1
        else:
            licznik[wynik] = 1
    
    for liczba, ilosc in licznik.items():
        if ilosc >= 2:  
            suma += liczba * ilosc
    
    return suma

def wyswietl_wyniki(wyniki):
    for i, wynik in enumerate(wyniki, start=1):
        print(f"Kostka {i}: {wynik}")

def gra_w_kosci():
    odpowiedz = 't'
    
    while odpowiedz == 't':
        liczba_kosci = 0
        
        while liczba_kosci < 3 or liczba_kosci > 10:
            liczba_kosci = int(input("Podaj liczbę kości (od 3 do 10): "))
        
        wyniki = rzut_koscmi(liczba_kosci)
        
        wyswietl_wyniki(wyniki)
        
        punkty = policz_punkty(wyniki)
        print(f"Suma punktów: {punkty}")
        
        odpowiedz = input("Czy chcesz powtórzyć grę? (t/n): ").lower()

    print("Koniec gry.")

if __name__ == "__main__":
    gra_w_kosci()


