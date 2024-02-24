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
const sleep = ms => new Promise(r => setTimeout(r, ms));

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
    console.log("Joining game...");
    var game = document.getElementsByTagName('body')[0];
    var SPECTATE = game.getElementsByClassName('css-1rynq56 r-vw2c0b r-q4m81j')
    for (let i of SPECTATE) {
        if (i.textContent.includes('SPECTATE')) {
            i.click();
            break;
        }
    }
    await sleep(1000);
    game = document.getElementsByTagName('body')[0];
    var joinButton = game.getElementsByClassName('css-1rynq56 r-1i10wst r-1kfrs79')[1]
    joinButton.click();
}

async function leaveGame(){
    console.log("Leaving game...");
    var game = document.getElementsByTagName('body')[0];
    var button = game.getElementsByClassName('css-1rynq56 r-lrvibr')[0]
    button.click();
    /*
    await sleep(1000);
    game = document.getElementsByTagName('body')[0];
    var confirm = game.getElementsByClassName('css-1rynq56 r-1i10wst r-1kfrs79')[1]
    confirm.click();*/
}

async function inGame() {
    let loop = true
    while (loop) {
        var game = document.getElementsByTagName('body')[0];
        var gameEnd = game.getElementsByClassName('css-1rynq56 r-1niwhzg r-ubezar r-vw2c0b r-14gqq1x r-fdjqy7')
        for(let i of gameEnd){
            let txt = i.textContent;
            txt = txt.replace(/\n\s*/g, ' ').trim();
            if ((txt.includes('win!') || txt.includes('wins!') || txt.includes('tie'))) {
                loop = false
            }
            console.log(txt);
        }
        console.log('waiting');
        await sleep(5000)
    }
    await sleep(5000)
    /*css-175oi2r r-eqz5dr r-17s6mgv r-1udh08x r-qpntkw
    const announcement1 = 'div.css-1rynq56.r-1niwhzg.r-fdjqy7'
    const announcement2 = 'div.css-1rynq56.r-1niwhzg.r-ubezar.r-vw2c0b.r-14gqq1x.r-fdjqy7[style="color: rgb(255, 64, 129)"]'
    const playerText = 'div.css-175oi2r.r-1awozwy.r-18u37iz'
    */
    // Collect text content from selected elements
    var game = document.getElementsByTagName('body')[0];
    const gameEvents = game.querySelectorAll('.css-1rynq56.r-1niwhzg.r-fdjqy7, div.css-1rynq56.r-1niwhzg.r-ubezar.r-vw2c0b.r-14gqq1x.r-fdjqy7, .css-1rynq56.r-13awgt0.r-1b43r93.r-16dba41.r-gy4na3.r-19gegkz.r-1vvnge1, .css-1rynq56.r-13awgt0.r-1b43r93.r-16dba41.r-gy4na3.r-19gegkz.r-1vvnge1.r-36ujnk.r-1g80hic');
    const roles = game.querySelectorAll('.css-175oi2r.r-lrvibr.r-1uu6nss.r-13qz1uu.r-1loqt21.r-1otgn73');


    var chat = [];
    var roleDict = []
    for (let role of roles){

        const player = role.textContent.replace(/\n\s*/g, ' ').trim().split(' ')[0];

        let playerRole = role.querySelector('img')
        if (playerRole) {
            playerRole = playerRole.getAttribute('src').textContent.split('_')[1]
            roleDict.push({player: player, role: playerRole});
        }

    }
    console.log(roles)

    for (let event of gameEvents) {
        let txt = event.textContent;
        txt = txt.replace(/\n\s*/g, ' ').trim();
        if((event.className === 'css-1rynq56 r-1niwhzg r-ubezar r-vw2c0b r-14gqq1x r-fdjqy7' || event.className === 'css-1rynq56 r-1niwhzg r-fdjqy7') && !txt.includes('Welcome')){
            const obj = {type: 'announcement', text: txt};
            chat.push(obj);
            if ((txt.includes('win!') || txt.includes('wins!'))) {
                break;
            }
        }
        else if(event.className === 'css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1'){
            const player = txt.split(':')[0].split(' ')[0];
            const message = txt.split(':')[1].trim();
            let role = roleDict.find(x => x.player === player).role
            console.log(role)
            const obj = {type: 'playerText',player:player, role:role, message: message, chat: "village"};
            chat.push(obj);
        }
        else if(event.className === 'css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1 r-36ujnk r-1g80hic'){
            let player = txt.split(':')[0];
            if (player.includes(' ') || player === "Medium") { //is player not spectator
                player = player.split(' ')[0];
                const message = txt.split(':')[1].trim();
                let role = roleDict.find(x => x.player === player).role
                console.log(role)
                const obj = {type: 'playerText',player:player, role:role, message: message, chat: "dead"};
                chat.push(obj);
            }
        }
    }

    //css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1 r-36ujnk r-1g80hic
    //css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1


    // Create a Blob with the HTML content
    var blob = new Blob([JSON.stringify(chat)], { type: 'application/json' });


    // Create a temporary link and trigger the download
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'game.json';
    link.style.display = 'none'; // Hide the link
    document.body.appendChild(link);
    link.click();

    // Clean up
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);

    console.log('done');
}