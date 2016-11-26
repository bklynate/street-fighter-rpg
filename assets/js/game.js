var $ken = $('.ken')
/* javascript */
$(document).on('keydown', function(e) {
    if (e.key === 'p') {
        console.log("This is listening");
        $('.ken').addClass('punch');
        setTimeout(function() { $ken.removeClass('punch'); }, 150);
    }

    if (e.key === 'k') {
        console.log("This is listening");
        $('.ken').addClass('kick');
        setTimeout(function() { $ken.removeClass('kick'); }, 500);
    }

    if (e.key === 's') {
        console.log("This is listening");
        $('.ken').addClass('shoryuken');
        setTimeout(function() { $ken.addClass('down'); }, 500);
        setTimeout(function() { $ken.removeClass('shoryuken down'); }, 1000);
    }
});
