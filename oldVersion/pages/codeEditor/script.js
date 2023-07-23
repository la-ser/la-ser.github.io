function run() {
    let htmlCode = document.querySelector(".input-field-1 #html-code").value;
    let cssCode = "<style>" + document.querySelector(".input-field-2 #css-code").value + "</style>";
    let jsCode = document.querySelector(".input-field-2 #js-code").value;
    let output = document.querySelector(".output-field #output");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}
document.querySelector(".input-field-1 #html-code").addEventListener("keyup", run);
document.querySelector(".input-field-2 #css-code").addEventListener("keyup", run);
document.querySelector(".input-field-2 #js-code").addEventListener("keyup", run);

// in arbeit (nervt)
/*window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
};*/

function downloadFile(fileNameToSaveAs){
    let htmlCode = document.querySelector(".input-field-1 #html-code").value;
    let cssCode = "\n<style>\n" + document.querySelector(".input-field-2 #css-code").value + "\n</style>";
    let jsCode = document.querySelector(".input-field-2 #js-code").value;
    var textToSave = htmlCode + "\n" + cssCode + "\n\n<script>\n" + jsCode + "\n</script>";
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = fileNameToSaveAs;
    hiddenElement.click();
}