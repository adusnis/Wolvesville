const fs = require('fs');
const { JSDOM } = require('jsdom');
const { exit } = require('process');

// Read the content of the HTML file
const htmlContent = fs.readFileSync('game.html', 'utf-8');

// Parse the HTML content using JSDOM
const dom = new JSDOM(htmlContent);
const soup = dom.window.document;

// Use correct CSS selectors to query the elements
const game = soup.querySelector('div.css-175oi2r.r-eqz5dr.r-17s6mgv.r-1udh08x.r-qpntkw');
/*css-175oi2r r-eqz5dr r-17s6mgv r-1udh08x r-qpntkw
const announcement1 = 'div.css-1rynq56.r-1niwhzg.r-fdjqy7'
const announcement2 = 'div.css-1rynq56.r-1niwhzg.r-ubezar.r-vw2c0b.r-14gqq1x.r-fdjqy7[style="color: rgb(255, 64, 129)"]'
const playerText = 'div.css-175oi2r.r-1awozwy.r-18u37iz'
*/
// Collect text content from selected elements
const gameEvents = game.querySelectorAll('div.css-1rynq56.r-1niwhzg.r-fdjqy7, div.css-1rynq56.r-1niwhzg.r-ubezar.r-vw2c0b.r-14gqq1x.r-fdjqy7[style="color: rgb(255, 64, 129"] , div.css-1rynq56.r-13awgt0.r-1b43r93.r-16dba41.r-gy4na3.r-19gegkz.r-1vvnge1', 'div.css-1rynq56.r-13awgt0.r-1b43r93.r-16dba41.r-gy4na3.r-19gegkz.r-1vvnge1.r-36ujnk.r-1g80hic');
const roles = soup.querySelectorAll('div.css-175oi2r.r-lrvibr.r-1uu6nss.r-13qz1uu.r-1loqt21.r-1otgn73');
//css-175oi2r r-lrvibr r-1uu6nss r-13qz1uu r-1loqt21 r-1otgn73

var chat = [];
var roleDict = []
for (let role of roles){

    const player = role.textContent.replace(/\n\s*/g, ' ').trim().split(' ')[0];

    let playerRole = role.querySelector('img')
    if (playerRole) {
        playerRole = playerRole.getAttribute('src').split('_')[1]
        roleDict.push({player: player, role: playerRole});
    }

}

for (let event of gameEvents) {
    let txt = event.textContent;
    txt = txt.replace(/\n\s*/g, ' ').trim();
    if((event.className === 'css-1rynq56 r-1niwhzg r-ubezar r-vw2c0b r-14gqq1x r-fdjqy7' || event.className === 'css-1rynq56 r-1niwhzg r-fdjqy7') && !txt.includes('Welcome')){   
        const obj = {type: 'announcement', text: txt};
        chat.push(obj);
        if ((txt.includes('win!') || txt.includes('wins!')  || txt.includes('tie'))) {
            break;
        }
    }
    else if(event.className === 'css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1'){
        const player = txt.split(':')[0].split(' ')[0];
        const message = txt.split(':')[1].trim();
        const role = roleDict.find(x => x.player === player).role;
        const obj = {type: 'playerText',player:player, role:role, message: message, chat: "village"};
        chat.push(obj);
    }
    else if(event.className === 'css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1 r-36ujnk r-1g80hic'){
        let player = txt.split(':')[0];
        if (player.includes(' ') || player === "Medium") { //is player not spectator
            player = player.split(' ')[0];
            const message = txt.split(':')[1].trim();
            let role = roleDict.find(x => x.player === player)
            if(role){
                role = role.role
            }
            const obj = {type: 'playerText',player:player, role:role, message: message, chat: "dead"};
            chat.push(obj);
        }
    }
}

//css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1 r-36ujnk r-1g80hic
//css-1rynq56 r-13awgt0 r-1b43r93 r-16dba41 r-gy4na3 r-19gegkz r-1vvnge1
fs.writeFileSync('chat.json', JSON.stringify(chat, null, 2));


