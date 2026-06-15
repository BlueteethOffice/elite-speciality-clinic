export async function fetchGoogleReviews() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!API_KEY || !PLACE_ID || API_KEY === 'your_google_api_key_here') {
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;
    
    // Using Next.js fetch with 1-hour cache revalidation
    const res = await fetch(url, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    
    if (data.status === 'OK' && data.result) {
      return data.result;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return null;
  }
}
