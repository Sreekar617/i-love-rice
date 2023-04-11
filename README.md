# PUBLIC
please do not download any files from my github account that don't have tutorials on them, most of them are viruses. see [here](https://github.com/Sreekar617/mvhs_moment) for more details

## Tools for teachers and responsible students. If you do not have a brain, turn back now. This repo is only for people with brains.
## I do not condone any misuse of the tools included here. Use responsibly and at your own risk.
## Everything on this page is for educational purposes to see how far we can push Chrome OS, the pathetic excuse for an operating system that runs on pathetic excuses for computers.

<details>

<summary><b>blow up iboss</b></summary>

1. Bookmark any page
2. Copy the code below
```js
if (
  location.href.startsWith("chrome-extension://") ||
  location.href.startsWith("about")
) {
  var background = opener.chrome.extension?.getBackgroundPage();
  document.documentElement.innerHTML = `<head> <center> <h1> [swamp] original for iBoss </h1> </center> </head><br><div><h3>Motivated by <a href="https://www.reddit.com/r/Teachers/comments/zj0jqp/fun_with_goguardian">this Reddit post</a> --- By using this launcher, you agree to the use of Google Analytics</h3></div><hr/> <div> <h2><b> Run your own code </b> </h2></div><p> Put your script here to run it while pretending to be the iBoss extension. You will be able to access most "chrome" scripts and have other privileges such as access to all websites. Note that your code is saved automatically. Developers: try interacting with the "swamp" object while running code on this page! </p> <textarea id="code" placeholder="Input goes here."></textarea> <pre><textarea class="output" id="output" placeholder="Output shows here"></textarea></pre><button id="rundir">Run on this page</button><button id="reload">Reload scripts on this page</button><br><button id="background">Run as background</button><br><p>Concerning the buttons above: Running on this page is pretty self explanatory. The script only takes effect when this page is open, but running as background lets the script run even with the tab closed. Basically, it means that the script is being run at the highest level of a Chrome extension, in the background, so it persists until Chrome is fully restarted (with chrome://restart for example).</p><hr><h2> Interesting scripts </h2><p> Some useful scripts for the textbox above. DM Aka, but nice#5094 on Discord to suggest new ones (or general improvements to this launcher).</p><select id="scripts"><option>Pick a script</option> 
```
3. Right click on the bookmark, click on "edit"
4. Under the field labeled "URL", paste in the code.
5. Go to [this page.](https://tinyurl.com/byeswamp)
6. Click on "The Blue Hat Crew Is the Best!"
7. On the blank page that appears, click on the bookmark you created earlier.
8. I recommend clicking "Soft Kill", which resets every time you restart your chromebook. "Hard Kill" will not reset when you restart, but it breaks some other things.

</details>

  
<details>
  
  <summary><b>extension thingie for youtube</b></summary>
  
1. Copy the code below
  ```js
  javascript:opener.chrome.send("TurnOffSync");
  ```
2. Bookmark any random page
3. Right click on the bookmark, and hit "Edit"
4. Under the field labeled "URL", paste in the code
5. Visit chrome://settings/resetProfileSettings
6. Press on "current settings"
<img width="379" alt="current_settings" src="https://user-images.githubusercontent.com/115044820/230745894-49e77af2-b4e5-4441-b7d3-075c7674ff58.png">
  
7. On the new page that opens, click on the bookmark you created earlier.
8. visit chrome://restart, DO NOT RESTART YOUR CHROMEBOOK MANUALLY
9. repeat steps 5-8 every time it stops working.
10. if google sign-ins break, restart your device.

Go to youtube, click the lock next to the url, click on "cookies and site data", and delete all cookies. In a new tab, go to youtube. It should be unblocked.

</details>

<details>
  
<summary><b>Youtube trick for teachers</b></summary>
  
## Part 1: Saving the script
1. Copy the code below.
```
javascript:(function()%7Bvar theId %3D window.location.href%3Bvar theOtherId %3D window.location.href%3Bvar YouTube %3D "youtube"%3Bvar YouTube2 %3D "https%3A%2F%2Fyoutu.be%2F"%3Bvar YouTube3 %3D "http%3A%2F%2Fyoutu.be%2F"%3Bvar YouTube4 %3D "youtu.be%2F"%3Bif (theId.indexOf(YouTube) >%3D 0) %7Bvar string %3D theId.split('%3D')%3BtheId %3D string%5B1%5D%3B%7Dif (theId.indexOf(YouTube2) >%3D 0) %7Bvar sString %3D theId.split('%2F')%3BtheId %3D sString%5B3%5D%3B%7Dif (theId.indexOf(YouTube3) >%3D 0) %7Bvar ssString %3D theId.split('%2F')%3BtheId %3D ssString%5B3%5D%3B%7Dif (theId.indexOf(YouTube4) >%3D 0) %7Bvar sssString %3D theId.split('%2F')%3BtheId %3D sssString%5B3%5D%3B%7Dvar newId %3D theId.match(%2F.%7B1%2C11%7D%2Fg)%3Bvar otherId %3D theOtherId.split('%26')%3BotherId.splice(0%2C 1)%3Bvar otherPartId %3D "%3F" %2B otherId%5B0%5D%3BotherId.splice(0%2C 1)%3Bfor(i %3D 0%3B i<otherId.length%3B i%2B%2B)%7BotherPartId %2B%3D '%26'%3BotherPartId %2B%3D otherId%5Bi%5D%3B%7Dvar customLink %3D 'https%3A%2F%2Fwww.youtube-nocookie.com%2Fembed%2F' %2B newId%5B0%5D %2B otherPartId %2B '%26autoplay%3D1'%3Bwindow.location.href %3D '' %2B customLink%7D)()
```
2. Bookmark this page, then right click on the bookmark and hit "Edit"
3. Name it whatever you want.
4. Delete everything currently in the box labeled "URL"
5. Paste in the code you copied earlier
6. Press "Done" to save the script.
## Part 2: Executing the script
1. Navigate to any Youtube video
2. Click on the bookmark you created earlier
3. It should redirect you to an unblocked link
4. Share the current link with students. It should be unblocked.

</details>

i love rice
