Author: Frank van Deursen<br>
Author URL: https://www.iamfrank.eu/<br>
Author Email: me@iamfrank.eu<br>
<br>

============ Synopsis ============<br>
A small framework that can make elements of your choosing fade-in on scroll.
<br><br>

============ Code Example ============<br>
The easiest way to use frankwork.js is putting the <fw-container> tag with <fw-post> tags inside it on the html page. The framework will now use his default settings.
<br>
```html
<body>
    <fw-container>
        <fw-post>Post 1</fw-post>
        <fw-post>Post 2</fw-post>
        <fw-post>Post 3</fw-post>
        <fw-post>Post 4</fw-post>
        <fw-post>Post 5</fw-post>
    </fw-container>
</body>
```
<br>
If you want some own settings, place them inside your html page. (example below):<br>

```
...
    <script>
        var fwCustomSettings = {
            scrollToTopSpeed: 1500,
            backToTopBtn: true,
            messageText: "That's all!"
        };
    </script>
</head>
```

<br>
<br>
============ Default settings ============

```
    var fwSettings = {
        postOnLoad: 3, //How many posts you want to show on page load?
        postOnScroll: 4, //How many posts you want to add on scroll?
        postFadeInSpeed: 1000, //Fade-in & -out of posts 'speed in milliseconds'.

        heightDelayBeforeLoading: 100, //Height from bottom of page when loading new posts.

        backToTopBtn: true, //Do you want a scroll-to-top button?
        backToTopBtnFadeInOutSpeed: 500, //Fade-in & -out of scroll-to-top button 'speed in milliseconds'.
        backToTopBtnText: '', //The text inside your scroll-to-top button.
        scrollToTopSpeed: 1000, //Scroll-to-top 'speed in milliseconds'.

        messageOnEnd: true, //Do you want to show a message when all posts are visible?
        messageText: "We are sorry, but there isn't any more data to show..." //The text you want to show when all posts are visible.
    };
```

<br><br>

============ Demo ============<br>
See frankwork.js [demo](http://frankworks.frankbook.nl)
<br><br>   
   
============ Motivation ============<br>
This framework was created as a small example on how you can create a framework.<br>
The framework is created to make a facebook look-a-like page which have a similar loading system.
<br><br>  
    
============ Complete installation ============<br>
1.  Make sure there's a connection to a jQuery file. - <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script><br>
2.  Make sure there's a connection to the frankwork.js file. - <script src="frankwork.js"></script><br>
3.  Place the <fw-container> tag in the body of your html.<br>
4.  Place as many <fw-post> tags in the <fw-container> as you want.<br>
5.  (Optional) Add your own settings inside your html page.
<br><br>


============ May I Help You ===========<br>
If you have any query about this script, send me a comment to my e-mail - me@iamfrank.eu
