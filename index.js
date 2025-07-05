const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { saveSession } = require('./firebase/session');

const start = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./auth');
  const sock = makeWASocket({ auth: state });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async ({ connection }) => {
    if (connection === 'open') {
      console.log("✅ Bot connected");
      await saveSession(state.creds); // 🔥 Save session to Firebase
    }
  });
};
start();
