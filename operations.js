$(document).ready(function () {
    $('#title').click(function () {
    
        hideOthers();
        document.getElementById("load-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-home').click(function () {
    
        hideOthers();
        document.getElementById("home-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-gallary').click(function () {
    
        hideOthers();
        document.getElementById("gallary-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-location').click(function () {
    
        hideOthers();
        document.getElementById("location-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-wwd').click(function () {
    
        hideOthers();
        document.getElementById("wwd-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-contact').click(function () {
    
        hideOthers();
        document.getElementById("contact-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    $('#click-about').click(function () {
    
        hideOthers();
        document.getElementById("about-div").style.display = 'block';
        //TODO: Implement
        
    });
    
    
});

function hideOthers() {
    document.getElementById('home-div').style.display = 'none';
    document.getElementById('gallary-div').style.display = 'none';
    document.getElementById('location-div').style.display = 'none';
    document.getElementById('wwd-div').style.display = 'none';
    document.getElementById('contact-div').style.display = 'none';
    document.getElementById('about-div').style.display = 'none';
    document.getElementById('load-div').style.display = 'none';
}