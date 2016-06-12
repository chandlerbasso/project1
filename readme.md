<h1> USER STORY</h1>
as a wdi student im going to use jquery and java script to make a side scrolling "shooter" that will either be time or point based(depending on what my skills allow) that will have several objects/pictures/gifs sliding across the screen at varying speeds clicking them will destroy them and it will log your score in either a points method or a time stamp that youll have to beat
 
 I probably didnt add/commit enough for your liking, but once i get in the zone its hard to get out, ill work on that bad habbit

you have to have the unity game engine installed to look at the indiviual scripts i made, i can either show you it on my computer or i can send them in an email, slack, text dosnt matter, but theres like 8 different pages that id have to send

 Finished project:
 In order to make the game i use the Unity game engine (will include links at end of readme) its essentially a generated enviroment that allows me to place objects in a 3d or 2d enviroment, once the object is placed i then have to manually script what id like that object to do, most objects require multiple different scripts attatched in order to function properly, it comes with a pre installed script editor called mono develop, unfortunatley for me unity is trying to cut back on their support for java script so the auto complete feature no longer worked in this enviroment, unitys main web page offers a plethora of video tutorials and text based manuals as well as a vast user community all offering eachother help. there are several pre made variables to deal with certain degrees of physics in the game but mostly all had to be logically scripted.

 I first attemted to make an asteroid style game, but the physics required(ex. vectors proplsion and spin) were all above my head so i opted for a left to right shoot the falling objects style game, which required much less physics to worry about

 my biggest issues were: getting the enemies and bullets to dissapear once they left the screen, getting the ship to stay on the screen, and destroying the objects with the bullet.also i wasnt able to seperate the provided code into a sepreate css and javascript file due to unknown technological issues
 i had other issues but none nearly as major as those stated above,

 in order to play the game you have to have the unity web player(which i had long before even downloading the development software because i like games) google chrome also no longer supports the unity game engine which means you have to use safari, firefox or internet explore.... scratch that last one lol.

 the goals i wasnt able to accomplish were, a highscore board, a begin game menu(it kind of just throws you into it)a game over menu and a sprite for the bullet

 i approached this game by breaking it into smaller pieces, first i made the player able to move, followed by giving the bullet velocity, then i worked on attatching the bullet to the ship and making it able to fire with space. next i worked on the enimes,i only had to script each step once then attatch it to each object, i gave them downward velocity, followed by making them spawn out side of the screen, then i had to make them get destroyed by only colliding with the bullet, once that was done i had to make them colliding with the player kill him, then i had to make a score board, and assign points to each object but only give the score board points if it was destroyed by the bullet, i then spent several hours fiddling with a start game button and an end game menu but to no avail so i made a button at the bottom of the page that reloads it if you want to play again, the last thing i got to work was making the player not able to leave the game screen. then i had to get it on a web page which is alot easier done than said, they have a build menu that would allow me to build the game for anything from a web browser to a smart tv to an xbox one, i would have to optomize the controlls for anything but web tho, it automatically generates an html page with css and js imbedded into it, i eddited some of the css to fit my background image and text/link color and tried very desperatley to seperate the provided css and js into seperate pages but alas it was for naught. i also added controls on the page but the way it was formatted it wouldnt allow me to put it parallel with the game screen.

 bibliography: I would have ended it all if it wernt for these valuable resources 

 all my basic scripting needs: http://docs.unity3d.com/ScriptReference/

 most were in c sharp but it still helped: https://unity3d.com/learn/tutorials

 i had help from several sources: http://answers.unity3d.com

