var textInput = document.querySelector("#translate");
var clickBtnTranslate = document.querySelector("#btn");
var finalbtn = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslate(input)
{
    return serverURL + "?" + "text=" + input
}
function clickHandler()
{
    var inputText = textInput.value;
    fetch(getTranslate(inputText))
      .then(response => response.json())
      .then(json => {
          var translatedOutput = json.contents.translated;
          finalbtn.innerText = translatedOutput;

       })
}
clickBtnTranslate.addEventListener("click" , clickHandler);