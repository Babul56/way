document.addEventListener('alpine:init', () => {
    Alpine.data('photoGalleryApp', () => ({
    currentPhoto: 0,
    photos: [
        "../../images/images/up-empire-tower-2.jpg"
    ],
    init() { this.changePhoto(); },
    nextPhoto() {
        if ( this.hasNext() ) {
            this.currentPhoto++;
            this.changePhoto();
        }
    },
    previousPhoto() {
        if ( this.hasPrevious() ) {
            this.currentPhoto--;
            this.changePhoto();
        }
    },
    changePhoto() {
        this.$refs.mainImage.src = this.photos[this.currentPhoto];
    },
    pickPhoto(index) {
        this.currentPhoto = index;
        this.changePhoto();
    },
    hasPrevious() {
        return this.currentPhoto > 0;
    },
    hasNext() {
        return this.photos.length > (this.currentPhoto + 1);
    }
    }))
});