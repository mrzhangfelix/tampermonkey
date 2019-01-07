// ==UserScript==
// @name         hiddenZhihu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏知乎无用模块
// @author       felixZhang
// @match        https://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function removeZhihu() {
        let zhihulogo = document.getElementsByClassName("ZhihuLogo");
        for(var logo of zhihulogo){
            logo.style.display='none'
        }
        let GlobalSideBar = document.getElementsByClassName("GlobalSideBar");
        for(var side of GlobalSideBar){
            side.style.display='none'
        }
        let AppHeader = document.getElementsByClassName("AppHeader");
        for(var head of AppHeader){
            head.style.display='none'
        }
        let RichContentCover = document.getElementsByClassName("RichContent-cover");
        for(var cover of RichContentCover){
            cover.style.display='none'
        }
        let ContentItemActions = document.getElementsByClassName("ContentItem-actions");
        for(var action of ContentItemActions){
            action.style.display='none'
        }
        let TopstoryItemAdvertCard = document.getElementsByClassName("TopstoryItem--advertCard");
        for(var card of TopstoryItemAdvertCard){
            card.style.display='none'
        }
        let htmlzhihu = document.getElementsByTagName("HTML")[0];
        htmlzhihu.dataset.theme="dark"
    }
    console.debug('隐藏知乎无用模块');
    removeZhihu();

    let TopstoryContent = document.getElementsByClassName("Topstory-content");
    for(var content of TopstoryContent){
        content.addEventListener('DOMNodeInserted',function () {
            removeZhihu();
        })
    }

})();
