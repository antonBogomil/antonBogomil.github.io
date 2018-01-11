
(function () {

    function Player(data,teamImg,nationImg) {
        this._data = data;
        this._teamImg = teamImg;
        this._nationImg = nationImg;
        this._onClick = this._onClick.bind(this);
    }
    window.Player = Player;
    Player.prototype.onClick = null;
    Player.prototype.render = function () {
        function getColor(rate) {
            var playerSuper = "#3c8b79";
            var playerBest = "#27c74a";
            var playerGood = "#a7f753";
            var playerMiddle = "#e0dd52";
            var playerBad = "#ff797e";
            switch (true){
                case (rate>60&&rate<=70): return playerMiddle;
                case (rate>70&&rate<=80): return playerGood;
                case (rate>80&&rate<=90): return playerBest;
                case (rate>90) : return playerSuper;
                default :return playerBad;
            }
        }
        const IMG_PLAYERS_PATH = "img/players/"+this._data.name+"/" ;
        const IMG_TEAM_PATH= "img/teams/";
        const IMG_NATION_PATH= "img/nations/";
        var templ = document.querySelector('#template');
        var newArticle = templ.content.children[0].cloneNode(true);
        this.element = newArticle ;
        newArticle.querySelector('.player-photo').style.backgroundImage = 'url('+IMG_PLAYERS_PATH + this._data.photo+')';
        newArticle.querySelector('.player-name').textContent = this._data.name;
        newArticle.querySelector('.player-team-name').textContent = this._data.team;
        newArticle.querySelector('.player-rating').textContent = this._data.rate;
        newArticle.querySelector('.player-rating').style.backgroundColor = getColor(this._data.rate);
        newArticle.querySelector('.player-position').textContent= this._data.position;
        newArticle.querySelector('.player-nation span:first-of-type').textContent= this._data.nation;
        newArticle.querySelector('.player-team-logo').style.backgroundImage = 'url('+IMG_TEAM_PATH+this._teamImg+')';
        newArticle.querySelector('.nation-flag').style.backgroundImage = 'url('+IMG_NATION_PATH+this._nationImg+')';
        newArticle.querySelector('.player-age-number').textContent= this._data.age;
        this.element.addEventListener('click',this._onClick);
    };
    Player.prototype._onClick = function (e) {
            if (e.target.classList.contains('player-photo')){
                if (typeof this.onClick === "function"){
                    this.onClick();
                }
            }
    };

    Player.prototype.removeEvListenter = function () {
        this.element.removeEventListener('click',this._onClick);
    }


}
)();
