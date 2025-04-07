import fetch from 'node-fetch'; 

export async function handler(event) {
  const searchQuery = event.queryStringParameters.q;
  const apiKey = process.env.VITE_CAMPFLARE_API_KEY; 

  if (!searchQuery) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing search query parameter 'q'" }),
    };
  }

  if (!apiKey) {
    console.error("VITE_CAMPFLARE_API_KEY environment variable not set in Netlify.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key not configured" }),
    };
  }

  try {
    const response = await fetch(
      `https://api.campflare.com/v1/campgrounds/search?q=${searchQuery}`,
      {
        headers: {
          accept: "application/json",
          authorization: apiKey,
        },
      }
    );

    if (!response.ok) {
      console.error(`Campflare API error: ${response.status} - ${response.statusText}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Campflare API error: ${response.statusText}` }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching from Campflare API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Campflare API" }),
    };
  }
}