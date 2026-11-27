import { env } from 'cloudflare:workers';
import { identify, json } from '../_shared';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const user = identify(request);
  return json({
    authenticated: Boolean(user),
    googleMapsConfigured: Boolean(env.GOOGLE_MAPS_API_KEY?.trim()),
    ...(user ? { displayName: user.displayName } : {}),
    storage: 'cloud',
  });
}
