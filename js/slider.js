       //slider track
       const sliderTrack = document.querySelector('.slider__track');
       const track = Array.from(sliderTrack.children);

       //getting width from the first child in the track
       const sliderWidth = track[0].getBoundingClientRect().width;
       console.log(track);


       //bring the the image to left side with same width
       const prevBtn = document.querySelector('.slider__btn-left');
       const nextBtn = document.querySelector('.slider__btn-right');


       function SlideMover(moveImage, nextImage, amountToMove) {
            moveImage.classList.remove('move_Image');
            sliderTrack.style.transform = 'translateX(-' + amountToMove + ')';
            nextImage.classList.add('move_Image');
       }


       nextBtn.addEventListener('click', function forward() {

            const moveImage = sliderTrack.querySelector('.move_Image');
            const nextImage = moveImage.nextElementSibling;
            const amountToMove = nextImage.style.left;

            SlideMover(moveImage, nextImage, amountToMove);

       });

       prevBtn.addEventListener('click', function previous() {

            const moveImage = sliderTrack.querySelector('.move_Image');
            const nextImage = moveImage.previousElementSibling;
            const amountToMove = nextImage.style.left;

            SlideMover(moveImage, nextImage, amountToMove);

       });

       for (let i = 0; i < track.length; i++) {
            track[i].style.left = sliderWidth * i + 'px';
       }
