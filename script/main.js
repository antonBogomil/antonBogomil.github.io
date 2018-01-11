//
// (function () {
//     'use strict'
//     function create(data) {
//         data.forEach(function (item,index,data) {
//             document.querySelector('.section').appendChild(template(item));
//         });
//     };
//     function template(info) {
//         var template = document.querySelector('#articles');
//         var article = template.content.children[0].cloneNode(true);
//         article.querySelector('h2').textContent = info.players[0];
//         article.querySelector('p').textContent = info.p;
//
//         var backImage= new Image();
//
//         backImage.onload = function () {
//             article.style.backgroundImage = "url('"+ backImage.src +"')";
//         };
//         backImage.onerror = function () {
//             article.classList.add('no-image');
//         };
//         backImage.src=info.path;
//         return article;
//     }
//     create(data);
//
//
// })();
"use strict";
//
// var fragment = document.createDocumentFragment();
// var data;
// var players = []; /*Массив для игроков*/
// var filterValue; /* Значение фильтра */
//
// getData(); /*Загрузка данных*/
//
// function addPlayer(player,data) {
//     function getColor(rate) {
//         var playerSuper = "#3c8b79";
//         var playerBest = "#27c74a";
//         var playerGood = "#a7f753";
//         var playerMiddle = "#e0dd52";
//         var playerBad = "#ff797e";
//         switch (true){
//             case (rate>60&&rate<=70): return playerMiddle;
//             case (rate>70&&rate<=80): return playerGood;
//             case (rate>80&&rate<=90): return playerBest;
//             case (rate>90) : return playerSuper;
//             default :return playerBad;
//         }
//     }
//     const IMG_PLAYERS_PATH = "img/players/" ;
//     const IMG_TEAM_PATH= "img/teams/";
//     const IMG_NATION_PATH= "img/nations/";
//     var templ = document.querySelector('#template');
//     var newArticle = templ.content.children[0].cloneNode(true);
//     newArticle.querySelector('.player-photo').style.backgroundImage = 'url('+IMG_PLAYERS_PATH + player.photo+')';
//     newArticle.querySelector('.player-name').textContent = player.name;
//     newArticle.querySelector('.player-team-name').textContent = player.team;
//     newArticle.querySelector('.player-rating').textContent = player.rate;
//     newArticle.querySelector('.player-rating').style.backgroundColor = getColor(player.rate);
//     newArticle.querySelector('.player-position').textContent= player.position;
//     newArticle.querySelector('.player-nation span:first-of-type').textContent= player.nation;
//     newArticle.querySelector('.player-team-logo').style.backgroundImage = 'url('+IMG_TEAM_PATH+data.teams[player.team]+')';
//     newArticle.querySelector('.nation-flag').style.backgroundImage = 'url('+IMG_NATION_PATH+data.nations[player.nation]+')';
//     newArticle.querySelector('.player-age-number').textContent= player.age;
//     fragment.appendChild(newArticle);
// }
// var pageStartPosition = 0;
// var pageCountArticle = 4;
//
//
// // document.querySelector('.btn-show').onclick = function () {
// //     renderData(data,null,++pageStartPosition);
// // };
// var scrollTimer;
// window.addEventListener('scroll',function (e) {
//     clearTimeout(scrollTimer);
//     scrollTimer = setTimeout(function () {
//         console.log(1);
//         var footerBottom = document.querySelector('.main-footer').getBoundingClientRect().bottom;
//         var windowHeight = window.innerHeight;
//         if (footerBottom == windowHeight){
//             renderData(data,null,++pageStartPosition);
//         }
//     },100);
// });
//
// function renderData(data,playersArray,startPage) {
//     var currentStart = startPage+1;
//     var begin = startPage*pageCountArticle ;
//     var end = currentStart * pageCountArticle;
//     var newArr = data.players.slice(begin,end);
//
//     if (playersArray){
//         playersArray.forEach(function (player,i) {
//             addPlayer(player,data);
//             players[i] = player;
//         });
//     }
//     else {
//         newArr.forEach(function (player, i) {
//             addPlayer(player, data);
//             players[i] = player;
//         });
//     }
//
//     var list = document.querySelector('.player-list');
//     list.appendChild(fragment);
//     var playerLink = document.querySelectorAll('.player-link');
//     console.log(playerLink);
//     var modal = document.querySelector('.modal-layer');
//     var closeModal = document.querySelector('.close-btn');
//     document.addEventListener('keydown',function (e) {
//         console.log(e.keyCode);
//         if (e.keyCode === 27){
//             modal.classList.remove('show');
//         }
//     })
//     modal.onclick = function (e) {
//         if ((e.target.classList.contains('show'))|| e.target.classList.contains('close-btn')){
//             this.classList.remove('show');
//         }
//     }
//     for (let j=0 ;j<playerLink.length;j++){
//         playerLink[j].onclick = function (e) {
//             modal.classList.add('show');
//         }
//     }
// }
//
// function getData() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'script/data.json');
//     xhr.onload = function (evt) {
//         data=JSON.parse(evt.target.response);
//         renderData(data,null,pageStartPosition);
//     };
//     xhr.send();
//
// }
//


//
//
//
// function filter(id,currentArray) {
//     if (filterValue == id){
//         console.log("already");
//         return ;
//     }
//     var copyArray = currentArray.slice(0);
//     filterValue = id;
//     switch (id){
//         case "filter-sort-up":
//             copyArray.sort(function (a,b) {
//                 return a.rate-b.rate;
//             });
//             break;
//         case "filter-sort-down":
//             copyArray.sort(function (a,b) {
//                 return b.rate-a.rate;
//             });
//     }
//
//     clear(".player-link.player");
//     renderData(data,copyArray);
// }
// function clear(elemClass) {
//     let elem = document.querySelectorAll(elemClass);
//     for (var i = 0 ; i<elem.length;i++){
//         elem[i].remove();
//     }
//     console.log("removed");
// }
//
