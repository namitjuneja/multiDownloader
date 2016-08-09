document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

document.querySelector('#settings_help').addEventListener('click', function() {
  if (chrome.runtime.openOptionsPage) {
    // New way to open options pages, if supported (Chrome 42+).
    chrome.runtime.openOptionsPage();
  } else {
    // Reasonable fallback.
    window.open(chrome.runtime.getURL('options.html'));
  }
});


var toggle  = document.getElementById("settings_settings");
var help = document.getElementById("help");
var shortcuts = document.getElementById("shortcuts");

console.log(help.style.display == "block");

toggle.addEventListener("click", function()
{
    if (help.style.display == "block")
    {
        help.style.display = "none";
        shortcuts.style.display = "block"
        toggle.style.borderColor = "#888";
        toggle.style.borderStyle = "solid";
        toggle.style.borderWidth = "thin";
        toggle.style.fontWeight = "bold";
    }
    else if (help.style.display == "none")
    {
        help.style.display = "block";
        shortcuts.style.display = "none";
        toggle.style.borderWidth = "0px";
        toggle.style.fontWeight = "";
    }
}, false);