const admin = require('firebase-admin');
const { initializeApp, cert } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const creds = require('./firebase-config.json'); // 🔐 Your key here

initializeApp({
  credential: cert(creds),
  databaseURL: `https://${creds.project_id}.firebaseio.com`,
});

const db = getDatabase();

async function saveSession(session) {
  await db.ref(`users/${session.id || 'default'}`).set(session);
}

async function loadSession(id = 'default') {
  const snapshot = await db.ref(`users/${id}`).once('value');
  return snapshot.exists() ? snapshot.val() : null;
}

module.exports = { saveSession, loadSession };
