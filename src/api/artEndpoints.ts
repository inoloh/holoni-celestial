const baseUrls = {
  getAll: import.meta.env.VITE_API_URL_GETALL as string,
  getById: import.meta.env.VITE_API_URL_GETBYID as string,
};

const apiKeys = {
  getAll: import.meta.env.VITE_FUNCTION_KEY_GETALL as string,
  getById: import.meta.env.VITE_FUNCTION_KEY_GETBYID as string,
};

export function getAllArtworksUrl() {
  return `${baseUrls.getAll}?code=${apiKeys.getAll}`;
}

export function getArtworkByIdUrl(id: string) {
  return `${baseUrls.getById}/${id}?code=${apiKeys.getById}`;
}
