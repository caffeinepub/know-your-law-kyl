# Specification

## Summary
**Goal:** Add an in-app “Install App” button that triggers the native PWA install prompt when available.

**Planned changes:**
- Add a visible “Install App” button to the app UI (preferably in the header within `frontend/src/components/kyl/AppShell.tsx`) without breaking existing mobile/desktop navigation.
- Implement client-side PWA installability detection by listening for the install prompt availability event (e.g., `beforeinstallprompt`), storing a deferred prompt, and invoking it on button click.
- Update button visibility/state based on install availability and whether the app is already running in standalone/app mode; clear stored prompt and refresh state after install is accepted/dismissed.
- When installation isn’t available, hide/disable the button and provide a clear English explanation on click (e.g., guidance to use the browser menu “Add to Home Screen” / “Install”).

**User-visible outcome:** Users see an “Install App” button when installation is supported and can trigger the native install prompt without leaving the current page; otherwise they receive clear guidance when install isn’t available or the app is already installed.
