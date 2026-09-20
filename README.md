# Their Forever Story - Family Anniversary Website

A premium, cinematic, bilingual (English & Telugu) family anniversary website.

## How to Run the Project

1. Open your terminal in this directory.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Open the provided localhost URL in your browser.

## How to Add Your Real Photographs

Currently, the website uses placeholder images. You MUST replace them with your actual family photographs in the `public/images/` folder.

- **Wedding Photographs:** `public/images/wedding/`
  - `hero-placeholder.jpg` (Replace with your best wedding photo, rename if necessary and update in `Hero.tsx`)
  - `story-placeholder.jpg` (Update in `Story.tsx`)
  - `gallery-1.jpg` to `gallery-6.jpg` (Update in `WeddingGallery.tsx` and increase array size if needed)
- **Children Photographs:** `public/images/children/`
  - `yuvaraj-placeholder.jpg` (Update in `ChildrenMemories.tsx`)
  - `hemanth-placeholder.jpg` (Update in `ChildrenMemories.tsx`)
  - `brothers-childhood.jpg` (Update in `Brothers.tsx`)
  - `brothers-now.jpg` (Update in `Brothers.tsx`)
- **Family Photographs:** `public/images/family/`
  - `wall-1.jpg` to `wall-8.jpg` (Update in `FamilyMemoryWall.tsx`)
- **Memories Photographs:** `public/images/memories/`
  - `placeholder-2004.jpg`, `placeholder-2005.jpg`, etc. (Update paths in `src/data/memories.ts`)
- **Then & Now Photographs:** `public/images/then-now/`
  - `then.jpg` (2004 photo, update in `ThenAndNow.tsx`)
  - `now.jpg` (Recent photo, update in `ThenAndNow.tsx`)
- **Original Invitation:** `public/images/invitation/`
  - `invitation.jpg` (Add your scanned original invitation here)
- **Recent Portrait:** `public/images/portraits/`
  - `recent.jpg` (Update in `FinalMemory.tsx`)

## How to Add Background Music

Add your audio file to:
`public/audio/anniversary-song.mp3`

The player will automatically appear and allow playback.

## Where to Edit Data

- **Parents Information:** `src/data/parents.ts`
- **Children Information:** `src/data/children.ts`
- **Timeline Memories:** `src/data/memories.ts`
- **English & Telugu Translations:** `src/data/translations.ts`

## How to Build for Production

1. Run `npm run build`
2. The compiled static website will be in the `dist/` folder.
3. You can deploy this `dist/` folder to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Created With Love
By Chukka Yuvaraj & Chukka Hemanth Kumar.
