st = "A quick brown fox did something"

String.prototype.toJadenCase = function () {
    let x = this.split(" ")
    for (let i=0;i<=x.length-1; i++) {
        x[i]= x[i].charAt(0).toUpperCase() + x[i].substring(1)
    }
    x = x.join(" ")
    return x
  };