# preact-social

> A library of social sharing buttons for preact projects

## Install

```
$ npm install --save preact-social
```

## Usage

```js
import { h } from 'preact';
import {FacebookShare, TwitterIcon} from 'preact-social';

// Share icon
<FacebookShare
  url={url}
  size={size}
  fill='#fff'
  background='#3B5998'
  circle
/>

// Renders only the icon
<TwitterIcon
  size={size}
  fill='#fff'
/>
```

## Supported Share Icons

| Share Icon   |      Properties      |
|----------|-------------|
| FacebookShare | url<br>size<br>fill<br>background<br>circle |
| TwitterShare | text<br>url<br>size<br>fill<br>background<br>circle |
| WhatsAppShare | text<br>url<br>size<br>fill<br>background<br>circle |
| RedditShare | url<br>size<br>fill<br>background<br>circle |
| LinkedinShare | text<br>url<br>summary<br>source<br>size<br>fill<br>background<br>circle |
| PinterestShare | text<br>url<br>size<br>fill<br>background<br>circle |
| EmailShare | text<br>url<br>size<br>fill<br>background<br>circle |


## Properties

#### url
Type: `String`<br>
Default: `none`

#### size
Type: `Integer`<br>
Default: `32`

The `size` attribute defines the size of the social icons.

#### fill
Type: `Hex`<br>
Default: `#000`

The `fill` attribute specifies the color of the icons.

#### background
Type: `Hex`<br>
Default: `#000`

The `background` attribute specifies the color of the icon background (parent element).

#### circle
Type: `true`<br>
Default: `false`

The `circle` attribute, when passed, renders the icons in a circular container.

## License

MIT © [Varun A P](https://apvarun.com)

## Acknowledgements

- Icons from [Simple Icons](https://simpleicons.org)