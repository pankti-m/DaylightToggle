$(document).ready(function(){
    $('#celestial').click(function() {
		if ($('#celestial').hasClass('sun')) {
            $('#celestial').removeClass('sun').addClass('moon');
        } else {
            // If it doesn't have the sun class, it must have the
            // moon class already. We should remove moon and add sun.
            $('#celestial').removeClass('moon').addClass('sun');
        }
            
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }
            
        if ($('#moonspot1').hasClass('visible')) {
            $('#moonspot1').removeClass('visible');
        } else {
            $('#moonspot1').addClass('visible');
        }
        
        if ($('#moonspot2').hasClass('visible')) {
            $('#moonspot2').removeClass('visible');
        } else {
            $('#moonspot2').addClass('visible');
        }
        
        if ($('#moonspot3').hasClass('visible')) {
            $('#moonspot3').removeClass('visible');
        } else {
            $('#moonspot3').addClass('visible');
        }
        
    });
    
});








