# Inkdrop SideToc Plugin

![](https://inkdrop-plugin-badge.vercel.app/api/version/sidetoc)
![](https://inkdrop-plugin-badge.vercel.app/api/downloads/sidetoc)

It adds an outline view on the right side of the editor and preview.

https://my.inkdrop.app/plugins/sidetoc

![Screenshot](https://raw.githubusercontent.com/basyura/inkdrop-sidetoc/master/images/screenshot.png)

## Features

- Show TOC of headers.
- Highlight current header.
  - Follow cursor movement and scroll
- Toggle side toc pane.
- Jump to header on click.
- Jump to next (or previous) header by key.
- Support Preview Mode

## Install

```
ipm install sidetoc
```

## Keybindings

| Command                | Explanation                       |
| ---------------------- | --------------------------------- |
| sidetoc:sidetoc-toggle | Toggle side toc pane.             |
| sidetoc:jump-next      | Jump to next header.              |
| sidetoc:jump-prev      | Jump to previous header.          |
| sidetoc:width-increase | increase width.                   |
| sidetoc:width-decrease | decrease width.                   |
| sidetoc:width-reset    | reset width.                      |
| sidetoc:wraptext-toggle| Toggle wrap/nowrap overflow text. |




keymap.cson

```cson
'body':
    'ctrl-l': 'sidetoc:sidetoc-toggle'
    'ctrl-n': 'sidetoc:jump-next'
    'ctrl-p': 'sidetoc:jump-prev'
    'ctrl-L': 'sidetoc:width-decrease'
    'ctrl-K': 'sidetoc:width-increase'
    'ctrl-0': 'sidetoc:width-reset'
    'ctrl-t': 'sidetoc:wraptext-toggle'

'.mde-preview':
    'ctrl-n': 'sidetoc:jump-next'
    'ctrl-p': 'sidetoc:jump-prev'
```

## Settings

| key                | default                                 |
| ------------------ | --------------------------------------- |
| ~~highlightColor~~ | ~~#C5EAFB~~  - Obsolete!!                  |
| highlightBgColor   | --note-list-view-item-active-background |
| highlightFgColor   | --note-list-view-item-active-color      |
| width              | 200                                     |
| textwrap           | true                                    |

config.cson

```cson
sidetoc:
  highlightBgColor: "#C5EAFB"
  highlightFgColor: "black"
  width: 200
  textwrap: false
```

Settings UI


![setting1](https://raw.githubusercontent.com/basyura/inkdrop-sidetoc/master/images/setting1.png)
![setting2](https://raw.githubusercontent.com/basyura/inkdrop-sidetoc/master/images/setting2.png)

## Style Tweaks

https://docs.inkdrop.app/manual/style-tweaks

> If you want to apply quick-and-dirty personal styling changes without creating an entire theme that you intend to publish,
> you can add styles to the styles.less file in your data directory. It does not exist by default.

## Not supported

* Content in html tags (syntax).

## Changelog

2.0.1 -  2022/06/12

- improved readme (style teaks).
- security update.

2.0.0 -  2022/04/16

- Change the color for each theme.
- Obsolete the highlightColor setting.

1.16.0 -  2022/01/22

- added textwrap option and command.
- security update.

1.15.0 -  2022/01/05

- fixed style

1.14.0 - 2021/11/16  
1.13.0 - 2021/11/16

- improved sidetoc pane height. FIXED #9

1.12.0 - 2021/07/17

- improved header updates

1.11.0 - 2021/06/09

- [fixed window becomes messed up](https://forum.inkdrop.app/t/window-becomes-messed-up-when-exporting-to-pdf/2462/2)

1.10.0 - 2021/1/12

- improved README
- improved cache

1.9.0 - 2020/12/05

- improved overflow-y style.

1.8.0 - 2020/08/08

- add change width command .
- change to typescript.

1.7.0 - 2020/06/25

- Sync highlighted header with preview scroll.
- Support jumpToNext (Prev) in preview
- Ignore `#` in CodeBlock 
  - Content in html tags (syntax) Not supported.

1.6.0 - 2020/06/09

- Scroll content when over flow height.
- Don't remove component on hiding.
- Don't show spaces if there is no header.

1.5.0 - 2020/05/09

- Add commands.
  - sidetoc:jump-next
  - sidetoc:jump-prev
- Add cursor style.
- Fix multiple event registration

1.4.0 - 2020/05/05

- Improved highlight header

1.3.0 - 2020/04/25

- Fix header regex

1.2.0 - 2020/04/05

- improved readme

1.1.0 - 2020/03/29

- improved readme

1.0.0 - 2020/03/29

- First release!

## ToDo

- [ ] 入力のたびに再描画が走る
  - 保存時に反映するだけにしたいが API が無い？
  - 処理時間は 0 〜 2ms なので問題はなさそう
- [ ] プレビュー時のハイライト表示がされないときがある

### Done

- [x] スクロールバーの動きに追従
- [x] セクションがない場合はサイドバー表示しない
- [x] toggle で非表示にしても min-width が効いていて領域を取っている
- [x] サイドバーの幅指定
- [x] スタイル設定 (config 設定)
- [x] エディタのフォント設定を取得して反映する
- [x] サイドバークリックでジャンプしたい
- [x] カーソルの mouse over でセクションの色を変える
- [x] セクション (`#`) 行を出力する
- [x] カーソルの位置をセクションに合わせる (CPU 使いそう)
- [x] セクション移動 (リンク、ショートカットキー)
