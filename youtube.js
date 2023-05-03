function start() {

  ////CONFIG////

  var link = "https://www.youtube.com/"; // link to app webpage
  var title = "Youtube"; // title shown in navbar
  var id = "https://raw.githubusercontent.com/Sreekar617/i-love-rice/main/youtube.js"; // set this to the url location of your script
  
  ////SCRIPT////
  
  var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
  ExampleLink.innerHTML = title; 
  ExampleLink.className = id; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleIFrame.id);
  });
  ExampleLink.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    closeApp(ExampleIFrame.id);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();
