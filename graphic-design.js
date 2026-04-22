/**
 * data/graphic-design.js
 * ─────────────────────────────────────────────────────────────────
 * Add or edit projects in the `projects` array below.
 *
 * Each project object:
 * {
 *   title:       "Project Title",
 *   description: "Your description here. Leave empty string for placeholder.",
 *   tag:         "Category · Type",
 *   images: [
 *     { src: "Portfolio_files/image001.png", alt: "Description", size: "img-square" },
 *     // OR a placeholder:
 *     { placeholder: true, icon: "🎨", label: "filename.png", size: "img-square" }
 *   ]
 * }
 *
 * Image size classes:
 *   img-square      175×175px
 *   img-portrait    160×240px
 *   img-portrait-lg 200×300px
 *   img-large       full-width up to 460×380px
 *   img-landscape   full-width up to 520×300px
 * ─────────────────────────────────────────────────────────────────
 */

const GRAPHIC_DESIGN_DATA = {
  label: 'Graphic Design',
  title: 'Graphic Design',

  projects: [

    // ── PROJECT: MUSIC ALBUM COVERS ──────────────────────────────
    {
      title: 'Music Album Covers',
      description: 'Part of a Graphic Design A-level project. A series of album cover designs exploring typographic composition, colour theory, and visual identity within the music space.',
      tag: 'Print · Branding',
      images: [
        // Replace placeholders with real img tags once images are in place:
        // { src: "Portfolio_files/image001.png", alt: "Album Cover 1", size: "img-square" },
        { placeholder: true, icon: '🎵', label: 'image001.png — Album Cover 1', size: 'img-square' },
        { placeholder: true, icon: '🎵', label: 'image003.png — Album Cover 2', size: 'img-square' },
        { placeholder: true, icon: '🎵', label: 'image005.png — Album Cover 3', size: 'img-square' },
      ]
    },

    // ── PROJECT: FUSION FOOD LOGO ─────────────────────────────────
    {
      title: 'Fusion Food Logo',
      description: 'Created for a Graphic Design A-level mock exam. The challenge: design a logo for two distinct cuisines — Chilean seafood and German Wurst — merging them into a single cohesive identity.',
      tag: 'Logo · Branding',
      images: [
        // { src: "Portfolio_files/image007.png", alt: "Fusion Food Logo", size: "img-large" },
        { placeholder: true, icon: '🍽️', label: 'image007.png — Fusion Food Logo', size: 'img-large' },
      ]
    },

    // ── PROJECT: MOVIE POSTERS (A-LEVEL ESA) ──────────────────────
    {
      title: 'Movie Posters',
      tag: 'Editorial · Print',
      description: '', // ← Add your description here
      images: [
        // { src: "Portfolio_files/image009.png", alt: "Phone Box poster", size: "img-portrait-lg" },
        // { src: "Portfolio_files/image011.png", alt: "Juror #2 poster",  size: "img-portrait-lg" },
        { placeholder: true, icon: '🎬', label: 'image009.png — "Phone Box"',  size: 'img-portrait-lg' },
        { placeholder: true, icon: '🎬', label: 'image011.png — "Juror #2"', size: 'img-portrait-lg' },
      ]
    },

    // ── ADD NEW GRAPHIC DESIGN PROJECTS BELOW ────────────────────
    // Copy the block above, paste here, and fill in the details.

  ]
};
