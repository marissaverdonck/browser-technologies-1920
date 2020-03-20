# Browser Technologies @cmda-minor-web 1920

The Browser Technologies course will learn you how to make good, robust, accessible websites. You will learn about Progressive Enhancement, Feature Detection and Fallback.

## Nerdy T-shirts

<img width="359" alt="Schermafbeelding 2020-03-19 om 21 16 53" src="https://user-images.githubusercontent.com/43657951/77111086-fe8a4f00-6a26-11ea-87a6-7789918e4762.png">

## Introduction
Nerdy T-shirts is part of the course [cmda minor web - browser technologies](https://github.com/cmda-minor-web/browser-technologies-1920). You can design your own T-shirt with color, text and images. The idea is that the website is accessible to all users with all kind of browsers. 

## Table of Contents
* [Feature research](#Feature-research)
  * [Only HTML](#Only-HTML)
  * [HTML CSS](#HTML-CSS)  
  * [HTML CSS JS](#HTML-CSS-JS)    
* [Installation](#Installation)
* [Wishlist](#Wishlist)
* [Sources](#Sources)
* [License](#License)

## Feature Research

I start with thinking about the main functionality: choose what your tshirt will look like. This has to be accessible with only HTML. Step by step I'll enrich the user experience with CSS and JS.

### Only HTML

<img width="542" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/76962416-7c633300-691f-11ea-9294-9d4782256717.jpg">

1. index.ejs gives a form where the user can choose a color, image and fill in a text.

2. When the user clicks on the submit button from the form, de values will be passed to the URL. This is done server side so that it also works when JS is not present.

```
app.post('/', (req, res) => {
  res.redirect('/design/' + req.body.shirtColor + '/' + req.body.text + '/' + req.body.shirtImage)
})
```

3. The values from the URL are retrieved and passed to design.ejs.
```
app.get('/design/:shirtColor/:text/:shirtImage', (req, res) => {
  const shirtColor = req.param('shirtColor')
  const shirtText = req.param('text')
  const shirtImage = req.param('shirtImage')
  res.render('design', { shirtColor, shirtText, shirtImage })
})
```
4. In design.ejs a t-shirt SVG is shown. With the template engine: EJS I ensure that the color, image and text are adjusted to the input of the user. In this way, the user can also see his designed t-shirt without CSS and JS.

```
<svg id="shirt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 197.65 199.45">
      <title>Your Nerdy Shirt</title>
      <path id="basic" class="cls-1" d="M323,265.12l37.46-47.72,4-2.68,29-11.15,5.9-4.46c6,6.27,11.69,7.87,14.41,8.37a43,43,0,0,0,9.06.38c4.28-.1,7.39-.18,10.77-1.13a26.75,26.75,0,0,0,12.1-7.62l4.83,4.46,28.55,10.26,5.35,2.67L519.28,270l-31.67,21.85-9.36-10.26,3.12,112a469.67,469.67,0,0,1-60.22,3.57,468,468,0,0,1-58.87-4l1.34-115.07q-4,5.34-8,10.7Z" fill="white" stroke="lightgrey" stroke-miterlimit= "10" transform="translate(-322.31 -198.21)"/>
      <path id="collar" class="cls-2" d="M393.52,203.57l5.9-4.46a24.29,24.29,0,0,0,8.85,13.06,23.72,23.72,0,0,0,12.88,4.64,24.32,24.32,0,0,0,15.77-5.06,25.46,25.46,0,0,0,8.84-12.64l4.83,4.46a28.94,28.94,0,0,1-9,13.24c-8.17,6.67-17.42,6.44-20.4,6.32a30.33,30.33,0,0,1-27.63-19.56Z" fill="white" stroke="lightgrey" stroke-miterlimit= "10" transform="translate(-322.31 -198.21)"/>
      <rect id="color" class="cls-3" x="62.21" y="47.62" width="79.07" height="112.59" rx="13.03"  fill= " <%=shirtColor%> ";/>
      <text id="text" class="cls-4" font-size= "10px" fill= "black" font-family= "Courier"  x="51%" y="65%"dominant-baseline="middle" text-anchor="middle"><%=shirtText%></text>
      <image id="image" transform="translate(73.13 71.53) scale(0.49)" xlink:href="/img/<%=shirtImage%>.png"/>
    </svg>
```

### HTML + CSS

<img width="542" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/76962460-91d85d00-691f-11ea-861b-f420a4228d3f.jpg">

### HTML + CSS + JS

<img width="542" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/76962503-a4eb2d00-691f-11ea-8ad6-895707fbff99.jpg">

## Questions
1. I change the color in the SVG with EJS that the user has chosen. That is inline-css. Is that allowed? 

```
<rect id="color" class="cls-3" x="62.21" y="47.62" width="79.07" height="112.59" rx="13.03"  fill="<%=shirtColor%>";/>
```


## Installation

1. Open your terminal

2. Change the directory to a folder in which you want to place the files

``` 
cd /~path
```

3. Clone the repository 
```
git clone https://github.com/marissaverdonck/browser-technologies-1920
```
4. Change directory to repository
```
cd browser-technologies-1920
```
5. Install dependencies from package.json
```
npm install
```
6. Run application with Node
```
node server.js
```

## Wishlist

## Sources

## License
