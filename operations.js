$(document).ready(function () {
    
    layBricks();
    
    
    
    $('#title').click(function (e) {
        
        e.preventDefault();
        
        if(document.getElementById('nav-bar').style.display === 'block') {
            if($(window).width() <= 800) {
            $("#nav-bar").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".exit-hamburger").hide();
            });
        }
        }
    
        hideOthers();
        document.getElementById("load-div").style.display = 'block';
        //TODO: Implement
        
        initMap();
        
    });
    
    
    $('#click-gallary').click(function (e) {
        
        e.preventDefault();
        
        if($(window).width() <= 800) {
            $("#nav-bar").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".exit-hamburger").hide();
            });
        }
    
        hideOthers();
        $("gallary-div").css('display', '');
        document.getElementById("gallary-div").style.display = 'block';
        
        //TODO: Implement
        
    });
    
    $('#click-location').click(function (e) {
        
        e.preventDefault();
        
        if($(window).width() <= 800) {
            $("#nav-bar").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".exit-hamburger").hide();
            });
        }
    
        hideOthers();
        document.getElementById("location-div").style.display = 'block';
        initMap();
        //TODO: Implement
        
    });
    
    $('#click-wwd').click(function (e) {
        
        e.preventDefault();
        
        if($(window).width() <= 800) {
            $("#nav-bar").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".exit-hamburger").hide();
            });
        }
    
        hideOthers();
        document.getElementById("wwd-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-contact').click(function (e) {
        
        e.preventDefault();
        
        if($(window).width() <= 800) {
            $("#nav-bar").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".exit-hamburger").hide();
            });
        }
    
        hideOthers();
        document.getElementById("contact-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-about').click(function (e) {
        
        e.preventDefault();
        
        if($(window).width() <= 800) {
            $("#nav-bar").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".exit-hamburger").hide();
            });
        }
    
        hideOthers();
        document.getElementById("about-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $(".hamburger").click(function () {
       
        $("#nav-bar").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".exit-hamburger").show();
        });
        
    });
    
    $(".exit-hamburger").click(function () {
        $("#nav-bar").slideToggle("slow", function () {
            $(".hamburger").show();
            $(".exit-hamburger").hide();
        });
    });
    
    $(window).resize(function() {
        
        var win = $(this);
        
        initMap();
        
        if(win.width() >= 800) {
         
            $('#nav-bar').css('display', '');
            
        }
        
    });
    
    $('#rotatingPicture').on('click touchstart', function () {
        next();
    });
    
    
    
});

function hideOthers() {
    document.getElementById('gallary-div').style.display = 'none';
    document.getElementById('location-div').style.display = 'none';
    document.getElementById('wwd-div').style.display = 'none';
    document.getElementById('contact-div').style.display = 'none';
    document.getElementById('about-div').style.display = 'none';
    document.getElementById('load-div').style.display = 'none';
}

function layBricks() {
    var brick1 = document.getElementById('brick1');
    var brick2 = document.getElementById('brick2');
    var brick3 = document.getElementById('brick3');
    var brick4 = document.getElementById('brick4');
    var brick5 = document.getElementById('brick5');
    var brick6 = document.getElementById('brick6');
    
    var pos = 0, id = setInterval(frame, 20);
    
    function frame(){
        if(pos === 28) {
            clearInterval(id);
        } else{
            pos++;
            brick1.style.top = pos - 3 + 'px';
            brick1.style.left = pos + 35 + 'px';
            
            brick2.style.top = pos - 3 + 'px';
            brick2.style.left = pos + 15 + 'px';
            
            brick3.style.top = pos - 3 + 'px';
            brick3.style.left = pos - 5 + 'px';
            
            brick4.style.top = pos - 13 + 'px';
            brick4.style.left = pos + 25 + 'px';
            
            brick5.style.top = pos - 13 + 'px';
            brick5.style.left = pos + 5 + 'px';
            
            brick6.style.top = pos - 23 + 'px';
            brick6.style.left = pos + 15 + 'px';
        }
    }
    
}

var i = 0;
var pictures = new Array("/pictures/roofing.jpg","/pictures/conservatory.jpg","/pictures/mainpage.jpg");

function next() {
    
    i++;
    if(i === pictures.length) {
        i = 0;
    }
    
    document.getElementById('rotatingPicture').src = pictures[i];
    
}