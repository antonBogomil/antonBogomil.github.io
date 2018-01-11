(function () {

    var index= 0 ;
    var Gallery = function () {
        this.element = document.querySelector('.modal-layer');
        this.closeBtn = this.element.querySelector('.close-btn');
        this._onclickClose = this._onclickClose.bind(this);
        this._keyClose= this._keyClose.bind(this);
        this.initControl();
    };



    Gallery.prototype.render  = function () {
        var galleryList = this.element.querySelector('.gallery-list');
        galleryList.innerHTML='';
        var images = this.data.images;
        if (images){
            const IMG_PLAYERS_PATH = "img/players/"+this.data.name+"/" ;
            images.forEach(function (item,index) {
                var img = new Image();
                img.src = IMG_PLAYERS_PATH +item;
                img.setAttribute('data-index',index);
                galleryList.appendChild(img);
            });
        }
        this.setCurrentImage(0);
    };

    Gallery.prototype.initControl = function () {
        var step= function() {
            gallery.setCurrentImage(this.getAttribute('data-index'),!this.classList.contains('control-btn') );
        };
        var left = document.querySelector('.control-left');
        var right = document.querySelector('.control-right');
        left.addEventListener('click',step);
        right.addEventListener('click',step);
        var imageList = document.querySelector('.gallery-list');
        if (imageList.hasChildNodes()){
            imageList.addEventListener('click',function (e) {
                if (e.target.parentNode == imageList){
                    var el = e.target;
                    gallery.setCurrentImage(el.getAttribute('data-index'),true)
                }
            })
        };
    };
    Gallery.prototype.initControlImage = function () {

    }
    Gallery.prototype.setCurrentImage = function (i,f) {
        if (f){
            index=0;
        }
        var images = document.querySelectorAll('.gallery-list img');
        var galleryWindow = document.querySelector('.gallery-window-image');
        if (images.length==0){
            console.log('no-photos');
            galleryWindow.style.backgroundImage = 'url('+')';
            return
        }
        var prev = document.querySelector('img.active');
        index = index + +(i);
        if (index<0){
            index = images.length-1;
        }
        if (index>=images.length){
            index=0;
        }
        if (prev){
            prev.classList.remove('active');
        }
        images[index].classList.add('active');
        galleryWindow.style.backgroundImage = 'url('+images[index].src+')';
    } ;

    Gallery.prototype.show = function () {
        this.element.classList.add('show');
        this.render();
        this.closeBtn.addEventListener('click',this._onclickClose);
        document.addEventListener('keydown', this._keyClose);


    };
    Gallery.prototype.closeModal = function () {
        this.element.classList.remove('show');
        this.closeBtn.removeEventListener('click',this._onclickClose);
        document.removeEventListener('keydown', this._keyClose);
        index = 0;
    };
    Gallery.prototype._onclickClose = function () {
        this.closeModal();

    };
    Gallery.prototype._keyClose = function (e) {
        if (e.keyCode === 27){
            this.closeModal();
        }
    };
    window.Gallery = Gallery;

})();