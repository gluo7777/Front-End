# Bookmarks
- [DOM Reference](https://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/idl-definitions.html)
- [Browser Guide](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

# Folders
- Demo: Actual usable component
- Examples: Code Snippets. May be usable.
- Diagrams

## css
### rem vs px vs em
#### pixels
* development-friendly
* not accessible
 * constant/won't scale
 * user zoom in - font size remains constant if set in px
#### rem
* relative to root HTML element (change root to scale)
* example
  - <html> font size = 10 px
  - <p> font size = 1.6 rem = 1.6 rem * 10 px = 16 px
* best practice to set <html> font size to 62.5% of browser font size
#### em
* like rem but relative to direct ancestor, not <html> tag
* example:
  - <html>,10px
    - <div>, 2em
        - <p>, 2em = 10 * 2 * 2 = 40
* nested complexity
#### box layout
![From developer.mozilla.org](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)
## html
### Non-line-breaking space
```HTML
<td>&nbsp;</td>
````

## Browsers
- [Guide](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
- WebKit
- W3C specifications
- Parts
 - Rendering engine (Chrome - separate processes for each tab)
 - JS interpreter
- Rendering
 - parse HTML
  - Generate DOM tree
 - parse CSS
  - Generate render tree
- layout
- painting
- [Diagram](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png)
- Grammar
 - Context Free
 - Parser-Lexer
  - Lexical analysis: Tokens
   - Vocabulary: Regex exp.
  - Syntax analysis: Rules to classify input -> Token
   - BNF
 - Parsing
  - Top Down
  - Bottom Up
  - Auto: Flex, Bison
 - HTML vs XML
  - HTML is not strict nor BNF compatible
   - Pre-processing needed
 - HTML DTD
