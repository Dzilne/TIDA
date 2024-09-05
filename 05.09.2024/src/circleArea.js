/**
 * @description Funkcja oblicza pole koła po podaniu jego promieniu.
 * @param r {number} - promien
 * @returns {number} - pole koła
 * @throws {Error} jeśli promien jest mniejszy lub rowny 0
 * @author Krzysztof Dzilne 4D
 */
function circleArea(r){
    if(r<=0){
        throw new Error("Podano nieprawidlowy promien")
    }
    else{
        return r*r*3.14;
    }
}