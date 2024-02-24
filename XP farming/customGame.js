// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-02-22
// @description  try to take over the world!
// @author       You
// @match        https://www.wolvesville.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @grant        none
// ==/UserScript==


var iframe = document.createElement('iframe');
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('scrolling', 'no');
iframe.setAttribute('src', 'https://freesound.org/embed/sound/iframe/713082/simple/large/');
iframe.setAttribute('width', '920');
iframe.setAttribute('height', '245');
iframe.setAttribute('style', 'dispaly: none');
iframe.setAttribute('id', 'ring');
document.body.appendChild(iframe);

async function ringing(){
    console.log("ringing...");
    var ring = document.getElementById('ring');
    ring.setAttribute('autoplay', 'true');
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
function imHuman(){
    var mark = document.getElementsByClassName('mark')[0];
    if(mark){
        mark.click();
    }
}

(function(){
    var startScripts = document.createElement('button');
    startScripts.innerHTML = 'Start Scripts';
    startScripts.style.position = 'fixed';
    startScripts.style.top = '0';
    startScripts.style.left = '0';
    document.body.appendChild(startScripts);
    startScripts.onclick = async function() {
        await joinGame();
        while (true) {
            await sleep(1000);
            await inGame();
            await endGame();
        }
    }
})();

async function joinGame(){
    console.log("Joining game...");

    var boostGame = document.getElementsByClassName('css-1rynq56 r-1niwhzg r-jwli3a r-1b43r93 r-1kfrs79');
    for (let i of boostGame) {
        const gameName = i.textContent.toLowerCase();
        if (gameName.includes('vil') && gameName.includes('win') && !gameName.includes('bqt')  && !gameName.includes('trade')) {
            i.click();
            break;
        }
    }

    await sleep(2000);
    var joinButton = document.getElementsByClassName('css-1rynq56 r-1i10wst r-1kfrs79')[1]
    joinButton.click();
    imHuman()
}
//css-1rynq56
//position: absolute; left: -200px; top: 1px; width: 400px; height: 100px; text-align: center; color: rgb(255, 255, 255); font-size: 38px; transform: scale(1.6) translateY(-30px);
async function inGame() {
    console.log("in game...");
    var role = ""
    while(!role){
        imHuman()
        var roles = document.getElementsByClassName('css-1rynq56');
        for (let i of roles) {
            if (i.style.fontSize == "38px"){
                role = i.textContent.toLowerCase().replace(' ', '_');
                console.log(role);
                break;
            }
        }
        await sleep(2000)
    }
    if (chillRole.includes(role)) {
        console.log("Chill Role");
    } else if (wolfRole.includes(role)) {
        console.log("Wolf Role");
    }
    else if (killRole.includes(role)) {
        console.log("Kill Role");
        await
    }

}

async function killRole(){

}
async function endGame(){
    console.log("end game...");
    let loop = true
    while(loop){
        var Continue = document.getElementsByClassName('css-1rynq56 r-vw2c0b')
        for (let i of Continue) {
            if (i.textContent.includes('Continue')) {
                i.click();
                imHuman()
                loop = false
                break;
            }
        }
        await sleep(1000);
    }
    for(let i = 0; i <= 15; i++){
        var playAgain = document.getElementsByClassName('css-1rynq56 r-vw2c0b')
        for (let i of playAgain) {
            if (i.textContent.includes('Play again')) {
                i.click();
                imHuman()
                return;
            }
        }
        await sleep(1000);
    }
    var home = document.getElementsByClassName('css-1rynq56 r-lrvibr')
    home.click()
    imHuman()
    await joinGame();
}

//Your last game is still running.
const chillRole = [
  'villager',          'doctor',           'butcher',
  'night_watchman',    'bodyguard',        'tough_guy',
  'seer_apprentice',   'seer',             'analyst',
  'aura_seer',         'spirit_seer',      'gambler',
  'violinist',         'sheriff',          'detective',
  'mortician',         'harlot',           'ghost_lady',
  'jailer',            'warden',           'bully',
  'witch',             'forger',           'astronomer',
  'beast_hunter',      'trapper',          'flagger',
  'judge',             'marksman',         'flower_child',
  'pacifist',          'mayor',            'baker',
  'grumpy_grandma',    'preacher',         'loudmouth',
  'bellringer',        'avenger',          'cursed_human',
  'werewolf_fan',      'grave_robber',     'lurker',
  'cupid',             'instigator',       'medium',
  'ritualist',         'conjuror',
  'headhunter',        'fool'
] 

const killRole = ['vigilante', 'gunner', 'priest']

const wolfRole = ['werewolf',
  'junior_werewolf',   'wolffluencer',     'split_wolf',
  'kitten_wolf',       'wolf_shaman',      'nightmare_werewolf',
  'voodoo_werewolf',   'wolf_trickster',   'storm_wolf',
  'wolf_pacifist',     'guardian_wolf',    'jelly_wolf',
  'shadow_wolf',       'werewolf_berserk', 'alpha_werewolf',
  'stubborn_werewolf', 'wolf_summoner',    'wolf_seer',
  'blind_werewolf',    'confusion_wolf',   'sorcerer',
  'toxic_wolf',        'wolf_scribe'
] 