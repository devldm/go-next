export async function getData(id?: string) {
  const url = process.env.API_URL;

  if (!url) {
    throw new Error("URL is required");
  }

  //TODO: use the below commented code when fetching data from API locally

  const res = await fetch(id ? `${url}${encodeURIComponent(id)}` : url);

  if (!res.ok) {
    throw new Error("Failed to fetch data" + res.status);
  }

  return res.json();
}
