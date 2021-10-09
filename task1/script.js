$(function() {
    let r, g, b, width, height, left, top;
    $('.circle').click(function() {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        width = Math.round(Math.random() * 500);
        height = Math.round(Math.random() * 500);
        left = Math.round(Math.random() * 1500);
        top = Math.round(Math.random() * 500);
        $('.circle').css({
            background: `rgb(${r}, ${g}, ${b})`,
        });
        $('.circle').animate({
                width: width,
                height: height,
                marginLeft: left,
                marginTop: top
            },
            'easeOutBounce');
    })


})