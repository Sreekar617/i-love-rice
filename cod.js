function swamp(){
  var chrome = window.chrome;
document.documentElement.innerHTML =
  `<head> <center> <h1> [UBoss]  <strong> Ur </strong> moms the <strong> BOSS </strong> </h1> </center></head><br> <h4> <center> This is based off of the original swamp launcher, the new point-blank method and the old extesnion id disabler. <hr> <strong> Credits: </strong> Aka, but nice (for the main code layout and javascript), Bypassi (for the original Swamp code and Point-Blank), Lego Axolotl (For name idea, and beta testing), and finally, the <a href="https://www.youtube.com/@thebluehatcrew/Sub_Confirmation=1">BlueHatCrew</a> for making the UI and initial idea of this. </h4> </center> <hr> <br><div><style> pre,textarea{display:inline-block;height:400px}*{box-sizing:border-box}body{padding:10px;font-size:110%;color:#349633 ;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}button,input,pre,select,textarea{color:#000;font-size:15px}h1,h2,h3,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px solid #fff}input,kbd,pre,textarea{font-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:10px;p
dding:10px 17px;border:none}button,input{background-color:#fff;padding:10px 20px;margin:0 5px 5px 0}input{width:600px;border-radius:10px}textarea{white-space:pre;float:left;width:60%;border-radius:10px 0 0 10px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:0 10px 10px 0;padding:8px;float:right;margin:0 0 25px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none;border-radius:10px;cursor:pointer;transition:filter 250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#4fef7c;transition:color 250ms}a:hover{color:#1c8e40}</style><br><br><center><input id="id" placeholder="Put Extension ID Here: (split by commas)"><br> <button id="disable">Disable</button>`;
document.getElementById("disable").addEventListener(
  "click",
  function () {
    var ids = document
      .getElementById("id")
      .value.split(",")
      .forEach((e) => {
    chrome.management.setEnabled(ids.trim(), false);
      });
  },
  !1
);
    document.title = "[uboss] launcher";
chrome.management.getAll(function (extensions) {
  extensions.forEach((extension) => {
    var button = document.createElement("button");
    (button.textContent = extension.name),
      (button.id = extension.id),
      (button.enabled = extension.enabled),
      (button.onclick = toggle);
    document.documentElement.appendChild(button);
  });
});
var blocking = false;
function toggle() {
  if (blocking) {
  chrome.management.setEnabled(this.id, false);
  } else {
  chrome.management.setEnabled(this.id, true);
  }
  blocking = !blocking;
}
toggle();
this.onclick = toggle();
document.write(
  '<style> pre,textarea{display:inline-block;height:400px}*{box-sizing:border-box}body{padding:10px;font-size:110%;color:#fff;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}button,input,pre,select,textarea{color:#000;font-size:15px}h1,h2,h3,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px solid #fff}input,kbd,pre,textarea{font-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:10px;padding:10px 17px;border:none}button,input{background-color:#fff;padding:10px 20px;margin:0 5px 5px 0}input{width:600px;border-radius:10px}textarea{white-space:pre;float:left;width:60%;border-radius:10px 0 0 10px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:0 10px 10px 0;padding:8px;float:right;margin:0 0 25px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none;border-radius:10px;cursor:pointer;transition:filter 250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#99edc3;transition:color 250ms}a:hover{color:#1c8e40} </style> <center> <input id="extension" placeholder="Put Extension Id Here"><button id="disable">Disable Extension</button>'
),
  document.getElementById("disable").addEventListener(
    "click",
    function () {
      var ids = document
        .getElementById("extension")
        .value.split(",")
        .forEach((i) => {
          chrome.management.setEnabled(i.trim(), !1);
        });
    },
    !1
  );
}
var chrome = window.chrome;
if (window !== chrome.extension?.getBackgroundPage())
  open("/manifest.json").onload = function () {
    this.eval(
      swamp.toString() + "swamp();var chrome",
      (this.document.body.textContent = ""),
      this.history.replaceState({},{},"/uboss"),
      this.opener.close()
    );
    top.close();
  };