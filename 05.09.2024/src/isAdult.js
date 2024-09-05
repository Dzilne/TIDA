/**
 *@description
 * Funkcja po podaniu liczby całkowitej - wieku zwraca boolean z infornmacja czy osoba o podanym wieku
 * jest pelnoletnia. W przypadku podania wieku mniejszego lub rownego 0 funkcja zwroci błąd "podano nieprawidłowy wiek".
 * @param Age
 * @returns {boolean|string}
 * @author Krzysztof Dzilne 4D
 */
function isAdult(Age){
    if(Age<=0){
        return "Podano niepoprawny wiek";
    }
    if(Age<18){
        return false;
    }
    else return true;
}