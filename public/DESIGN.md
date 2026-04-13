# Design System Specification: Axodus Ecosystem

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Observatory"**

The objective of this design system is to transcend the generic "SaaS Dashboard" look. We are building a high-tech, premium DeFi environment that feels like a precision instrument—an observatory for digital assets. 

To achieve this, we move away from rigid, boxed-in layouts toward an **Editorial Tech** aesthetic. This means leveraging high-contrast typography scales, intentional asymmetry in data visualization, and "Atmospheric Depth." We do not just show data; we curate an experience where the most critical financial metrics feel physically layered in a 3D space, utilizing light and transparency to guide the user’s eye rather than heavy-handed structural lines.

---

## 2. Colors & Surface Architecture

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural definition must be achieved through **Tonal Transitions**. Use the background color shifts between `surface-container` tiers to define boundaries. A card doesn't need a stroke if its container is `surface-container-low` and the card itself is `surface-container-highest`.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of synthetic material.
*   **Base Level:** `surface` (#0b1326) – The infinite void.
*   **Section Level:** `surface-container-low` (#131b2e) – Large layout areas.
*   **Object Level:** `surface-container-highest` (#2d3449) – Interactive cards and modules.
*   **Floating Level:** `surface-bright` (#31394d) – Modals and popovers.

### The "Glass & Gradient" Rule
To inject "soul" into the high-tech aesthetic, primary actions and hero data points should utilize **Signature Textures**:
*   **CTAs:** A linear gradient from `primary` (#c0c1ff) to `primary-container` (#8083ff) at a 135-degree angle.
*   **Glassmorphism:** For floating navigation or overlays, use `surface-container-high` at 60% opacity with a `20px` backdrop-blur. This ensures the "Kinetic" feel where the ecosystem background bleeds through the UI.

---

## 3. Typography: The Inter Editorial Scale

We use **Inter UI** exclusively. The system relies on extreme weight and size contrast to create hierarchy in data-dense views.

*   **Display (lg/md/sm):** Used for total portfolio balances or "hero" numbers. Tracking should be set to `-0.02em` to feel tighter and more premium.
*   **Headline (lg/md/sm):** Used for page titles and major section headers. Use `Font-Weight: 600` (Semi-bold).
*   **Title (lg/md/sm):** Used for card titles and module headers.
*   **Body (lg/md/sm):** The workhorse for data labels. `body-md` (0.875rem) is our standard for readability.
*   **Label (md/sm):** Reserved for micro-data, "all caps" eyebrow text, or status indicators.

**Editorial Rule:** When displaying large numbers (Display-lg), pair them with a much smaller `label-md` unit (e.g., "$ETH") to create a sophisticated, unbalanced look that emphasizes the value.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved via **Tonal Layering** rather than shadows. 
*   Place a `surface-container-lowest` (#060e20) element inside a `surface-container` (#171f33) area to create an "inset" or "well" effect for data logs.
*   Use `surface-container-highest` (#2d3449) for elements that need to "pop" toward the user.

### Ambient Shadows
Shadows are only permitted for "Floating" elements (Modals, Tooltips). 
*   **Value:** `box-shadow: 0 20px 40px rgba(6, 14, 32, 0.4);` 
*   Shadows must be tinted with the background hue—never use pure black (#000).

### The "Ghost Border" Fallback
If high-density data requires visual separation, use the **Ghost Border**: 
*   `outline-variant` (#464554) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`). White text (`on-primary`). Radius: `md` (0.375rem).
*   **Secondary:** Ghost style. `surface-container-highest` background with `outline` (#908fa0) at 20% opacity.
*   **Tertiary:** Text only using `primary` color, `Semi-bold`.

### Input Fields
*   **Base:** `surface-container-lowest` background. 
*   **Interaction:** On focus, the background shifts to `surface-container-low` and a 1px `primary` ghost border (20% opacity) appears.
*   **Error:** Use `error` (#ffb4ab) for the label and a subtle `error_container` glow.

### Cards & Lists
*   **Rule:** No dividers. Use **8px / 16px / 24px** vertical spacing to group content.
*   **Interactive Cards:** Should have a subtle `hover` state where the background color lightens by one tier (e.g., from `surface-container-high` to `surface-container-highest`).

### Additional Crypto-Specific Components
*   **Token Badges:** Use `secondary` (#41e4b8) for "Long" or "Success" states and `tertiary` (#ffb783) for "Pending" or "Warning" states.
*   **Dynamic Sparklines:** Use `secondary` for positive trends and `error` for negative. The line should have a 2px width and a subtle glow (drop-shadow) of the same color.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. A 3-column grid where the middle column is twice the width of the others creates a more custom, high-end feel.
*   **Do** use `letter-spacing: -0.01em` on all body text to enhance the "Inter" look.
*   **Do** utilize white space as a structural element. If an element feels cramped, increase the padding rather than adding a line.

### Don't
*   **Don't** use 100% opaque borders. They break the fluid, high-tech "Kinetic" aesthetic.
*   **Don't** use pure black or pure white. Always use the provided tokens (`surface-container-lowest` and `on-surface`).
*   **Don't** use standard shadows for cards. Stick to tonal layering for 90% of the UI.
*   **Don't** use more than two font weights on a single card. Let size and color handle the hierarchy.