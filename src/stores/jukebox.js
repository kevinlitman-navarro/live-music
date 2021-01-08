import { writable } from 'svelte/store';

export const song = writable(null);
export const globalScale = writable(null);
export const orderby = writable("overall");