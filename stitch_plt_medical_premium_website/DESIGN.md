---
name: Regal Medical Excellence
colors:
  surface: '#f9f9fe'
  surface-dim: '#dad9de'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf2'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e7'
  on-surface: '#1a1c1f'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#381300'
  on-tertiary: '#ffffff'
  tertiary-container: '#592300'
  on-tertiary-container: '#d8885c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#723610'
  background: '#f9f9fe'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e7'
  ivory-base: '#F9F9F9'
  charcoal-text: '#333333'
  gold-glare: '#D4AF37'
  glass-overlay: rgba(255, 255, 255, 0.7)
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 120px
  section-gap-md: 80px
  element-gap: 16px
---

## Brand & Style
The brand personality is **Elite, Authoritative, and Visionary**. It bridges the gap between traditional academic heritage (Ivy League) and future-facing medical innovation. The target audience—ambitious international students—must perceive the institution as a prestigious gateway to global medical careers.

The design style is a blend of **Minimalism** and **Glassmorphism**. It utilizes heavy whitespace and a refined color palette to establish authority, while using translucent glass layers and subtle blurs to evoke a modern, high-tech medical environment. The visual mood is "Institutional Luxury," where every element feels intentional, high-quality, and reliable.

## Colors
The palette is rooted in a "Traditional Prestige" logic. **Deep Royal Blue** acts as the anchor, representing stability and depth of knowledge. **Rich Gold** is used sparingly for accents, borders, and call-to-actions to signify value and excellence. 

**Ivory** replaces pure white for all major backgrounds to create a warmer, more sophisticated "parchment" feel that reduces eye strain while maintaining a high-end editorial look. **Charcoal** is utilized for body text to ensure maximum legibility without the harshness of pure black. Glassmorphic effects should use the `glass-overlay` token to create semi-transparent surfaces over high-resolution imagery.

## Typography
The typography system pairs the literary authority of **Playfair Display** with the functional precision of **Inter**. 

All primary headings must use Playfair Display to evoke an Ivy League aesthetic. For high-impact hero sections, use the `display-hero` level with tight letter spacing. Body copy relies on Inter for its neutral, highly legible character, ensuring complex medical information is easy to digest. Use `label-caps` for small metadata like dates or categories to maintain a disciplined, organized structure.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to maintain a premium "magazine" feel. The layout is centered on a 12-column grid with a maximum width of 1280px. 

- **Desktop:** Generous 120px vertical gaps between major sections to emphasize whitespace and premium positioning.
- **Tablet:** 8-column grid with 80px section gaps.
- **Mobile:** 4-column fluid layout with 20px side margins. 

Content should be grouped into logical "containers" with consistent internal padding (typically 32px or 48px) to maintain a structured, tidy appearance.

## Elevation & Depth
Depth is achieved through a combination of **Glassmorphism** and **Ambient Shadows**. 

1.  **Surfaces:** Navigation bars and featured overlays use a background blur (15px to 25px) and the `glass-overlay` color to sit above vibrant imagery.
2.  **Shadows:** Use extremely soft, wide-spread shadows (e.g., `0 20px 40px rgba(0,0,0,0.05)`) to make cards feel like they are floating slightly above the Ivory base. 
3.  **Hierarchy:** Higher elevation is reserved for interactive elements like modals or active cards. Lower-tier containers use a 1px border in a muted version of the Gold or Blue rather than shadows to keep the design clean.

## Shapes
The shape language is **Rounded**, striking a balance between friendly accessibility and institutional discipline. 

Standard components (Cards, Inputs) use 0.5rem (8px) corners. "Attractive containers" and hero images may use `rounded-lg` (16px) or `rounded-xl` (24px) to create a softer, more modern framing effect. Circular shapes are reserved strictly for avatars or secondary icon buttons to avoid cluttering the sophisticated grid.

## Components

### Buttons
- **Primary:** Deep Royal Blue background, white text, 8px border-radius. On hover, a subtle Gold bottom border (2px) appears.
- **Secondary:** Transparent background with a 1.5px Gold border. Text is Charcoal or Blue.
- **Tactile Feel:** Implement a 2px vertical "press" effect on active states to make buttons feel physical and premium.

### Cards
- **Structure:** Cards use the Ivory-base or a subtle Glassmorphic background. 
- **Accents:** A 2px Gold top-border or left-border is used to denote "Featured" status. 
- **Interactions:** On hover, cards should lift slightly (increase shadow spread) and the border-color should transition to a brighter Gold.

### Input Fields
- Understated design with a 1px light-gray border. Upon focus, the border transitions to Deep Royal Blue with a soft blue outer glow.

### Chips/Tags
- Small, pill-shaped tags with a light Gold tint background and Deep Royal Blue text. Used for "New," "Research," or "International" labels.

### Imagery
- Large, high-resolution photography is mandatory. Use subtle "Gold-hour" color grading where possible to align with the brand’s premium warmth.