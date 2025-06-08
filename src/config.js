// config.js  –  gunakan model gratis OpenRouter
const CONFIG = {
  DEEPSEEK_API_URL : 'https://openrouter.ai/api/v1/chat/completions',
  PROXY_URL        : 'https://openrouter.ai/api/v1/chat/completions',
  DEEPSEEK_MODEL   : 'deepseek/deepseek-chat-v3-0324:free',               // ← TANPA “/free”

  DEEPSEEK_API_KEY : '', // key‑mu

  USE_FALLBACK : false,
  MAX_RETRIES  : 2,
  USE_PROXY    : false
};

export default CONFIG;
