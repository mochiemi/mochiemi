// src/constants/tagColors.js
// Mapeamento de tags especiais para variáveis CSS.
// Tags não mapeadas caem no fallback (champagne).

export const TAG_COLOR_MAP = {
  mochiemi: 'var(--deep-mint)',
  pamonha: 'var(--green)',
  ruka: 'var(--sky-blue)',
  mochi: 'var(--rose)',
  purple: 'var(--purple)',
}

export const TAG_FALLBACK_COLOR = 'var(--champagne)'

export function getTagColor(tag) {
  if (!tag) return TAG_FALLBACK_COLOR
  const key = String(tag).trim().toLowerCase()
  return TAG_COLOR_MAP[key] || TAG_FALLBACK_COLOR
}

export function getTagStyle(tag) {
  const color = getTagColor(tag)
  return {
    '--tag-color': color,
  }
}
