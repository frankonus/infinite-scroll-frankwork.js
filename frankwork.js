$(document).ready(function () {


    //Set your settings for Frankwork.js
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
    
    //If user uses custom settings
    if(typeof(fwCustomSettings) !== 'undefined') {
        // Add default settings to custom fwCustomSettings to get a complete set.
        $.extend(fwSettings, fwCustomSettings);
    }
    
    //Remove display of posts
    $('fw-post').css("display","none");
    
    //Get size of posts
    size_div = $("fw-post").size();
 
    //Load some posts when document ready
    $('fw-post:lt('+fwSettings.postOnLoad+')').fadeIn(fwSettings.postFadeInSpeed);
    
    //Scroll function
    $(window).scroll(function(){
        //If window is 'variabel-height' above the end of the page --> Load more data
        if ($(window).scrollTop() + $(window).height() > $(document).height() - fwSettings.heightDelayBeforeLoading) {
            fwSettings.postOnLoad= (fwSettings.postOnLoad+fwSettings.postOnScroll <= size_div) ? fwSettings.postOnLoad+fwSettings.postOnScroll : size_div;
            $('fw-post:lt('+fwSettings.postOnLoad+')').fadeIn(fwSettings.postFadeInSpeed);
        }
        
        //If user wants a message below his last post --> add messageOnEnd
        if(fwSettings.messageOnEnd == true){
            //Add ID to the last post
            $('fw-container fw-post:last-child').attr('id', 'fw-lastScrollDiv');
            //If last post is visible
            if($('#fw-lastScrollDiv').is(':visible')) {
                //Add the message
                jQuery('<div/>', {
                    id: 'fw-endOfPosts',
                    text: fwSettings.messageText
                }).insertAfter($("#fw-lastScrollDiv")); 
                fwSettings.messageOnEnd = false;
            }
        }
	});
    
    //If user wants a scroll backToTopButton -->
    if(fwSettings.backToTopBtn == true){
        //Add button to body
        jQuery('<fw-backToTopBtn/>', {
            id: 'fw-backToTopBtn',
            text: fwSettings.backToTopBtnText
        }).appendTo('body');
        
        //Fade of backToTopButton function
        $(window).scroll(function(){
            function scrollBtn() {
                //if page is scrolled more then 600px
                if ($(this).scrollTop() > 600) {
                    //Fadein button
                    $('fw-backToTopBtn').stop().fadeIn(fwSettings.backToTopBtnFadeInOutSpeed);
                } else {
                    //Else Fadeout button
                    $('fw-backToTopBtn').stop().fadeOut(fwSettings.backToTopBtnFadeInOutSpeed);
                }
            }
            scrollBtn();
        });
        
        //When backToTopButton clicked -->
        $("fw-backToTopBtn").on("click", function() {
            //Scroll to top of the page
            $('html, body').animate({scrollTop : 0},fwSettings.scrollToTopSpeed);
        });
    }
});