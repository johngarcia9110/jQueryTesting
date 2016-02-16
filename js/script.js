//script.js

$(function () {
    //alert('hello');
    //$( 'h2, h3, h4' ).css( 'color',  'red' );
    //$('div#container').css('border', 'solid 1px red');
   // $('p.lead').css('border', 'solid 1px red');
    
    //$('li:first').css('border', 'solid 1px red');
    $('p:even').css('color', 'green');
    
    /* jQuery Methods */
    $('#box').click(function() {
        alert("you just clicked the box");
    });
    $("input").blur(function(){
        if( $(this).val() == ""){
            $(this).css("border","solid 1px red");
            $('#box').text('forgot to add text?');
        }
    });
    
    $("input").keydown(function(){
        if( $(this).val() !== "" ) {
            $(this).css('border', 'solid 1px #777');
            $('#box').text('Thanks for that!');
        }
    });
    
    $('#box').hover(function(){
        $(this).text('you hovered!');
    }, function(){
        $(this).text('you hovered out!');
    });
    
    /*jQuery Chaining*/
    
    $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();
    
    /* hide show */
    
    //$('h1').hide();
    //$('p').fadeOut();
   // $('div.hidden').fadeIn(8000);
    $('#box1').click(function(){
        $(this).fadeTo(1000, 0.25, function(){
            
            $(this).slideUp();
        });
    });
    $('div.hidden').slideDown();
    
    $('button').click(function(){
        $('#box1').slideToggle();
    });
    
    /* animate */
    $('#left').click(function(){
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function(){
            
        });
    });
    $('#right').click(function(){
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function(){
            
        });
    });
     $('#up').click(function(){
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function(){
            
        });
    });
     $('#down').click(function(){
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function(){
            
        });
    });
    
   /* jQuery + css */
    
    $('#circle2').css({ 
        'background': '#8a8d22',
        'display': 'inline-block',
        'color': 'white',
        'text-align': 'center',
        'line-height': '140px',
        'height': '140px',
        'width': '140px'
    }).addClass('circleShape');
   
    /* Race Car jQuery */
    
    $('#go').click( function(){
        
        //function to see if car won the race
        
        function checkIfComplete(){
            if( isComplete == false){
                isComplete = true;
            } else {
                place = 'second';
            }
        }
        
       var carWidth = $('#car1').width();
       var raceTrackWidth = $(window).width() - carWidth;
        
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
       
    
        var isComplete = false;
    
        var place = 'first';
    
        $('#car1').animate({
           // move car the width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function(){
            
            //animation is complete
            //run function to tell if car has completed race
            checkIfComplete();
            
            $('#raceInfo1 span').text( 'finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
        });
        
        $('#car2').animate({
           // move car the width of the racetrack
            left: raceTrackWidth
            
        }, raceTime2, function(){
            
            //animation is complete
            //run function to tell if car has completed race
            checkIfComplete();
            
            $('#raceInfo2 span').text( 'finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
        });
       });
    $('#reset').click(function(){
        $('.car').css('left', '0');
        $('.raceInfo span').text(' ');
    });

    
});













