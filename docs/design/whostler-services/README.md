# Whostler Services website

## Visual system

The site uses one continuous dark-blue gradient, translucent technical surfaces, restrained borders, and a controlled orange accent. The primary implementation lives in `app/globals.css`; page structure and reusable content patterns live in `app/page.tsx`.

### Tokens and brand colors

The `:root` block at the top of `app/globals.css` contains the design tokens. The primary background uses `--bg-start`, `--bg-mid`, and `--bg-end`; surfaces, borders, text, focus, and semantic colors are centralized in the same block. Change the three background tokens to revise the gradient without editing individual sections.

### Typography and spacing

Geist is the primary text family and Geist Mono is used for technical labels. Fluid headings use `clamp()`, while section and container dimensions are controlled by `.section` and `.container`. Desktop sections use generous vertical rhythm, reduced consistently at tablet and mobile breakpoints.

### Components and responsive behavior

Component styles are grouped by page section in `app/globals.css`: navigation, hero system map, service grid, engineering steps, technology matrix, about panel, contact form, and footer. Breakpoints at 1024px, 780px, and 480px move grids into readable tablet and mobile arrangements. The navigation becomes a keyboard-accessible menu on small screens.

### Logo replacement

Replace `public/whostler-logo.png` with another optimized image using the same filename. Preserve the original proportions; CSS sets width while leaving height automatic.

### Accessibility

The page includes semantic landmarks, visible focus styles, labeled form fields, adequate touch targets, non-color status text, and a reduced-motion mode. Decorative system elements are excluded from interaction, and the responsive menu exposes its expanded state.
