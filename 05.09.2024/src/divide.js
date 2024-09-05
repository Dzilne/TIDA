/**
 * @description Funkcja dzieli pierwszą podaną liczbę przez drugą i zwraca wynik.
 * @param {number} a - licznik
 * @param {number} b -mianownik
 * @returns {number} - wynik dzielenia
 * @example
 * const a = 10
 * const b = 5
 * @returns: 2
 * @throws {Error} gdy mianownik jest rowny 0
 * @author Krzysztof Dzilne 4D
 */
function divide(a, b){
    if(b==0){
        throw new Error("Mianownik nie moze byc rowny 0")
    }
    else{
        return a/b;
    }
}