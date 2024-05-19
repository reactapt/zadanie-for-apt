document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    const thumbnails = document.getElementsByClassName('thumbnail');

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src.replace('thumb', 'large'); // Assuming large images have 'large' in their filenames
        }
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
