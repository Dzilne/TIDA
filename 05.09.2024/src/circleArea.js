/**
 * @description Po podaniu parametru r - liczby calkowitej funkcja zwraca pole koła (3.14*r^2)
 * W przypadku, gdy r jest mniejdze lub równe 0 funckja zwraca komunikat o błędzie.
 * @param r
 * @returns {number|string}
 * @author Krzysztof Dzilne 4D
 */
function circleArea(r){
    if(r<=0){
        return "Podano niepoprawny promien";
    }
    else{
        return r*r*3.14;
    }
}