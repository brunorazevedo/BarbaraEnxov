export default async function handler(req, res) {
    // Verifique o token de revalidação para segurança
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
      // Revalida a página
      await res.revalidate('/');
      return res.json({ revalidated: true });
    } catch (err) {
      return res.status(500).send('Error revalidating');
    }
  }