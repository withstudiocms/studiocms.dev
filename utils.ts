function stripHTTPandHTTPS(url: string) {
  return url.replace('http://', '').replace('https://', '');
}

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, '');
}

function setHTTP(url: string) {
  return `http://${url}`;
}

function setHTTPS(url: string) {
  return `https://${url}`;
}

function splitListAndSelectFirst(list: string) {
  if (list.indexOf(',') === -1) return list;
  return list.split(',')[0];
}

/**
* Get the Domain of the Coolify URL from the coolify runtime environment
*
* Requires the COOLIFY_FQDN environment variable to be set as per the coolify docs:
*
* @see https://coolify.io/docs/knowledge-base/environment-variables#predefined-variables
*/
export const getCoolifyURL = (returnHttps?: boolean) => {
  const urlList = process.env.COOLIFY_FQDN;
  if (!urlList) {
      return undefined;
  }
  const url = splitListAndSelectFirst(urlList);
  const strippedUrl = stripTrailingSlash(stripHTTPandHTTPS(url));
  if (returnHttps) {
      return setHTTPS(strippedUrl);
  }
  return setHTTP(strippedUrl);
};

export default getCoolifyURL;

/**
 * Get the number of stars on the StudioCMS GitHub repository
 * 
 * @returns The number of stars on the StudioCMS GitHub repository
 */
export const getStudioCMSStars = async (): Promise<number> => {
  const response = await fetch('https://api.github.com/repos/withstudiocms/studiocms');
  try {
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error('Error fetching StudioCMS stars:', error);
    return 0;
  }
};
