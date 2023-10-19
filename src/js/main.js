class ZamberlanGallery {

    constructor() {
        this.addGallery();
        this.addSubscribe();
    }

    addSubscribe() {
        const openModalButton = document.querySelector('.open-modal'),
        closeModalButtons = document.querySelectorAll('.close-modal');
  
        openModalButton.addEventListener('click', this.openModal)
              
        closeModalButtons.forEach(closeBtn => {
            closeBtn.addEventListener('click', this.closeModal)
        });
        
    }

    openModal() {
        const modal = document.querySelector('.modal');
        const body = document.querySelector('body');
        body.classList.add('stop-scrolling');
        modal.classList.add('visible');

    }
    
    closeModal() {
        const modal = document.querySelector('.modal');
        const body = document.querySelector('body');
        body.classList.remove('stop-scrolling');
        modal.classList.remove('visible');
    }

    addGallery() {

        const left = document.getElementById('gallery-left');
        const right = document.getElementById('gallery-right');
        const images = document.querySelectorAll('.gallery__item');
        const total = this.getTotalImages();
        let active = this.getActiveImage();
        let newImage = 0;

        left.addEventListener('click', () => {

            active = this.getActiveImage();  

            if (active == 1) {
                newImage = total;
            } else {
                newImage = +active - 1;
            }

            images.forEach(image => {

                if (image.dataset.id == newImage) {

                    image.classList.remove('gallery__item--hidden');
                } else {
                    image.classList.add('gallery__item--hidden');
                }

            })

        })

        right.addEventListener('click', () => {

            active = this.getActiveImage();  

            if (active == total) {
                newImage = 1;
            } else {
                newImage = +active + 1;
            }

            images.forEach(image => {

                if (image.dataset.id == newImage) {

                    image.classList.remove('gallery__item--hidden');
                } else {
                    image.classList.add('gallery__item--hidden');
                }

            })

        })
        
    }

    getActiveImage() {

        const images = document.querySelectorAll('.gallery__item');
        let active = 0;

        images.forEach(image => {
            if (!image.classList.contains('gallery__item--hidden')) {
                active = image.dataset.id;
            }
        })

        return active;
    }

    getTotalImages() {

        const images = document.querySelectorAll('.gallery__item');
        let total = 0;

        images.forEach(image => {
            if (  image.dataset.id > total ) {
                total = image.dataset.id;
            }
        })

        return total;
    }


}

const zamberlanGallery = new ZamberlanGallery();



