import { AccessToken } from 'livekit-server-sdk';

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });
  if (!process.env.LIVEKIT_URL || !process.env.LIVEKIT_API_KEY || !process.env.LIVEKIT_API_SECRET) {
    return response.status(503).json({ error: 'LiveKit is not configured' });
  }
  const { roomName, identity, name, role } = request.body || {};
  const valid = value => typeof value === 'string' && /^[a-zA-Z0-9_-]{3,80}$/.test(value);
  if (!valid(roomName) || !valid(identity) || typeof name !== 'string' || name.length > 40 || typeof role !== 'string' || role.length > 60) {
    return response.status(400).json({ error: 'Invalid invite' });
  }
  const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
    identity,
    name: name.trim(),
    metadata: JSON.stringify({ role: role.trim() }),
    ttl: '8h'
  });
  token.addGrant({ roomJoin: true, room: roomName, canPublish: true, canSubscribe: true, canPublishData: true });
  response.setHeader('Cache-Control', 'no-store');
  return response.status(200).json({ url: process.env.LIVEKIT_URL, token: await token.toJwt() });
}

