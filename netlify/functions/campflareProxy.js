import fetch from "node-fetch";

export async function handler(event) {
  const searchQuery = event.queryStringParameters.q || "default";

  try {
    const response = await fetch(
      `https://api.campflare.com/v1/campgrounds/search?q=${searchQuery}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: import.meta.env.CAMPFLARE_API_KEY, // Store API Key in Netlify ENV variables
        },
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allows CORS for all origins
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
}
