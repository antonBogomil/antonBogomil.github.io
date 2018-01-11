'use strict';
var fragment = new DocumentFragment;
var gallery = new Gallery();
(function () {

    var teams;
    var nations;
    var filterValue;
    var playersCreated = [];
    var currentArray;
    var pageStartPosition = 0;
    var pageCountArticle = 2;
    var scrollTimer;
    var list = document.querySelector('.player-list');
    var startArray;
    getData();
    var scrollFunction = function (e) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            var footerBottom = document.querySelector('.main-footer').getBoundingClientRect().bottom;
            var windowHeight = window.innerHeight;
            if (footerBottom == windowHeight){
                currentArray.create(++pageStartPosition);
            }
        },50);

    };

    (function(){
        var filterBtn = document.getElementsByClassName('filter-btn');
        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].onclick = function (evt) {
                currentArray.filter(this.id);
            }
        }
    })();

    function Players(data) {
        this._data = data;
    }

    Players.prototype.filter = function (type) {
        if (filterValue == type) {
            console.log("already");
            return;
        }
        filterValue = type;
        let sortedArray= new Players(this._data.slice(0));
        switch (type) {
            case "filter-sort-up":
                sortedArray._data.sort(function (a, b) {
                    return a.rate - b.rate;
                });
                break;
            case "filter-sort-down":
                sortedArray._data.sort(function (a, b) {
                    return b.rate - a.rate;
                });
        }
        sortedArray.create(pageStartPosition=0,true);
        currentArray = sortedArray;
    };
    Players.prototype.create = function (num,replace) {
        window.addEventListener('scroll', scrollFunction);
        if (playersCreated.length-num*pageCountArticle<-1){
            window.removeEventListener('scroll',scrollFunction);
            return
        }
        if (replace){
            window.removeEventListener('scroll',scrollFunction);
            [].forEach.call(playersCreated,function (el) {
                el.onClick = null;
                el.removeEvListenter();
            });
            playersCreated = [];
            list.innerHTML = "";
        }
        window.addEventListener('scroll', scrollFunction);
        var begin = pageStartPosition*pageCountArticle;
        var end = pageStartPosition*pageCountArticle+pageCountArticle;
        var slicedArray = this._data.slice(begin,end);
        playersCreated = playersCreated.concat(slicedArray.map(function (item) {
            var player = new Player(item, teams[item.team], nations[item.nation]);
            player.render();
            if(begin>1){
                setTimeout(function () {
                    player.element.classList.add('new');
                },300)
            }
            if(begin<2){
                player.element.classList.add('start');
            }
            fragment.appendChild(player.element);
            player.onClick = function () {
                gallery.data = player._data;
                gallery.show();
            }
            return player;
        }));
        list.appendChild(fragment);
    };


    function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'script/data.json');
        xhr.onload = function (evt) {
            let data=JSON.parse(evt.target.response);
            makeData(data);
            currentArray.create(pageStartPosition);
        };
        xhr.send();
    };

    function makeData(data) {
        teams = data.teams;
        nations = data.nations;
        startArray = new Players(data.players);
        currentArray = new Players(data.players);
    };
})();

