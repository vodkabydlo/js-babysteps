function sumPosamountNeg (array) {
    let i = 0
    let sum = 0
    let amount = 0
    while (i <= array.length) {
        if (array[i] <0) {amount++}
        else if (array[i] > 0) {sum = sum + array[i]}
        i++
    }
    return "sum is " + sum + " and amount is " + amount
}