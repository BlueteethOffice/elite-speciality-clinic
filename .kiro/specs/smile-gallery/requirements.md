# Requirements Document

## Introduction

The **Smile Gallery** is a dedicated full-page feature at `/gallery` on the Elite Speciality Clinic website. Its purpose is to showcase real patient smile-transformation results in a visually premium, trustworthy format that matches the clinic's high-end positioning. The page replaces the existing basic grid with an immersive before/after showcase, interactive filtering by treatment category, an interactive drag-reveal comparison slider, a lightbox for full-screen viewing, and a conversion-focused CTA section — all consistent with the site's established dark-navy and teal design system.

---

## Glossary

- **Gallery_Page**: The full Next.js page rendered at `/gallery`.
- **Case_Card**: A UI card representing a single patient treatment result, containing before/after images, metadata, and category.
- **Comparison_Slider**: The interactive drag-to-reveal control that overlays the before image on the after image with a movable divider.
- **Lightbox**: A full-screen modal overlay that displays a Case_Card's before/after content in detail.
- **Category_Filter**: The set of filter buttons that restrict visible Case_Cards to a selected treatment category.
- **Hero_Section**: The full-width banner at the top of the Gallery_Page.
- **Stats_Bar**: A horizontal row of key clinic statistics shown below the Hero_Section.
- **CTA_Section**: The call-to-action banner prompting appointment booking, shown at the bottom of the Gallery_Page.
- **Gallery_Grid**: The responsive grid layout containing all visible Case_Cards.
- **Filter_State**: The currently active category selection in the Category_Filter.
- **Reveal_Percentage**: A numeric value in the range [0, 100] representing how much of the "after" image is exposed in the Comparison_Slider.
- **Treatment_Category**: One of: All Cases, Orthodontics, Cosmetic Dentistry, Dental Implants, Restorative, Smile Makeover.
- **Design_System**: The site's established visual language — Inter font, primary navy `#0B1F3A`, teal `#00A6A6`, accent `#00E5FF`, light background `#F8FAFC`, CSS Modules with glassmorphism card patterns.

---

## Requirements

### Requirement 1: Hero Section

**User Story:** As a prospective patient, I want to land on a visually impressive hero section when I visit the gallery, so that I feel confident I am exploring results from a premium dental clinic.

#### Acceptance Criteria

1. THE Gallery_Page SHALL render a Hero_Section at the top of the page above all other content.
2. THE Hero_Section SHALL display a headline, a supporting subtitle, and a primary CTA button linking to `/contact`.
3. THE Hero_Section SHALL apply the site's Design_System — dark navy overlay, teal accent colour, Inter font, and a decorative background image.
4. THE Hero_Section SHALL render a breadcrumb trail indicating `Home → Smile Gallery`.

---

### Requirement 2: Stats Bar

**User Story:** As a prospective patient, I want to see headline clinic statistics immediately after the hero, so that I trust the scale and quality of the clinic's work before viewing cases.

#### Acceptance Criteria

1. THE Stats_Bar SHALL display at least four statistics: total cases treated, years of experience, patient satisfaction score, and a Google rating.
2. THE Stats_Bar SHALL render each statistic with a bold numeric value and a descriptive label.
3. THE Stats_Bar SHALL be positioned between the Hero_Section and the Category_Filter.

---

### Requirement 3: Treatment Category Filtering

**User Story:** As a site visitor, I want to filter the gallery by treatment type, so that I can find results relevant to the procedure I am considering.

#### Acceptance Criteria

1. THE Gallery_Page SHALL render Category_Filter buttons for: All Cases, Orthodontics, Cosmetic Dentistry, Dental Implants, Restorative, and Smile Makeover.
2. WHEN a user clicks a Treatment_Category button, THE Gallery_Grid SHALL display only Case_Cards whose category matches the selected Treatment_Category.
3. WHEN a user clicks the "All Cases" button, THE Gallery_Grid SHALL display all available Case_Cards regardless of category.
4. WHILE a Treatment_Category filter is active, THE Category_Filter SHALL visually distinguish the active button using the teal `#00A6A6` background and white text from the Design_System.
5. WHEN the Gallery_Page first loads, THE Filter_State SHALL default to "All Cases".
6. FOR ALL valid Treatment_Category values, every Case_Card displayed in the Gallery_Grid SHALL belong to the selected Treatment_Category or to "all" when "All Cases" is active.

---

### Requirement 4: Gallery Grid Layout

**User Story:** As a visitor, I want the patient cases displayed in a clean, responsive grid, so that I can browse them comfortably on any device.

#### Acceptance Criteria

1. THE Gallery_Grid SHALL display Case_Cards in a three-column layout on desktop screens (viewport ≥ 1024 px).
2. THE Gallery_Grid SHALL display Case_Cards in a two-column layout on tablet screens (viewport 640 px – 1023 px).
3. THE Gallery_Grid SHALL display Case_Cards in a single-column layout on mobile screens (viewport < 640 px).
4. WHEN the Filter_State changes, THE Gallery_Grid SHALL animate the transition of Case_Cards using a smooth opacity and translate fade-in effect with a duration ≤ 400 ms.
5. IF no Case_Cards match the active Treatment_Category, THEN THE Gallery_Grid SHALL display an empty-state message reading "No cases found for this category."

---

### Requirement 5: Case Card — Before/After Comparison Slider

**User Story:** As a patient, I want to drag a slider to reveal before and after images side by side, so that I can clearly see the transformation achieved by the treatment.

#### Acceptance Criteria

1. EACH Case_Card SHALL embed a Comparison_Slider that overlays the before image on the after image using a movable vertical divider.
2. WHEN a user drags the Comparison_Slider divider, THE Gallery_Page SHALL update the Reveal_Percentage in real time so that the after image is revealed proportionally to the divider position.
3. THE Comparison_Slider SHALL clamp the Reveal_Percentage to the range [0, 100] regardless of pointer position.
4. THE Comparison_Slider SHALL support both mouse drag and touch drag interactions.
5. WHEN the Comparison_Slider is idle (no interaction), THE Reveal_Percentage SHALL default to 50, showing equal halves of before and after.
6. THE Comparison_Slider SHALL display "Before" and "After" labels at the left and right edges respectively, styled using the Design_System.
7. THE Comparison_Slider SHALL display a visible drag-handle icon centred on the divider line.

---

### Requirement 6: Case Card — Metadata Display

**User Story:** As a prospective patient, I want to see key details about each treatment case, so that I can understand the complexity and outcome before booking.

#### Acceptance Criteria

1. EACH Case_Card SHALL display: treatment title, category tag, case description, treatment duration, procedure type, and difficulty level.
2. EACH Case_Card SHALL display the category tag using the colour pairing defined for that Treatment_Category in the Design_System.
3. THE Case_Card SHALL use the glassmorphism card style established in the site's Design_System — `rgba(255,255,255,0.7)` background, `backdrop-filter: blur(14px)`, `border-radius: 24px`, and teal top-accent bar on hover.
4. WHEN a user hovers a Case_Card, THE Case_Card SHALL elevate with `translateY(-8px)` and an increased box shadow within 350 ms.

---

### Requirement 7: Lightbox Modal

**User Story:** As a visitor, I want to open any case in a full-screen lightbox modal, so that I can examine the before/after images in full detail without leaving the page.

#### Acceptance Criteria

1. WHEN a user clicks a Case_Card, THE Gallery_Page SHALL open the Lightbox displaying the selected case's before and after images at full viewport size.
2. THE Lightbox SHALL include a working Comparison_Slider (meeting all criteria in Requirement 5) at full display size.
3. THE Lightbox SHALL display the case title, description, duration, procedure type, and difficulty level.
4. WHEN the Lightbox is open, THE Gallery_Page SHALL display a close button accessible by both click and keyboard (`Escape` key).
5. WHEN the user presses the `Escape` key while the Lightbox is open, THE Lightbox SHALL close and return focus to the triggering Case_Card.
6. THE Lightbox SHALL include previous and next navigation arrows, allowing the user to move between Case_Cards without closing the modal.
7. WHILE the Lightbox is open, THE Gallery_Page SHALL prevent body scroll and apply a dark overlay behind the modal.
8. IF a user clicks outside the Lightbox content area, THEN THE Lightbox SHALL close.

---

### Requirement 8: CTA Section

**User Story:** As a clinic owner, I want a strong call-to-action at the bottom of the gallery, so that visitors who are inspired by the results are converted to appointment bookings.

#### Acceptance Criteria

1. THE CTA_Section SHALL be positioned at the bottom of the Gallery_Page below the Gallery_Grid.
2. THE CTA_Section SHALL display a headline, supporting copy, a "Book Free Consultation" button linking to `/contact`, and a phone number linking to `tel:8510007234`.
3. THE CTA_Section SHALL use the teal gradient background (`linear-gradient(135deg, #00A6A6 0%, #007a7a 100%)`) from the Design_System.
4. THE CTA_Section SHALL be fully responsive, stacking its content vertically on mobile screens (viewport < 768 px).

---

### Requirement 9: Accessibility

**User Story:** As a user relying on assistive technology, I want the gallery to be navigable and understandable, so that I can access case results equally.

#### Acceptance Criteria

1. EACH Case_Card image SHALL include a descriptive `alt` attribute — "Before: [treatment title]" and "After: [treatment title]".
2. THE Comparison_Slider SHALL expose an ARIA `role="slider"`, `aria-valuenow`, `aria-valuemin="0"`, and `aria-valuemax="100"` for screen reader compatibility.
3. THE Lightbox SHALL trap keyboard focus within the modal while it is open, cycling through focusable elements.
4. THE Category_Filter buttons SHALL use `aria-pressed="true"` on the active button to communicate the selected state to screen readers.
5. THE Gallery_Page SHALL achieve a Lighthouse Accessibility score ≥ 90 on desktop.

---

### Requirement 10: Performance

**User Story:** As a visitor on a mobile or slow connection, I want the gallery to load quickly, so that I am not deterred by a slow page before I can see the results.

#### Acceptance Criteria

1. THE Gallery_Page SHALL use Next.js `<Image>` with the `priority` flag on the first visible Case_Card images (above the fold) to enable preloading.
2. THE Gallery_Page SHALL use lazy loading (`loading="lazy"` via Next.js `<Image>`) for all Case_Card images that are below the fold on initial render.
3. THE Gallery_Page SHALL achieve a Lighthouse Performance score ≥ 85 on mobile.
4. WHERE actual patient photos are not yet available, THE Gallery_Page SHALL use the existing treatment images from `/public/images/treatments/` as placeholder content without breaking the layout.

---

### Requirement 11: Navigation Integration

**User Story:** As a site visitor, I want to reach the Smile Gallery from the main navigation, so that I can find it easily without needing to know the direct URL.

#### Acceptance Criteria

1. THE Navbar SHALL include a "Smile Gallery" link that navigates to `/gallery`.
2. WHEN the user is on the Gallery_Page, THE Navbar SHALL visually highlight the "Smile Gallery" link as the active route.

---
