# Design System Document: The Editorial Protocol

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Archivist"**

This design system is not a template; it is a curated environment. Inspired by the legacy of high-end editorial publications like *The New Yorker* and *The Atlantic*, it prioritizes the "quiet power" of typography and the intentional use of negative space. 

To break the "standard web" look, we reject the rigid, boxy constraints of modern SaaS. Instead, we embrace **intentional asymmetry**—offsetting text blocks, allowing imagery to bleed into margins, and using massive typographic scale shifts to command attention. The goal is an interface that feels like a premium printed broadsheet: intellectual, timeless, and authoritative.

---

## 2. Colors & Surface Logic
The palette is rooted in a "paper-first" philosophy, using warm off-whites and deep carbons to reduce eye strain while maintaining high contrast.

### The Palette
*   **Background (`#faf9f5`):** Our primary "paper" stock.
*   **Primary/Tertiary (`#1e1e1e`):** The "ink." Used for all high-level headings and primary interaction points.
*   **Accent (Error: `#ba1a1a`):** Used with extreme restraint—only for critical errors or a singular, high-impact call to action.

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited for sectioning content. To define boundaries, designers must use **Surface Color Shifts**. 
*   Transition from `surface` to `surface-container-low` (`#f4f4f0`) to denote a change in context.
*   Use `surface-container-highest` (`#e3e2df`) for nested metadata or utility sidebars.

### Glass & Texture
To move beyond "flat" design, use **Glassmorphism** for floating navigation bars or overlays. 
*   **Token:** `surface` at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Texture:** Use a subtle linear gradient for primary buttons, transitioning from `primary` (`#1e1e1e`) to `primary-container` (`#333333`). This adds a tactile, "embossed" depth that flat hex codes lack.

---

## 3. Typography
Typography is the core of this system. We use **Newsreader** (a high-contrast serif) for narrative and **Inter** (a functional sans-serif) for utility.

*   **Display & Headline (Newsreader):** Use `display-lg` (3.5rem) for hero titles. The high contrast of the serif letterforms communicates authority.
*   **Body (Newsreader):** Long-form text must use `body-lg` (1rem). Increase the line-height to `1.6` to honor the editorial aesthetic.
*   **Labels & Metadata (Inter):** Use `label-md` (0.75rem) in all-caps with a `0.05rem` letter-spacing for dates, categories, and UI controls. This creates a sharp, modern counterpoint to the traditional serifs.

---

## 4. Elevation & Depth
We achieve hierarchy through **Tonal Layering** rather than drop shadows.

*   **The Layering Principle:** Treat the UI as stacked sheets of paper. Place a `surface-container-lowest` (`#ffffff`) card on a `surface-container-low` (`#f4f4f0`) background to create a soft, natural "lift."
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a wide, diffused shadow: `0 20px 40px rgba(27, 28, 26, 0.06)`. This mimics natural light falling on a desk.
*   **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` (`#c4c7c7`) at **15% opacity**. This provides a "hint" of a line without breaking the fluidity of the page.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (`#1e1e1e`) background, `on-primary` text. Border-radius: `none`. The sharp corners reinforce the "printed" look.
*   **Secondary:** No background. `Ghost Border` (15% opacity `outline-variant`). 
*   **Interaction:** On hover, primary buttons shift to `primary-container`.

### Cards & Lists
*   **The Rule of Space:** **Divider lines are forbidden.** Separate list items using the spacing scale (e.g., `spacing-8` or `2.75rem`). 
*   **Visual Shift:** Use a subtle background shift to `surface-container` on hover to indicate interactivity.

### Input Fields
*   **Styling:** Fields should not be boxes. Use a single bottom stroke (1px) using `outline-variant` at 40% opacity. 
*   **Focus:** On focus, the stroke transitions to `primary` (`#1e1e1e`) and the label (Inter, `label-sm`) shifts color slightly.

### Editorial Pull-Quotes (Custom Component)
*   **Design:** Large-scale `Newsreader` italic text, centered, with `primary-fixed` (`#e4e2e1`) vertical bars on the left and right. This breaks the vertical rhythm and highlights key insights.

---

## 6. Do's and Don'ts

### Do
*   **DO** use extreme whitespace. If a layout feels "full," add more padding using the `spacing-16` (5.5rem) token.
*   **DO** mix font weights. Pair a Bold `display-md` headline with a Regular `body-lg` intro paragraph.
*   **DO** use the `surface-container` tiers to create logical grouping.

### Don't
*   **DON'T** use pure black (`#000000`) for text. Use `primary` (`#1e1e1e`) to keep the "ink-on-paper" softness.
*   **DON'T** use rounded corners (pills) for buttons or cards. Stick to the `DEFAULT` (0.25rem) or `none` for an architectural feel.
*   **DON'T** use shadows to solve hierarchy issues that can be solved with background color shifts.