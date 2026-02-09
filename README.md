# Boo_our_Valentine-s 💌

A React.js Valentine proposal website with a **Bridgerton-inspired romantic aesthetic** and 3 interactive stages.

## Features

1. **Opening greeting card page**
   - Uses `public/Image_1.webp` as the full-page background.
   - Elegant welcome card with an **"way to life"** button.

2. **Proposal question page**
   - Uses `public/Sky.webp` as the background.
   - Prompt: **"Will you be my Valentine?"** with cute emojis.
   - `No` button moves around the page when hovered/clicked.
   - Rotating playful warnings like:
     - "Hey handsome, click yes 😘"
     - "Click yes for lifetime happiness 💍✨"
     - "Choose wisely, my love 👀💖"

3. **Love letter celebration page**
   - Opens when **Yes** is clicked.
   - Animated colorful butterfly effect.
   - Decorative bows/flowers and romantic message card.

## Bridgerton Theme Touches

- Regal serif typography and script accents.
- Soft rose, cream, and royal night palette.
- Ornamental card styling and elegant romantic tone.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Asset Notes

Place these files in `public/`:

- `Image_1.webp` → opening page background
- `Sky.webp` → proposal page background

If these names are kept exactly, the app will use your attached images automatically.
