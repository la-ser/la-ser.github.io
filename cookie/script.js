var perClick = 1;
var perClickUpgradeCost = 10;
var perClickDiv = document.getElementById('per-click');

var cookieDISPLAY = document.getElementById('cookie-disply');
var cookieDATA = document.createElement('div');
cookieDATA.innerHTML = '<button id="cookie">0</button>';
cookieDATA.style.position = 'absolute';
cookieDATA.style.top = '50%';
cookieDATA.style.left = '50%';
cookieDATA.style.transform = 'translate(-50%, -50%)';
cookieDATA.style.zIndex = '1'
document.body.appendChild(cookieDATA);
var clicks = 0;
clicks = Math.round(clicks)
var clicker = document.getElementById('cookie-display');
clicker.onclick = function () {
    clicks = clicks + perClick;
    var clickerDisplay = document.getElementById('cookie');
    clickerDisplay.innerHTML = clicks;

    clicker.innerHTML = clickerDisplay.innerHTML
};

/* COOKIES */
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cookieDISPLAY = document.getElementById('cookie-display');
    var clicker = document.getElementById('cookie');
    clicks = clicker.innerHTML;
    clicks = Math.floor(clicks);

    let clicksSAVED = getCookie("clicks");
    let perClickSAVED = getCookie("perClick");
    let perClickUpgradeCostSAVED = getCookie("perClickUpgradeCost");
    if (clicksSAVED != "") {
        alert("Save Loaded! | Your Cookies: " + clicksSAVED + "/" + perClickSAVED);
        clicks = clicksSAVED;
        clicks = Math.floor(clicks);
        perClick = perClickSAVED;
        perClick = Math.floor(perClick);
        perClickUpgradeCost = perClickUpgradeCostSAVED;
        perClickUpgradeCost = Math.floor(perClickUpgradeCost);

        clicker.innerHTML = clicks;
        cookieDISPLAY.innerHTML = clicks;
    } else {
        clicksSAVED = prompt("Please enter your Cookies:", clicks);
        if (clicksSAVED != "" && clicksSAVED != null) {
            setCookie("clicks", clicksSAVED);
            clicks = clicksSAVED;
            saveClicks()
            checkCookie();
        }
    }
}

function deleteCookies() {
    document.cookie = "clicks=;";
    alert("Your saved cookies got deleted.")
}

function saveClicks() {
    clicks = Math.floor(clicks);
    alert("Cookies saved: " + clicks + " [One Click:" + perClick + "]")
    setCookie("clicks", clicks);
    setCookie("perClick", perClick);
    setCookie("perClickUpgradeCost", perClickUpgradeCost);
}

function upgradeClicks() {
    if (clicks >= perClickUpgradeCost) {
        perClick++;
        // perClickDiv.innerHTML = perClick + " per Click"
        clicks = clicks - perClickUpgradeCost
        clicker.innerHTML = clicks;

        perClickUpgradeCost = Math.round(perClickUpgradeCost)
        perClickUpgradeCostHALF = perClickUpgradeCost / 2;
        perClickUpgradeCost = perClickUpgradeCost + perClickUpgradeCostHALF;
    }
};

function onClick() {
    /* Set Text */
    perClickUpgradeCost = Math.round(perClickUpgradeCost)
    perClickDiv.innerHTML = "You need " + perClickUpgradeCost + " cookies!" + " [One Click: " + perClick + "]"

    var autoUpgradeCheckBox = document.getElementById("auto-upgrade");
    
    if (autoUpgradeCheckBox.checked) {
        upgradeClicks()
    } else return;
}