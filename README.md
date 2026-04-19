# Gina Michele Hair Salon Website

A modern, responsive website for Gina Michele Hair Salon built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- ✂️ **Services Section**: Showcases haircuts, highlights, and shaves
- 🕐 **Business Hours**: Displays current operating hours with today's schedule highlighted
- ⭐ **Google Reviews Integration**: Fetches and displays up-to-date customer reviews from Google
- 📍 **Contact Information**: Address, phone number, and embedded Google Maps
- 🎨 **Smooth Animations**: Beautiful transitions and hover effects powered by Framer Motion
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## Business Information

- **Address**: 1358 Clove Rd, Staten Island, NY 10301
- **Phone**: (917) 444-1914
- **Services**: Haircuts, Highlights, Shaves

### Business Hours

- Monday: Closed
- Tuesday: 9 AM–5 PM
- Wednesday: 9 AM–5 PM
- Thursday: 9 AM–5 PM
- Friday: 9 AM–5 PM
- Saturday: 9 AM–4 PM
- Sunday: Closed

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hairsalon
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure Google Places API (optional, for live reviews):

   - Get your API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
   - Enable "Places API (New)" in your Google Cloud Console
   - Find your Place ID using the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Add your API key and Place ID to `.env`:
     ```
     VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
     VITE_GOOGLE_PLACE_ID=your_place_id_here
     ```

   **Note**: If you don't configure the API, the site will display sample reviews.

### Running the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Google Reviews API Setup

To display live reviews from Google:

1. **Create a Google Cloud Project**:

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Places API (New)**:

   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API (New)"
   - Click "Enable"

3. **Create API Key**:

   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Restrict the key to "Places API (New)" for security

4. **Find Your Place ID**:

   - Use the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Or use the [Place ID Lookup tool](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id)

5. **Add to .env**:
   ```
   VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
   VITE_GOOGLE_PLACE_ID=your_place_id_here
   ```

## Technologies Used

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Google Places API**: For fetching reviews

## Project Structure

```
hairsalon/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Services.jsx    # Services showcase
│   │   ├── Hours.jsx       # Business hours
│   │   ├── Reviews.jsx     # Google reviews integration
│   │   └── Contact.jsx     # Contact information
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── public/                 # Static assets
├── .env.example            # Environment variables template
└── package.json            # Dependencies
```

## License

This project is private and proprietary.
