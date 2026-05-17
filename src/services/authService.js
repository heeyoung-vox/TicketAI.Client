const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/auth`;

const apiFetch = async (path, options = {}) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    credentials: 'include', // Always send cookies
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw error?.message || `Request failed (${response.status})`;
  }

  // Return null for empty responses (e.g. logout)
  const text = await response.text();
  return text ? JSON.parse(text) : null;
};

export const authService = {
  register: (username, email, password) =>
    apiFetch('/register', { method: 'POST', body: JSON.stringify({ username, email, password }) }),

  login: (username, password) =>
    apiFetch('/login', { method: 'POST', body: JSON.stringify({ username, password }) }),

  logout: () =>
    apiFetch('/logout', { method: 'POST' }),

  // Verify the HttpOnly cookie is valid
  checkAuth: () =>
    apiFetch('/me'),
};
