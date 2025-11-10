// api/login.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { username} = req.body || {};

  if (!username ||) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  // --------- INSECURE: affichage en clair dans les logs ----------
  console.log('Nouvelle tentative de connexion (demo) :');
  console.log('  username:', username);
  // --------------------------------------------------------------

  // Réponse au client
  return res.status(200).json({ ok: true, message: "Tu t'es bien fait baiser connard" });
}


