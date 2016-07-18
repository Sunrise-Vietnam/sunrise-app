
// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'ws://192.168.57.1:3000/websocket';
let METEOR_SERVER = 'http://192.168.57.1:3000'
if (process.env.NODE_ENV === 'production') {
	METEOR_URL = 'ws://system.sunrisevietnam.com/websocket'; // your production server url,
	METEOR_SERVER = 'http://system.sunrisevietnam.com'
}

const config = {
	env: process.env.NODE_ENV,
	METEOR_URL,
	METEOR_SERVER : METEOR_SERVER
};

export default config;