function step (min, max, step) {
    let array = []
    for (let current = min; current < max; current = current + step) {
        array.push(current)
    }
array.push(max)
return array
}