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