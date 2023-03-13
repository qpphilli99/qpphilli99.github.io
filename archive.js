$(document).ready(function() {
    $(document).on('click touchstart', '#pro', function() {
        console.log('running');

        $('.acadcon').addClass('hide'); 
        $('.procon').removeClass('hide');
        $('#aca').removeClass('btn-lg');
        $('#pro').addClass('btn-lg');

    });

    $(document).on('click touchstart', '#aca', function() {
        console.log('running');

        $('.procon').addClass('hide');
        $('.acadcon').removeClass('hide');
        $('#pro').removeClass('btn-lg');
        $('#aca').addClass('btn-lg');

    });
});

