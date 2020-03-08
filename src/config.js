export default async () => {
  const configBody = await fetch('/config.json', {
    method: 'get',
    cache: 'no-cache'
   }).then(resp => resp.json());

  return {
    API_URL: configBody.API_URL,
    API_PREFIX: configBody.API_PREFIX,
    FRONTEND_URL: configBody.FRONTEND_URL,
    CDN_URL: configBody.CDN_URL,
  };
};
