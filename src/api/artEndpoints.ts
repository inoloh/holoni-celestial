const baseUrl = import.meta.env.VITE_API_BASEURL as string;

const endpoints = {
  getArtworks: import.meta.env.VITE_API_URL_GET_ARTWORKS as string,
  getAssets: import.meta.env.VITE_API_URL_GET_ASSETS as string
};

const apiKeys = {
  getAllArtworks: import.meta.env.VITE_FUNCTION_KEY_GETALL as string,
  getArtworkById: import.meta.env.VITE_FUNCTION_KEY_GETBYID as string,
};

export function getAllArtworksUrl() {
  return `${baseUrl}/${endpoints.getArtworks}?code=${apiKeys.getAllArtworks}`;
}

export function getArtworkByIdUrl(id: string) {
  return `${baseUrl}/${endpoints.getArtworks}/${id}?code=${apiKeys.getArtworkById}`;
}

export function getAllAssets() {
  return `${baseUrl}/${endpoints.getAssets}`;
}

export function getAssetByName(name: string) {
  return `${baseUrl}/${endpoints.getAssets}/${name}`;
}
