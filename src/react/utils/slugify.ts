/**
 * Normalize an arbitrary string into a lower kebab-case slug suitable for URLs
 * and R2 object keys. Handles camelCase, accents, en/em dashes and stray
 * punctuation.
 *
 * toKebabCase('fireRiskPredictor')            === 'fire-risk-predictor'
 * toKebabCase('Energy Budget – Analysis.pdf') === 'energy-budget-analysis-pdf'
 */
export const toKebabCase = (input: string): string =>
  input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip combining accent marks
    .replace(/[–—]/g, '-') // en/em dash -> hyphen
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase -> camel-Case
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumerics -> hyphen
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
    .replace(/-{2,}/g, '-'); // collapse repeats
