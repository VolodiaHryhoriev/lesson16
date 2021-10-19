$(function() {
    let topPosition, leftPosition;
    $('.box').on('click', function() {
        topPosition = this.offsetTop;
        leftPosition = this.offsetLeft;
        let modalDiv = $('.modal');
        $('.modal-container').css({
            backgroundColor: '#000000c7',
            zIndex: 3
        });

        modalDiv.css('background-color', $(this).css('background-color'));
        modalDiv.css({
            display: 'flex',
            top: topPosition,
            left: leftPosition
        })
        modalDiv.animate({
            width: '400px',
            height: '400px',
            top: `${topPosition * 4}`,
            left: `${window.innerWidth/2 - 175}`
        }, 1000, 'easeInSine')
    })




    $('.modal').on('click', function() {
        $('.modal').animate({
            top: `${topPosition}`,
            left: `${leftPosition}`,
            width: '150px',
            height: '150px'
        }, 1000, 'easeInSine', function() {
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        })

    })

})