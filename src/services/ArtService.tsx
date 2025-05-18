import type { Artwork } from '../interfaces/Artwork';

const apiUrlGetAll: string = import.meta.env.VITE_API_URL_GETALL as string;
const apiUrlGetById: string = import.meta.env.VITE_API_URL_GETBYID as string;
const apiKeyGetAll: string = import.meta.env.VITE_FUNCTION_KEY_GETALL as string;
const apiKeyGetById: string = import.meta.env.VITE_FUNCTION_KEY_GETBYID as string;

export async function fetchArtImages(): Promise<Artwork[]> {
  const urlWithKey: string = `${apiUrlGetAll}?code=${apiKeyGetAll}`;

  const response: Response = await fetch(urlWithKey);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();

  return data.artworks;
}

export async function fetchArtImageById(id: number): Promise<Artwork> {
  const urlWithKey: string = `${apiUrlGetById}/${id}?code=${apiKeyGetById}`;

  const response: Response = await fetch(urlWithKey);

  if (!response.ok) {
    throw new Error(`Error fetching artwork with ID ${id}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
