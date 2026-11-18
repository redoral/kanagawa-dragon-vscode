# Kanagawa Dragon Theme — Technical Details

This page documents the specifics of the port. See [README.md](README.md) for the overview.

All colors are taken directly from the kanagawa.nvim source (`lua/kanagawa/colors.lua` and `lua/kanagawa/themes.lua`), not sampled from screenshots.

## Syntax color mapping

Ported from the `dragon` theme table in `themes.lua`, with two intentional deviations (Parameters, Punctuation — see "Small intentional deviations" below):

| Role                  | Color     | Source                                                  |
| --------------------- | --------- | ------------------------------------------------------- |
| Functions             | `#8ba4b0` | `dragonBlue2` (`syn.fun`)                               |
| Types / classes       | `#8ea4a2` | `dragonAqua` (`syn.type`)                               |
| Keywords / statements | `#8992a7` | `dragonViolet` (`syn.keyword`), italic; statements bold |
| Strings               | `#8a9a7b` | `dragonGreen2` (`syn.string`), italic                   |
| Numbers               | `#a292a3` | `dragonPink` (`syn.number`)                             |
| Constants / booleans  | `#b6927b` | `dragonOrange` (`syn.constant`), booleans bold          |
| Operators / regex     | `#c4746e` | `dragonRed` (`syn.operator`)                            |
| Parameters            | `#c5c9c5` | `dragonWhite` (deviation from `dragonGray`/`syn.parameter`) |
| Identifiers / members | `#c4b28a` | `dragonYellow` (`syn.identifier`)                       |
| Builtins / specials   | `#949fb5` | `dragonTeal` (`syn.special1`)                           |
| Punctuation           | `#c5c9c5` | `dragonWhite` (deviation from `dragonGray2`/`syn.punct`) |
| Comments              | `#737c73` | `dragonAsh` (`syn.comment`), italic                     |
| Deprecated / unused   | `#717C7C` | `katanaGray`, strikethrough (deprecated) / dimmed (unused) |
| Return/throw/try      | `#c4746e` | `syn.special3` / `syn.special2`                         |

Font styles follow kanagawa.nvim defaults: `commentStyle = italic`, `keywordStyle = italic`, `statementStyle = bold`.

## Rich highlighting

Two layers work together:

1. **TextMate scopes (`tokenColors`)** — broad coverage for grammars without an LSP: comments, strings/regex/escapes, numbers, constants, keywords (with TS/JS control-flow nuance), storage, functions, builtins, decorators, Rust attributes, HTML tags/attributes, Markdown, JSON keys vs values, YAML keys, CSS properties/selectors, diff/git, invalid/deprecated.
2. **Semantic tokens (`semanticTokenColors`)** — LSP-aware styling for TypeScript, Python, Rust, Go, C/C++: classes, interfaces, enums, functions/methods, properties, parameters, enum members, namespaces, macros, decorators, plus modifier variants (`readonly`, `static`, `global`, `defaultLibrary`, `builtin`, `deprecated`).

Semantic tokens only kick in when a language server is running (tsserver, Pylance, rust-analyzer...); otherwise the TextMate layer covers you.

## Workbench colors

- Editor/gutter/indent/whitespace use `dragonBlack0–6`
- Cursor line: `dragonBlack5` (matches Neovim `CursorLine = ui.bg_p2`)
- Gutter (line-number bar) matches the editor background (`#181616`) — the equivalent of kanagawa's `ui.bg_gutter = "none"` customization. Set it to `"#282727"` (`dragonBlack4`) if you want the stock Neovim look.
- Selection/search: `waveBlue1/2`, same as Neovim popups and search
- Diff: `winterGreen/Red/Blue/Yellow` backgrounds, `autumnRed` (deleted) and `dragonYellow` (modified) git decorations
- Diagnostics: `dragonRed` / `dragonOrange` / `dragonBlue` / `waveAqua1` (muted swaps for the stock `samuraiRed` / `roninYellow`)
- Terminal ANSI: the 16 dragon terminal colors from `themes.lua`, with the bright slots muted to match the normal ones
- Popup/menu widgets (suggest widget, find-widget filter box, breadcrumb picker, marker navigation, banner, quick input): flat editor background `#181616` — no blue popups. `waveBlue1/2` (Neovim `Pmenu`) remains on selection highlights, buttons, and editor text markers

## Small intentional deviations

- **Muted accent palette**: instead of the stock diagnostics colors `samuraiRed` (`#E82424`) and `roninYellow` (`#FF9E3B`), this port uses `dragonRed` (`#c4746e`) and `dragonOrange` (`#b6927b`). Similarly, git modified uses `dragonYellow` (`#c4b28a`) instead of `autumnYellow` (`#DCA561`), links use `dragonBlue2` (`#8ba4b0`) instead of `springBlue` (`#7FB4CA`), and the terminal's bright ANSI slots mirror the normal slots (instead of the stock vivid brights `waveRed`, `carpYellow`, `springBlue`...), so every bright color in the theme is the softer Dragon counterpart.
- **No grays in syntax**: parameters, punctuation, tag delimiters, markup markers/quotes, diff headers, and bracket highlight colors use `dragonWhite` (`#c5c9c5`) instead of the kanagawa grays (`dragonGray`, `dragonGray2`) for strong contrast against comments. Grays are reserved for unused/unreferenced code: the `invalid.deprecated` scope and the `*.deprecated` / `*.unused` semantic token modifiers (`#717C7C`).
- **Neutral UI text, dragon accents**: syntax highlighting is authentic kanagawa Dragon, with the no-grays exception above. VS Code UI text is neutralized: primary text everywhere is `dragonWhite` (`#c5c9c5`); secondary UI text (title bar, tabs, descriptions, hover cards) uses `dragonGray` (`#a6a69c`) — a darker white from the same palette — instead of kanagawa's warm cream `oldWhite`; the active line number is `dragonWhite` instead of `roninYellow`. `dragonYellow` (`#c4b28a`) is kept as the accent color for icons and the status bar (bottom bar) text and badges — including all activity-bar icons (files, search, git, extensions, ...): bright yellow for the active icon, dimmed yellow (`#c4b28a99`) for inactive ones. The side rail uses the classic `activityBar.*` keys; with `workbench.activityBar.location: "top"` (Modern UI), the active/hover icons come from the **`modernTab.*`** family, since activity bar items share the pane tab presentation there (see [microsoft/vscode#326126](https://github.com/microsoft/vscode/issues/326126) for related modern-UI theme quirks).
- `editorInlayHint.foreground` uses `dragonGray3` (#7a8382) instead of `dragonBlack6` for readability (kanagawa leaves inlay hints to the Neovim default).
- `editor.lineHighlightBorder` and bracket-match backgrounds are fully transparent since VS Code draws these differently from Vim.

## Verification

Open a file from [`samples/`](samples/) and run **Developer: Inspect Editor Tokens and Scopes** to check which rule paints a token.
