// src/services/bloggerApi.js
const BLOG_ID = '3420581123237265342' // Seu ID
const API_KEY = 'AIzaSyDwS7KZp9ux2QDr90kwfVpje5i_XyY5j0k'
const BASE_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`

/**
 * Busca uma página de posts.
 * fetchBodies: true é OBRIGATÓRIO para que `content` venha na resposta
 * e possamos extrair a imagem de capa e gerar o excerpt.
 */
export async function fetchPosts(pageToken = '') {
  const params = new URLSearchParams({
    key: API_KEY,
    maxResults: 10,
    fetchBodies: true,
    orderBy: 'published',
    ...(pageToken && { pageToken }),
  })

  const res = await fetch(`${BASE_URL}/posts?${params}`)
  if (!res.ok) throw new Error('Erro ao carregar posts')
  return res.json()
}

export async function fetchPostById(postId) {
  const params = new URLSearchParams({
    key: API_KEY,
  })
  const res = await fetch(`${BASE_URL}/posts/${postId}?${params}`)
  if (!res.ok) throw new Error('Post não encontrado')
  return res.json()
}

/**
 * Extrai a primeira imagem "útil" do HTML de um post do Blogger.
 * Ordem de prioridade: srcset > src > data-src.
 * Ignora placeholders (base64, GIFs 1x1, thumbnails s72-c, spacer, blank).
 * Retorna '' se nenhuma imagem válida for encontrada.
 */
export function extractFirstImage(html) {
  if (!html) return ''

  // Decodifica entidades comuns do Blogger
  const decoded = html
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')

  // Coleta todas as tags <img ...>
  const imgTags = decoded.match(/<img\b[^>]*>/gi) || []

  const isUsable = (url) => {
    if (!url) return false
    if (url.startsWith('data:')) return false
    if (/s72-c|1x1|spacer|blank\.gif/i.test(url)) return false
    return /^https?:\/\//i.test(url) || url.startsWith('//')
  }

  const pickFromSrcset = (raw) => {
    // srcset = "url1 320w, url2 640w, url3 1024w"
    // Pega a última (geralmente maior resolução) que seja utilizável.
    const entries = raw
      .split(',')
      .map((s) => s.trim().split(/\s+/)[0])
      .filter(isUsable)
    return entries.length ? entries[entries.length - 1] : ''
  }

  for (const tag of imgTags) {
    const srcsetMatch = tag.match(/\bsrcset\s*=\s*["']([^"']+)["']/i)
    if (srcsetMatch) {
      const url = pickFromSrcset(srcsetMatch[1])
      if (url) return url
    }

    const srcMatch = tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i)
    if (srcMatch && isUsable(srcMatch[1])) return srcMatch[1]

    const dataSrcMatch = tag.match(/\bdata-src\s*=\s*["']([^"']+)["']/i)
    if (dataSrcMatch && isUsable(dataSrcMatch[1])) return dataSrcMatch[1]
  }

  return ''
}

/**
 * Remove tags HTML e retorna texto puro (usado para o excerpt dos cards).
 */
export function stripHtml(html) {
  if (!html) return ''
  const decoded = html
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
  const tmp = document.createElement('div')
  tmp.innerHTML = decoded
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim()
}
