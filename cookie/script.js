var version = "2.4"
document.getElementById('version').innerHTML = "V"+version;

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

function reset() {
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

function loadChecks() {
    /* no data bug */
    if (perClickUpgradeCost < 1 || perClick < 1) {
        reset();
    }

    /* VERSION */
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
    onClick()

    perClick = getCookie("perClick");
    console.log(perClick + " per click loaded")
    perClick = Math.floor(perClick);
    onClick()

    autoUpgradeClicks = autoUpgradeClicksSAVED
    if (autoUpgradeClicks == "on") {
        autoUpgradeCheckBox.click();
    } else if (autoUpgradeClicks == "off") {
        return;
    }
}

function onClick() {
    /* set stats */
    setCookie("clicks", clicks);
    setCookie("perClickUpgradeCost", perClickUpgradeCost);
    setCookie("perClick", perClick);

    /* Set Text */
    perClickUpgradeCost = Math.round(perClickUpgradeCost)
    if (username != "" && username != null) {
        perClickDiv.innerHTML = username + ", you need " + perClickUpgradeCost + " cookies!" + " [One Click: " + perClick + "]"
    } else {
        perClickDiv.innerHTML = "You need " + perClickUpgradeCost + " cookies!" + " [One Click: " + perClick + "]"
    }

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

        cookieDISPLAY.innerHTML = clicks;
    } else {
        clicksSAVED = prompt("Please enter your Cookies:", clicks);
        if (clicksSAVED != "" && clicksSAVED != null) {
            setCookie("clicksSAVED", clicksSAVED);
            clicks = clicksSAVED;
            saveClicks();
            checkCookie();
        }
    }
}

function deleteCookies() {
    document.cookie = "clicks=;";
    alert("Your saved cookies got deleted.")
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
        alert("Cookies saved: " + clicks + " [One Click:" + perClick + "]")
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