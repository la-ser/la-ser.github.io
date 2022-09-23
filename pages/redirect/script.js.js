//window.location.href = ''
const element = document.getElementById("RD-script");

if (element.hasAttribute('RD-01')) {
    document.title = "?redirect-01"
    //test = document.title
    //window.location.href = "https://youtube.com"
    //alert("Title: " + test)
} else if (element.hasAttribute('RD-02')) {
    document.title = "?redirect-02"
}
else console.log("?redirect 404")
