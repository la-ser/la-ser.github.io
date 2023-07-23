function download() {

    var ErrorKey = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000) + "?" + (Math.random() + 1).toString(36).substring(2)

    var version = "1#lFS"

    var filename = "Err!" + ErrorKey + "-" + version + ".txt"
    var text = "an error has occurred >> " + "rs - missing data" + "\n" + "error-id >> " + ErrorKey + "\n" + "more infos at >> https://la-ser.github.io/help#data-missing-error"

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
