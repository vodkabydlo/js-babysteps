function calculator(str) {

    romanObject = {
        "I":1,
        "II":2,
        "III":3,
        "IV":4,
        "V":5,
        "VI":6,
        "VII":7,
        "VIII":8,
        "IX":9,
        "X":10
    }


    if (typeof str !== "string") {
        throw "Pass the string please"
    }
    
    input=str.split(" ");

    if (input.length !==3 ) {
        throw "Input length is not 3"
    } else if (input[1] !== "+" && input[1] !== "-" && input[1] !== "*" && input[1] !== "/") {
        throw "There is no '+-*/' operator between operands"
    }
    
    operandA = input[0]
    operator = input[1]
    operandB = input[2]

    //let's add a variable that tells us whether we are dealing with arabic numbers or roman, for later
    environment=""

    
    if (isNaN(operandA) == false && isNaN(operandB) == false) {
        environment = "arabic"
    }
    else if (romanObject.hasOwnProperty(operandA) == true && romanObject.hasOwnProperty(operandB) == true){
        environment = "roman"
    }
    else throw "Couldn't determine arabic or roman numerals. Do both numbers belong to the same system?"


    if (environment == "arabic"){
        operandA = Number(operandA)
        operandB = Number(operandB)
        if (operandA < 1 || operandB < 1 || operandA >10 || operandB >10 ) {
            throw "Operands must be in range (1-10)"
        }
        else if(Number.isInteger(operandA) == false || Number.isInteger(operandB) == false) {
            throw "All operators must be integers"
        }
        else if (operator=="+"){
            result = operandA + operandB
            return result.toString()
        }
        else if (operator=="-"){
            result = operandA - operandB
            return result.toString()
        }
        else if (operator=="*"){
            result = operandA * operandB
            return result.toString()
        }
        else if (operator=="/"){
            result = parseInt(operandA / operandB)
            return result.toString()
        }

        else return "How did you get here?"
    }
    

    else if (environment = "roman") {
        //romanizer and deromanizer
        
        function deromanize(roman) {
            var lookup = {
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
              };
            arabic = 0
            i = roman.length
            while (i--) {
                if (lookup[roman[i]] < lookup[roman[i+1]])
                arabic -= lookup[roman[i]]
                else
                arabic += lookup[roman[i]]
            }
            return arabic
          }
        
          function romanize(arabic) {
            var lookup = {
              C: 100,
              XC: 90,
              L: 50,
              XL: 40,
              X: 10,
              IX: 9,
              V: 5,
              IV: 4,
              I: 1
            };

            roman = ""
            for (var i of Object.keys(lookup)) {
              var q = Math.floor(arabic / lookup[i]);
              arabic -= q * lookup[i];
              roman += i.repeat(q);
            }
          
            return roman.toString();
          }
        
        
        
         
        operandA = deromanize(operandA)
        operandB = deromanize(operandB)
        if (operandA < 1 || operandB < 1 || operandA >10 || operandB >10 ) {
            throw "Operands must be in range (I-X)"
        }
        else if(Number.isInteger(operandA) == false || Number.isInteger(operandB) == false) {
            throw "All operators must be integers"
        }
        else if (operator=="+"){
            result = operandA + operandB
        }
        else if (operator=="-"){
            result = operandA - operandB
            if (result < 1) {
                return ""
            }
        }
        else if (operator=="*"){
            result = operandA * operandB
        }
        else if (operator=="/"){
            result = parseInt(operandA / operandB)
        }
        if (result == 0) {
            return ""
        }
        return romanize(result)
    }
    

}
