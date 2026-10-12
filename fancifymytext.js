function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function changeStyle()
{
    var text = document.getElementById("textArea");

    if (document.getElementById("fancy").checked) 
    {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } 
    else 
    {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}


function moo() 
{
    var textArea = document.getElementById("textArea");

    var text = textArea.value;

    // make everything uppercase
    text = text.toUpperCase();

    // separate the sentences at each period
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {

        var sentence = sentences[i].trim();

        if (sentence.length > 0) 
        {

            // separate sentence into words
            var words = sentence.split(" ");

            // add -Moo to the last word
            words[words.length - 1] =
                words[words.length - 1] + "-Moo";

            // put the words back together
            sentences[i] = words.join(" ");
        }
    }

    // sentences back together
    textArea.value = sentences.join(".");
}