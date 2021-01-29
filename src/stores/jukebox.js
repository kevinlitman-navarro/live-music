import { writable } from 'svelte/store';

export const song = writable(null);
export const globalScale = writable(null);
export const orderby = writable("overall");
export const ready = writable(false);
export const tooltip_text = writable(null);
export const active_artist = writable("Bob Dylan");
export const show_duplicates = writable(true);