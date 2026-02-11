# Specification

## Summary
**Goal:** Remove the “Play Store Guide” section and all entry points to its Google Play publishing checklist content from the KYL app UI.

**Planned changes:**
- Remove the “Play Store Guide” item from sidebar/mobile navigation.
- Remove the “Play Store Guide” quick-link card from the Overview page.
- Remove the app’s “play-store-guide” section id/route/switch-case and any related references so it can’t be navigated to or rendered.
- Ensure the project builds successfully with no TypeScript errors after removing the section.

**User-visible outcome:** Users will no longer see or be able to access any “Play Store Guide” section or related checklist content, while the existing PWA install button/flow remains unchanged.
