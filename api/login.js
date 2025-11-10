export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { username } = req.body || {};

  if (!username) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

 const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log('Nouvelle tentative de connexion (demo) :');
  console.log('  username:', username);
  console.log('  IP:', ip);

  return res.status(200).json({ ok: true, message: "Connexion réussie (demo)", ip });
}

