/**
 *@description
 * Funkcja sprawdza czy osoba o podanym wieku jest pelnoletnia (ma 18 lat)
 * @param Age {number} - wiek
 * @returns {boolean} - true(pelnoletni) lub false(niepelnoletni)
 * @author Krzysztof Dzilne 4D
 * @throws {RangeError} gdy wiek jest rowny lub mniejszy 0
 */
function isAdult(Age){
    if(Age<=0){
        throw new RangeError("Wiek musi byc liczba dodatnia wieksza od 0");
    }
    if(Age<18){
        return false;
    }
    else return true;
}