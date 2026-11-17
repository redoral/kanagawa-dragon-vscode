# Changelog

## 0.1.0 — 2026-11-16

Initial release.

- Kanagawa Dragon color theme for VS Code, ported from the `dragon` variant of
  [kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) (colors taken directly from
  `colors.lua`, `themes.lua`, and the editor/syntax/treesitter/lsp highlight sources).
- Full workbench palette: `dragonBlack*` editor surfaces, `waveBlue*` selection and popups,
  `winter*` diff backgrounds, `autumn*` git decorations, dragon diagnostics, and the dragon
  terminal ANSI palette.
- Rich syntax highlighting: broad TextMate `tokenColors` coverage plus LSP
  `semanticTokenColors` with modifier variants (`readonly`, `static`, `defaultLibrary`,
  `builtin`, `deprecated`).
- Neutral UI text: `dragonWhite` (`#c5c9c5`) primary, `dragonGray` (`#a6a69c`) secondary;
  `dragonYellow` (`#c4b28a`) reserved for icons, the status bar, and badges.
- Activity bar icons: bright `dragonYellow` active, dimmed yellow inactive — for both the
  side rail (`activityBar.*`) and the Modern UI top/bottom layout (`modernTab.*`).
- Flat editor background for the gutter and command palette/menus.
- Sample verification files in `samples/`.
