 var lastScrollTop = 0,
        st,
        direction;
   
    function stickyStart() {
        st = window.pageYOffset;
       
        if (st > lastScrollTop) {          
            if (elementSticky.offset().top <= maxScroll ) {
                margTop = st-ofTopOrig-(elementStickyTop-ofTopOrig);
                if (margTop < 0){margTop=0};
                $(elementSticky).css("margin-top" , margTop+"px");
                            }    
        } else {
            if (margTop > 99 ){
                margTop = st-ofTopOrig-(elementStickyTop-ofTopOrig);
                if (margTop > maxScroll ){margTop= maxScroll};
                $(elementSticky).css("margin-top" , margTop+"px");
            }     
        }

        lastScrollTop = st;
        return  direction;
    }

    

margTop = 0;

elementSticky = $("ELEMENT"); //Change "ELEMENT" with your item to make it sticky 

maxScroll = 1000  ; // Specify a value (px) or offset (). top of the element limit

elementStickyTop = elementSticky.offset().top;

elementSticky.css("margin-top" , margTop+"px");

ofTopOrig = window.pageYOffset;
    
$(window).bind('scroll', function() {
    stickyStart();
});


    
 
