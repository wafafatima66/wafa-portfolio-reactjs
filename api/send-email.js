export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Missing RESEND_API_KEY' });
      return;
    }

    const { subject, message, from, name } = req.body || {};
    const payload = {
      from: 'Fatima Portfolio <onboarding@resend.dev>',
      to: 'fatima.amir.dev@gmail.com',
      subject: subject || 'New inquiry from portfolio',
      text: `Name: ${name || ''}\nEmail: ${from || ''}\n\nMessage:\n${message || ''}`,
      reply_to: from || undefined,
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    if (!response.ok) {
      res.status(400).json({ error: body?.error ?? 'Failed to send email' });
      return;
    }

    res.status(200).json({ id: body?.id ?? null, status: 'sent' });
  } catch (err) {
    console.error('Resend send error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}