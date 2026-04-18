# Google Reviews Setup Guide

## Quick Setup Steps

### 1. Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **"Places API (New)"**:

   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API (New)"
   - Click "Enable"

4. Create API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - **Important**: Restrict the key to "Places API (New)" for security

### 2. Find Place ID for Gina Michele Hair Salon

**Option A: Using Place ID Finder (Recommended)**

1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Scroll to "Place ID Finder" section
3. Search for: `1358 Clove Rd, Staten Island, NY 10301` or `Gina Michele Hair Salon`
4. Copy the Place ID (looks like: `ChIJ...`)

**Option B: Using Google Maps**

1. Open Google Maps
2. Search for "Gina Michele Hair Salon" or the address
3. Click on the business
4. In the URL, you'll see something like: `.../place/Gina+Michele+Hair+Salon/@40.xxx,-74.xxx`
5. The Place ID is in the URL or you can use the Place ID Finder tool

**Option C: Programmatically (if you have API key)**
You can use the helper function in `src/utils/placeIdHelper.js` to find it programmatically.

### 3. Add to .env file

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
VITE_GOOGLE_PLACE_ID=your_place_id_here
```

### 4. Restart Dev Server

After adding the environment variables, restart your dev server:

```bash
npm run dev
```

## Troubleshooting

- **No reviews showing**: Make sure both API key and Place ID are correct
- **API errors**: Check that "Places API (New)" is enabled in Google Cloud Console
- **CORS errors**: The API should work from the browser, but make sure your API key restrictions allow your domain

## API Limits

- Free tier: $200/month credit (usually enough for small sites)
- Reviews endpoint: Returns up to 5 reviews per request
- Rate limits apply - check Google Cloud Console for usage

## Security Note

⚠️ **Important**: Never commit your `.env` file to git. It's already in `.gitignore`.

For production, set these as environment variables in your hosting platform (Vercel, Netlify, etc.).
