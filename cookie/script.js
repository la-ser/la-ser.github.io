var version = "2.6"
document.getElementById('version').innerHTML = "V" + version;

/* COOKIES */
let usernameSAVED = getCookie("username");
let clicksSAVED = getCookie("clicksSAVED");
let perClickSAVED = getCookie("perClickSAVED");
let perClickUpgradeCostSAVED = getCookie("perClickUpgradeCostSAVED");
let autoUpgradeClicksSAVED = getCookie("autoUpgradeClicksSAVED");

var clicksVAR = 0;
var perClickVAR = 1;
var perClickUpgradeCostVAR = 10;
var autoUpgradeClicksVAR = "off";

var clicks = clicksVAR;
var perClick = perClickVAR;
var perClickUpgradeCost = perClickUpgradeCostVAR;
var perClickDiv = document.getElementById('per-click');
var autoUpgradeClicks = autoUpgradeClicksVAR;

var username = null;

var autoUpgradeCheckBox = document.getElementById("auto-upgrade-clicks");

var cookieDISPLAY = document.getElementById('cookie-disply');
clicks = Math.round(clicks)
var clicker = document.getElementById('cookie-display');
clicker.onclick = function () {
    clicks = clicks + perClick;

    clicker.innerHTML = clicks;
};

function resetStats() {
    clicks = clicksVAR;
    perClick = perClickVAR;
    perClickUpgradeCost = perClickUpgradeCostVAR;
    autoUpgradeClicks = autoUpgradeClicksVAR;

    clicker.innerHTML = clicks;
    onClick()
}

function updateVersion() {
    setCookie("currentversion", version);
    alert("Version updated! | " + version)
}

function test() {
    clicks = 0;
    perClick = 0;
    perClickUpgradeCost = 0;
}

function loadChecks() {/* VERSION */
    currentversion = getCookie("currentversion");
    if (version != currentversion) {
        console.log("Version: OLD / loading new one")
        updateVersion()
    } else {
        console.log("Version: Up to date!")
    }

    /* load stats */
    clicks = getCookie("clicks");
    console.log(clicks + " clicks loaded")
    clicks = Math.floor(clicks);
    clicker.innerHTML = clicks;

    perClickUpgradeCost = getCookie("perClickUpgradeCost");
    console.log(perClickUpgradeCost + " upgrade cost loaded")
    perClickUpgradeCost = Math.floor(perClickUpgradeCost);
    if (perClickUpgradeCost < perClickUpgradeCostVAR) {
        perClickUpgradeCost = perClickUpgradeCostVAR;
    }
    setText();

    perClick = getCookie("perClick");
    console.log(perClick + " per click loaded")
    perClick = Math.floor(perClick);
    if (perClick < perClickVAR) {
        perClick = perClickVAR;
    }
    setText();

    autoUpgradeClicks = autoUpgradeClicksSAVED
    if (autoUpgradeClicks == "on") {
        autoUpgradeCheckBox.checked = true;
    } else if (autoUpgradeClicks == "off") {
        return;
    }

    console.log("loading stats complete..")
}

function onClick() {
    /* set stats */
    setCookie("clicks", clicks);
    setCookie("perClickUpgradeCost", perClickUpgradeCost);
    setCookie("perClick", perClick);

    setText();

    if (autoUpgradeCheckBox.checked === true) {
        upgradeClicks()
    } else return;
}

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
    if (clicksSAVED != "" && clicksSAVED != null) {
        username = usernameSAVED;
        alert(username + " | Your Cookies: " + clicksSAVED + "/" + perClickSAVED);
        clicks = clicksSAVED;
        clicks = Math.floor(clicks);
        perClick = perClickSAVED;
        perClick = Math.floor(perClick);
        perClickUpgradeCost = perClickUpgradeCostSAVED;
        perClickUpgradeCost = Math.floor(perClickUpgradeCost);

        onClick();
    } else {
        // clicksSAVED = prompt("Please enter your Cookies:", clicks);
        // if (clicksSAVED != "" && clicksSAVED != null) {
        //     setCookie("clicksSAVED", clicksSAVED);
        //     clicks = clicksSAVED;
        //     saveClicks();
        //     checkCookie();
        // }
        alert("No saved data found!")
    }
}

// function deleteCookies() {
//     document.cookie = "clicks=;";
//     document.cookie = "username=;";
//     document.cookie = "clicksSAVED=;";
//     document.cookie = "perClickSAVED=;";
//     document.cookie = "perClickUpgradeCostSAVED=;";
//     document.cookie = "autoUpgradeClicksSAVED=;";
//     alert("Your saved cookies got deleted.")
//     console.log(document.cookie)
// }

function deleteCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    console.log("Cookies left: " + document.cookie)
}

function saveClicks() {
    /* SET USERNAME */
    let usernameSAVED = getCookie("username");
    // if (username != "" && username != null) {
    //     alert(username)
    // } else {
    usernameSAVED = prompt("Please enter your Name", "");
    if (usernameSAVED != "" && usernameSAVED != null) {
        username = usernameSAVED;
        setCookie("username", usernameSAVED);

        clicks = Math.floor(clicks);
        alert("Cookies saved: " + clicks + " [per Click:" + perClick + "]")
        setCookie("clicksSAVED", clicks);
        setCookie("perClickSAVED", perClick);
        setCookie("perClickUpgradeCostSAVED", perClickUpgradeCost);
    }
    // }
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
        setText();
    }
};

function autoUpgradeClicksCheckBox(checkBox) {
    if (checkBox.checked) {
        autoUpgradeClicks = "on";
        console.log("AutoUpgradeClicks: " + autoUpgradeClicks)
        setCookie("autoUpgradeClicksSAVED", autoUpgradeClicks);
    } else {
        autoUpgradeClicks = "off";
        console.log("AutoUpgradeClicks: " + autoUpgradeClicks)
        setCookie("autoUpgradeClicksSAVED", autoUpgradeClicks);
    }
}

function setText() {
    /* Set Text */
    clicker.innerHTML = clicks;

    perClickUpgradeCost = Math.round(perClickUpgradeCost)
    if (username != "" && username != null) {
        perClickDiv.innerHTML = username + ", you need " + perClickUpgradeCost + " cookies!" + " <br>[One Click: " + perClick + "]"
    } else {
        perClickDiv.innerHTML = "You need " + perClickUpgradeCost + " cookies!" + " <br>[One Click: " + perClick + "]"
    }
}
