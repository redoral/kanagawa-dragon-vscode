# Kanagawa Dragon for VS Code

A faithful VS Code port of the **dragon** variant of [kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) by rebelot — the palette "for those late-night sessions".

All colors are taken directly from the kanagawa.nvim source (`lua/kanagawa/colors.lua` and `lua/kanagawa/themes.lua`), not sampled from screenshots.

## Installation

### From this repo (VSIX)

```bash
cd kanagawa-dragon-vscode
npx @vscode/vsce package
code --install-extension kanagawa-dragon-0.1.0.vsix
```

### From source (sideload)

1. Copy this folder into your VS Code extensions directory (`%USERPROFILE%\.vscode\extensions` on Windows).
2. Restart VS Code.
3. `Ctrl+K Ctrl+T` → select **Kanagawa Dragon**.

## Syntax color mapping

Ported 1:1 from the `dragon` theme table in `themes.lua`:

| Role | Color | Source |
| --- | --- | --- |
| Functions | `#8ba4b0` | `dragonBlue2` (`syn.fun`) |
| Types / classes | `#8ea4a2` | `dragonAqua` (`syn.type`) |
| Keywords / statements | `#8992a7` | `dragonViolet` (`syn.keyword`), italic; statements bold |
| Strings | `#8a9a7b` | `dragonGreen2` (`syn.string`), italic |
| Numbers | `#a292a3` | `dragonPink` (`syn.number`) |
| Constants / booleans | `#b6927b` | `dragonOrange` (`syn.constant`), booleans bold |
| Operators / regex | `#c4746e` | `dragonRed` (`syn.operator`) |
| Parameters | `#a6a69c` | `dragonGray` (`syn.parameter`) |
| Identifiers / members | `#c4b28a` | `dragonYellow` (`syn.identifier`) |
| Builtins / specials | `#949fb5` | `dragonTeal` (`syn.special1`) |
| Punctuation | `#9e9b93` | `dragonGray2` (`syn.punct`) |
| Comments | `#737c73` | `dragonAsh` (`syn.comment`), italic |
| Deprecated | `#717C7C` | `katanaGray`, strikethrough |
| Return/throw/try | `#c4746e` | `syn.special3` / `syn.special2` |

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
- Diff: `winterGreen/Red/Blue/Yellow` backgrounds, `autumn*` gutter/git decorations
- Diagnostics: `samuraiRed` / `roninYellow` / `dragonBlue` / `waveAqua1`
- Terminal ANSI: the 16 dragon terminal colors from `themes.lua`
- Suggest/quick-pick widgets: `waveBlue1/2` popup palette (Neovim `Pmenu`)

## Small intentional deviations

- **Neutral UI text, dragon accents**: syntax highlighting stays 100% authentic kanagawa Dragon. VS Code UI text is neutralized: primary text everywhere is `dragonWhite` (`#c5c9c5`); secondary UI text (title bar, tabs, descriptions, hover cards) uses `dragonGray` (`#a6a69c`) — a darker white from the same palette — instead of kanagawa's warm cream `oldWhite`; the active line number is `dragonWhite` instead of `roninYellow`. `dragonYellow` (`#c4b28a`) is kept as the accent color for icons and the status bar (bottom bar) text and badges — including all activity-bar icons (files, search, git, extensions, ...): bright yellow for the active icon, dimmed yellow (`#c4b28a99`) for inactive ones. The side rail uses the classic `activityBar.*` keys; with `workbench.activityBar.location: "top"` (Modern UI), the active/hover icons come from the **`modernTab.*`** family, since activity bar items share the pane tab presentation there (see [microsoft/vscode#326126](https://github.com/microsoft/vscode/issues/326126) for related modern-UI theme quirks).
- `editorInlayHint.foreground` uses `dragonGray3` (#7a8382) instead of `dragonBlack6` for readability (kanagawa leaves inlay hints to the Neovim default).
- `editor.lineHighlightBorder` and bracket-match backgrounds are fully transparent since VS Code draws these differently from Vim.

## Verification

Open a file from [`samples/`](samples/) and run **Developer: Inspect Editor Tokens and Scopes** to check which rule paints a token.

## License

MIT. Colors and design derive from [kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) © Tommaso (rebelot), MIT licensed.
