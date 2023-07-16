﻿html {
    -ms - text - size - adjust: 100 %;
    -webkit - text - size - adjust: 100 %;
    font - family: sans - serif
}

body {
    margin: 0
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block
}

audio, canvas, progress, video {
    vertical - align: baseline;
    display: inline - block
}

audio: not([controls]) {
    height: 0;
    display: none
}

[hidden], template {
    display: none
}

a {
    background - color: transparent
}

a: active, a:hover {
    outline: 0
}

abbr[title] {
    border - bottom: 1px dotted
}

b, strong {
    font - weight: 700
}

dfn {
    font - style: italic
}

h1 {
    margin: .67em 0;
    font - size: 2em
}

mark {
    color: #000;
    background: #ff0
}

small {
    font - size: 80 %
}

sub, sup {
    vertical - align: baseline;
    font - size: 75 %;
    line - height: 0;
    position: relative
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

img {
    border: 0
}

svg: not(: root) {
    overflow: hidden
}

figure {
    margin: 1em 40px
}

hr {
    box - sizing: content - box;
    height: 0
}

pre {
    overflow: auto
}

code, kbd, pre, samp {
    font - family: monospace;
    font - size: 1em
}

button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button, select {
    text - transform: none
}

button, html input[type = button], input[type = reset] {
    -webkit - appearance: button;
    cursor: pointer
}

button[disabled], html input[disabled] {
    cursor: default
}

button:: -moz - focus - inner, input:: -moz - focus - inner {
    border: 0;
    padding: 0
}

input {
    line - height: normal
}

input[type = checkbox], input[type = radio] {
    box - sizing: border - box;
    padding: 0
}

input[type = number]:: -webkit - inner - spin - button, input[type = number]:: -webkit - outer - spin - button {
    height: auto
}

input[type = search] {
    -webkit - appearance: none
}

input[type = search]:: -webkit - search - cancel - button, input[type = search]:: -webkit - search - decoration {
    -webkit - appearance: none
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font - weight: 700
}

table {
    border - collapse: collapse;
    border - spacing: 0
}

td, th {
    padding: 0
}

@font-face {
    font - family: webflow - icons;
    src: url(data: application / x - font - ttf; charset = utf - 8; base64, AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP + a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA / 8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)format("truetype");
    font - weight: 400;
    font - style: normal
}

[class^= w - icon -], [class*=\ w - icon -] {
    speak: none;
    font - variant: normal;
    text - transform: none;
    -webkit - font - smoothing: antialiased;
    -moz - osx - font - smoothing: grayscale;
    font - style: normal;
    font - weight: 400;
    line - height: 1;
    font - family: webflow - icons!important
}

.w - icon - slider - right:before {
    content: ""
}

.w - icon - slider - left:before {
    content: ""
}

.w - icon - nav - menu:before {
    content: ""
}

.w - icon - arrow - down: before,.w - icon - dropdown - toggle:before {
    content: ""
}

.w - icon - file - upload - remove:before {
    content: ""
}

.w - icon - file - upload - icon:before {
    content: ""
}

* {
    box- sizing: border - box;
}

html {
    height: 100 %
}

body {
    min - height: 100 %;
    color: #333;
    background - color: #fff;
    /* margin:0; */
    font - family: Arial, sans - serif;
    font - size: 14px;
    line - height: 20px
}

img {
    max - width: 100 %;
    vertical - align: middle;
    display: inline - block
}

html.w - mod - touch * {
    background- attachment: scroll!important
}

.w - block {
    display: block
}

.w - inline - block {
    max - width: 100 %;
    display: inline - block
}

.w - clearfix: before,.w - clearfix:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - clearfix:after {
    clear: both
}

.w - hidden {
    display: none
}

.w - button {
    color: #fff;
    line - height: inherit;
    cursor: pointer;
    background - color: #3898ec;
    border: 0;
    border - radius: 0;
    padding: 9px 15px;
    text - decoration: none;
    display: inline - block
}

input.w - button {
    -webkit - appearance: button
}

html[data - w - dynpage][data - w - cloak] {
    color: transparent!important
}

.w - webflow - badge,.w - webflow - badge * {
    z- index: auto;
visibility: visible;
box - sizing: border - box;
width: auto;
height: auto;
max - height: none;
max - width: none;
min - height: 0;
min - width: 0;
float: none;
clear: none;
box - shadow: none;
opacity: 1;
direction: ltr;
font - family: inherit;
font - weight: inherit;
color: inherit;
font - size: inherit;
line - height: inherit;
font - style: inherit;
font - variant: inherit;
text - align: inherit;
letter - spacing: inherit;
-webkit - text - decoration: inherit;
text - decoration: inherit;
text - indent: 0;
text - transform: inherit;
text - shadow: none;
font - smoothing: auto;
vertical - align: baseline;
cursor: inherit;
white - space: inherit;
word -break: normal;
word - spacing: normal;
word - wrap: normal;
background: 0 0;
border: 0 transparent;
border - radius: 0;
margin: 0;
padding: 0;
list - style - type: disc;
transition: none;
display: block;
position: static;
top: auto;
bottom: auto;
left: auto;
right: auto;
overflow: visible;
transform: none
}

.w - webflow - badge {
    white - space: nowrap;
    cursor: pointer;
    box - shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1);
    visibility: visible!important;
    z - index: 2147483647!important;
    color: #aaadb0!important;
    opacity: 1!important;
    width: auto!important;
    height: auto!important;
    background - color: #fff!important;
    border - radius: 3px!important;
    margin: 0!important;
    padding: 6px 8px 6px 6px!important;
    font - size: 12px!important;
    line - height: 14px!important;
    text - decoration: none!important;
    display: inline - block!important;
    position: fixed!important;
    top: auto!important;
    bottom: 12px!important;
    left: auto!important;
    right: 12px!important;
    overflow: visible!important;
    transform: none!important
}

.w - webflow - badge > img {
    visibility: visible!important;
    opacity: 1!important;
    vertical - align: middle!important;
    display: inline - block!important
}

h1, h2, h3, h4, h5, h6 {
    margin - bottom: 10px;
    font - weight: 700
}

h1 {
    margin - top: 20px;
    font - size: 38px;
    line - height: 44px
}

h2 {
    margin - top: 20px;
    font - size: 32px;
    line - height: 36px
}

h3 {
    margin - top: 20px;
    font - size: 24px;
    line - height: 30px
}

h4 {
    margin - top: 10px;
    font - size: 18px;
    line - height: 24px
}

h5 {
    margin - top: 10px;
    font - size: 14px;
    line - height: 20px
}

h6 {
    margin - top: 10px;
    font - size: 12px;
    line - height: 18px
}

p {
    margin - top: 0;
    margin - bottom: 10px
}

blockquote {
    border - left: 5px solid #e2e2e2;
    margin: 0 0 10px;
    padding: 10px 20px;
    font - size: 18px;
    line - height: 22px
}

figure {
    margin: 0 0 10px
}

figcaption {
    text - align: center;
    margin - top: 5px
}

ul, ol {
    margin - top: 0;
    margin - bottom: 10px;
    padding - left: 40px
}

.w - list - unstyled {
    padding - left: 0;
    list - style: none
}

.w - embed: before,.w - embed:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - embed:after {
    clear: both
}

.w - video {
    width: 100 %;
    padding: 0;
    position: relative
}

.w - video iframe,.w - video object,.w - video embed {
    width: 100 %;
    height: 100 %;
    border: none;
    position: absolute;
    top: 0;
    left: 0
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0
}

button, [type = button], [type = reset] {
    cursor: pointer;
    -webkit - appearance: button;
    border: 0
}

.w - form {
    margin: 0 0 15px
}

.w - form - done {
    text - align: center;
    background - color: #ddd;
    padding: 20px;
    display: none
}

.w - form - fail {
    background - color: #ffdede;
    margin - top: 10px;
    padding: 10px;
    display: none
}

label {
    margin - bottom: 5px;
    font - weight: 700;
    display: block
}

.w - input,.w - select {
    width: 100 %;
    height: 38px;
    color: #333;
    vertical - align: middle;
    background - color: #fff;
    border: 1px solid #ccc;
    margin - bottom: 10px;
    padding: 8px 12px;
    font - size: 14px;
    line - height: 1.42857;
    display: block
}

.w - input: -moz - placeholder,.w - select: -moz - placeholder {
    color: #999
}

.w - input:: -moz - placeholder,.w - select:: -moz - placeholder {
    color: #999;
    opacity: 1
}

.w - input:: -webkit - input - placeholder,.w - select:: -webkit - input - placeholder {
    color: #999
}

.w - input: focus,.w - select:focus {
    border - color: #3898ec;
    outline: 0
}

.w - input[disabled],.w - select[disabled],.w - input[readonly],.w - select[readonly], fieldset[disabled].w - input, fieldset[disabled].w - select {
    cursor: not - allowed
}

.w - input[disabled]: not(.w - input - disabled),.w - select[disabled]: not(.w - input - disabled),.w - input[readonly],.w - select[readonly], fieldset[disabled]: not(.w - input - disabled).w - input, fieldset[disabled]: not(.w - input - disabled).w - select {
    background - color: #eee
}

textarea.w - input, textarea.w - select {
    height: auto
}

.w - select {
    background - color: #f3f3f3
}

.w - select[multiple] {
    height: auto
}

.w - form - label {
    cursor: pointer;
    margin - bottom: 0;
    font - weight: 400;
    display: inline - block
}

.w - radio {
    margin - bottom: 5px;
    padding - left: 20px;
    display: block
}

.w - radio: before,.w - radio:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - radio:after {
    clear: both
}

.w - radio - input {
    float: left;
    margin: 3px 0 0 - 20px;
    line - height: normal
}

.w - file - upload {
    margin - bottom: 10px;
    display: block
}

.w - file - upload - input {
    width: .1px;
    height: .1px;
    opacity: 0;
    z - index: -100;
    position: absolute;
    overflow: hidden
}

.w - file - upload -default,.w - file - upload - uploading,.w - file - upload - success {
    color: #333;
    display: inline - block
}

.w - file - upload - error {
    margin - top: 10px;
    display: block
}

.w - file - upload -default.w - hidden,.w - file - upload - uploading.w - hidden,.w - file - upload - error.w - hidden,.w - file - upload - success.w - hidden {
    display: none
}

.w - file - upload - uploading - btn {
    cursor: pointer;
    background - color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font - size: 14px;
    font - weight: 400;
    display: flex
}

.w - file - upload - file {
    background - color: #fafafa;
    border: 1px solid #ccc;
    flex - grow: 1;
    justify - content: space - between;
    margin: 0;
    padding: 8px 9px 8px 11px;
    display: flex
}

.w - file - upload - file - name {
    font - size: 14px;
    font - weight: 400;
    display: block
}

.w - file - remove - link {
    width: auto;
    height: auto;
    cursor: pointer;
    margin - top: 3px;
    margin - left: 10px;
    padding: 3px;
    display: block
}

.w - icon - file - upload - remove {
    margin: auto;
    font - size: 10px
}

.w - file - upload - error - msg {
    color: #ea384c;
    padding: 2px 0;
    display: inline - block
}

.w - file - upload - info {
    padding: 0 12px;
    line - height: 38px;
    display: inline - block
}

.w - file - upload - label {
    cursor: pointer;
    background - color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font - size: 14px;
    font - weight: 400;
    display: inline - block
}

.w - icon - file - upload - icon,.w - icon - file - upload - uploading {
    width: 20px;
    margin - right: 8px;
    display: inline - block
}

.w - icon - file - upload - uploading {
    height: 20px
}

.w - container {
    max - width: 940px;
    margin - left: auto;
    margin - right: auto
}

.w - container: before,.w - container:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - container:after {
    clear: both
}

.w - container.w - row {
    margin - left: -10px;
    margin - right: -10px
}

.w - row: before,.w - row:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - row:after {
    clear: both
}

.w - row.w - row {
    margin - left: 0;
    margin - right: 0
}

.w - col {
    float: left;
    width: 100 %;
    min - height: 1px;
    padding - left: 10px;
    padding - right: 10px;
    position: relative
}

.w - col.w - col {
    padding - left: 0;
    padding - right: 0
}

.w - col - 1 {
    width: 8.33333 %
}

.w - col - 2 {
    width: 16.6667 %
}

.w - col - 3 {
    width: 25 %
}

.w - col - 4 {
    width: 33.3333 %
}

.w - col - 5 {
    width: 41.6667 %
}

.w - col - 6 {
    width: 50 %
}

.w - col - 7 {
    width: 58.3333 %
}

.w - col - 8 {
    width: 66.6667 %
}

.w - col - 9 {
    width: 75 %
}

.w - col - 10 {
    width: 83.3333 %
}

.w - col - 11 {
    width: 91.6667 %
}

.w - col - 12 {
    width: 100 %
}

.w - hidden - main {
    display: none!important
}

@media screen and(max - width: 991px) {
    .w - container {
        max - width: 728px
    }

    .w - hidden - main {
        display: inherit!important
    }

    .w - hidden - medium {
        display: none!important
    }

    .w - col - medium - 1 {
        width: 8.33333 %
    }

    .w - col - medium - 2 {
        width: 16.6667 %
    }

    .w - col - medium - 3 {
        width: 25 %
    }

    .w - col - medium - 4 {
        width: 33.3333 %
    }

    .w - col - medium - 5 {
        width: 41.6667 %
    }

    .w - col - medium - 6 {
        width: 50 %
    }

    .w - col - medium - 7 {
        width: 58.3333 %
    }

    .w - col - medium - 8 {
        width: 66.6667 %
    }

    .w - col - medium - 9 {
        width: 75 %
    }

    .w - col - medium - 10 {
        width: 83.3333 %
    }

    .w - col - medium - 11 {
        width: 91.6667 %
    }

    .w - col - medium - 12 {
        width: 100 %
    }

    .w - col - stack {
        width: 100 %;
        left: auto;
        right: auto
    }
}

@media screen and(max - width: 767px) {
    .w - hidden - main,.w - hidden - medium {
        display: inherit!important
    }

    .w - hidden - small {
        display: none!important
    }

    .w - row,.w - container.w - row {
        margin - left: 0;
        margin - right: 0
    }

    .w - col {
        width: 100 %;
        left: auto;
        right: auto
    }

    .w - col - small - 1 {
        width: 8.33333 %
    }

    .w - col - small - 2 {
        width: 16.6667 %
    }

    .w - col - small - 3 {
        width: 25 %
    }

    .w - col - small - 4 {
        width: 33.3333 %
    }

    .w - col - small - 5 {
        width: 41.6667 %
    }

    .w - col - small - 6 {
        width: 50 %
    }

    .w - col - small - 7 {
        width: 58.3333 %
    }

    .w - col - small - 8 {
        width: 66.6667 %
    }

    .w - col - small - 9 {
        width: 75 %
    }

    .w - col - small - 10 {
        width: 83.3333 %
    }

    .w - col - small - 11 {
        width: 91.6667 %
    }

    .w - col - small - 12 {
        width: 100 %
    }
}

@media screen and(max - width: 479px) {
    .w - container {
        max - width: none
    }

    .w - hidden - main,.w - hidden - medium,.w - hidden - small {
        display: inherit!important
    }

    .w - hidden - tiny {
        display: none!important
    }

    .w - col {
        width: 100 %
    }

    .w - col - tiny - 1 {
        width: 8.33333 %
    }

    .w - col - tiny - 2 {
        width: 16.6667 %
    }

    .w - col - tiny - 3 {
        width: 25 %
    }

    .w - col - tiny - 4 {
        width: 33.3333 %
    }

    .w - col - tiny - 5 {
        width: 41.6667 %
    }

    .w - col - tiny - 6 {
        width: 50 %
    }

    .w - col - tiny - 7 {
        width: 58.3333 %
    }

    .w - col - tiny - 8 {
        width: 66.6667 %
    }

    .w - col - tiny - 9 {
        width: 75 %
    }

    .w - col - tiny - 10 {
        width: 83.3333 %
    }

    .w - col - tiny - 11 {
        width: 91.6667 %
    }

    .w - col - tiny - 12 {
        width: 100 %
    }
}

.w - widget {
    position: relative
}

.w - widget - map {
    width: 100 %;
    height: 400px
}

.w - widget - map label {
    width: auto;
    display: inline
}

.w - widget - map img {
    max - width: inherit
}

.w - widget - map.gm - style - iw {
    text - align: center
}

.w - widget - map.gm - style - iw > button {
    display: none!important
}

.w - widget - twitter {
    overflow: hidden
}

.w - widget - twitter - count - shim {
    vertical - align: top;
    width: 28px;
    height: 20px;
    text - align: center;
    background: #fff;
    border: 1px solid #758696;
    border - radius: 3px;
    display: inline - block;
    position: relative
}

.w - widget - twitter - count - shim * {
    pointer- events: none;
-webkit - user - select: none;
-ms - user - select: none;
user - select: none
}

.w - widget - twitter - count - shim.w - widget - twitter - count - inner {
    text - align: center;
    color: #999;
    font - family: serif;
    font - size: 15px;
    line - height: 12px;
    position: relative
}

.w - widget - twitter - count - shim.w - widget - twitter - count - clear {
    display: block;
    position: relative
}

.w - widget - twitter - count - shim.w--large {
    width: 36px;
    height: 28px
}

.w - widget - twitter - count - shim.w--large.w - widget - twitter - count - inner {
    font - size: 18px;
    line - height: 18px
}

.w - widget - twitter - count - shim: not(.w--vertical) {
    margin - left: 5px;
    margin - right: 8px
}

.w - widget - twitter - count - shim: not(.w--vertical).w--large {
    margin - left: 6px
}

.w - widget - twitter - count - shim: not(.w--vertical): before,.w - widget - twitter - count - shim: not(.w--vertical):after {
    content: " ";
    height: 0;
    width: 0;
    pointer - events: none;
    border: solid transparent;
    position: absolute;
    top: 50 %;
    left: 0
}

.w - widget - twitter - count - shim: not(.w--vertical):before {
    border - width: 4px;
    border - color: rgba(117, 134, 150, 0) #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
    margin - top: -4px;
    margin - left: -9px
}

.w - widget - twitter - count - shim: not(.w--vertical).w--large:before {
    border - width: 5px;
    margin - top: -5px;
    margin - left: -10px
}

.w - widget - twitter - count - shim: not(.w--vertical):after {
    border - width: 4px;
    border - color: rgba(255, 255, 255, 0) #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    margin - top: -4px;
    margin - left: -8px
}

.w - widget - twitter - count - shim: not(.w--vertical).w--large:after {
    border - width: 5px;
    margin - top: -5px;
    margin - left: -9px
}

.w - widget - twitter - count - shim.w--vertical {
    width: 61px;
    height: 33px;
    margin - bottom: 8px
}

.w - widget - twitter - count - shim.w--vertical: before,.w - widget - twitter - count - shim.w--vertical:after {
    content: " ";
    height: 0;
    width: 0;
    pointer - events: none;
    border: solid transparent;
    position: absolute;
    top: 100 %;
    left: 50 %
}

.w - widget - twitter - count - shim.w--vertical:before {
    border - width: 5px;
    border - color: #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
    margin - left: -5px
}

.w - widget - twitter - count - shim.w--vertical:after {
    border - width: 4px;
    border - color: #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    margin - left: -4px
}

.w - widget - twitter - count - shim.w--vertical.w - widget - twitter - count - inner {
    font - size: 18px;
    line - height: 22px
}

.w - widget - twitter - count - shim.w--vertical.w--large {
    width: 76px
}

.w - background - video {
    height: 500px;
    color: #fff;
    position: relative;
    overflow: hidden
}

.w - background - video > video {
    width: 100 %;
    height: 100 %;
    object - fit: cover;
    z - index: -100;
    background - position: 50 %;
    background - size: cover;
    margin: auto;
    position: absolute;
    top: -100 %;
    bottom: -100 %;
    left: -100 %;
    right: -100 %
}

.w - background - video > video:: -webkit - media - controls - start - playback - button {
    -webkit - appearance: none;
    display: none!important
}

.w - background - video--control {
    background - color: transparent;
    padding: 0;
    position: absolute;
    bottom: 1em;
    right: 1em
}

.w - background - video--control > [hidden] {
    display: none!important
}

.w - slider {
    height: 300px;
    text - align: center;
    clear: both;
    -webkit - tap - highlight - color: transparent;
    tap - highlight - color: transparent;
    background: #ddd;
    position: relative
}

.w - slider - mask {
    z - index: 1;
    height: 100 %;
    white - space: nowrap;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    overflow: hidden
}

.w - slide {
    vertical - align: top;
    width: 100 %;
    height: 100 %;
    white - space: normal;
    text - align: left;
    display: inline - block;
    position: relative
}

.w - slider - nav {
    z - index: 2;
    height: 40px;
    text - align: center;
    -webkit - tap - highlight - color: transparent;
    tap - highlight - color: transparent;
    margin: auto;
    padding - top: 10px;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0
}

.w - slider - nav.w - round > div {
    border - radius: 100 %
}

.w - slider - nav.w - num > div {
    width: auto;
    height: auto;
    font - size: inherit;
    line - height: inherit;
    padding: .2em .5em
}

.w - slider - nav.w - shadow > div {
    box - shadow: 0 0 3px rgba(51, 51, 51, .4)
}

.w - slider - nav - invert {
    color: #fff
}

.w - slider - nav - invert > div {
    background - color: rgba(34, 34, 34, .4)
}

.w - slider - nav - invert > div.w - active {
    background - color: #222
}

.w - slider - dot {
    width: 1em;
    height: 1em;
    cursor: pointer;
    background - color: rgba(255, 255, 255, .4);
    margin: 0 3px .5em;
    transition: background - color .1s, color .1s;
    display: inline - block;
    position: relative
}

.w - slider - dot.w - active {
    background - color: #fff
}

.w - slider - dot:focus {
    outline: none;
    box - shadow: 0 0 0 2px #fff
}

.w - slider - dot: focus.w - active {
    box - shadow: none
}

.w - slider - arrow - left,.w - slider - arrow - right {
    width: 80px;
    cursor: pointer;
    color: #fff;
    -webkit - tap - highlight - color: transparent;
    tap - highlight - color: transparent;
    -webkit - user - select: none;
    -ms - user - select: none;
    user - select: none;
    margin: auto;
    font - size: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden
}

.w - slider - arrow - left[class^= w - icon -],.w - slider - arrow - right[class^= w - icon -],.w - slider - arrow - left[class*=\ w - icon -],.w - slider - arrow - right[class*=\ w - icon -] {
    position: absolute
}

.w - slider - arrow - left: focus,.w - slider - arrow - right:focus {
    outline: 0
}

.w - slider - arrow - left {
    z - index: 3;
    right: auto
}

.w - slider - arrow - right {
    z - index: 4;
    left: auto
}

.w - icon - slider - left,.w - icon - slider - right {
    width: 1em;
    height: 1em;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.w - slider - aria - label {
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    border: 0;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden
}

.w - slider - force - show {
    display: block!important
}

.w - dropdown {
    text - align: left;
    z - index: 900;
    margin - left: auto;
    margin - right: auto;
    display: inline - block;
    position: relative
}

.w - dropdown - btn,.w - dropdown - toggle,.w - dropdown - link {
    vertical - align: top;
    color: #222;
    text - align: left;
    white - space: nowrap;
    margin - left: auto;
    margin - right: auto;
    padding: 20px;
    text - decoration: none;
    position: relative
}

.w - dropdown - toggle {
    -webkit - user - select: none;
    -ms - user - select: none;
    user - select: none;
    cursor: pointer;
    padding - right: 40px;
    display: inline - block
}

.w - dropdown - toggle:focus {
    outline: 0
}

.w - icon - dropdown - toggle {
    width: 1em;
    height: 1em;
    margin: auto 20px auto auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0
}

.w - dropdown - list {
    min - width: 100 %;
    background: #ddd;
    display: none;
    position: absolute
}

.w - dropdown - list.w--open {
    display: block
}

.w - dropdown - link {
    color: #222;
    padding: 10px 20px;
    display: block
}

.w - dropdown - link.w--current {
    color: #0082f3
}

.w - dropdown - link:focus {
    outline: 0
}

@media screen and(max - width: 767px) {
    .w - nav - brand {
        padding - left: 10px
    }
}

.w - lightbox - backdrop {
    cursor: auto;
    letter - spacing: normal;
    text - indent: 0;
    text - shadow: none;
    text - transform: none;
    visibility: visible;
    white - space: normal;
    word -break: normal;
    word - spacing: normal;
    word - wrap: normal;
    color: #fff;
    text - align: center;
    z - index: 2000;
    opacity: 0;
    -webkit - user - select: none;
    -moz - user - select: none;
    -webkit - tap - highlight - color: transparent;
    background: rgba(0, 0, 0, .9);
    outline: 0;
    font - family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans - serif;
    font - size: 17px;
    font - style: normal;
    font - weight: 300;
    line - height: 1.2;
    list - style: disc;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit - transform: translate(0)
}

.w - lightbox - backdrop,.w - lightbox - container {
    height: 100 %;
    -webkit - overflow - scrolling: touch;
    overflow: auto
}

.w - lightbox - content {
    height: 100vh;
    position: relative;
    overflow: hidden
}

.w - lightbox - view {
    width: 100vw;
    height: 100vh;
    opacity: 0;
    position: absolute
}

.w - lightbox - view:before {
    content: "";
    height: 100vh
}

.w - lightbox - group,.w - lightbox - group.w - lightbox - view,.w - lightbox - group.w - lightbox - view:before {
    height: 86vh
}

.w - lightbox - frame,.w - lightbox - view:before {
    vertical - align: middle;
    display: inline - block
}

.w - lightbox - figure {
    margin: 0;
    position: relative
}

.w - lightbox - group.w - lightbox - figure {
    cursor: pointer
}

.w - lightbox - img {
    width: auto;
    height: auto;
    max - width: none
}

.w - lightbox - image {
    float: none;
    max - width: 100vw;
    max - height: 100vh;
    display: block
}

.w - lightbox - group.w - lightbox - image {
    max - height: 86vh
}

.w - lightbox - caption {
    text - align: left;
    text - overflow: ellipsis;
    white - space: nowrap;
    background: rgba(0, 0, 0, .4);
    padding: .5em 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden
}

.w - lightbox - embed {
    width: 100 %;
    height: 100 %;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.w - lightbox - control {
    width: 4em;
    cursor: pointer;
    background - position: 50 %;
    background - repeat: no - repeat;
    background - size: 24px;
    transition: all .3s;
    position: absolute;
    top: 0
}

.w - lightbox - left {
    background - image: url(data: image / svg + xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI + PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8 + PC9nPjwvc3ZnPg ==);
    display: none;
    bottom: 0;
    left: 0
}

.w - lightbox - right {
    background - image: url(data: image / svg + xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI + PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c + PC9zdmc +);
    display: none;
    bottom: 0;
    right: 0
}

.w - lightbox - close {
    height: 2.6em;
    background - image: url(data: image / svg + xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI + PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=);
    background - size: 18px;
    right: 0
}

.w - lightbox - strip {
    white - space: nowrap;
    padding: 0 1vh;
    line - height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow - x: auto;
    overflow - y: hidden
}

.w - lightbox - item {
    width: 10vh;
    box - sizing: content - box;
    cursor: pointer;
    padding: 2vh 1vh;
    display: inline - block;
    -webkit - transform: translate(0, 0)
}

.w - lightbox - active {
    opacity: .3
}

.w - lightbox - thumbnail {
    height: 10vh;
    background: #222;
    position: relative;
    overflow: hidden
}

.w - lightbox - thumbnail - image {
    position: absolute;
    top: 0;
    left: 0
}

.w - lightbox - thumbnail.w - lightbox - tall {
    width: 100 %;
    top: 50 %;
    transform: translateY(-50 %)
}

.w - lightbox - thumbnail.w - lightbox - wide {
    height: 100 %;
    left: 50 %;
    transform: translate(-50 %)
}

.w - lightbox - spinner {
    box - sizing: border - box;
    width: 40px;
    height: 40px;
    border: 5px solid rgba(0, 0, 0, .4);
    border - radius: 50 %;
    margin - top: -20px;
    margin - left: -20px;
    animation: .8s linear infinite spin;
    position: absolute;
    top: 50 %;
    left: 50 %
}

.w - lightbox - spinner:after {
    content: "";
    border: 3px solid transparent;
    border - bottom - color: #fff;
    border - radius: 50 %;
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px
}

.w - lightbox - hide {
    display: none
}

.w - lightbox - noscroll {
    overflow: hidden
}

@media(min - width: 768px) {
    .w - lightbox - content {
        height: 96vh;
        margin - top: 2vh
    }

    .w - lightbox - view,.w - lightbox - view:before {
        height: 96vh
    }

    .w - lightbox - group,.w - lightbox - group.w - lightbox - view,.w - lightbox - group.w - lightbox - view:before {
        height: 84vh
    }

    .w - lightbox - image {
        max - width: 96vw;
        max - height: 96vh
    }

    .w - lightbox - group.w - lightbox - image {
        max - width: 82.3vw;
        max - height: 84vh
    }

    .w - lightbox - left,.w - lightbox - right {
        opacity: .5;
        display: block
    }

    .w - lightbox - close {
        opacity: .8
    }

    .w - lightbox - control:hover {
        opacity: 1
    }
}

.w - lightbox - inactive,.w - lightbox - inactive:hover {
    opacity: 0
}

.w - richtext: before,.w - richtext:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - richtext:after {
    clear: both
}

.w - richtext[contenteditable = true]: before,.w - richtext[contenteditable = true]:after {
    white - space: initial
}

.w - richtext ol,.w - richtext ul {
    overflow: hidden
}

.w - richtext.w - richtext - figure - selected.w - richtext - figure - type - video div: after,.w - richtext.w - richtext - figure - selected[data - rt - type=video]div: after,.w - richtext.w - richtext - figure - selected.w - richtext - figure - type - image div,.w - richtext.w - richtext - figure - selected[data - rt - type=image] div {
    outline: 2px solid #2895f7
}

.w - richtext figure.w - richtext - figure - type - video > div: after,.w - richtext figure[data - rt - type= video]> div:after {
    content: "";
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.w - richtext figure {
    max - width: 60 %;
    position: relative
}

.w - richtext figure > div:before {
    cursor: default !important
}

.w - richtext figure img {
    width: 100 %
}

.w - richtext figure figcaption.w - richtext - figcaption - placeholder {
    opacity: .6
}

.w - richtext figure div {
    color: transparent;
    font - size: 0
}

.w - richtext figure.w - richtext - figure - type - image,.w - richtext figure[data - rt - type= image] {
    display: table
}

.w - richtext figure.w - richtext - figure - type - image > div,.w - richtext figure[data - rt - type= image]> div {
    display: inline - block
}

.w - richtext figure.w - richtext - figure - type - image > figcaption,.w - richtext figure[data - rt - type= image]> figcaption {
    caption - side: bottom;
    display: table - caption
}

.w - richtext figure.w - richtext - figure - type - video,.w - richtext figure[data - rt - type= video] {
    width: 60 %;
    height: 0
}

.w - richtext figure.w - richtext - figure - type - video iframe,.w - richtext figure[data - rt - type= video] iframe {
    width: 100 %;
    height: 100 %;
    position: absolute;
    top: 0;
    left: 0
}

.w - richtext figure.w - richtext - figure - type - video > div,.w - richtext figure[data - rt - type= video]> div {
    width: 100 %
}

.w - richtext figure.w - richtext - align - center {
    clear: both;
    margin - left: auto;
    margin - right: auto
}

.w - richtext figure.w - richtext - align - center.w - richtext - figure - type - image > div,.w - richtext figure.w - richtext - align - center[data - rt - type=image]> div {
    max - width: 100 %
}

.w - richtext figure.w - richtext - align - normal {
    clear: both
}

.w - richtext figure.w - richtext - align - fullwidth {
    width: 100 %;
    max - width: 100 %;
    text - align: center;
    clear: both;
    margin - left: auto;
    margin - right: auto;
    display: block
}

.w - richtext figure.w - richtext - align - fullwidth > div {
    padding - bottom: inherit;
    display: inline - block
}

.w - richtext figure.w - richtext - align - fullwidth > figcaption {
    display: block
}

.w - richtext figure.w - richtext - align - floatleft {
    float: left;
    clear: none;
    margin - right: 15px
}

.w - richtext figure.w - richtext - align - floatright {
    float: right;
    clear: none;
    margin - left: 15px
}

.w - nav {
    z - index: 1000;
    background: #ddd;
    position: relative
}

.w - nav: before,.w - nav:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - nav:after {
    clear: both
}

.w - nav - brand {
    float: left;
    color: #333;
    text - decoration: none;
    position: relative
}

.w - nav - link {
    vertical - align: top;
    color: #222;
    text - align: left;
    margin - left: auto;
    margin - right: auto;
    padding: 20px;
    text - decoration: none;
    display: inline - block;
    position: relative
}

.w - nav - link.w--current {
    color: #0082f3
}

.w - nav - menu {
    float: right;
    position: relative
}

[data - nav - menu - open] {
    text - align: center;
    min - width: 200px;
    background: #c8c8c8;
    position: absolute;
    top: 100 %;
    left: 0;
    right: 0;
    overflow: visible;
    display: block!important
}

.w--nav - link - open {
    display: block;
    position: relative
}

.w - nav - overlay {
    width: 100 %;
    display: none;
    position: absolute;
    top: 100 %;
    left: 0;
    right: 0;
    overflow: hidden
}

.w - nav - overlay[data - nav - menu - open] {
    top: 0
}

.w - nav[data - animation=over - left] .w - nav - overlay {
    width: auto
}

.w - nav[data - animation=over - left] .w - nav - overlay,.w - nav[data - animation=over - left][data - nav - menu - open] {
    z - index: 1;
    top: 0;
    right: auto
}

.w - nav[data - animation=over - right] .w - nav - overlay {
    width: auto
}

.w - nav[data - animation=over - right] .w - nav - overlay,.w - nav[data - animation=over - right][data - nav - menu - open] {
    z - index: 1;
    top: 0;
    left: auto
}

.w - nav - button {
    float: right;
    cursor: pointer;
    -webkit - tap - highlight - color: transparent;
    tap - highlight - color: transparent;
    -webkit - user - select: none;
    -ms - user - select: none;
    user - select: none;
    padding: 18px;
    font - size: 24px;
    display: none;
    position: relative
}

.w - nav - button:focus {
    outline: 0
}

.w - nav - button.w--open {
    color: #fff;
    background - color: #c8c8c8
}

.w - nav[data - collapse=all] .w - nav - menu {
    display: none
}

.w - nav[data - collapse=all] .w - nav - button,.w--nav - dropdown - open,.w--nav - dropdown - toggle - open {
    display: block
}

.w--nav - dropdown - list - open {
    position: static
}

@media screen and(max - width: 991px) {
    .w - nav[data - collapse=medium] .w - nav - menu {
        display: none
    }

    .w - nav[data - collapse=medium] .w - nav - button {
        display: block
    }
}

@media screen and(max - width: 767px) {
    .w - nav[data - collapse=small] .w - nav - menu {
        display: none
    }

    .w - nav[data - collapse=small] .w - nav - button {
        display: block
    }

    .w - nav - brand {
        padding - left: 10px
    }
}

@media screen and(max - width: 479px) {
    .w - nav[data - collapse=tiny] .w - nav - menu {
        display: none
    }

    .w - nav[data - collapse=tiny] .w - nav - button {
        display: block
    }
}

.w - tabs {
    position: relative
}

.w - tabs: before,.w - tabs:after {
    content: " ";
    grid - area: 1 / 1 / 2 / 2;
    display: table
}

.w - tabs:after {
    clear: both
}

.w - tab - menu {
    position: relative
}

.w - tab - link {
    vertical - align: top;
    text - align: left;
    cursor: pointer;
    color: #222;
    background - color: #ddd;
    padding: 9px 30px;
    text - decoration: none;
    display: inline - block;
    position: relative
}

.w - tab - link.w--current {
    background - color: #c8c8c8
}

.w - tab - link:focus {
    outline: 0
}

.w - tab - content {
    display: block;
    position: relative;
    overflow: hidden
}

.w - tab - pane {
    display: none;
    position: relative
}

.w--tab - active {
    display: block
}

@media screen and(max - width: 479px) {
    .w - tab - link {
        display: block
    }
}

.w - ix - emptyfix:after {
    content: ""
}

@keyframes spin {
    0 % {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.w - dyn - empty {
    background - color: #ddd;
    padding: 10px
}

.w - dyn - hide,.w - dyn - bind - empty,.w - condition - invisible {
    display: none!important
}

.wf - layout - layout {
    display: grid
}

.w - layout - grid {
    grid - row - gap: 16px;
    grid - column - gap: 16px;
    grid - template - rows: auto auto;
    grid - template - columns: 1fr 1fr;
    grid - auto - columns: 1fr;
    display: grid
}

.w - form - formradioinput--inputType - custom {
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    border - radius: 50 %
}

.w - form - formradioinput--inputType - custom.w--redirected - focus {
    box - shadow: 0 0 3px 1px #3898ec
}

.w - form - formradioinput--inputType - custom.w--redirected - checked {
    border - width: 4px;
    border - color: #3898ec
}

body {
    color: #c54829;
    font - family: Arial, Helvetica Neue, Helvetica, sans - serif;
    font - size: 14px;
    line - height: 20px
}

h3 {
    padding - right: 0 %
}

p {
    margin - bottom: 10px
}

a {
    color: #c54829;
    font - family: Akzidenzgrotesk;
    font - weight: 400;
    line - height: 18px;
    text - decoration: none
}

img {
    display: inline - block
}

strong {
    font - weight: 500
}

.page - wrapper {
    width: 100vw
}

.loading - animation {
    z - index: 1000;
    width: 100vw;
    height: 100vh;
    object - fit: fill;
    background - color: #e8603a;
    justify - content: center;
    align - items: center;
    display: none;
    position: fixed;
    top: 0 %;
    bottom: 0 %;
    left: 0 %;
    right: 0 %
}

.lottie - animation {
    width: 20 %;
    min - width: 340px
}

.div - block - 2 {
    width: 100vw;
    flex - direction: column;
    justify - content: center;
    align - items: center;
    display: flex
}

.nav - bar {
    z - index: 290;
    width: 100vw;
    background - color: #c54829;
    justify - content: flex - end;
    align - items: flex - start;
    padding: 5vh 4.5vw 15px;
    display: flex;
    position: fixed;
    top: 0 %;
    bottom: auto;
    left: 0;
    right: 0
}

.nav - bar.white {
    background - color: #fff
}

.nav - text {
    color: #fff;
    margin - bottom: 0;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 110 %
}

.nav - text.brown {
    color: #c54829
}

.logo {
    width: 23.5vw;
    color: #fff;
    letter - spacing: -.1vw;
    padding - top: .6vw;
    font - family: Everett, Arial, sans - serif;
    font - size: 4.45vw;
    font - weight: 500;
    line - height: 76 %;
    position: fixed
}

.logo.design - and - team {
    z - index: 260;
    color: #c54829;
    padding - top: 0;
    line - height: 110 %
}

.logo.design - and - team.absolute {
    line - height: 107 %
}

.logo.not - fixed {
    position: static
}

.logo.mobile {
    display: none
}

.logo.location {
    width: auto;
    padding - top: 0;
    line - height: 110 %
}

.logo.actual {
    padding - right: 4px
}

.body {
    background - color: #fff
}

.body.design {
    background - color: transparent
}

.text - line {
    width: auto;
    flex - direction: column;
    display: flex
}

.text - line.single {
    flex - direction: row;
    justify - content: flex - start
}

.h - 1 {
    color: #fff;
    letter - spacing: -.09vw;
    padding - right: 41 %;
    font - family: Everett, Arial, sans - serif;
    font - size: 4.45vw;
    font - weight: 400;
    line - height: 110 %
}

.h - 1.indented {
    color: #fff;
    margin - left: 24vw;
    padding - right: 0 %
}

.h - 1.dark {
    color: #c54829;
    text - align: left
}

.h - 1.dark.bold {
    margin - top: 0;
    margin - bottom: 0;
    padding - right: 5 %;
    font - weight: 500;
    line - height: 110 %
}

.h - 1.dark.bold.left {
    align - self: flex - start
}

.h -1._2 {
    font - size: 4vw;
    font - weight: 400
}

.h - 1.home {
    text - indent: 24.5vw;
    padding - top: .7vw;
    padding - right: 41 %;
    font - size: 4.2vw
}

.h - 1.home._2 {
    text - indent: 25vw;
    padding - right: 8 %;
    font - size: 4.2vw
}

.h - 1.home._2.temp {
    font - size: 4.4vw
}

.h - 1.home.temp {
    padding - top: 0;
    font - size: 4.6vw
}

.h - 1.design {
    color: #c54829;
    text - indent: 15.3vw;
    padding - right: 40 %
}

.h - 1.location {
    text - align: left;
    text - indent: 18.4vw;
    padding - right: 26 %
}

.h - 1.location._1 {
    padding - right: 37 %
}

.h - 1.team {
    color: #c54829;
    text - indent: 20.5vw
}

.h - 1.statement {
    padding - right: 17 %
}

.panel {
    height: 100vh;
    background - color: #c54829;
    flex - direction: column;
    display: flex
}

.panel.hero {
    width: 100vw;
    background - color: #c54829;
    flex - direction: column;
    justify - content: flex - start
}

.panel.hero.white {
    background - color: #fff
}

.panel.slider {
    background - color: #fff;
    align - items: center;
    position: relative
}

.panel.slider.design {
    width: 100vw
}

.footer - logo {
    width: 100 %;
    padding - bottom: 0
}

.text - wrapper {
    z - index: 260;
    position: relative;
    top: 35vh
}

.text - wrapper.with - fixed - logo {
    z - index: 250
}

.text - wrapper._27 {
    top: 27vh
}

._50vw - div {
    width: 50vw;
    flex - direction: row;
    justify - content: space - between;
    align - self: flex - start;
    align - items: flex - start;
    display: flex
}

._50vw - div.nav {
    width: 47vw
}

._50vw - div.team {
    width: 47vw;
    flex - direction: column
}

.footer - wrapper {
    z - index: 2;
    height: 60vh;
    transform - origin: 50 % 0;
    background - color: #e8603a;
    flex - direction: column;
    justify - content: space - between;
    display: flex;
    position: relative
}

.footer - wrapper.home {
    height: 100vh
}

.footer - text {
    color: #fff;
    margin - bottom: 3px;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 16px
}

.footer - text.w--current {
    color: rgba(233, 232, 233, .7)
}

.footer - text.margin - below {
    margin - bottom: 1rem
}

.footer - grid {
    width: 100vw;
    grid - row - gap: 25px;
    flex: 1;
    grid - template - columns: 1fr 1.15fr 1fr 1fr 1fr 1fr;
    align - content: space - between;
    padding: 5vh 4.5vw
}

.footer - grid.home {
    height: 100vh;
    flex: none
}

.div - block - 4 {
    flex - direction: column;
    display: flex
}

.address - bar {
    width: auto;
    flex - direction: column;
    justify - content: flex - end;
    align - items: center;
    margin - bottom: 6vh;
    display: flex;
    position: absolute;
    top: auto;
    bottom: 0 %;
    right: auto
}

.body - copy - 2 {
    max - width: 300px;
    min - width: 180px;
    color: #c54829;
    text - align: left;
    letter - spacing: -.3px;
    font - family: Everett, Arial, sans - serif;
    font - size: 21px;
    font - weight: 400;
    line - height: 120 %
}

.body - copy - 2.nomax {
    max - width: 750px;
    line - height: 125 %
}

.div - block - 8 {
    height: 100 %;
    text - align: center
}

.split {
    flex - direction: row;
    justify - content: space - between;
    margin - top: 0;
    display: flex
}

.split.right - align {
    width: 50vw;
    justify - content: flex - start;
    margin - top: 0;
    margin - bottom: 0
}

.split.menu {
    width: 100 %;
    height: 100 %;
    justify - content: space - between;
    margin - top: 0;
    margin - bottom: 0
}

.split.top {
    align - items: flex - start
}

.split.base {
    background - color: #c54829;
    flex - direction: row;
    flex: 1;
    justify - content: flex - start;
    align - items: stretch
}

.split.occ {
    width: 100 %
}

.slider {
    width: 100 %;
    height: auto;
    background - color: transparent;
    flex - direction: column;
    justify - content: flex - start
}

.left - wrapper {
    height: 100vh;
    flex - direction: column;
    flex: none;
    justify - content: space - between;
    padding - bottom: 80px;
    padding - right: 40px;
    display: flex;
    position: -webkit - sticky;
    position: sticky;
    top: 0
}

.left - wrapper._1 {
    width: 30 %;
    height: 100 %;
    min - width: 400px;
    border - right - style: none;
    flex: none;
    justify - content: center;
    align - self: flex - end;
    padding - bottom: 20px;
    padding - left: 60px;
    padding - right: 6vw;
    position: relative
}

.left - wrapper._2 {
    width: auto;
    height: 95vh;
    min - width: 30vw;
    justify - content: flex - start;
    padding - top: 0;
    padding - bottom: 6vh;
    top: 10vh
}

.left - wrapper._2.low {
    width: 35 %;
    height: 73vh;
    min - width: auto;
    flex: 0 auto;
    justify - content: space - between;
    align - items: flex - start;
    padding - bottom: 0;
    top: 20vh
}

.left - wrapper.key - info {
    width: auto;
    height: 95vh;
    min - width: 30.8vw;
    flex: 1;
    justify - content: flex - start;
    padding - top: 0;
    padding - bottom: 6vh;
    position: -webkit - sticky;
    position: sticky;
    top: 10vh
}

.icon {
    height: 9vw;
    max - height: 180px;
    max - width: 250px;
    text - align: left;
    object - fit: contain;
    align - self: flex - start;
    margin - bottom: 25px
}

.fact - wrapper {
    width: 45 %;
    min - width: auto;
    border - bottom: 1.3px solid #c54829;
    flex - direction: column;
    flex: 0 auto;
    justify - content: flex - start;
    align - items: flex - start;
    margin - top: 6vw;
    padding: 20px 50px 40px 0;
    display: flex
}

.fact - wrapper.last {
    width: 100 %;
    border - bottom - style: none;
    flex: none
}

.fact - wrapper._2nd - last {
    width: 45 %;
    min - width: auto;
    flex: 1
}

.grid - 3 {
    height: 50 %;
    grid - column - gap: 0px;
    grid - row - gap: 4vw;
    flex: 0 auto;
    grid - template - rows: auto auto auto auto auto;
    grid - template - columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
    grid - auto - flow: row;
    margin - bottom: 80px;
    margin - left: 80px;
    padding - bottom: 40px;
    padding - left: 0;
    display: flex
}

.right - wrapper {
    border - left: 1.7px solid #c54829;
    flex: 1
}

.right - wrapper._1 {
    width: 70 %;
    height: 100 %;
    background - color: #c54829;
    border - left - style: none;
    border - left - width: 0;
    flex - direction: column;
    flex: 1;
    justify - content: flex - end;
    display: flex
}

.right - wrapper.key - info {
    flex: 0 auto
}

.info - div {
    width: 100 %;
    flex - flow: wrap;
    justify - content: flex - end;
    align - items: stretch;
    padding - top: 0;
    padding - bottom: 0;
    padding - left: 6vw;
    display: flex
}

.image - 7 {
    width: 100vw;
    height: 100 %;
    transform - origin: 50 %;
    object - fit: cover;
    transform: rotate(180deg)
}

.body - copy - 1 {
    max - width: 370px;
    min - width: 260px;
    color: #c54829;
    text - align: left;
    letter - spacing: -.02vw;
    flex: 0 auto;
    margin - bottom: 20px;
    font - family: Everett, Arial, sans - serif;
    font - size: 16.5px;
    font - weight: 400;
    line - height: 128 %
}

.body - copy - 1.centre {
    text - align: center;
    position: relative
}

.body - copy - 1.centre.gallery {
    z - index: auto;
    min - width: auto;
    color: #fff;
    text - align: left;
    margin - top: 0
}

.hero - image {
    height: 100 %;
    object - fit: cover;
    flex: 1
}

.nav - link {
    transform - origin: 0 %;
    margin - bottom: 4px;
    text - decoration: none
}

.line {
    width: auto;
    height: 1.3px;
    transform - origin: 0 %;
    background - color: #fff;
    margin - top: 1px
}

.line.dark {
    height: 1.3px;
    background - color: #c54829
}

.menu {
    transform - origin: 0 %;
    margin - bottom: 4px;
    text - decoration: none
}

.menu - wrapper {
    z - index: 312;
    width: 100vw;
    height: 100vh;
    transform - origin: 50 % 0;
    background - color: #e8603a;
    flex - direction: column;
    justify - content: space - between;
    align - items: flex - end;
    padding: 80px;
    display: none;
    position: fixed;
    top: 0 %;
    bottom: 0 %;
    left: 0 %;
    right: 0 %
}

.div - block - 9 {
    width: 50vw;
    flex - direction: column;
    align - items: flex - end;
    display: flex
}

.menu - item {
    width: 100 %;
    color: #fff;
    flex - direction: column;
    justify - content: center;
    margin - top: 20px;
    margin - bottom: 0;
    text - decoration: none;
    transition: color .2s;
    display: flex;
    overflow: hidden
}

.menu - item:hover {
    color: #c54829
}

.menu - item.w--current {
    color: #c54829;
    transition - property: none
}

.menu - text {
    letter - spacing: -1px;
    font - family: Everett, Arial, sans - serif;
    font - size: 43px;
    line - height: 90 %
}

.close - button {
    color: #fff;
    align - self: flex - end;
    margin - bottom: 0;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 123 %
}

.close - button:hover {
    color: #c54829;
    text - decoration: underline
}

.prefooter {
    z - index: 1;
    width: 100vw;
    height: 40vh;
    transform - origin: 50 % 0;
    flex - direction: column;
    justify - content: center;
    margin - top: -2px;
    display: flex;
    position: relative
}

.section {
    background - color: #fff;
    flex - direction: column;
    display: flex;
    position: relative
}

.section.slider {
    z - index: 280;
    width: 100vw;
    min - height: 100vh;
    justify - content: flex - start;
    align - items: flex - start;
    padding - bottom: 120px
}

.section.brown {
    background - color: #c54829;
    padding: 0
}

.section.occ {
    z - index: auto;
    width: 100vw;
    background - color: transparent;
    padding: 27vh 4.45vw 6vh
}

.link - block {
    align - items: center;
    margin - top: 30px;
    margin - bottom: 50px;
    text - decoration: none;
    display: flex;
    overflow: hidden
}

.hide - overflow {
    grid - column - gap: 16px;
    grid - row - gap: 16px;
    grid - template - rows: auto auto;
    grid - template - columns: 1fr 1fr;
    grid - auto - columns: 1fr;
    justify - content: center;
    align - items: center;
    position: relative;
    overflow: hidden
}

.hide - overflow.arrow - wrap {
    width: 40px;
    margin - left: 0;
    margin - right: 10px
}

.arrow - 2 {
    width: auto;
    height: 18px;
    align - items: center;
    display: flex;
    position: absolute;
    left: -40px
}

.straight - line {
    width: 30px;
    height: 2px;
    background - color: #c54829;
    margin - top: 11px;
    margin - bottom: 11px
}

.straight - line.white {
    background - color: #fff
}

.diagonal - line {
    width: 10px;
    height: 10px;
    transform - origin: 50 %;
    border - top: 2px solid #c54829;
    border - right: 2px solid #c54829;
    margin - left: -10px;
    transform: rotate(45deg)
}

.diagonal - line.white {
    border - top - color: #fff;
    border - right - color: #fff
}

.arrow {
    width: auto;
    height: 18px;
    align - items: center;
    display: flex;
    position: relative
}

.snap - 5 {
    z - index: 260;
    width: 100vw;
    min - height: 500px;
    background - color: #c54829;
    flex - direction: column;
    flex: 1;
    justify - content: flex - start;
    padding - top: 13vh;
    padding - bottom: 13vh;
    padding - left: 6vw;
    display: flex;
    position: relative
}

.slide - nav {
    display: none
}

.slider - image {
    width: 100 %;
    height: 100 %;
    object - fit: contain;
    align - self: flex - start
}

.div - block - 13 {
    width: 100 %;
    justify - content: space - between;
    align - items: flex - end;
    display: flex
}

.menu - captions {
    color: #fff;
    margin - top: 5vh;
    margin - bottom: 0;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 123 %
}

.form - line {
    width: 100 %;
    height: 1px;
    transform - origin: 0 %;
    border: .5px solid #fff;
    margin - bottom: 25px
}

.form - line.dark {
    border - color: #c54829
}

.form - name {
    width: 100 %;
    float: left;
    color: #e9e8e9;
    background - color: transparent;
    border: 1px transparent;
    margin - bottom: 0;
    padding - bottom: 0;
    padding - left: 0;
    font - family: Gt america, sans - serif;
    font - size: 17px;
    font - weight: 300;
    line - height: 100 %
}

.form - name:: -ms - input - placeholder {
    color: #fff
}

.form - name::placeholder {
    color: #fff
}

.form - field {
    width: 100 %;
    color: #fff;
    background - color: transparent;
    border: 1px #000;
    border - bottom - color: #130c0e;
    margin - bottom: 5px;
    padding - bottom: 0;
    padding - left: 0;
    font - family: Everett, Arial, sans - serif;
    font - size: 17px;
    line - height: 100 %
}

.form - field:active {
    color: #e9e8e9
}

.form - field:: -ms - input - placeholder {
    color: #fff
}

.form - field::placeholder {
    color: #fff
}

.form - field.message {
    min - height: 70px;
    border - style: solid;
    border - color: #fff;
    border - radius: 5px;
    margin - bottom: 25px;
    padding - left: 8px
}

.form - field._2 {
    width: auto;
    margin - bottom: 0
}

.form - field._3 {
    width: 20 %;
    flex: 0 auto;
    margin - bottom: 0;
    padding - top: 0
}

.form {
    margin - top: 30px
}

.form - wrapper._45 {
    width: 45 %;
    float: left;
    flex - direction: column;
    margin - right: 5 %;
    display: flex
}

.form - wrapper._45.right {
    width: 50 %;
    margin - right: 0;
    font - size: 16px;
    line - height: 22px
}

.form - wrapper.split {
    justify - content: flex - start;
    margin - bottom: 25px
}

.submit - button {
    float: left;
    clear: both;
    color: #fff;
    background - color: transparent;
    padding - left: 0;
    font - family: Everett, Arial, sans - serif;
    font - size: 25px;
    font - weight: 500;
    line - height: 100 %
}

.form - block {
    width: 50vw;
    margin - top: 27vh
}

.div - block - 14 {
    z - index: 600;
    padding: 6vh;
    display: none
}

.main - body - grid {
    z - index: 10;
    width: 100vw;
    grid - column - gap: 2vw;
    grid - row - gap: 12vh;
    grid - template - columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify - items: end;
    position: relative
}

.main - body - grid.design {
    grid - row - gap: 120px
}

.image - container {
    width: 100 %;
    flex - direction: column;
    justify - content: flex - start;
    align - items: flex - start;
    display: flex
}

.image - container._2 {
    padding - left: 5 %
}

.image - 8 {
    width: 100 %;
    height: 100 %;
    object - fit: cover
}

.hero - grid {
    width: 100vw;
    height: 100vh;
    grid - column - gap: 2vw;
    grid - row - gap: 2vh;
    grid - template - rows: 1fr 1fr 1fr .5fr .5fr;
    grid - template - columns: .55fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr .55fr;
    align - items: end;
    justify - items: end
}

.hero - grid.register {
    height: auto;
    min - height: 100vh;
    grid - template - columns: .55fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4.45vw
}

.div - block - 15 {
    flex - direction: column;
    display: flex
}

.div - block - 15.register - page {
    margin - top: 60px
}

.key - list {
    flex - direction: column;
    flex: none;
    justify - content: flex - end;
    align - items: flex - start;
    padding - top: 0;
    padding - bottom: 0;
    padding - left: 0;
    display: flex
}

.key - item {
    align - items: center;
    margin - bottom: 10px;
    display: flex
}

.key - wrapper {
    height: 100 %;
    grid - column - gap: 40px;
    grid - row - gap: 0px;
    flex - direction: column;
    order: 1;
    grid - template - rows: minmax(min - content, 1fr) minmax(auto, 1fr) minmax(auto, 1fr) minmax(auto, 1fr) minmax(auto, 1fr) auto;
    grid - template - columns: 1fr 1fr;
    grid - auto - columns: 1fr;
    grid - auto - flow: column;
    align - content: start;
    justify - content: start;
    align - items: start;
    padding - right: 40px;
    display: grid
}

.body - copy {
    color: #fff;
    letter - spacing: .2px;
    border - radius: 0;
    margin - left: 0;
    margin - right: 0;
    padding: 0;
    font - family: Everett, Arial, sans - serif;
    font - size: 15px;
    font - style: normal;
    font - weight: 400;
    line - height: 123 %;
    display: block
}

.body - copy.circle {
    text - align: center;
    border - radius: 20px;
    margin - right: 12px
}

.interactive - map - wrapper {
    width: 100 %;
    height: 100 %;
    min - height: 65vh;
    align - items: flex - start;
    display: flex
}

.hero - wrapper {
    z - index: 300;
    width: 100 %;
    height: 100 %;
    align - items: flex - end;
    display: flex;
    position: relative;
    overflow: hidden
}

.body - copy - 1 - white {
    min - width: 300px;
    color: #fff;
    text - align: left;
    flex: 0 auto;
    margin - bottom: 20px;
    font - family: Everett, Arial, sans - serif;
    font - size: 17px;
    font - weight: 400;
    line - height: 128 %
}

.body - copy - 1 - white.nomin {
    min - width: auto
}

.image - 13 {
    width: 100 %;
    object - fit: cover
}

.body - copy - 2 - white {
    max - width: 300px;
    min - width: 180px;
    color: #fff;
    text - align: left;
    letter - spacing: -.3px;
    font - family: Everett, Arial, sans - serif;
    font - size: 21px;
    font - weight: 400;
    line - height: 120 %
}

.grid -for-gallery {
    height: auto;
    max- width: 75vw;
grid - column - gap: 3vw;
grid - row - gap: 2vh;
flex - direction: column;
grid - template - rows: 30vh 1.7fr 20vh;
grid - template - columns: .3fr 1fr 1fr 1fr 1fr .85fr .25fr;
grid - auto - columns: 1fr;
align - items: flex - start;
display: flex
}

.arrow - right {
    color: #fff;
    align - self: auto;
    font - family: Gt america, sans - serif;
    font - size: 29px;
    font - weight: 400;
    line - height: 20px
}

.opening - gallery {
    width: 100vw;
    height: 100 %;
    flex - direction: column;
    flex: none;
    justify - content: flex - start;
    align - items: flex - start;
    display: flex;
    position: relative
}

.left - arrow - 2 {
    width: 50px;
    display: none;
    top: auto;
    bottom: 3vh;
    left: auto;
    right: 5.8vw
}

.right - arrow - 2 {
    width: auto;
    flex - direction: column;
    justify - content: center;
    align - items: flex - start;
    margin - right: -13px;
    padding - right: 0;
    display: flex;
    left: auto;
    right: 5vw
}

.slider - 3 {
    width: 100vw;
    height: auto;
    background - color: transparent
}

.logo - alt {
    z - index: 260;
    width: 23.5vw;
    opacity: 0;
    color: #fff;
    letter - spacing: 0;
    font - family: Everett, Arial, sans - serif;
    font - size: 4.45vw;
    font - weight: 500;
    line - height: 110 %;
    display: block;
    position: fixed
}

.nav - text - brown {
    color: #c54829;
    margin - bottom: 0;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 110 %
}

.spacer {
    height: 60vh;
    max - height: none
}

.spacer._2 {
    width: 10px;
    height: 6vh;
    max - height: none;
    min - height: 100px
}

.subheading - brown {
    z - index: 2;
    width: 100 %;
    color: #c54829;
    text - align: left;
    margin - bottom: 30px;
    font - family: Everett, Arial, sans - serif;
    font - size: 24px;
    font - weight: 500;
    line - height: 115 %
}

.image - 14 {
    object - fit: contain;
    display: block
}

.negative {
    width: 25px;
    height: 3px;
    color: #33322e;
    letter - spacing: -4px;
    object - fit: fill;
    background - color: #c54829;
    font - size: 150px;
    font - weight: 300;
    line - height: 70 %;
    position: absolute
}

.positive {
    width: 3px;
    height: 25px;
    color: #33322e;
    letter - spacing: -4px;
    background - color: #c54829;
    font - size: 150px;
    font - weight: 300;
    line - height: 70 %
}

.content - box {
    flex - direction: row;
    margin - bottom: 40px;
    overflow: hidden
}

.content - box.hori {
    width: 100 %
}

.grow - shrink - wrap {
    flex - flow: wrap;
    justify - content: flex - end;
    align - items: center;
    margin - left: 50px;
    display: none
}

.div - block - 23 {
    flex - direction: row;
    justify - content: space - between;
    align - items: flex - end;
    margin - top: 12px;
    margin - bottom: 30px;
    display: flex
}

.div - block - 3 {
    width: 25px;
    height: 25px;
    justify - content: center;
    align - items: center;
    display: flex
}

.title - wrapper {
    flex - direction: column;
    justify - content: space - between;
    padding - top: 0;
    display: flex
}

.sub - first {
    color: #c54829;
    text - align: left;
    border - top: 1.3px #c54829;
    margin - top: 0;
    margin - bottom: -2px;
    padding - top: 0;
    padding - bottom: 0;
    font - family: Everett, Arial, sans - serif;
    font - size: 25px;
    font - weight: 500;
    line - height: 26px
}

.wrapper - i {
    width: 100 %;
    margin - bottom: 20px;
    overflow: hidden
}

.div - block - 24 {
    min - height: 100vh;
    padding - left: 6vw
}

.div - block - 25 {
    max - width: 400px;
    min - width: 300px
}

.gallery - effect - trigger {
    position: absolute;
    top: 10 %;
    bottom: 0;
    left: auto;
    right: 0 %
}

.div - block - 26 {
    width: 75 %;
    min - width: 400px;
    margin - bottom: 3vh
}

.image - 13 - copy {
    width: 100 %;
    object - fit: cover
}

.mobile - only {
    display: none
}

.link {
    font - family: Everett, Arial, sans - serif;
    font - weight: 400
}

.html - embed {
    width: 100 %
}

.citadel - logo {
    width: 100px;
    margin - top: 25px
}

.snap - 1 {
    width: 100vw;
    height: 100vh;
    display: flex
}

.snap - 2 {
    width: 100vw;
    height: 100vh;
    min - height: 600px;
    background - color: #c54829;
    display: flex
}

.snap - 3 {
    width: 100vw;
    height: 100vh;
    min - height: 600px;
    display: flex
}

.html - embed - 2 {
    display: none
}

.snap - 4 {
    z - index: 260;
    width: 100vw;
    min - height: 100vh;
    flex - direction: column;
    justify - content: space - between;
    padding - top: 170px;
    display: flex;
    position: relative
}

.snap - wrapper {
    width: 100vw;
    height: 100vh;
    min - height: 600px;
    background - color: #c54829;
    overflow: scroll
}

.snap - 6 {
    z - index: 260;
    height: auto;
    min - height: 100vh;
    background - color: #fff;
    padding: 7vw 6vw 6vw;
    position: relative
}

.snap - footer {
    z - index: 350;
    width: 100vw;
    height: 100vh;
    background - color: #fff;
    position: relative
}

.down - arrow {
    z - index: 200;
    width: 2px;
    height: 40px;
    background - color: #c54829
}

.aerial {
    width: 100 %;
    height: auto;
    object - fit: contain;
    align - self: flex - end
}

.section - 1 {
    z - index: 240;
    background - color: #c54829;
    position: relative
}

.instructions {
    color: #fff;
    letter - spacing: .2px;
    border - radius: 0;
    margin - left: 0;
    margin - right: 0;
    padding: 0;
    font - family: Everett, Arial, sans - serif;
    font - size: 15px;
    font - style: normal;
    font - weight: 400;
    line - height: 123 %;
    display: block
}

.select - field {
    color: #fff;
    background - color: #c54829;
    border: 1px solid #fff;
    border - radius: 5px;
    margin - bottom: 25px;
    font - family: Everett, Arial, sans - serif;
    font - size: 17px
}

.select - field:active {
    color: #e9e8e9
}

.radio - button - field {
    width: auto;
    min - width: 15 %;
    flex: 0 auto;
    align - self: center;
    margin - bottom: 0;
    margin - right: 5 %
}

.radio - button {
    width: 13px;
    height: 13px;
    background - color: rgba(233, 232, 233, .65)
}

.radio - button:active {
    background - color: #fff
}

.down - arrow--point {
    width: 20px;
    height: 20px;
    transform - origin: 50 %;
    border - bottom: 1.5px solid #c54829;
    border - right: 1.5px solid #c54829;
    transform: rotate(45deg)
}

.down - arrow--point.white {
    border - bottom - color: #fff;
    border - right - color: #fff
}

.scroll - arrow - wrapper {
    flex - direction: column;
    align - items: center;
    margin - bottom: 18px;
    display: flex
}

.scroll - animation {
    z - index: 200;
    width: 100vw;
    flex - direction: column;
    align - items: center;
    padding - left: 4.45vw;
    padding - right: 4.45vw;
    display: flex;
    position: absolute;
    top: auto;
    bottom: 6vh
}

.scroll - animation.white {
    align - items: flex - start;
    padding - left: 6vh;
    position: absolute;
    left: 0;
    right: auto
}

.scroll - animation.home - invisivble {
    bottom: 7vh
}

.lottie - animation - scroll {
    width: 70px;
    height: 70px;
    margin - top: 10px
}

.div - block - 31 {
    width: 100 %;
    height: 100 %;
    flex - direction: column;
    align - items: center;
    display: flex
}

.div - block - 32 {
    display: flex
}

.div - block - 33 {
    flex - direction: column;
    align - items: center;
    display: flex
}

.scroll - text {
    color: #fff;
    margin - bottom: 10px;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 110 %
}

.scroll - text.brown {
    color: #c54829;
    margin - bottom: 15px
}

.scroll - text.gallery {
    text - align: left;
    font - size: 14px
}

.scroll - text.plan {
    color: #c54829;
    text - align: center;
    font - size: 14px
}

.image - 16 {
    width: 200px;
    display: none
}

.utility - page - wrap {
    width: 100vw;
    height: 100vh;
    max - height: 100 %;
    max - width: 100 %;
    justify - content: center;
    align - items: center;
    display: flex
}

.utility - page - content {
    width: 260px;
    text - align: center;
    flex - direction: column;
    display: flex
}

.utility - page - form {
    flex - direction: column;
    align - items: stretch;
    display: flex
}

.disclaimers {
    z - index: 280;
    width: 100vw;
    height: 50px;
    background - color: #e8603a;
    justify - content: center;
    align - items: center;
    display: flex;
    position: relative
}

.disclaimer - text {
    margin - left: 15px;
    margin - right: 15px;
    font - family: Gt america, sans - serif;
    font - size: 13px;
    font - weight: 300
}

.disclaimer - wraps {
    margin - left: 10px;
    margin - right: 10px;
    display: flex
}

.section - 2 {
    width: 100vw;
    height: auto;
    background - color: #fff;
    padding - top: 206px;
    padding - bottom: 70px
}

.priv {
    color: #2e2e2e;
    margin - top: 42px;
    font - family: Gt america, sans - serif;
    font - size: 16px;
    font - weight: 400
}

.bold - text {
    text - transform: uppercase;
    font - weight: 700
}

.container {
    padding - left: 6vw;
    padding - right: 6vw
}

.image - 17 {
    margin - top: 45px;
    margin - bottom: 45px
}

.homepage-- - touch - deviices {
    display: none
}

._100vw - team - wrapper {
    z - index: 290;
    width: 100vw;
    background - color: #fff;
    justify - content: flex - end;
    align - items: flex - start;
    padding: 10vh 4.5vw;
    display: flex
}

.scroll - text - plan {
    color: #c54829;
    margin - top: -10px;
    margin - bottom: 20px;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 110 %
}

.scroll - text - plan.brown {
    color: #c54829;
    margin - bottom: 15px
}

.scroll - text - plan.gallery {
    text - align: left;
    font - size: 14px
}

.scroll - text - plan.plan {
    color: #c54829;
    text - align: center;
    font - size: 14px
}

.scroll - text - gallery {
    color: #fff;
    text - align: left;
    margin - bottom: 20px;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 110 %
}

.scroll - text - gallery.brown {
    color: #c54829;
    margin - bottom: 15px
}

.scroll - text - gallery.gallery {
    text - align: left;
    font - size: 14px
}

.scroll - text - gallery.plan {
    color: #c54829;
    text - align: center;
    font - size: 14px
}

.slider - caption {
    color: #fff;
    margin - top: 30px;
    margin - left: 40px;
    font - family: Gt america, sans - serif;
    font - weight: 300
}

.gallery - captions {
    color: #fff;
    text - align: left;
    margin - bottom: 20px;
    margin - left: 40px;
    font - family: Gt america, sans - serif;
    font - size: 14px;
    font - weight: 300;
    line - height: 110 %
}

.gallery - captions.brown {
    color: #c54829;
    margin - bottom: 15px
}

.gallery - captions.gallery {
    text - align: left;
    font - size: 14px
}

.gallery - captions.plan {
    color: #c54829;
    text - align: center;
    font - size: 14px
}

.div - block - 34 {
    z - index: 2;
    position: relative
}

.address {
    padding - bottom: 4vw;
    padding - left: 4.45vw
}

.slide,.mask {
    height: auto
}

.announcement - bar {
    z - index: 400;
    height: 80px;
    background - color: #2e2e2e;
    justify - content: space - between;
    align - items: flex - start;
    padding: 15px 20px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0 %;
    right: 0 %
}

.register - your - interest - web {
    color: #fff;
    padding - bottom: 0;
    padding - left: 0;
    font - family: Gt america, sans - serif;
    font - size: 17px;
    font - weight: 300;
    line - height: 24px
}

.register - your - interest - web.white {
    color: #fff;
    letter - spacing: .3px;
    flex: 1;
    margin - bottom: 0;
    font - family: Gt america, sans - serif;
    font - size: 17px;
    font - weight: 300;
    line - height: 20px
}

.register - your - interest - web.white.phone - only {
    display: none
}

.div - block - 103 {
    width: 15px;
    height: 15px;
    cursor: pointer;
    background - image: url(https://assets.website-files.com/5e7bc7bebe9fb235801a0fcb/5ec5a6a813d6c197fb584c58_Untitled-3.png);
        background - position: 50 %;
    background - size: cover;
    justify - content: center;
    align - items: center;
    display: flex
}

.announcement - bar_text {
    color: #fff;
    order: -1;
    margin - right: 4px;
    font - family: Everett, Arial, sans - serif;
    font - size: 16px;
    font - weight: 400
}

.collection - item {
    display: flex
}

.div - block - 104 {
    display: none
}

.web - link {
    font - family: Gt america, sans - serif
}

.footer - address {
    flex - direction: column;
    display: flex
}

@media screen and(min - width: 1280px) {
    .h - 1.home.temp {
        letter - spacing: -.07vw;
        text - indent: 23.6vw
    }

    .h - 1.design {
        padding - right: 23 %
    }

    .h - 1.location._1 {
        padding - right: 45 %
    }

    .footer - logo {
        width: auto
    }

    .footer - wrapper {
        width: 100vw
    }

    .footer - wrapper.home {
        height: 100vh
    }

    .split.base {
        align - items: flex - start
    }

    .left - wrapper._1 {
        align - items: flex - end;
        padding - bottom: 40px
    }

    .left - wrapper._2.low {
        flex: none
    }

    .fact - wrapper._2nd - last {
        flex: 0 auto
    }

    .info - div {
        justify - content: flex - start;
        display: flex
    }

    .body - copy - 1 {
        max - width: none
    }

    .menu - text {
        font - size: 57px
    }

    .section.slider {
        max - height: none
    }

    .link - block {
        margin - top: 40px
    }

    .form - field.message {
        margin - bottom: 20px
    }

    .form {
        margin - top: 60px
    }

    .main - body - grid.design {
        grid - row - gap: 10vw;
        grid - template - columns: 1fr 1fr 1fr 1fr 1fr 1fr .5fr 1fr 1fr
    }

    .key - item {
        margin - bottom: 11px
    }

    .body - copy {
        font - size: 17px
    }

    .hero - wrapper {
        justify - content: flex - end
    }

    .body - copy - 1 - white {
        min - width: 330px
    }

    .arrow - right {
        font - size: 31px
    }

    .opening - gallery {
        min - height: 700px
    }

    .subheading - brown {
        font - size: 1.7vw;
        line - height: 115 %
    }

    .image - 14 {
        object - fit: cover
    }

    .wrapper - i {
        transform - origin: 50 % 0
    }

    .wrapper - i._1 {
        height: 100 %
    }

    .div - block - 25 {
        max - width: 500px;
        min - width: 380px
    }

    .div - block - 26 {
        max - width: 570px
    }

    .snap - 4 {
        overflow: hidden
    }

    .snap - wrapper {
        overflow: scroll
    }

    .instructions {
        font - size: 17px
    }

    .scroll - animation.home - invisivble.q {
        bottom: 2.5vh
    }

    .lottie - animation - scroll {
        margin - top: 15px
    }

    .disclaimers {
        height: 100px;
        background - color: #e8603a
    }
}

@media screen and(min - width: 1920px) {
    .nav - bar {
        padding - top: 4vw;
        padding - left: 4.5vw;
        padding - right: 4.5vw
    }

    .logo.design - and - team {
        line - height: 107 %
    }

    .logo.location {
        padding - top: 0;
        line - height: 107 %
    }

    .logo.actual {
        line - height: 107 %
    }

    .h - 1.home {
        color: #fff;
        line - height: 107 %
    }

    .h - 1.home._2 {
        line - height: 107 %
    }

    .h - 1.design {
        padding - right: 35 %;
        line - height: 107 %
    }

    .h - 1.location,.h - 1.team {
        line - height: 107 %
    }

    ._50vw - div.nav,._50vw - div.team {
        width: 46.5vw
    }

    .split.base {
        flex: 0 auto;
        justify - content: space - between;
        align - items: center
    }

    .left - wrapper._1 {
        width: auto;
        max - width: 800px;
        flex: 0 auto;
        justify - content: center;
        align - self: center;
        align - items: flex - start;
        padding - left: 80px
    }

    .left - wrapper.key - info {
        top: 10vh
    }

    .fact - wrapper._2nd - last {
        flex: 0 auto
    }

    .right - wrapper._1 {
        max - width: 1700px;
        flex: 0 auto
    }

    .body - copy - 1 {
        max - width: none
    }

    .body - copy - 1.centre {
        letter - spacing: 0
    }

    .body - copy - 1.centre.gallery {
        z - index: auto;
        color: #fff
    }

    .hero - image {
        width: 100 %
    }

    .menu - text {
        font - size: 70px
    }

    .section.slider {
        max - height: none
    }

    .link - block {
        margin - top: 50px
    }

    .snap - 5 {
        padding - top: 15vh;
        padding - bottom: 14vh;
        padding - left: 6vw
    }

    .form - line.dark {
        background - color: #c54829;
        border - color: #c54829
    }

    .main - body - grid {
        grid - row - gap: 17vh
    }

    .main - body - grid.design {
        grid - row - gap: 12vw
    }

    .hero - wrapper {
        justify - content: flex - end
    }

    .body - copy - 1 - white.nomin {
        align - self: flex - start
    }

    .grid -for-gallery {
        grid- column - gap: 2vw;
    grid - template - columns: 6vw 30vw minmax(5vw, 1fr) 14vw 10vw 14vw 6vw;
    justify - content: start;
    justify - items: start
}

    .opening - gallery {
    min - height: 800px
}

    .left - arrow - 2 {
    right: 4.8vw
}

    .right - arrow - 2 {
    display: flex
}

    .logo - alt {
    padding - top: 0;
    line - height: 107 %
    }

    .subheading - brown {
    font - size: 1.5vw
}

    .image - 14 {
    width: 100 %;
    height: 100 %
    }

    .div - block - 25 {
    max - width: none
}

    .div - block - 26 {
    max - width: 600px
}

    .link {
    font - family: Everett, Arial, sans - serif;
    font - weight: 400
}

    .snap - 4 {
    min - height: 100vh;
    justify - content: flex - end;
    padding - top: 10vh;
    overflow: hidden
}

    .snap - footer {
    z - index: 400
}

    .disclaimers {
    height: 50px
}

    .image - 17 {
    max - width: 800px
}

    ._100vw - team - wrapper {
    padding - top: 4vw;
    padding - left: 4.5vw;
    padding - right: 4.5vw
}

    .scroll - text - plan {
    color: #c54829
}

    .image - 19 {
    width: 100 %
    }
}

@media screen and(max - width: 991px) {
    .lottie - animation {
        width: 45 %
    }

    .nav - bar {
        justify - content: flex - end
    }

    .nav - text {
        font - size: 14px;
        line - height: 16px
    }

    .logo {
        width: 100 %;
        height: 100 %;
        align - self: flex - end;
        padding - top: 0;
        font - size: 6vw;
        line - height: 110 %;
        position: relative
    }

    .logo.design - and - team {
        z - index: 260;
        width: auto;
        height: auto;
        font - size: 6.5vw;
        line - height: 105 %;
        position: fixed;
        top: 35vh
    }

    .logo.design - and - team.absolute {
        top: 35vh
    }

    .logo.mobile {
        width: 32vw;
        height: auto;
        padding - top: .5vw;
        line - height: 105 %;
        position: fixed;
        top: 30vh;
        bottom: auto;
        left: auto;
        right: auto
    }

    .logo.location {
        height: auto;
        padding - top: 0;
        font - size: 6.5vw;
        line - height: 105 %;
        position: fixed;
        top: auto
    }

    .logo.actual {
        padding - bottom: 18px
    }

    .text - line.single {
        align - items: flex - start
    }

    .h - 1 {
        letter - spacing: -.08vw;
        font - size: 6.5vw;
        line - height: 105 %
    }

    .h - 1.indented {
        margin - top: 88px;
        padding - right: 0 %
    }

    .h - 1.dark.bold {
        padding - right: 0;
        font - size: 6vw
    }

    .h - 1.home {
        text - indent: 32.5vw;
        padding - right: 13 %;
        font - size: 6vw;
        display: block
    }

    .h - 1.home._2 {
        text - indent: 34vw;
        flex: 1;
        padding - right: 6 %;
        font - size: 6vw
    }

    .h - 1.design {
        text - indent: 22.5vw;
        padding - right: 0 %
    }

    .h - 1.location {
        text - indent: 28vw;
        padding - right: 9 %
    }

    .h - 1.location._1 {
        padding - right: 5 %
    }

    .h - 1.team {
        text - indent: 30vw;
        padding - right: 13 %
    }

    .h - 1.statement {
        padding - right: 20 %
    }

    .h - 1.normal {
        padding - right: 0 %;
        font - size: 7.5vw
    }

    .panel.hero {
        z - index: auto;
        position: relative
    }

    .panel.slider {
        z - index: 2;
        width: 100vw;
        min - height: 100vh
    }

    .text - wrapper {
        width: 100 %;
        align - items: flex - start;
        display: flex;
        top: 0
    }

    .text - wrapper.with - fixed - logo {
        z - index: auto;
        top: -2.5vh
    }

    .text - wrapper._27 {
        flex - direction: column;
        top: 0
    }

    ._50vw - div.nav {
        flex: 1
    }

    .footer - text {
        font - size: 14px;
        line - height: 16px
    }

    .address - bar {
        z - index: 1;
        padding - right: 6vh
    }

    .body - copy - 2 {
        min - width: auto;
        font - size: 16px
    }

    .body - copy - 2.nomax {
        letter - spacing: 0
    }

    .split.top {
        flex - wrap: wrap;
        justify - content: space - between
    }

    .split.base {
        flex - direction: column;
        align - items: stretch;
        padding - right: 7vw
    }

    .left - wrapper._1 {
        width: 50vw;
        flex: 0 auto;
        align - self: flex - end;
        margin - top: 6vh;
        padding - left: 0;
        padding - right: 0
    }

    .left - wrapper._2,.left - wrapper.key - info {
        height: auto;
        min - width: 25vw;
        flex: 1;
        padding - right: 0;
        top: 15vh
    }

    .icon {
        height: 80px;
        max - width: 120px;
        margin - bottom: 15px
    }

    .fact - wrapper {
        width: 50 %;
        min - width: auto;
        border - bottom - width: 1.4px;
        flex: 0 auto;
        margin - top: 4vw;
        padding - bottom: 20px
    }

    .fact - wrapper.last {
        padding - right: 0
    }

    .fact - wrapper._2nd - last {
        width: 50 %;
        min - width: auto;
        flex: 0 auto
    }

    .grid - 3 {
        margin - left: 20px
    }

    .right - wrapper {
        width: 50vw;
        min - width: auto;
        border - left - width: 1.4px;
        flex: 0 auto
    }

    .right - wrapper._1 {
        width: 100vw;
        height: 100 %;
        min - height: auto;
        background - color: #c54829;
        background - image: none;
        background - repeat: repeat;
        background - size: auto;
        flex: 0 auto
    }

    .info - div {
        padding - left: 32px
    }

    .body - copy - 1 {
        font - size: 16px
    }

    .body - copy - 1.centre.gallery {
        color: #fff;
        text - align: right;
        margin - top: 0
    }

    .hero - image {
        width: 100 %;
        max - width: none;
        object - fit: cover
    }

    .hero - image.aeriel {
        background - image: none;
        background - repeat: repeat;
        background - size: auto;
        align - items: center;
        display: flex
    }

    .nav - link {
        width: auto;
        height: auto;
        display: block
    }

    .line {
        height: 1.2px
    }

    .line.dark {
        height: 1.4px
    }

    .menu {
        width: auto;
        height: auto;
        display: block
    }

    .menu - wrapper {
        padding - bottom: 8vh;
        display: none
    }

    .menu - item {
        display: block
    }

    .menu - text {
        font - size: 40px
    }

    .section.slider {
        justify - content: flex - start
    }

    .link - block {
        align - items: center;
        margin - top: 20px;
        margin - bottom: 30px
    }

    .hide - overflow.arrow - wrap {
        margin - right: 5px
    }

    .straight - line {
        width: 25px
    }

    .snap - 5 {
        z - index: 275;
        height: 60vh;
        padding - top: 10vh;
        padding - bottom: 10vh
    }

    .slider - image {
        background - color: #e8603a
    }

    .menu - captions {
        font - size: 14px;
        line - height: 16px
    }

    .form - line {
        margin - bottom: 20px
    }

    .form - name {
        width: 100 %;
        margin - bottom: 0;
        padding - top: 0;
        font - size: 14px;
        line - height: 20px
    }

    .form - field {
        margin - bottom: 0;
        padding - top: 0;
        font - size: 14px;
        line - height: 20px
    }

    .form - field.message {
        margin - bottom: 20px;
        padding - top: 5px
    }

    .form - field._3 {
        width: 30 %
    }

    .form - wrapper._45 {
        width: 100 %;
        margin - right: 27px
    }

    .form - wrapper._45.right {
        width: 100 %
    }

    .form - wrapper.split {
        margin - bottom: 20px
    }

    .submit - button {
        font - size: 17px;
        line - height: 20px
    }

    .form - block {
        margin - top: 0
    }

    .main - body - grid {
        width: 100vw;
        grid - row - gap: 100px;
        overflow: hidden
    }

    .main - body - grid.design {
        grid - auto - columns: minmax(60vh, 1fr)
    }

    .hero - grid {
        height: 100 %;
        min - height: 100vh;
        grid - column - gap: 1.5vw;
        grid - row - gap: 0vh;
        grid - template - rows: 25vh 10vh 10vh 30vh 25vh;
        grid - template - columns: 6vw 1fr 1fr 1fr 1fr 1fr 1fr 1fr 6vw;
        position: relative
    }

    .hero - grid.register {
        padding - bottom: 100px
    }

    .div - block - 15.register - page {
        width: 100 %
    }

    .key - list {
        width: 100 %;
        grid - column - gap: 16px;
        grid - row - gap: 5px;
        order: 1;
        grid - template - rows: auto;
        grid - template - columns: 1fr;
        grid - auto - columns: 1fr;
        align - content: stretch;
        padding - right: 6vw;
        display: flex
    }

    .key - item {
        margin - bottom: 5px
    }

    .key - wrapper {
        grid - column - gap: 25px;
        grid - row - gap: 0px;
        grid - template - rows: auto auto;
        grid - template - columns: 1fr 1fr;
        grid - auto - columns: 1fr;
        grid - auto - flow: row;
        padding - right: 0;
        display: flex
    }

    .body - copy {
        margin - bottom: 0;
        font - size: 14px
    }

    .body - copy.circle {
        width: 20px;
        height: 20px;
        padding - top: 4px;
        padding - right: 1.6px
    }

    .interactive - map - wrapper {
        height: 50vh
    }

    .hero - wrapper {
        z - index: 300
    }

    .body - copy - 1 - white {
        font - size: 16px
    }

    .body - copy - 2 - white {
        min - width: auto;
        font - size: 15.3px
    }

    .grid -for-gallery {
        max- width: 85vw;
    grid - row - gap: 5vh;
    grid - template - rows: minmax(300px, 30vh) 30vh 1fr;
    grid - template - columns: .3fr 1fr 1fr 1fr 1fr .85fr 7vw
}

    .arrow - right {
    margin - left: 0;
    margin - right: 7px;
    font - weight: 300
}

    .left - arrow - 2 {
    display: none;
    bottom: 8.5vh;
    right: 6vw
}

    .right - arrow - 2 {
    width: auto;
    justify - content: flex - end;
    align - items: flex - start;
    margin - top: 50px;
    padding - right: 0;
    display: flex;
    top: auto;
    bottom: auto;
    left: 4.45vw;
    right: auto
}

    .logo - alt {
    z - index: 260;
    width: auto;
    font - size: 6.5vw;
    line - height: 105 %;
    top: 35vh
}

    .nav - text - brown {
    font - size: 14px;
    line - height: 16px
}

    .spacer {
    height: 550px;
    max - height: none;
    display: block
}

    .spacer._2 {
    height: 15vh;
    display: none
}

    .subheading - brown {
    border - top - style: none;
    font - size: 2.9vw
}

    .image - 14 {
    width: 100vw;
    display: block
}

    .negative,.positive {
    font - size: 100px;
    line - height: 75 %
    }

    .content - box {
    overflow: hidden
}

    .grow - shrink - wrap {
    display: block
}

    .div - block - 23 {
    align - items: flex - start
}

    .div - block - 3 {
    display: none
}

    .title - wrapper {
    height: auto
}

    .sub - first {
    font - size: 21px
}

    .sub - first.white {
    color: #fff;
    margin - bottom: 25px;
    font - weight: 400
}

    .div - block - 25 {
    min - width: auto;
    padding - right: 5 %
    }

    .div - block - 26 {
    width: 100 %;
    max - width: 450px;
    min - width: auto
}

    .link {
    text - decoration: underline
}

    .snap - 1 {
    z - index: 265;
    background - color: #c54829;
    position: relative
}

    .snap - 2 {
    z - index: 280;
    height: auto;
    min - height: 100vh;
    padding - bottom: 10vh
}

    .snap - 3 {
    z - index: 280
}

    .snap - 4 {
    z - index: 275;
    height: auto;
    min - height: 100vh;
    background - color: #c54829;
    justify - content: center;
    padding - top: 0
}

    .snap - wrapper {
    width: 100vw;
    display: none
}

    .snap - wrapper.hidden {
    display: block
}

    .snap - 6 {
    z - index: 275
}

    .down - arrow {
    left: 6vw
}

    .aerial {
    display: block
}

    .section - 1 {
    z - index: 260;
    position: relative
}

    .instructions {
    margin - bottom: 0;
    font - size: 14px
}

    .select - field {
    border - radius: 5px;
    font - size: 14px
}

    .radio - button - field {
    margin - right: 10 %
    }

    .down - arrow--point {
    width: 18px;
    height: 18px
}

    .scroll - animation {
    align - items: center;
    bottom: 4vh
}

    .scroll - animation.home {
    z - index: 275;
    bottom: 6vh
}

    .scroll - animation.home - invisivble {
    display: none
}

    .scroll - text {
    font - size: 14px;
    line - height: 16px
}

    .image - 16 {
    width: 150px
}

    .homepage-- - touch - deviices {
    display: block
}

    ._100vw - team - wrapper {
    justify - content: flex - end
}

    .scroll - text - plan,.scroll - text - gallery,.gallery - captions {
    font - size: 14px;
    line - height: 16px
}

    .address {
    margin - bottom: 0;
    padding - bottom: 0;
    padding - right: 4.45vw
}

    .announcement - bar {
    z - index: 400
}

    .register - your - interest - web {
    display: block
}

    .register - your - interest - web.white {
    font - size: 14px;
    line - height: 17px
}

    .register - your - interest - web.white.phone - only {
    display: none
}

    .div - block - 103 {
    margin - top: 4px
}

    .announcement - bar_text {
    font - size: 14px
}
}

@media screen and(max - width: 767px) {
    .nav - bar {
        padding - top: 6vw;
        padding - left: 6vw;
        padding - right: 6vw
    }

    .nav - text {
        font - size: 12.5px;
        line - height: 15px
    }

    .logo {
        padding - top: 0;
        top: 0
    }

    .logo.design - and - team {
        position: absolute;
        top: 0
    }

    .logo.design - and - team.absolute {
        top: 0
    }

    .logo.design - and - team.white {
        color: #fff
    }

    .logo.not - fixed {
        font - size: 6vw
    }

    .logo.mobile {
        font - size: 6.5vw
    }

    .logo.location {
        position: relative
    }

    .logo.actual {
        padding - bottom: 9px
    }

    .h - 1.dark {
        line - height: 115 %
    }

    .h - 1.home._2 {
        text - indent: 34.5vw
    }

    .h - 1.design {
        text - indent: 23vw;
    }

    .h - 1.location {
        text - indent: 27vw;
        padding - right: 5 %
    }

    .h - 1.location._1 {
        text - indent: 0
    }

    .panel.hero {
        height: auto;
        min - height: 100vh
    }

    .panel.hero.white {
        height: 100vh;
        min - height: 250px
    }

    .panel.slider {
        height: auto
    }

    .text - wrapper {
        align - self: center
    }

    ._50vw - div.team {
        width: 65vw
    }

    .footer - text {
        margin - bottom: 5px;
        font - size: 14px;
        line - height: 17px
    }

    .footer - grid {
        padding - left: 6vw;
        padding - right: 6vw
    }

    .div - block -4._2 {
        display: none
    }

    .address - bar {
        margin - bottom: 6vh;
        padding - left: 7vw;
        display: block;
        position: absolute
    }

    .body - copy - 2 {
        font - size: 14px
    }

    .body - copy - 2.nomax {
        font - size: 15.5px
    }

    .split.right - align {
        width: 100 %
    }

    .split.base {
        align - items: center;
        padding - right: 0
    }

    .split.occ {
        flex - direction: column
    }

    .left - wrapper._1 {
        width: 55vw;
        min - width: auto;
        align - self: flex - end;
        margin - top: 8vw;
        margin - right: 10vw
    }

    .left - wrapper._2.low {
        width: 100 %;
        height: 200px;
        flex - direction: row;
        align - items: flex - end;
        padding - bottom: 50px;
        position: relative;
        top: 0
    }

    .icon {
        height: 60px
    }

    .fact - wrapper,.fact - wrapper._2nd - last {
        padding - right: 20px
    }

    .right - wrapper.occ {
        width: 100 %;
        border - left - style: none
    }

    .body - copy - 1 {
        min - width: auto;
        font - size: 15.5px
    }

    .body - copy - 1.centre {
        z - index: 3;
        text - align: left;
        margin - top: 0;
        left: 6vw
    }

    .body - copy - 1.centre.gallery {
        color: #c54829;
        left: 0
    }

    .nav - link {
        margin - bottom: 0
    }

    .line {
        display: none
    }

    .line.dark {
        display: block
    }

    .div - block - 9 {
        width: 100 %
    }

    .menu - item {
        margin - top: 15px
    }

    .menu - text {
        font - size: 30px
    }

    .close - button {
        font - size: 13px
    }

    .section {
        padding - left: 7vw;
        padding - right: 7vw
    }

    .section.slider {
        padding - left: 0;
        padding - right: 0
    }

    .section.occ {
        padding - top: 25vh;
        padding - bottom: 60px
    }

    .div - block - 13 {
        flex - direction: column;
        align - items: flex - start
    }

    .menu - captions {
        margin - right: 40px;
        font - size: 12.5px;
        line - height: 14px
    }

    .form - line {
        margin - bottom: 15px
    }

    .form - name,.form - field {
        line - height: 16px
    }

    .form - field._3 {
        width: 100 %
    }

    .form - wrapper.split {
        flex - direction: column;
        align - items: flex - start
    }

    .submit - button {
        margin - bottom: 40px
    }

    .main - body - grid.design {
        grid - row - gap: 90px
    }

    .image - container._2 {
        padding - left: 0 %
    }

    .image - 8 {
        height: auto
    }

    .div - block - 15 {
        flex - direction: row;
        order: 1
    }

    .div - block - 15.register - page {
        flex - direction: column
    }

    .key - list {
        grid - column - gap: 16px;
        grid - row - gap: 16px;
        grid - template - rows: auto auto;
        grid - template - columns: 1fr 1fr;
        grid - auto - columns: 1fr;
        display: block
    }

    .key - item {
        margin - bottom: 3px
    }

    .key - wrapper {
        grid - row - gap: 5px
    }

    .body - copy {
        padding - top: 4px;
        padding - bottom: 4px;
        font - size: 14px;
        line - height: 16px
    }

    .body - copy.circle {
        padding - bottom: 0
    }

    .interactive - map - wrapper {
        height: 300px;
        min - height: 45vh
    }

    .body - copy - 1 - white {
        min - width: 250px;
        font - size: 15.5px
    }

    .body - copy - 1 - white.nomin {
        font - size: 15.5px
    }

    .body - copy - 2 - white {
        font - size: 16px
    }

    .grid -for-gallery {
        max- width: 100vw;
    grid - column - gap: 10px;
    grid - row - gap: 40px
}

    .arrow - right {
    color: #c54829;
    margin - left: 0
}

    .left - arrow - 2 {
    padding - top: 50vh;
    padding - left: 20px;
    display: none;
    top: 0;
    bottom: 0 %;
    left: 0;
    right: auto
}

    .right - arrow - 2 {
    justify - content: center;
    margin - top: 50px;
    margin - right: 0;
    padding - right: 20px;
    display: flex;
    left: 7vw;
    right: 0
}

    .logo - alt {
    display: none;
    position: absolute;
    top: 0
}

    .nav - text - brown {
    font - size: 12px;
    line - height: 14px
}

    .spacer {
    height: 300px
}

    .spacer.floorplan {
    height: 120px
}

    .subheading - brown {
    padding - bottom: 7px;
    font - size: 19.5px
}

    .image - 14 {
    width: 100vw
}

    .negative {
    width: 20px;
    height: 2px;
    margin - bottom: 0;
    font - size: 50px;
    line - height: 55px
}

    .positive {
    width: 2px;
    height: 20px;
    margin - bottom: 0;
    font - size: 50px;
    line - height: 55px
}

    .content - box {
    margin - bottom: 20px
}

    .div - block - 23 {
    margin - bottom: 15px
}

    .div - block - 3 {
    width: 25px;
    height: 25px;
    display: flex
}

    .title - wrapper {
    border - top - width: 1px
}

    .sub - first {
    padding - bottom: 7px;
    font - size: 19.5px;
    line - height: 23px
}

    .div - block - 24 {
    padding - left: 0
}

    .div - block - 25 {
    min - width: auto;
    padding - right: 27px
}

    .mobile - only {
    z - index: auto;
    width: 100vw;
    height: auto;
    min - height: 400px;
    background - color: #c54829;
    flex - direction: column;
    justify - content: space - between;
    display: flex;
    position: relative
}

    .div - block - 27 {
    z - index: 2;
    width: 100vw;
    min - height: 200px;
    margin - top: 50px;
    position: relative
}

    .html - embed {
    display: none
}

    .html - embed.mobile - only {
    width: 100 %;
    height: 100 %;
    min - height: 300px;
    background - color: transparent;
    flex - direction: row;
    align - items: flex - start;
    margin - bottom: 10px;
    margin - left: auto;
    margin - right: auto;
    display: block
}

    .citadel - logo {
    width: 70px;
    margin - top: 15px
}

    .snap - 1 {
    height: auto;
    min - height: 350px
}

    .snap - 2,.snap - 3 {
    height: auto;
    min - height: 100vh
}

    .snap - wrapper.hidden {
    display: none
}

    .down - arrow {
    height: 30px
}

    .down - arrow.w--current {
    display: none;
    top: 0 %;
    bottom: auto;
    left: 0;
    right: auto
}

    .div - block - 29 {
    height: 100vh;
    flex - direction: column;
    justify - content: flex - start;
    align - items: center;
    margin - left: 7vw;
    margin - right: 7vw;
    padding - top: 35vh;
    display: flex
}

    .section - 1 {
    z - index: 260;
    width: 100vw;
    padding - top: 100px
}

    .instructions {
    padding - top: 21px;
    padding - bottom: 21px;
    padding - left: 7vw;
    font - size: 14px;
    line - height: 16px
}

    .radio - button - field {
    width: auto;
    align - self: flex - start;
    margin - top: 5px;
    margin - bottom: 10px;
    margin - right: 0
}

    .down - arrow--point {
    width: 15px;
    height: 15px
}

    .scroll - animation.location {
    bottom: 3vh
}

    .scroll - animation.location.mobile {
    display: block
}

    .lottie - animation - scroll {
    width: 50px;
    height: 50px
}

    .div - block - 31 {
    width: 100vw;
    flex - direction: column;
    align - items: center;
    margin - top: 50px;
    display: flex
}

    .scroll - text {
    font - size: 12.5px;
    line - height: 15px
}

    .scroll - text.gallery {
    color: #c54829
}

    .image - 16 {
    width: 100px;
    display: block
}

    ._100vw - team - wrapper {
    padding - top: 6vw;
    padding - left: 6vw;
    padding - right: 6vw
}

    .scroll - text - plan {
    font - size: 12.5px;
    line - height: 15px
}

    .scroll - text - plan.gallery {
    color: #c54829
}

    .scroll - text - gallery {
    color: #c54829;
    font - size: 12.5px;
    line - height: 15px
}

    .scroll - text - gallery.gallery {
    color: #c54829
}

    .gallery - captions {
    color: #c54829;
    font - size: 12.5px;
    line - height: 15px
}

    .gallery - captions.gallery {
    color: #c54829
}

    .image - 18 {
    transform - origin: 50 % 0
}

    .div - block - 35 {
    height: 45vh;
    flex - direction: column;
    justify - content: flex - end;
    display: flex
}

    .announcement - bar {
    height: auto;
    align - items: flex - start;
    padding - top: 15px;
    padding - bottom: 15px
}

    .register - your - interest - web {
    padding - bottom: 31px;
    display: none
}

    .register - your - interest - web.white {
    margin - right: 80px;
    padding - bottom: 0;
    display: block
}

    .register - your - interest - web.white.phone - only {
    display: none
}
}

@media screen and(max - width: 479px) {
    .lottie - animation {
        width: 65 %;
        height: 70 %;
        min - width: auto
    }

    .nav - bar {
        width: 100vw;
        padding: 7vw 7vw 6vw
    }

    .nav - text {
        margin - bottom: 1px;
        font - size: 13px;
        line - height: 15px
    }

    .logo {
        text - align: center;
        letter - spacing: -.15vw;
        font - size: 20.5vw;
        line - height: 100 %;
        top: 2vh
    }

    .logo.design - and - team {
        width: auto;
        text - align: left;
        align - self: flex - start;
        font - size: 9vw;
        line - height: 115 %;
        position: relative;
        top: 0
    }

    .logo.design - and - team.absolute {
        letter - spacing: -.08vw;
        position: absolute
    }

    .logo.design - and - team.white {
        letter - spacing: -.06vw;
        position: absolute
    }

    .logo.not - fixed {
        text - align: left;
        font - size: 9vw
    }

    .logo.mobile {
        width: 43.9vw;
        text - align: left;
        align - self: flex - start;
        padding - top: 0;
        line - height: 115 %
    }

    .logo.location {
        font - size: 13vw;
        line - height: 115 %
    }

    .logo.actual {
        height: auto;
        object - fit: contain;
        align - self: center;
        top: 0
    }

    .text - line.single {
        flex - direction: column;
        align - items: flex - start;
        margin - bottom: -5 %
    }

    .text - line.single.team {
        flex - direction: column;
        align - items: flex - start;
        margin - bottom: 0 %
    }

    .text - line.single.design {
        flex - direction: row
    }

    .h - 1 {
        font - size: 7.5vw;
        font - weight: 400;
        line - height: 115 %
    }

    .h - 1.dark {
        padding - right: 0
    }

    .h - 1.dark.bold {
        align - self: flex - end;
        font - size: 8.2vw;
        line - height: 123 %
    }

    .h - 1.dark.bold.left {
        align - self: flex - start
    }

    .h -1._2 {
        font - size: 28px;
        font - weight: 400
    }

    .h - 1.home {
        letter - spacing: 0;
        text - indent: 0;
        margin - top: 9vw;
        padding - right: 0 %;
        font - size: 8.2vw
    }

    .h - 1.home._2 {
        letter - spacing: -.04vw;
        text - indent: 46.1vw;
        margin - top: -1.5vw;
        padding - right: 5 %;
        font - size: 8.2vw;
        line - height: 112 %
    }

    .h - 1.design {
        text - indent: 32vw;
        padding - right: 0 %;
        font - size: 9vw;
        line - height: 110 %;
    }

    .h - 1.location {
        letter - spacing: -.07vw;
        text - indent: 38vw;
        padding - right: 0 %;
        font - size: 9vw;
        line - height: 110 %
    }

    .h - 1.location._1 {
        text - indent: 0
    }

    .h - 1.team {
        text - indent: 0;
        padding - right: 0 %;
        font - size: 9vw
    }

    .h - 1.statement {
        letter - spacing: 0;
        padding - right: 12 %;
        font - weight: 400
    }

    .panel.slider.design {
        min - height: auto;
        overflow: hidden
    }

    .text - wrapper.with - fixed - logo {
        margin - bottom: -2vh
    }

    .text - wrapper._27 {
        top: 0
    }

    ._50vw - div {
        width: 50vw
    }

    ._50vw - div.team {
        width: 100 %
    }

    .footer - wrapper {
        z - index: 280
    }

    .footer - text {
        font - size: 13px
    }

    .footer - grid {
        width: 100vw;
        grid - column - gap: 20px;
        grid - row - gap: 30px;
        grid - template - rows: auto auto minmax(auto, 1fr);
        grid - template - columns: 1fr 1.15fr 1fr;
        padding - top: 8vw;
        padding - left: 7vw;
        padding - right: 7vw
    }

    .footer - grid.home {
        padding - bottom: 10vh
    }

    .div - block -4._2 {
        display: none
    }

    .address - bar {
        margin - bottom: 7vw
    }

    .body - copy - 2 {
        font - size: 14px
    }

    .body - copy - 2.nomax {
        width: 98 %;
        margin - top: 30px;
        margin - bottom: 20px;
        font - size: 15.5px
    }

    .split.top {
        flex - direction: column
    }

    .split.base {
        margin - top: 0
    }

    .left - wrapper._1 {
        width: 79vw;
        min - width: auto;
        justify - content: flex - start;
        align - self: center;
        margin - top: 7vh;
        margin - left: 7vw;
        margin - right: 7vw;
        padding - bottom: 0
    }

    .left - wrapper._2 {
        width: 100 %;
        background - color: #fff;
        padding - top: 40px;
        padding - bottom: 60px;
        padding - right: 0;
        position: relative;
        top: 0
    }

    .left - wrapper._2.low {
        height: auto;
        min - height: 100px;
        margin - bottom: 15vh;
        padding - top: 0;
        padding - bottom: 0
    }

    .left - wrapper.key - info {
        width: 100 %;
        background - color: #fff;
        padding - top: 40px;
        padding - bottom: 60px;
        padding - right: 0;
        position: relative;
        top: 0
    }

    .icon {
        height: 60px;
        max - width: 100px
    }

    .fact - wrapper {
        width: 47 %;
        padding - bottom: 10px;
        padding - left: 10px;
        padding - right: 10px
    }

    .fact - wrapper.last {
        padding - left: 0
    }

    .fact - wrapper._2nd - last {
        width: 53 %;
        padding - left: 0;
        padding - right: 26px
    }

    .grid - 3 {
        grid - column - gap: 0px;
        grid - row - gap: 25px;
        margin - left: 0
    }

    .right - wrapper {
        width: auto;
        border - left - style: none;
        border - left - width: 0
    }

    .right - wrapper._1 {
        width: 100 %
    }

    .info - div {
        min - width: auto;
        padding - bottom: 60px;
        padding - left: 0
    }

    .body - copy - 1 {
        max - width: 320px;
        margin - bottom: 13px;
        font - size: 15.5px;
        line - height: 125 %
    }

    .body - copy - 1.centre {
        max - width: none;
        text - align: left;
        margin - top: 0;
        left: 7vw
    }

    .body - copy - 1.centre.gallery {
        text - align: left;
        padding - left: 0
    }

    .hero - image {
        height: auto;
        object - fit: contain;
        flex: 0 auto;
        align - self: flex - end
    }

    .line.dark {
        height: 1.2px;
        display: block
    }

    .menu - wrapper {
        height: 100 %;
        padding - top: 10vw;
        padding - left: 10vw;
        padding - right: 10vw;
        display: none;
        top: 0 %;
        bottom: 0 %;
        left: 0 %;
        right: 0 %
    }

    .prefooter {
        z - index: 280
    }

    .section {
        padding - top: 0;
        padding - left: 7vw
    }

    .section.slider {
        min - height: 70vh
    }

    .section.occ {
        padding - bottom: 60px;
        padding - left: 7vw;
        padding - right: 7vw
    }

    .link - block {
        margin - top: 10px
    }

    .hide - overflow {
        overflow: hidden
    }

    .hide - overflow.arrow - wrap {
        width: 33px;
        margin - right: 5px
    }

    .snap - 5 {
        height: 40vh;
        min - height: 300px;
        flex: 1;
        justify - content: flex - start;
        align - self: center;
        padding: 40px 7vw
    }

    .slider - image {
        height: auto;
        min - height: 150px
    }

    .form - line.dark {
        border - color: #c54829
    }

    .form - name,.form - field {
        font - size: 15.5px;
        line - height: 16px
    }

    .form - field.message {
        padding - top: 5px
    }

    .form - field._2 {
        font - weight: 400
    }

    .form - field._3 {
        width: 100 %
    }

    .form - block {
        width: 100 %;
        margin - top: 40px
    }

    .main - body - grid {
        width: 100vw;
        grid - column - gap: 2vw;
        grid - row - gap: 90px;
        grid - template - columns: 7vw .7fr 1fr 1fr 1fr .7fr 7vw
    }

    .main - body - grid.design {
        grid - row - gap: 90px;
        grid - auto - rows: auto;
        grid - auto - columns: 1fr;
        align - items: start
    }

    .image - container {
        align - items: flex - start
    }

    .image - 8 {
        height: auto;
        object - fit: cover;
        align - self: flex - start
    }

    .hero - grid {
        height: auto;
        grid - row - gap: 0vh;
        grid - template - rows: 25vh 10vh 1fr auto;
        grid - template - columns: 7vw 1fr 1fr 1fr 1fr 1fr 1fr 1fr 7vw
    }

    .hero - grid.small {
        min - height: 65vh;
        grid - template - rows: 25vh auto auto 25vh
    }

    .hero - grid.register {
        grid - template - rows: 20vh 5vh 25vh;
        grid - template - columns: 7vw 1fr 1fr 1fr 1fr 1fr 1fr 1fr 7vw
    }

    .hero - grid.home {
        grid - template - rows: 25vh 15vh 1fr auto
    }

    .div - block - 15 {
        display: none
    }

    .key - list {
        grid - row - gap: 10px;
        grid - template - columns: 1fr;
        align - self: center;
        padding - left: 0;
        display: flex
    }

    .key - item {
        min - height: 20px;
        align - items: flex - start;
        margin - bottom: 0
    }

    .key - wrapper {
        grid - column - gap: 20px;
        grid - row - gap: 5px;
        grid - template - columns: 1fr;
        align - content: start;
        align - self: flex - start;
        align - items: flex - start;
        justify - items: start
    }

    .body - copy {
        padding - top: 0;
        padding - bottom: 0;
        font - size: 13.5px;
        line - height: 16px
    }

    .body - copy.circle {
        width: 18px;
        height: 18px;
        flex: none;
        padding - top: 2px;
        padding - right: 2px
    }

    .interactive - map - wrapper {
        height: 100 %;
        max - height: 60vh;
        min - height: 400px
    }

    .hero - wrapper {
        max - height: 54vh;
        justify - content: center;
        align - items: flex - end
    }

    .body - copy - 1 - white {
        max - width: 300px;
        min - width: auto;
        margin - bottom: 13px;
        padding - left: 3px;
        padding - right: 3px;
        font - size: 15.5px;
        line - height: 125 %
    }

    .body - copy - 1 - white.nomin {
        font - size: 15.5px;
        line - height: 125 %
    }

    .image - 13 {
        margin - bottom: 70px
    }

    .body - copy - 2 - white {
        font - size: 15.5px
    }

    .grid -for-gallery {
        grid- row - gap: 15px;
    grid - template - rows: minmax(200px, 30vh) 1fr;
    grid - template - columns: 7vw 1fr 1fr 6vw
}

    .arrow - right {
    color: #c54829;
    font - size: 24px
}

    .left - arrow - 2 {
    top: auto;
    bottom: 0 %;
    left: auto;
    right: 0 %
    }

    .right - arrow - 2 {
    align - items: flex - start;
    margin - top: 30px
}

    .logo - alt {
    font - size: 7.5vw;
    display: none;
    position: absolute
}

    .nav - text - brown {
    margin - bottom: 1px;
    font - size: 13px;
    line - height: 15px
}

    .spacer {
    height: 200px;
    display: block
}

    .spacer.floorplan {
    height: 60px
}

    .subheading - brown {
    padding - bottom: 0;
    font - size: 20px
}

    .negative {
    width: 15px;
    height: 2px
}

    .positive {
    width: 2px;
    height: 15px
}

    .content - box {
    margin - bottom: 0
}

    .grow - shrink - wrap {
    margin - left: 15px
}

    .div - block - 23 {
    margin - top: 0;
    margin - bottom: 0
}

    .div - block - 3 {
    width: 20px;
    height: 20px
}

    .title - wrapper {
    padding - top: 7px
}

    .sub - first {
    font - size: 19.5px;
    font - weight: 400;
    line - height: 22px
}

    .div - block - 25 {
    max - width: 330px;
    min - width: auto;
    padding - right: 0
}

    .div - block - 26 {
    margin - bottom: 10vh
}

    .div - block -26._2 {
    margin - top: 0
}

    .image - 13 - copy {
    margin - bottom: 0
}

    .mobile - only {
    height: auto;
    padding - top: 0;
    padding - bottom: 0
}

    .div - block - 27 {
    height: auto;
    min - height: 300px;
    flex - direction: column;
    justify - content: space - between;
    align - self: center;
    align - items: center;
    margin - top: 0;
    margin - left: -7vw;
    margin - right: -7vw;
    display: flex;
    overflow: hidden
}

    .html - embed.mobile - only {
    width: 100 %;
    height: 100 %;
    min - height: 190px;
    background - color: #fff;
    flex - direction: column;
    justify - content: center;
    align - self: center;
    display: flex
}

    .citadel - logo {
    width: 65px;
    margin - top: 10px
}

    .snap - 1 {
    height: 100vh;
    min - height: auto
}

    .snap - 2 {
    height: 100vh;
    min - height: auto;
    background - color: #c54829;
    overflow: visible
}

    .snap - 3 {
    height: 100vh;
    min - height: auto;
    overflow: hidden
}

    .snap - 4 {
    height: auto;
    min - height: 100vh;
    justify - content: flex - start;
    padding - top: 0;
    overflow: visible
}

    .snap - wrapper {
    width: 100vw;
    overflow: scroll
}

    .snap - 6 {
    padding - top: 10vh;
    padding - left: 7vw;
    padding - right: 7vw
}

    .snap - footer {
    flex - direction: column;
    justify - content: flex - start;
    display: flex
}

    .div - block - 29 {
    min - height: 300px;
    padding - top: 30vh
}

    .section - 1 {
    padding - top: 90px
}

    .lightbox - link {
    width: 100vw;
    margin - bottom: 35px
}

    .instructions {
    text - align: center;
    font - size: 13.5px;
    line - height: 16px
}

    .select - field {
    font - size: 15.5px
}

    .scroll - animation {
    align - items: center
}

    .scroll - animation.home {
    position: fixed;
    bottom: 10vh
}

    .scroll - animation.location {
    bottom: 3vh
}

    .scroll - animation.home - invisivble {
    display: none
}

    .div - block - 31 {
    height: 100 %;
    align - items: flex - start;
    padding - left: 0
}

    .div - block - 32 {
    width: auto;
    align - self: center
}

    .scroll - text {
    font - size: 13px;
    line - height: 15px
}

    .scroll - text.gallery {
    font - size: 13px
}

    .scroll - text.plan {
    margin - left: 7vw;
    font - size: 13px
}

    .image - 16 {
    width: 70px;
    margin - left: 10 %
    }

    .disclaimers {
    z - index: 280;
    height: 100px;
    position: relative
}

    .disclaimer - text.centre - mobile {
    text - align: center
}

    .disclaimer - wraps {
    flex - direction: column;
    align - items: center;
    margin - top: 20px;
    margin - bottom: 20px;
    display: flex
}

    .section - 2 {
    padding - top: 100px
}

    .image - 17 {
    background - color: #e8603a;
    margin - top: 20px;
    margin - bottom: 20px
}

    .html - embed - 5 {
    display: none
}

    ._100vw - team - wrapper {
    width: 100vw;
    padding: 7vw 7vw 6vw
}

    .scroll - text - plan {
    z - index: 2;
    order: -1;
    margin - top: -18px;
    margin - bottom: 10px;
    font - size: 13px;
    line - height: 15px;
    position: relative
}

    .scroll - text - plan.gallery {
    font - size: 13px
}

    .scroll - text - plan.plan {
    margin - left: 7vw;
    font - size: 13px
}

    .scroll - text - gallery {
    margin - bottom: 10px;
    font - size: 13px;
    line - height: 15px
}

    .scroll - text - gallery.gallery {
    font - size: 13px
}

    .scroll - text - gallery.plan {
    margin - left: 7vw;
    font - size: 13px
}

    .gallery - captions {
    margin - bottom: 10px;
    font - size: 13px;
    line - height: 15px
}

    .gallery - captions.gallery {
    font - size: 13px
}

    .gallery - captions.plan {
    margin - left: 7vw;
    font - size: 13px
}

    .address {
    max - height: 45vh
}

    .announcement - bar {
    padding - left: 7vw;
    padding - right: 7vw
}

    .register - your - interest - web {
    padding - bottom: 20px
}

    .register - your - interest - web.white.phone - only {
    height: auto;
    margin - bottom: 0;
    margin - right: 10 %;
    padding - bottom: 0;
    font - size: 13px;
    display: block
}

    .div - block - 103 {
    width: 20px;
    height: 20px
}

    .announcement - bar_text {
    margin - right: 70px;
    font - size: 13.5px;
    line - height: 16px
}

    .collection - item - 2 {
    margin - right: 15px
}
}

#w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 0b6cf23e {
    grid - area: 2 / 5 / 6 / 12;
    align - self: end;
    justify - self: end
}

#w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 0b6cf23e {
    grid - area: 1 / 2 / 3 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _5ec9a272 - 9d10 - a995 - 64c8 - ed6ab4d14566 - 0b6cf23e {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 0b6cf23e {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dcce1 - 0b6cf23e {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 0b6cf23e {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccf2 - 0b6cf23e {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

#w - node - _7448b1ab - 6c3b - f825 - 5bf4 - cbe8a30c9179 - 0b6cf23e, #w - node - _7448b1ab - 6c3b - f825 - 5bf4 - cbe8a30c917a - 0b6cf23e {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 0b6cf23e {
    grid - area: 2 / 5 / 6 / 12;
    align - self: end;
    justify - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 0b6cf23e {
    grid - area: 1 / 2 / 3 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbff - 0b6cf23e {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 0b6cf23e {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 0b6cf23e {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 0b6cf23e {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

#w - node - _9ae77f07 - a567 - 0fbe - 5f2e - 5743bd4eb38f - 0b6cf23e, #w - node - _9ae77f07 - a567 - 0fbe - 5f2e - 5743bd4eb390 - 0b6cf23e {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c346 - 976cf240 {
    grid - area: 2 / 5 / 3 / 10;
    justify - self: start
}

#w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c384 - 976cf240 {
    grid - area: 1 / 4 / 2 / 10
}

#w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38b - 976cf240 {
    grid - area: 5 / 1 / 6 / 5
}

#w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38d - 976cf240 {
    grid - area: 6 / 6 / 8 / 10;
    align - self: end
}

#w - node - faadbf8e - ab94 - 1645 - d7bc - dbad601f201e - 976cf240 {
    grid - area: 1 / 1 / 2 / 4
}

#w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaa - 976cf240 {
    grid - area: 1 / 2 / 2 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaf - 976cf240 {
    grid - area: 1 / 1 / 6 / 12;
    align - self: end
}

#w - node - f0c0a69a - 545c - adf7 - c921 - ee524b15eb6f - 976cf240 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _3789e606 - 3f51 - 85e4 - 02fe - 64bacce042b0 - 976cf240 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start
}

#w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7db8 - 976cf240 {
    grid - area: 2 / 5 / 3 / 10;
    justify - self: start
}

#w - node - a01c3714 - 9b05 - 05c0 - beba - b580df287e16 - 976cf240 {
    grid - area: 1 / 4 / 2 / 10
}

#w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 976cf240 {
    grid - area: 5 / 1 / 6 / 5
}

#w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 976cf240 {
    grid - area: 6 / 6 / 8 / 10;
    align - self: end
}

#w - node - _10872f71 - 0aa7 - 467b - 173a - 6f36724fd879 - 976cf240 {
    grid - area: 4 / 6 / 5 / 9
}

#w - node - _19af9b1c - 0ad4 - 715a - ba36 - b1f64d378cad - 16b67dec, #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67def - 16b67dec {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67df3 - 16b67dec {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e04 - 16b67dec {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e0b - 16b67dec {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

#w - node - _9ad0ce0a - 8346 - e848 - caa6 - 0b45f26942fb - e16cf241 {
    grid - area: 1 / 2 / 6 / 5;
    align - self: start;
    justify - self: start
}

#Web - from.w - node - b3a31967 - 27e4 - 0a5a - 5360 - 2314b90c0d2f - e16cf241 {
    grid - area: 1 / 5 / 6 / 11;
    align - self: start
}

#w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - 9a6cf242 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _6592436c - 504a - be79 - c09f - 3abbcf9c0995 - 9a6cf242 {
    grid - area: 1 / 4 / 2 / 10
}

#w - node - a9e903c0 - f98f - d90a - 8fb5 - 193b91247c6c - 9a6cf242 {
    grid - area: 2 / 5 / 3 / 9;
    justify - self: start
}

#w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 9a6cf242 {
    grid - area: 3 / 2 / 4 / 9
}

#w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 9a6cf242 {
    grid - area: 5 / 4 / 6 / 10;
    align - self: start
}

#w - node - cf878f0f - a36f - 894c - aa04 - b6d4ff855209 - 9a6cf242 {
    grid - area: 4 / 5 / 5 / 8;
    align - self: end;
    justify - self: start
}

#w - node - _651f6be5 - bd01 - 4045 - c9d9 - 43ee3f2cee3d - 9a6cf242 {
    grid - area: 6 / 6 / 7 / 9;
    justify - self: start
}

#w - node - _9bc37541 - 1d36 - 9f5c - a12a - e7fe417ffd6a - 9a6cf242, #w - node - _607b3c26 - 5cb4 - e46b - 79bb - a9d6e3beafb6 - 9a6cf242, #w - node - c5a3fff6 - e6e9 - 8014 - 239d - db1299a67948 - 9a6cf242, #w - node - fb9f99d5 - 097a - 1627 - 58ba - b43ae9c47738 - 9a6cf242, #w - node - e2b50b55 - ba49 - d685 - 8ef9 - ba4272f15946 - 9a6cf242, #w - node - _7a82d694 - 80df - 6a82 - 1e32 - 6b89f3357a8f - 9a6cf242, #w - node - _9084dd41 - 8bf6 - f303 - b69c - 71e855503741 - 9a6cf242, #w - node - _03a1a326 - 4136 - a54a - e739 - 5966b45ba094 - 9a6cf242, #w - node - _456fae75 - 9cc0 - 338a - 8659 - 981b7405b5e9 - 9a6cf242 {
    grid - area: 1 / 1 / 4 / 6;
    align - self: start;
    justify - self: start
}

#w - node - _589c6134 - c120 - c4f0 - ee6d - 4a617670a752 - dd57701f {
    grid - area: 2 / 2 / 4 / 11;
    align - self: center;
    justify - self: start
}

#w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - a5b43e72 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 79c78423 {
    grid - area: 2 / 5 / 6 / 12;
    align - self: end;
    justify - self: end
}

#w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 79c78423 {
    grid - area: 1 / 2 / 3 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _5ec9a272 - 9d10 - a995 - 64c8 - ed6ab4d14566 - 79c78423 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 79c78423 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccdd - 79c78423 {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dcce1 - 79c78423 {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 79c78423 {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccf2 - 79c78423 {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 79c78423 {
    grid - area: 2 / 5 / 6 / 12;
    align - self: end;
    justify - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 79c78423 {
    grid - area: 1 / 2 / 3 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbff - 79c78423 {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc6f - 79c78423 {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 79c78423 {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 79c78423 {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 79c78423 {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

#w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 9a4f993d {
    grid - area: 2 / 5 / 6 / 12;
    align - self: end;
    justify - self: end
}

#w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 9a4f993d {
    grid - area: 1 / 2 / 3 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _5ec9a272 - 9d10 - a995 - 64c8 - ed6ab4d14566 - 9a4f993d {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 9a4f993d {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start
}

#w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0ba3 - 9a4f993d {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0ba7 - 9a4f993d {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb4 - 9a4f993d {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb8 - 9a4f993d {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 9a4f993d {
    grid - area: 2 / 5 / 6 / 12;
    align - self: end;
    justify - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 9a4f993d {
    grid - area: 1 / 2 / 3 / 5;
    align - self: start;
    justify - self: start
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbff - 9a4f993d {
    grid - area: 1 / 2 / 2 / 11;
    align - self: start;
    justify - self: start
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc6f - 9a4f993d {
    grid - area: 1 / 1 / 2 / 3
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 9a4f993d {
    grid - area: 1 / 3 / 3 / 5
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 9a4f993d {
    grid - area: span 1 / span 2 / span 1 / span 2;
    justify - self: end
}

#w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 9a4f993d {
    grid - area: span 1 / span 6 / span 1 / span 6;
    align - self: end
}

@media screen and(min - width: 1920px) {
    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 0b6cf23e {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccf2 - 0b6cf23e {
        align - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 0b6cf23e {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 0b6cf23e {
        align - self: end
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38b - 976cf240, #w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 976cf240 {
        grid - area: 5 / 1 / 6 / 5
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e04 - 16b67dec {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e0b - 16b67dec {
        align - self: end
    }

    #w - node - _6592436c - 504a - be79 - c09f - 3abbcf9c0995 - 9a6cf242 {
        grid - area: 1 / 4 / 2 / 10
    }

    #w - node - a9e903c0 - f98f - d90a - 8fb5 - 193b91247c6c - 9a6cf242 {
        grid - area: 2 / 5 / 3 / 7;
        justify - self: start
    }

    #w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 9a6cf242 {
        grid - area: 5 / 4 / 6 / 10;
        align - self: start
    }

    #w - node - cf878f0f - a36f - 894c - aa04 - b6d4ff855209 - 9a6cf242 {
        grid - area: 4 / 5 / 5 / 7;
        align - self: end;
        justify - self: start
    }

    #w - node - _651f6be5 - bd01 - 4045 - c9d9 - 43ee3f2cee3d - 9a6cf242 {
        grid - area: 6 / 6 / 7 / 8;
        justify - self: start
    }

    #w - node - _9bc37541 - 1d36 - 9f5c - a12a - e7fe417ffd6a - 9a6cf242 {
        grid - area: 1 / 1 / 5 / 5;
        align - self: start;
        justify - self: start
    }

    #w - node - _607b3c26 - 5cb4 - e46b - 79bb - a9d6e3beafb6 - 9a6cf242 {
        grid - area: 1 / 1 / 5 / 6;
        align - self: start;
        justify - self: start
    }

    #w - node - c5a3fff6 - e6e9 - 8014 - 239d - db1299a67948 - 9a6cf242 {
        grid - area: 1 / 1 / 5 / 5;
        align - self: start;
        justify - self: start
    }

    #w - node - fb9f99d5 - 097a - 1627 - 58ba - b43ae9c47738 - 9a6cf242 {
        grid - area: 1 / 1 / 5 / 6;
        align - self: start;
        justify - self: start
    }

    #w - node - e2b50b55 - ba49 - d685 - 8ef9 - ba4272f15946 - 9a6cf242, #w - node - _7a82d694 - 80df - 6a82 - 1e32 - 6b89f3357a8f - 9a6cf242 {
        grid - area: 1 / 1 / 5 / 5;
        align - self: start;
        justify - self: start
    }

    #w - node - _9084dd41 - 8bf6 - f303 - b69c - 71e855503741 - 9a6cf242 {
        grid - area: 1 / 1 / 4 / 6;
        align - self: end;
        justify - self: start
    }

    #w - node - _03a1a326 - 4136 - a54a - e739 - 5966b45ba094 - 9a6cf242, #w - node - _456fae75 - 9cc0 - 338a - 8659 - 981b7405b5e9 - 9a6cf242 {
        grid - area: 1 / 1 / 5 / 5;
        align - self: start;
        justify - self: start
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 79c78423 {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccf2 - 79c78423 {
        align - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 79c78423 {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 79c78423 {
        align - self: end
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb4 - 9a4f993d {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb8 - 9a4f993d {
        align - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 9a4f993d {
        grid - area: 1 / 6 / 2 / 7;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 9a4f993d {
        align - self: end
    }
}

@media screen and(min - width: 1280px) {
    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 0b6cf23e, #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 0b6cf23e {
        justify - self: end
    }

    #w - node - a9e903c0 - f98f - d90a - 8fb5 - 193b91247c6c - 9a6cf242 {
        grid - area: 2 / 5 / 3 / 8;
        justify - self: start
    }

    #w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 9a6cf242 {
        grid - area: 5 / 4 / 6 / 10;
        align - self: start
    }

    #w - node - cf878f0f - a36f - 894c - aa04 - b6d4ff855209 - 9a6cf242 {
        grid - area: 4 / 5 / 5 / 8;
        align - self: end;
        justify - self: start
    }

    #w - node - _651f6be5 - bd01 - 4045 - c9d9 - 43ee3f2cee3d - 9a6cf242 {
        grid - area: 6 / 5 / 7 / 8;
        justify - self: start
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 79c78423, #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 79c78423, #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 9a4f993d, #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 9a4f993d {
        justify - self: end
    }
}

@media screen and(max - width: 991px) {
    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 0b6cf23e {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 0b6cf23e {
        grid - area: 1 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _5ec9a272 - 9d10 - a995 - 64c8 - ed6ab4d14566 - 0b6cf23e {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 0b6cf23e {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 0b6cf23e {
        grid - area: 4 / 1 / 6 / 10;
        align - self: end;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 0b6cf23e {
        grid - area: 1 / 2 / 4 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbff - 0b6cf23e {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 0b6cf23e {
        grid - area: 1 / 4 / 3 / 6
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 0b6cf23e {
        grid - area: 1 / 6 / 2 / 7
    }

    #w - node - _9ae77f07 - a567 - 0fbe - 5f2e - 5743bd4eb38f - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 3
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c346 - 976cf240 {
        grid - area: 1 / 5 / 2 / 10;
        justify - self: start
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c347 - 976cf240 {
        grid - area: 1 / 1 / 2 / 2
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c384 - 976cf240 {
        grid - area: 2 / 3 / 3 / 10
    }

    #w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaa - 976cf240 {
        grid - area: 2 / 2 / 3 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaf - 976cf240 {
        grid - area: 4 / 1 / 6 / 10;
        align - self: end
    }

    #w - node - f0c0a69a - 545c - adf7 - c921 - ee524b15eb6f - 976cf240, #w - node - _3789e606 - 3f51 - 85e4 - 02fe - 64bacce042b0 - 976cf240 {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7db8 - 976cf240 {
        grid - area: 1 / 5 / 2 / 10;
        justify - self: start
    }

    #w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7dbc - 976cf240 {
        grid - area: 1 / 1 / 2 / 2
    }

    #w - node - a01c3714 - 9b05 - 05c0 - beba - b580df287e16 - 976cf240 {
        grid - area: 2 / 3 / 3 / 10
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67df3 - 16b67dec {
        grid - area: 1 / 4 / 3 / 6
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e04 - 16b67dec {
        grid - area: 1 / 6 / 2 / 7
    }

    #w - node - _9ad0ce0a - 8346 - e848 - caa6 - 0b45f26942fb - e16cf241 {
        grid - area: 2 / 2 / 6 / 5;
        align - self: start;
        justify - self: start
    }

    #Web - from.w - node - b3a31967 - 27e4 - 0a5a - 5360 - 2314b90c0d2f - e16cf241 {
        grid - area: 2 / 5 / 6 / 11;
        align - self: start;
        justify - self: end
    }

    #w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - 9a6cf242 {
        grid - area: 3 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _6592436c - 504a - be79 - c09f - 3abbcf9c0995 - 9a6cf242 {
        grid - area: 1 / 3 / 2 / 10
    }

    #w - node - a9e903c0 - f98f - d90a - 8fb5 - 193b91247c6c - 9a6cf242 {
        grid - area: 2 / 5 / 3 / 9;
        justify - self: start
    }

    #w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 9a6cf242 {
        grid - area: 3 / 2 / 4 / 9
    }

    #w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 9a6cf242 {
        grid - area: 5 / 3 / 6 / 10;
        align - self: start
    }

    #w - node - cf878f0f - a36f - 894c - aa04 - b6d4ff855209 - 9a6cf242 {
        grid - area: 4 / 5 / 5 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _9bc37541 - 1d36 - 9f5c - a12a - e7fe417ffd6a - 9a6cf242, #w - node - _607b3c26 - 5cb4 - e46b - 79bb - a9d6e3beafb6 - 9a6cf242, #w - node - c5a3fff6 - e6e9 - 8014 - 239d - db1299a67948 - 9a6cf242, #w - node - fb9f99d5 - 097a - 1627 - 58ba - b43ae9c47738 - 9a6cf242, #w - node - e2b50b55 - ba49 - d685 - 8ef9 - ba4272f15946 - 9a6cf242, #w - node - _7a82d694 - 80df - 6a82 - 1e32 - 6b89f3357a8f - 9a6cf242, #w - node - _9084dd41 - 8bf6 - f303 - b69c - 71e855503741 - 9a6cf242, #w - node - _03a1a326 - 4136 - a54a - e739 - 5966b45ba094 - 9a6cf242, #w - node - _456fae75 - 9cc0 - 338a - 8659 - 981b7405b5e9 - 9a6cf242 {
        grid - area: 1 / 1 / 3 / 7;
        align - self: start;
        justify - self: start
    }

    #w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - a5b43e72 {
        grid - area: 3 / 2 / 5 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 79c78423 {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 79c78423 {
        grid - area: 1 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _5ec9a272 - 9d10 - a995 - 64c8 - ed6ab4d14566 - 79c78423 {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 79c78423 {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 79c78423 {
        grid - area: 4 / 1 / 6 / 10;
        align - self: end;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 79c78423 {
        grid - area: 1 / 2 / 4 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbff - 79c78423 {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 9a4f993d {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 9a4f993d {
        grid - area: 1 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _5ec9a272 - 9d10 - a995 - 64c8 - ed6ab4d14566 - 9a4f993d {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 9a4f993d {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 9a4f993d {
        grid - area: 4 / 1 / 6 / 10;
        align - self: end;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 9a4f993d {
        grid - area: 1 / 2 / 4 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbff - 9a4f993d {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }
}

@media screen and(max - width: 767px) {
    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dcce1 - 0b6cf23e {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 0b6cf23e {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }

    #w - node - _7448b1ab - 6c3b - f825 - 5bf4 - cbe8a30c917a - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 0b6cf23e {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 0b6cf23e {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }

    #w - node - _9ae77f07 - a567 - 0fbe - 5f2e - 5743bd4eb390 - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c346 - 976cf240 {
        grid - area: 1 / 3 / 2 / 9;
        justify - self: start
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c347 - 976cf240 {
        grid - area: 1 / 1 / 2 / 3
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c384 - 976cf240 {
        grid - area: 2 / 1 / 3 / 10
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38b - 976cf240 {
        grid - area: 5 / 1 / 7 / 7
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38d - 976cf240 {
        grid - area: 7 / 4 / 8 / 10;
        align - self: end
    }

    #w - node - faadbf8e - ab94 - 1645 - d7bc - dbad601f201e - 976cf240 {
        grid - area: 3 / 4 / 5 / 9
    }

    #w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaf - 976cf240 {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end
    }

    #w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7db8 - 976cf240 {
        grid - area: 1 / 5 / 2 / 10;
        justify - self: start
    }

    #w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7dbc - 976cf240 {
        grid - area: 1 / 1 / 2 / 3
    }

    #w - node - a01c3714 - 9b05 - 05c0 - beba - b580df287e16 - 976cf240 {
        grid - area: 2 / 2 / 3 / 9
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67def - 16b67dec {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67df3 - 16b67dec {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e04 - 16b67dec {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }

    #w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - 9a6cf242 {
        grid - area: 3 / 2 / 5 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _6592436c - 504a - be79 - c09f - 3abbcf9c0995 - 9a6cf242 {
        grid - area: 1 / 1 / 2 / 10
    }

    #w - node - a9e903c0 - f98f - d90a - 8fb5 - 193b91247c6c - 9a6cf242 {
        grid - area: 2 / 4 / 3 / 9;
        justify - self: start
    }

    #w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 9a6cf242 {
        grid - area: 3 / 2 / 4 / 9
    }

    #w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 9a6cf242 {
        grid - area: 5 / 2 / 6 / 9;
        align - self: start
    }

    #w - node - cf878f0f - a36f - 894c - aa04 - b6d4ff855209 - 9a6cf242 {
        grid - area: 4 / 4 / 5 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _651f6be5 - bd01 - 4045 - c9d9 - 43ee3f2cee3d - 9a6cf242 {
        grid - area: 6 / 2 / 7 / 6;
        justify - self: start
    }

    #w - node - _9bc37541 - 1d36 - 9f5c - a12a - e7fe417ffd6a - 9a6cf242, #w - node - _607b3c26 - 5cb4 - e46b - 79bb - a9d6e3beafb6 - 9a6cf242, #w - node - c5a3fff6 - e6e9 - 8014 - 239d - db1299a67948 - 9a6cf242, #w - node - fb9f99d5 - 097a - 1627 - 58ba - b43ae9c47738 - 9a6cf242, #w - node - e2b50b55 - ba49 - d685 - 8ef9 - ba4272f15946 - 9a6cf242, #w - node - _7a82d694 - 80df - 6a82 - 1e32 - 6b89f3357a8f - 9a6cf242, #w - node - _9084dd41 - 8bf6 - f303 - b69c - 71e855503741 - 9a6cf242, #w - node - _03a1a326 - 4136 - a54a - e739 - 5966b45ba094 - 9a6cf242, #w - node - _456fae75 - 9cc0 - 338a - 8659 - 981b7405b5e9 - 9a6cf242 {
        grid - area: 1 / 1 / 3 / 8;
        align - self: start;
        justify - self: center
    }

    #w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - a5b43e72 {
        grid - area: 3 / 2 / 5 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccdd - 79c78423 {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dcce1 - 79c78423 {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 79c78423 {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc6f - 79c78423 {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 79c78423 {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 79c78423 {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0ba3 - 9a4f993d {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0ba7 - 9a4f993d {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb4 - 9a4f993d {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc6f - 9a4f993d {
        grid - area: 1 / 1 / 2 / 4
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 9a4f993d {
        grid - area: 1 / 3 / 3 / 5
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 9a4f993d {
        grid - area: 1 / 5 / 2 / 7;
        justify - self: start
    }
}

@media screen and(max - width: 479px) {
    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 0b6cf23e {
        justify - self: center
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 0b6cf23e {
        grid - area: 2 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 0b6cf23e {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dcce1 - 0b6cf23e {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 0b6cf23e {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccf2 - 0b6cf23e {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }

    #w - node - _7448b1ab - 6c3b - f825 - 5bf4 - cbe8a30c9179 - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 7
    }

    #w - node - _7448b1ab - 6c3b - f825 - 5bf4 - cbe8a30c917a - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 6
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 0b6cf23e {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end;
        justify - self: center
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 0b6cf23e {
        grid - area: 1 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 0b6cf23e {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 0b6cf23e {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 0b6cf23e {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }

    #w - node - _9ae77f07 - a567 - 0fbe - 5f2e - 5743bd4eb38f - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 7
    }

    #w - node - _9ae77f07 - a567 - 0fbe - 5f2e - 5743bd4eb390 - 0b6cf23e {
        grid - area: 1 / 1 / 2 / 6
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c346 - 976cf240 {
        grid - area: 1 / 2 / 2 / 7;
        justify - self: start
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c347 - 976cf240 {
        grid - area: 1 / 1 / 3 / 2;
        justify - self: center
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c384 - 976cf240 {
        grid - area: 2 / 1 / 3 / 8
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38b - 976cf240 {
        grid - area: 4 / 2 / 5 / 7
    }

    #w - node - aa9d91d1 - f3d8 - d410 - 21dc - 01660db4c38d - 976cf240 {
        grid - area: 5 / 1 / 6 / 8;
        align - self: end
    }

    #w - node - faadbf8e - ab94 - 1645 - d7bc - dbad601f201e - 976cf240 {
        grid - area: 3 / 2 / 4 / 7
    }

    #w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaa - 976cf240 {
        grid - area: 2 / 2 / 3 / 9;
        align - self: end;
        justify - self: center
    }

    #w - node - _2e52352f - 43c8 - 9676 - a597 - 44cdd8b9daaf - 976cf240 {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end
    }

    #w - node - f0c0a69a - 545c - adf7 - c921 - ee524b15eb6f - 976cf240, #w - node - _3789e606 - 3f51 - 85e4 - 02fe - 64bacce042b0 - 976cf240 {
        grid - area: 2 / 2 / 4 / 8;
        align - self: start
    }

    #w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7db8 - 976cf240 {
        grid - area: 1 / 2 / 2 / 7;
        justify - self: start
    }

    #w - node - _89d2f6fa - aa4e - 4050 - 358e-e771e59b7dbc - 976cf240 {
        grid - area: 1 / 1 / 3 / 2;
        justify - self: center
    }

    #w - node - a01c3714 - 9b05 - 05c0 - beba - b580df287e16 - 976cf240 {
        grid - area: 2 / 1 / 3 / 8
    }

    #w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 976cf240 {
        grid - area: 4 / 2 / 5 / 7
    }

    #w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 976cf240 {
        grid - area: 5 / 1 / 6 / 8;
        align - self: end
    }

    #w - node - _19af9b1c - 0ad4 - 715a - ba36 - b1f64d378cad - 16b67dec {
        grid - area: 1 / 1 / 2 / 7
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67def - 16b67dec {
        grid - area: 1 / 1 / 2 / 6
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67df3 - 16b67dec {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e04 - 16b67dec {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - a8e878a8 - 619b - 7b41 - 3744 - 915516b67e0b - 16b67dec {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }

    #w - node - _9ad0ce0a - 8346 - e848 - caa6 - 0b45f26942fb - e16cf241 {
        grid - area: 2 / 2 / 3 / 9;
        align - self: start;
        justify - self: start
    }

    #Web - from.w - node - b3a31967 - 27e4 - 0a5a - 5360 - 2314b90c0d2f - e16cf241 {
        grid - area: 3 / 2 / 5 / 9;
        align - self: start;
        justify - self: end
    }

    #w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - 9a6cf242 {
        grid - area: 3 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - _6592436c - 504a - be79 - c09f - 3abbcf9c0995 - 9a6cf242 {
        grid - area: 1 / 1 / 2 / 10
    }

    #w - node - a9e903c0 - f98f - d90a - 8fb5 - 193b91247c6c - 9a6cf242 {
        grid - area: 2 / 2 / 3 / 9;
        justify - self: center
    }

    #w - node - _08fa05f9 - e8e8 - b9c3 - f0fb - dbf22fea52e1 - 9a6cf242 {
        grid - area: 3 / 2 / 4 / 9
    }

    #w - node - _175a1d7d - 79ce - ff56 - dd23 - 16d54b534696 - 9a6cf242 {
        grid - area: 5 / 1 / 6 / 10;
        align - self: start
    }

    #w - node - cf878f0f - a36f - 894c - aa04 - b6d4ff855209 - 9a6cf242 {
        grid - area: 4 / 2 / 5 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _651f6be5 - bd01 - 4045 - c9d9 - 43ee3f2cee3d - 9a6cf242 {
        grid - area: 6 / 2 / 7 / 9;
        justify - self: start
    }

    #w - node - _9bc37541 - 1d36 - 9f5c - a12a - e7fe417ffd6a - 9a6cf242, #w - node - _607b3c26 - 5cb4 - e46b - 79bb - a9d6e3beafb6 - 9a6cf242, #w - node - c5a3fff6 - e6e9 - 8014 - 239d - db1299a67948 - 9a6cf242, #w - node - fb9f99d5 - 097a - 1627 - 58ba - b43ae9c47738 - 9a6cf242, #w - node - e2b50b55 - ba49 - d685 - 8ef9 - ba4272f15946 - 9a6cf242, #w - node - _7a82d694 - 80df - 6a82 - 1e32 - 6b89f3357a8f - 9a6cf242, #w - node - _9084dd41 - 8bf6 - f303 - b69c - 71e855503741 - 9a6cf242, #w - node - _03a1a326 - 4136 - a54a - e739 - 5966b45ba094 - 9a6cf242, #w - node - _456fae75 - 9cc0 - 338a - 8659 - 981b7405b5e9 - 9a6cf242 {
        grid - area: 1 / 1 / 2 / 5;
        align - self: start;
        justify - self: center
    }

    #w - node - _589c6134 - c120 - c4f0 - ee6d - 4a617670a752 - dd57701f {
        grid - area: 2 / 2 / 4 / 9;
        align - self: center;
        justify - self: start
    }

    #w - node - c46b659c - bab1 - 13d0 - 673f - bd419610141d - a5b43e72 {
        grid - area: 3 / 2 / 4 / 9;
        align - self: start;
        justify - self: start
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 79c78423 {
        justify - self: center
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 79c78423 {
        grid - area: 2 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 79c78423 {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccdd - 79c78423 {
        grid - area: 1 / 1 / 2 / 5
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dcce1 - 79c78423 {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccee - 79c78423 {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - a34e3e88 - ea0f - a4ce - e99c - 6342406dccf2 - 79c78423 {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 79c78423 {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end;
        justify - self: center
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 79c78423 {
        grid - area: 1 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc6f - 79c78423 {
        grid - area: 1 / 1 / 2 / 5
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 79c78423 {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 79c78423 {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 79c78423 {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924d - 9a4f993d {
        justify - self: center
    }

    #w - node - b040bb04 - 7037 - b79f - 1e5e - 308156dc924f - 9a4f993d {
        grid - area: 2 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1d89134d - 9733 - 89f5 - 45b1 - 02d9651588da - 9a4f993d {
        grid - area: 2 / 2 / 4 / 9;
        align - self: start
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0ba3 - 9a4f993d {
        grid - area: 1 / 1 / 2 / 6
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0ba7 - 9a4f993d {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb4 - 9a4f993d {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - _6295bae6 - 6c1f - 922a - 09ab - 557b02ae0bb8 - 9a4f993d {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbf8 - 9a4f993d {
        grid - area: 3 / 1 / 5 / 10;
        align - self: end;
        justify - self: center
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bbfa - 9a4f993d {
        grid - area: 1 / 2 / 3 / 9;
        align - self: end;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc6f - 9a4f993d {
        grid - area: 1 / 1 / 2 / 5
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc73 - 9a4f993d {
        grid - area: 1 / 3 / 3 / 5;
        align - self: start;
        justify - self: end
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc80 - 9a4f993d {
        grid - area: 2 / 1 / 4 / 4;
        justify - self: start
    }

    #w - node - _1a89be74 - 4fab - 9753 - 8708 - 787c2111bc84 - 9a4f993d {
        grid - area: span 2 / span 6 / span 2 / span 6;
        align - self: end
    }
}

@font-face {
    font - family: 'Everett';
    src: url('https://assets.website-files.com/5e7bc7bebe9fb235801a0fcb/5e7c0c01d9703e9905491450_Everett-Regular.otf') format('opentype');
    font - weight: 400;
    font - style: normal;
    font - display: auto;
}

@font-face {
    font - family: 'Everett';
    src: url('https://assets.website-files.com/5e7bc7bebe9fb235801a0fcb/5e7c0c017cb7f0e4ba68cf32_Everett-Medium.otf') format('opentype');
    font - weight: 500;
    font - style: normal;
    font - display: auto;
}

@font-face {
    font - family: 'Gt america';
    src: url('https://assets.website-files.com/5e7bc7bebe9fb235801a0fcb/5eab3db51f030fd4ef6bad47_GT-America-Light.otf') format('opentype');
    font - weight: 300;
    font - style: normal;
    font - display: auto;
}
// JavaScript source code
