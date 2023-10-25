document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 1;
    let i1 = document.querySelector('.i1');
    let i2 = document.querySelector('.i2');
    let i3 = document.querySelector('.i3');
    let numbers = document.querySelectorAll('.number');



    i2.style.display = 'none';
    i3.style.display = 'none';
    i1.style.display = 'block';

    function changeSlide(clickedNumber) {
        document.querySelectorAll('.line').forEach(function(line) {
            line.style.width = '20px';
        });

        if (clickedNumber === 1) {
            i2.style.display = 'none';
            i3.style.display = 'none';
            i1.style.display = 'block';
        } else if (clickedNumber === 2) {
            i1.style.display = 'none';
            i3.style.display = 'none';
            i2.style.display = 'block';
        } else {
            i1.style.display = 'none';
            i2.style.display = 'none';
            i3.style.display = 'block';
        }

        document.querySelector('.number[data-id="' + clickedNumber + '"] .line').style.width = '70px';
    }

    numbers.forEach(function(number) {
        number.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-id'), 10);
            changeSlide(currentSlide);
        });
    });

    function autoChange() {
        currentSlide++;
        if (currentSlide > 3) {
            currentSlide = 1;
        }
        changeSlide(currentSlide);
    }

    let autoChangeTimer = setInterval(autoChange, 4000);
});
