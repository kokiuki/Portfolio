/**
 * data/filmmaking.js
 * ─────────────────────────────────────────────────────────────────
 * Add or edit filmmaking projects in the `projects` array below.
 * See data/graphic-design.js for full documentation on the format.
 * ─────────────────────────────────────────────────────────────────
 */

const FILMMAKING_DATA = {
  label: 'Filmmaking',
  title: 'Filmmaking',

  projects: [

    // ── PROJECT: A-LEVEL ESA MOVIE POSTERS ───────────────────────
    {
      title: 'A-Level ESA',
      description: '', // ← Add your description here
      tag: 'Film · A-Level',
      images: [
        // Replace with real paths once images are in place:
        // { src: "DSC_00901.JPG", alt: "Common Side Effect poster 1", size: "img-portrait-lg" },
        // { src: "DSC_00911.JPG", alt: "Common Side Effect poster 2", size: "img-portrait-lg" },
        // { src: "DSC_00971.JPG", alt: "Animal World poster",         size: "img-portrait-lg" },
        { placeholder: true, icon: '🎬', label: 'DSC_00901.JPG\nCommon Side Effect (1)', size: 'img-portrait-lg' },
        { placeholder: true, icon: '🎬', label: 'DSC_00911.JPG\nCommon Side Effect (2)', size: 'img-portrait-lg' },
        { placeholder: true, icon: '🦢', label: 'DSC_00971.JPG\nAnimal World',           size: 'img-portrait-lg' },
      ]
    },

    // ── ADD NEW FILMMAKING PROJECTS BELOW ────────────────────────

  ]
};
