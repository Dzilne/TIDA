/**
 * Funkcja przyjmuje liczby calkowite a oraz b i zwraca wynik dzielenia a przez b.
 * W przypadku, gdy parametr b będzie rowny 0 funkcja zwraca komunikat o nieprawidłowym parametrze.
 * @param a
 * @param b
 * @returns {number|string}
 * @example
 * const a = 10
 * const b = 5
 * //returns: 2
 * @author Krzysztof Dzilne 4D
 */
function divide( a, b){
    if(b==0){
        return "Nie mozna dzielic przez 0";
    }
    else{
        return a/b;
    }
}