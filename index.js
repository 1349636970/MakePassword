$("button").click(function () {
    makePassword()
})


function makePassword() {
    var length = Number($("#length").val())
    var digits = Number($("#digits").val())
    var symbols = Number($("#symbols").val())
    $('#generalPassword').empty();
    $("#message").empty()
    if (digits + symbols >= length) {
        $("#message").append("Digits and symbols could not be greater than length")
        return false
    }
    var dictionaryURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
    $.get(dictionaryURL, function (data) {
        lengofWords = length - digits - symbols
        listofWords = (data.split("\n"))
        filterWords = []
        $.each(listofWords, function (key, value) {
            if (value.trim().length == lengofWords) {
                filterWords.push(value)
            }
        })
        if (filterWords.length == 0) {
            $("#message").append("The length should under 31")
            return false
        }
        word = filterWords[getRandomInt(filterWords.length)]
        symbolsList = "!@#$%^&*()_+|}{:;,./<>?".split("")
        for (var i = 0; i < symbols; i++) {
            word += symbolsList[getRandomInt(symbolsList.length)]
        }
        for (var i = 0; i < digits; i++) {
            word += String(getRandomInt(10))
        }
        $("#generalPassword").empty()
        $("#generalPassword").append(word)

    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}