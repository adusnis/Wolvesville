// ==UserScript==
// @name         CollectChat
// @namespace    http://tampermonkey.net/
// @version      2024-02-21
// @description  try to take over the world!
// @author       You
// @match        *://*.wolvesville.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
var n = 0;

var imHumanCount = document.createElement('button');
    imHumanCount.innerHTML = 'imHumanCount=' + n;
    imHumanCount.style.position = 'fixed';
    imHumanCount.style.top = '0';
    imHumanCount.style.right = '0';

    document.body.appendChild(imHumanCount);

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function imHuman(){
    await sleep(2000);
    var mark = document.getElementsByClassName('mark')[0];
    if(mark){
        mark.click();
    }
    n++;
    imHumanCount.innerHTML = 'imHumanCount=' + n;
}

(function(){
    var startScripts = document.createElement('button');
    startScripts.innerHTML = 'Start Scripts';
    startScripts.style.position = 'fixed';
    startScripts.style.top = '0';
    startScripts.style.left = '0';
    document.body.appendChild(startScripts);
    startScripts.onclick = async function() {
        while (true) {
            await sleep(1000);
            await joinGame();
            await inGame();
            await leaveGame();
        }
    }
})();

async function joinGame(){
    let completeJoin = false;
    console.log("Joining game...");
    var game = document.getElementsByTagName('body')[0];
    var SPECTATE = game.getElementsByClassName('css-1rynq56 r-vw2c0b r-q4m81j')
    for (let i of SPECTATE) {
        if (i.textContent.includes('SPECTATE')) {
            i.click();
            imHuman()

            completeJoin = true;
            break;
        }
    }
    if (!completeJoin) {
        await sleep(1000);
        for (let i of SPECTATE) {
        if (i.textContent.includes('RANKED GAMES')) {
            i.click();
            imHuman()
            break;
        }
    }
        await joinGame()
        return;
    }
    await sleep(1000);
    game = document.getElementsByTagName('body')[0];
    var joinButton = game.getElementsByClassName('css-1rynq56 r-1i10wst r-1kfrs79')[1]
    joinButton.click();
    imHuman();
}

async function leaveGame(){
    console.log("Leaving game...");
    var game = document.getElementsByTagName('body')[0];
    var button = game.getElementsByClassName('css-1rynq56 r-lrvibr')[0]
    button.click();
}

async function inGame() {
    let loop = true
    while (loop) {
        imHuman()
        var game = document.getElementsByTagName('body')[0];
        var gameEnd = game.getElementsByClassName('css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1niwhzg r-jwli3a r-adyw6z r-1vr29t4 r-q4m81j')[0];
        if(gameEnd.lenght){
            loop = false
            console.log(txt);
        }
        console.log('waiting');
        await sleep(5000)
    }
    await sleep(5000)

    game = document.getElementsByTagName('body')[0];

    var blob = new Blob([game], { type: 'text/html' });

    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'game.html';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    imHuman()

    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);

    console.log('done');
}