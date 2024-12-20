import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
// import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return await resolve(event);
  };
