# MarkTab Copier

A simple Chrome extension for copying browser tabs as Markdown-formatted links.

![Version](https://img.shields.io/badge/version-0.9.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- 📋 **Copy Current Tab** - Copy the active tab as a Markdown link: `[Title](URL)`
- 📑 **Copy All Tabs** - Copy all open tabs at once, one per line
- 🎨 **Clean Interface** - Dark-themed, minimalist design
- 🔒 **Privacy-Focused** - No data collection, everything stays local
- ⚡ **Simple & Fast** - No configuration needed

## Installation

### From Chrome Web Store
[Coming soon - Under review]

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the `marktab-copier` folder

## Usage

1. Click the MarkTab Copier icon in your toolbar
2. Choose one of the options:
   - **Copy Current Tab** - Copies the active tab
   - **Copy All Tabs** - Copies all open tabs in the current window
3. Paste anywhere - the links are ready in Markdown format!

### Example Output

**Single Tab:**
```markdown
[GitHub](https://github.com)
```

**Multiple Tabs:**
```markdown
[NASA](https://www.nasa.gov)
[JAXA](https://www.jaxa.jp)
[Space.com](https://www.space.com)
```

## Use Cases

- 📝 Taking notes in Markdown editors (Obsidian, Notion, Logseq, etc.)
- 📚 Creating documentation with references
- 🔗 Sharing multiple links with colleagues
- 🔍 Research and content curation

## Privacy

MarkTab Copier does **not** collect, store, or transmit any user data.

- No analytics or telemetry
- No tracking of browsing history
- All processing happens locally in your browser
- No external servers involved

See [PRIVACY_POLICY.txt](PRIVACY_POLICY.txt) for details.

## Permissions

- **activeTab** - Read the current tab's title and URL when you click copy
- **tabs** - Access all tabs when using "Copy All Tabs"

## Development

This is an early version (v0.9.0). Feedback and suggestions are welcome!

### File Structure
```
marktab-copier/
├── manifest.json          # Extension configuration
├── popup.html            # Popup interface
├── popup.js              # Main functionality
├── style.css             # Styling
├── icon16.png            # Extension icon (16x16)
├── icon48.png            # Extension icon (48x48)
├── icon128.png           # Extension icon (128x128)
├── PRIVACY_POLICY.txt    # Privacy policy (English)
└── PRIVACY_POLICY_JA.txt # Privacy policy (Japanese)
```

## Roadmap

Potential features for future versions:
- Customizable link formats
- Keyboard shortcuts
- Support for selected tabs only
- Export to file

## Feedback

Found a bug or have a feature request? Please [open an issue](https://github.com/ayako0520/marktab-copier/issues).

## License

MIT License - feel free to use, modify, and distribute.

## Author

Created by [ayako0520](https://github.com/ayako0520)

---

**Star ⭐ this repo if you find it helpful!**
