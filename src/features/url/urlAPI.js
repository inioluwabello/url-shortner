// A mock function to mimic making an async request for data
export async function shortenURL(url) {
  return await (await fetch(`https://api.shrtco.de/v2/shorten?url=?${url}`)).json()
}
