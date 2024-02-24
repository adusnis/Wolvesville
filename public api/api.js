const fs = require('fs');


const fetch = require('node-fetch')
const MY_KEY = "bot 55a6w9UbKlyzzea0cdcNX8T2BBb3iLhCLnm1XmPRCnNCzRtwBXoGkT6lyMIvs7do"
require('whatwg-fetch')
const API_URL = 'https://api.wolvesville.com/';

async function getRoles(){
	const ENDPOINT = '/roles';

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,

	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}
	const output = await response.json();
	fs.writeFileSync('role.json', JSON.stringify(output, null, 2));
}
async function redeemApiHat(KEY) {
	const API_KEY = 'bot ' + KEY;
	const ENDPOINT = '/items/redeemApiHat';

	const headers = new fetch.Headers({
		Authorization: API_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'POST',
		headers
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}

	const output = await response.text();
	return output;
}

async function getPlayerId(username){

	const ENDPOINT = '/players/search?username=' + username;

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,

	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}

	const output = await response.json();
	return output['id'];
}

async function getAvatarId(username, slotNumber){
	playerId = await getPlayerId(username);
	const ENDPOINT = '/avatars/sharedAvatarId/' + playerId + '/' + slotNumber;

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,

	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}

	const output = await response.text();
	return output;
}

async function sharedAvatarId(){
	const AvatarId = await getAvatarId('Armei', 1)
	
	const ENDPOINT = '/avatars/'  + AvatarId;

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,

	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}

	const output = await response.json();
	return output;
}

async function clanSearch(name){
	const ENDPOINT = '/clans/search?name=' + name;

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,

	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}
	const output = await response.json();
	return output[0]['id'];
}

async function clanChat(message){
	const clanId = '7f229953-d8cd-4916-85e7-b92193db97c1'
	const ENDPOINT = '/clans/' + clanId +'/chat';

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});
	const requestBody = JSON.stringify({ 'message': message });
	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'POST',
		headers,
		body: requestBody,
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}
	const output = await response;
	return output;
}

async function clanAnnouncement(message){
	const clanId = '7f229953-d8cd-4916-85e7-b92193db97c1'
	const ENDPOINT = '/clans/' + clanId +'/announcements';

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});
	const requestBody = JSON.stringify({ 'message': message });
	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'POST',
		headers,
		body: requestBody,
	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}
	const output = await response;
	return output;
}

async function getPlayer(username){
	playerId = await getPlayerId(username);
	const ENDPOINT = '/players/' + playerId;

	const headers = new fetch.Headers({
		Authorization: MY_KEY,
		Accept: 'application/json',
		'Content-Type': 'application/json',
	});

	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,

	});

	if (response.status < 200 || response.status >= 300) {
		throw new Error(`Request failed: ${response.statusText}`);
	}

	const output = await response.text();
	return output;
}
async function main() {
	try {
		//const result = await getPlayerId('DEAR__');
		//const result = await getAvatarId('Armei', 1);
		//const result = await redeemApiHat('55a6w9UbKlyzzea0cdcNX8T2BBb3iLhCLnm1XmPRCnNCzRtwBXoGkT6lyMIvs7do');
		//const result = await sharedAvatarId();
		//const result = await clanSearch('Armei');
		//const result = await clanChat('Hello');
		//const result = await clanAnnouncement('Hello');
		//const result = await getPlayer('DEAR___');
		const result = await getRoles();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

main();