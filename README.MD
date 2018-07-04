# Demo Notes

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

## html
### Non-line-breaking space
```HTML
<td>&nbsp;</td>
````
