# B E Paints - shop website

One-page website for B E Paints, a 3-branch paint shop near Kondotty, Kerala.
Will live on **bepaints.com**.

## Stack

React + TypeScript, composed with the `@instinct/files` component kit.

- `src/App.tsx` - the whole page: hero, stock list, one card per branch, contact band.
- `src/style.css` - paint-shop theme (teal hero gradient, per-branch accent colors).
- `src/main.tsx` - entrypoint.

## Editing

Branch facts (address, phone, hours, call/directions links) live in the
`branches` array at the top of `src/App.tsx`. Photo placeholders are the
`PhotoSlot` elements - replace them with real images in `src/photos/` when
the shop photos arrive.

## Branches

1. Edavannappara (main) - opposite Lifecare Hospital, Kerala 673640
2. Puthiyedathparamb - Olavattur, Kerala 673637 (pin: 11.213902, 75.936317)
3. Oorkadavu - Kondotty Road, Kerala 673640 (pin: 11.243980, 75.925607)
