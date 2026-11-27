import type { FavoriteDish, Notebook } from './types';
import { normalize } from './types';

export type LegacyNotebook = Omit<Notebook, 'favoriteDishes'> & { favoriteDishes?: FavoriteDish[] };

// Add only the new collection. Existing records and present values are preserved;
// writes/imports still pass through the full server-side schema validation.
export function normalizeNotebook(value: LegacyNotebook): Notebook {
  return { ...value, favoriteDishes: value.favoriteDishes === undefined ? [] : value.favoriteDishes };
}

export function normalizeFavoriteName(value: string): string {
  return normalize(value).replace(/\s+/g, ' ').trim();
}
