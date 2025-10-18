# Dearchiver Extension Specification

## Overview
Chrome extension that adds a contextual menu option to open links in the Internet Archive (Wayback Machine).

## Core Functionality

### Context Menu Integration
- Add a context menu item that appears when right-clicking on a link
- Menu item labeled appropriately to indicate it will open the link in Internet Archive
- When clicked, opens the Internet Archive Wayback Machine with the target URL

## Technical Requirements

### Manifest Configuration
- Manifest V3 (current Chrome extension standard)
- Required permissions:
  - contextMenus: To create and manage context menu items
  - activeTab or appropriate permissions for accessing link URLs

### Project Structure
- manifest.json: Extension configuration
- Background service worker: Handle context menu creation and click events
- Icons: Extension icons in required sizes (16x16, 48x48, 128x128)

