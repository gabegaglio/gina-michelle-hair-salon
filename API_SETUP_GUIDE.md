# Step-by-Step: Getting Google Places API Key

## Step 1: Create/Select Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click the project dropdown at the top (next to "Google Cloud")
4. Either:
   - **Select an existing project**, OR
   - **Click "New Project"** → Enter name (e.g., "Hair Salon Website") → Click "Create"

## Step 2: Enable Billing (Required for API)

⚠️ **Note**: Google requires a billing account, but they give you $200/month free credit, which is usually enough for small websites.

1. In the left sidebar, click **"Billing"**
2. If you don't have billing set up:
   - Click **"Link a billing account"**
   - Click **"Create billing account"**
   - Fill in your information (credit card required, but won't be charged unless you exceed free tier)
   - Click **"Submit and enable billing"**

## Step 3: Enable Places API (New)

1. In the left sidebar, go to **"APIs & Services"** → **"Library"**
2. In the search bar, type: **"Places API (New)"**
3. Click on **"Places API (New)"** from the results
4. Click the blue **"Enable"** button
5. Wait a few seconds for it to enable

## Step 4: Create API Key

1. In the left sidebar, go to **"APIs & Services"** → **"Credentials"**
2. At the top, click **"+ CREATE CREDENTIALS"**
3. Select **"API key"**
4. Your API key will be created and displayed in a popup
5. **Copy this key** - you'll need it for your `.env` file
6. Click **"Close"**

## Step 5: Restrict API Key (Important for Security)

1. In the "Credentials" page, find your newly created API key
2. Click on the API key name (or the edit/pencil icon)
3. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check **"Places API (New)"**
   - Click **"Save"**
4. Under **"Application restrictions"** (optional but recommended):
   - Select **"HTTP referrers (web sites)"**
   - Add your domains:
     - `http://localhost:5173/*` (for development)
     - `https://yourdomain.com/*` (for production)
   - Click **"Save"**

## Step 6: Find Place ID

### Method 1: Using Place ID Finder (Easiest)

1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Scroll down to find the **"Place ID Finder"** section
3. In the search box, type: **"Gina Michele Hair Salon"** or **"1358 Clove Rd, Staten Island, NY 10301"**
4. Click on the correct business from the results
5. The Place ID will be displayed (looks like: `ChIJ...` or `EiJ...`)
6. **Copy this Place ID**

### Method 2: Using Google Maps

1. Open [Google Maps](https://www.google.com/maps)
2. Search for: **"Gina Michele Hair Salon"** or the address
3. Click on the business listing
4. Look at the URL - it may contain the Place ID, OR
5. Use the Place ID Finder tool (Method 1) for accuracy

## Step 7: Add to Your Project

1. In your project root, create a `.env` file (if it doesn't exist)
2. Add these lines:

```env
VITE_GOOGLE_PLACES_API_KEY=your_actual_api_key_here
VITE_GOOGLE_PLACE_ID=your_actual_place_id_here
```

3. Replace `your_actual_api_key_here` with the API key from Step 4
4. Replace `your_actual_place_id_here` with the Place ID from Step 6

## Step 8: Restart Dev Server

1. Stop your current dev server (Ctrl+C)
2. Run: `npm run dev`
3. The reviews should now load automatically!

## Troubleshooting

### "API key not valid" error

- Make sure you copied the entire API key (they're long!)
- Check that "Places API (New)" is enabled
- Verify the API key restrictions allow your domain

### "Place ID not found" error

- Double-check the Place ID is correct
- Make sure you're using the Place ID, not the business name
- Try finding it again using the Place ID Finder

### "Quota exceeded" error

- Check your billing is set up correctly
- Verify you haven't exceeded the free tier ($200/month)
- Check usage in Google Cloud Console → APIs & Services → Dashboard

### Reviews not showing

- Check browser console (F12) for errors
- Verify both API key and Place ID are in `.env` file
- Make sure you restarted the dev server after adding `.env` variables

## Cost Information

- **Free tier**: $200/month credit
- **Places API (New) - Place Details**: $17 per 1,000 requests
- For a small website: ~$0-5/month (well within free tier)

## Security Reminder

⚠️ **Never commit your `.env` file to git!** It's already in `.gitignore`, but double-check before pushing to GitHub.

For production deployment (Vercel, Netlify, etc.), add these as environment variables in your hosting platform's settings, not in the code.
