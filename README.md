# PUBLIC
please do not download any files from my github account that don't have tutorials on them, most of them are viruses. see [here](https://github.com/Sreekar617/mvhs_moment) for more details

## Part 1: Saving the script
1. Copy the code below.
```
javascript:(function()%7Bvar theId %3D window.location.href%3Bvar theOtherId %3D window.location.href%3Bvar YouTube %3D "youtube"%3Bvar YouTube2 %3D "https%3A%2F%2Fyoutu.be%2F"%3Bvar YouTube3 %3D "http%3A%2F%2Fyoutu.be%2F"%3Bvar YouTube4 %3D "youtu.be%2F"%3Bif (theId.indexOf(YouTube) >%3D 0) %7Bvar string %3D theId.split('%3D')%3BtheId %3D string%5B1%5D%3B%7Dif (theId.indexOf(YouTube2) >%3D 0) %7Bvar sString %3D theId.split('%2F')%3BtheId %3D sString%5B3%5D%3B%7Dif (theId.indexOf(YouTube3) >%3D 0) %7Bvar ssString %3D theId.split('%2F')%3BtheId %3D ssString%5B3%5D%3B%7Dif (theId.indexOf(YouTube4) >%3D 0) %7Bvar sssString %3D theId.split('%2F')%3BtheId %3D sssString%5B3%5D%3B%7Dvar newId %3D theId.match(%2F.%7B1%2C11%7D%2Fg)%3Bvar otherId %3D theOtherId.split('%26')%3BotherId.splice(0%2C 1)%3Bvar otherPartId %3D "%3F" %2B otherId%5B0%5D%3BotherId.splice(0%2C 1)%3Bfor(i %3D 0%3B i<otherId.length%3B i%2B%2B)%7BotherPartId %2B%3D '%26'%3BotherPartId %2B%3D otherId%5Bi%5D%3B%7Dvar customLink %3D 'https%3A%2F%2Fwww.youtube-nocookie.com%2Fembed%2F' %2B newId%5B0%5D %2B otherPartId %2B '%26autoplay%3D1'%3Bwindow.location.href %3D '' %2B customLink%7D)()
```
2. Bookmark this page, then right click on the bookmark and hit "Edit"
3. Name it whatever you want.
4. Delete everything currently in the box labeled "URL"
5. Paste in the code you copied earlier
## Part 2: Executing the script
1. Navigate to any Youtube video
2. Click on the bookmark you created earlier
3. It should redirect you to an unblocked link
4. Share the current link with students. It should be unblocked.
