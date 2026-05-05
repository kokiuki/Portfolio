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
        { src: "images/church 3.png", alt: "Album Cover 1", size: "img-medium" },
        { src: "images/Palace Garden 3.png", alt: "Album Cover 2", size: "img-medium" },
      ]
    },

    // ── PROJECT: FUSION FOOD LOGO ─────────────────────────────────
    {
      title: 'Fusion Food Logo',
      description: 'Created for a Graphic Design A-level mock exam. The challenge: design a logo for two distinct cuisines — Chilean seafood and German Wurst — merging them into a single cohesive identity.',
      tag: 'Logo · Branding',
      images: [
        { src: "images/Klmapus.png", alt: "Fusion Food Logo", size: "img-large" },
      ]
    },

    // ── PROJECT: MOVIE POSTERS (A-LEVEL ESA) ──────────────────────
    {
      title: 'Film Posters',
      tag: 'Editorial · Print',
      description: 'Movie Poster Project for my ESA for Graphic Design A-level. Where i designed posters for Films i made up using Illustrator and my own Photography.', 
      images: [
        { src: "images/Animal World 1.jpeg", alt: "Animal World poster 1", size: "img-portrait-lg" },
        { src: "images/Animal World 2.jpeg", alt: "Animal World poster 2",  size: "img-portrait-lg" },
        { src: "images/Common Side Effect 1.jpeg", alt: "Common side Effect poster 1",  size: "img-portrait-lg" },
        { src: "images/Common Side effect 2.jpeg", alt: "Common Side Effect poster 2",  size: "img-portrait-lg" },

      ]
    },

    // ── ADD NEW GRAPHIC DESIGN PROJECTS BELOW ────────────────────
    // Copy the block above, paste here, and fill in the details.

  ]
};
