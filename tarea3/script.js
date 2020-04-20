var characterAmauntRange = document.getElementById
("characterAmauntRange")

var characterAmauntNumber = document.getElementById
("characterAmauntNumber")

var includeUppercaseElemnt = document.getElementById 
("includeUppercase")

var includeNumbersElemnt = document.getElementById 
("includeNumbers")

var includeSymbolsElemnt = document.getElementById 
("includeSymbols")

var form = document.getElementById
("passwordg")

var passwordDisplay = document.getElementById
("passwordDisplay")

var UPPERCASE_CHAR_CODE = arrayFromLowToHigh (65,90)
var LOWERCASE_CHAR_CODE = arrayFromLowToHigh (97,122)
var NUMBERS_CHAR_CODE = arrayFromLowToHigh (48,57)
var SYMBOL_CHAR_CODE = arrayFromLowToHigh (33,47).concat(arrayFromLowToHigh(58,64)
).concat(arrayFromLowToHigh(91,96)
).concat(arrayFromLowToHigh(123,126)
)

characterAmauntNumber.addEventListener( "input", syncCharacterAmaunt)
characterAmauntRange.addEventListener( "input", syncCharacterAmaunt)

form.addEventListener ("submit", e=> {
    e.preventDefault()
    var characterAmaunt = characterAmauntNumber.value
    var includeUppercase = includeUppercaseElemnt.cheked
    var includeNumbers = includeNumbersElemnt.cheked
    var includeSymbols = includeSymbolsElemnt.cheked
    var password = generatePassword (characterAmaunt, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password

   
})

function generatePassword (characterAmaunt, includeNumbers, includeSymbols, includeUppercase ){
    var charCodes = LOWERCASE_CHAR_CODE
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODE)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
    
    var passwordCharacters = []
    for ( let i = 0; i < characterAmaunt; i++) {
        var characterCode =charCodes [Math.floor(Math.random()*charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
        
    }
    return passwordCharacters.join("")
}
    

    
    



function arrayFromLowToHigh (low,high){
    var array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
    }

function syncCharacterAmaunt (e) {
    var value = e.target.value
    characterAmauntNumber.value = value
    characterAmauntRange.value = value
}

