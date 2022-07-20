function validatePin(pin) {
    lgth = pin.toString().length
    if (lgth !== 4 && lgth !==6){
        return false
    }
    if (isNaN(pin) == true){
        return false
    }
    return true 
}

function comparison(p) {
    if (p <= 5) {
        return "p is less or equal than 5"
    }
    else if (p <= 10) {
        return "p is bigger than 5 but less or equal than 10"
    }
    else return "p is bigger than 10"
}

