/**
 * Helper function to find Google Place ID by address
 * This uses the Places API Text Search to find the Place ID
 *
 * Usage: Call this function with the business address to get the Place ID
 * Then use that Place ID in your .env file
 */

export const findPlaceIdByAddress = async (address, apiKey) => {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places:searchText`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.displayName",
        },
        body: JSON.stringify({
          textQuery: address,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to search: ${response.status}`);
    }

    const data = await response.json();

    if (data.places && data.places.length > 0) {
      return {
        placeId: data.places[0].id,
        name: data.places[0].displayName?.text || address,
      };
    }

    return null;
  } catch (error) {
    console.error("Error finding Place ID:", error);
    return null;
  }
};

/**
 * For Gina Michele Hair Salon:
 * Address: 1358 Clove Rd, Staten Island, NY 10301
 *
 * To find the Place ID manually:
 * 1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
 * 2. Use the Place ID Finder tool
 * 3. Search for "1358 Clove Rd, Staten Island, NY 10301"
 * 4. Copy the Place ID
 */
