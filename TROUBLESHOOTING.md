# Troubleshooting Guide

## Navigation Menu Not Responding to Clicks

**Symptom:** Menu items (like "My Story") don't respond to clicks or hover states.

**Root Cause:** Overlay div with z-index blocking pointer events to navigation elements.

**What Happened:**
- An overlay div was added to the hero section to darken background images for text readability
- The overlay had `z-index: 2` and covered the entire hero area with `position: absolute; inset: 0;`
- Even though the nav had `z-index: 4` (higher than overlay), the overlay div was still capturing all mouse events
- This blocked clicks from reaching the navigation menu items

**Solution Applied:**
```css
.nav {
  z-index: 10;              /* Higher than all other layers */
  pointer-events: none;      /* Let clicks pass through container */
}
.nav > * {
  pointer-events: auto;      /* Re-enable clicks on children (logo, menu) */
}
```

**Key Lessons:**
1. Z-index alone doesn't prevent pointer event blocking
2. Overlays need `pointer-events: none` if they shouldn't capture clicks
3. Use `pointer-events: auto` on specific children that should be clickable
4. Always test click interactions after adding overlays or positioning layers

**Quick Diagnostic Steps:**
1. Open DevTools → Elements
2. Use element picker and click where the unresponsive element is
3. Check what element is actually receiving the click (might be an overlay)
4. Verify z-index layering and add pointer-events rules as needed

**File Modified:** `src/components/HeroChezLolo.tsx`
**Date Fixed:** 2025-11-10
