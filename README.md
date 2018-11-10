# mkdeck
A [mdx-deck](https://github.com/jxnblk/mdx-deck) port of the Meerkats Keynote deck.

## Slide templates

* coverPage
* hello
* chapter
* main
* feature
* secondaryImageRight
* secondaryImageLeft
* huge
* thankYou

#### Theme customisation

* backgroundColor
  * black
  * white
  * tint
* theme
  * cool
  * warm
  * neutral
* image

##### Example

```js
export default template.secondaryImageRight({
  backgroundColor: 'tint',
  theme: 'warm',
  image: './assets/placeholder.png',
})

# Slide heading…

## Slide subheading…

Lorem ipsum dolor sit amet, mei unum utinam electram ad, eu est simul eligendi phaedrum. Putent laoreet aliquando pro ut, in odio stet vocent vel. Tale sonet veritus vis no, nec dicit virtute dolores cu, est quis summo consulatu ut. Eu eum vero gloriatur. Pro et odio malis assum, te his suas perpetua efficiendi, mel id dolore labores scaevola. Ius sale paulo persecuti id, sanctus euripidis duo in, id ludus ridens vix. Has an maiorum officiis accusata.

Mazim perpetua contentiones an mea. Vel recusabo consectetuer ei, partem tincidunt nec te, alia essent convenire ad quo. Ex nec hinc iriure. Vel ne animal recusabo. Movet inimicus scribentur eu pro, eum antiopam accusamus corrumpit in. Quaeque numquam ornatus vim no, ne facer complectitur consequuntur mel, quas fugit torquatos sit te.

<Footer client="Meerkats" presentation="MKDeck demo" date="9 Nov 2018" />
```

### Custom components

* Footer
