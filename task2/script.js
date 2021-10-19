$(window).on('load', function discoBall() {
    let r, g, b, left, top;
    clearInterval(discoBall);
    discoBall = setInterval(function() {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        left = Math.round(Math.random() * 1500);
        top = Math.round(Math.random() * 500);
        $('.circle').css({
            background: `rgb(${r}, ${g}, ${b})`,
            border: `3px solid rgb(${r}, ${g}, ${b})`
        });
        $('.circle').animate({
            marginLeft: left,
            marginTop: top
        }, 'easeInSine');
    }, 1000)
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    left = Math.round(Math.random() * 1500);
    top = Math.round(Math.random() * 500);
    $('.circle').css({
        background: `rgb(${r}, ${g}, ${b})`,
        border: `3px solid rgb(${r}, ${g}, ${b})`
    });
    $('.circle').animate({
        marginLeft: left,
        marginTop: top
    }, 'easeInSine');
});