var counterContainerBlog = document.querySelector(".website-counter-blog");
var counterContainerAnasayfa = document.querySelector(".website-counter-anasayfa");
var counterContainerAnasayfaENG = document.querySelector(".website-counter-anasayfa-eng");
var counterContainerAnasayfaSW = document.querySelector(".website-counter-anasayfa-sw");
var counterContainerArduino = document.querySelector(".website-counter-arduino");
var counterContainerDijitalGunluk = document.querySelector(".website-counter-dijitalgunluk");
var counterContainerInstaFollowers = document.querySelector(".website-counter-instafollowers");
var counterContainerOyunlar = document.querySelector(".website-counter-oyunlar");
var counterContainerRandomTools = document.querySelector(".website-counter-randomtools");
var counterContainerRandomToolsAndroid = document.querySelector(".website-counter-randomtoolsandroid");
var counterContainerSS = document.querySelector(".website-counter-ss");
var counterContainerSS2 = document.querySelector(".website-counter-ss2");
var counterContainerSS3 = document.querySelector(".website-counter-ss3");
var counterContainerTombala = document.querySelector(".website-counter-tombala");

var visitCountBlog = localStorage.getItem("pageBlog");
var visitCountAnasayfa = localStorage.getItem("pageHome");
var visitCountAnasayfaENG = localStorage.getItem("pageHomeEng");
var visitCountAnasayfaSW = localStorage.getItem("pageHomeSW");
var visitCountArduino = localStorage.getItem("pageArduino");
var visitCountDijitalGunluk = localStorage.getItem("pageDijitalGunluk");
var visitCountInstaFollowers = localStorage.getItem("pageInstaFollowers");
var visitCountOyunlar = localStorage.getItem("pageOyunlar");
var visitCountRandomTools = localStorage.getItem("pageRandomTools");
var visitCountRandomToolsAndroid = localStorage.getItem("pageRandomToolsAndroid");
var visitCountSS = localStorage.getItem("pageSS");
var visitCountSS2 = localStorage.getItem("pageSS2");
var visitCountSS3 = localStorage.getItem("pageSS3");
var visitCountTombala = localStorage.getItem("pageTombala");

counterContainerBlog.innerHTML = visitCountBlog;
counterContainerAnasayfa.innerHTML = visitCountAnasayfa;
counterContainerAnasayfaENG.innerHTML = visitCountAnasayfaENG;
counterContainerAnasayfaSW.innerHTML = visitCountAnasayfaSW;
counterContainerArduino.innerHTML = visitCountArduino;
counterContainerDijitalGunluk.innerHTML = visitCountDijitalGunluk;
counterContainerInstaFollowers.innerHTML = visitCountInstaFollowers;
counterContainerOyunlar.innerHTML = visitCountOyunlar;
counterContainerRandomTools.innerHTML = visitCountRandomTools;
counterContainerRandomToolsAndroid.innerHTML = visitCountRandomToolsAndroid;
counterContainerSS.innerHTML = visitCountSS;
counterContainerSS2.innerHTML = visitCountSS2;
counterContainerSS3.innerHTML = visitCountSS3;
counterContainerTombala.innerHTML = visitCountTombala;