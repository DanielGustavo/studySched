export default function createQueryString(params) {
  return Object.entries(params)
    .filter(([, param]) => param !== undefined)
    .map(
      ([paramKey, param], index) =>
        `${index === 0 ? '?' : ''}${paramKey}=${encodeURI(param)}`
    )
    .join('&');
}
