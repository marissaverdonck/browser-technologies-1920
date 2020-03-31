# Browser Technologies @cmda-minor-web 1920

The Browser Technologies course will learn you how to make good, robust, accessible websites. You will learn about Progressive Enhancement, Feature Detection and Fallback.

## Nerdy T-shirts

<img width="500" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/78012418-36f22d00-7345-11ea-81bf-e5a02294647a.png">

## Introduction
Nerdy T-shirts is part of the course [cmda minor web - browser technologies](https://github.com/cmda-minor-web/browser-technologies-1920). You can design your own T-shirt with color, text and images. The idea is that the website is accessible to all users with all kind of browsers. 

## Table of Contents
* [Installation](#Installation)
* [Progressive enhancement](#Progressive-enhancement)
  * [Functional / Reliable (HTML)]()
  * [Usable (HTML + CSS)]()  
  * [Pleasurable (HTML + CSS + JS)]()   
* [Wishlist](#Wishlist)
* [Sources](#Sources)
* [License](#License)


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


## Progressive enhancement
Progressive enhancement is a strategy that first emphasizes the important content of the website. The HTML document contains this important content. This strategy then gradually adds more features and functions on top of the content with CSS and JS. The benefits of this strategy are that it gives everyone access to the basic content and functionality of a web page, while also providing an improved version of the page to those with more advanced browser software.

An example from the Nerdy Tshirt site: with HTML you can choose your design options and see the result on a new page. With CSS I give the design options and the result a styling. For example, if the user clicks on a color option, the button becomes thicker. If the browser supports JS, the user can see his design options directly on the same page.

### Code funtionality
I start with thinking about the core functionality: the user can choose how the design on the T-shirt will look like. This has to be accessible with only HTML. Step by step I'll enrich the user experience with CSS and JS.

### Feature detection
With feature detection you can check if a browser supports a certain block of code. If it doesn't support the code, you can use "fallbacks". A fallback let the browser run different code, so that the browser can always provide a working experience rather than crashing/erroring in some browsers.


## 1. Functional / Reliable (HTML)
### Features
* The user can design a T-shirt
  * The user can choose a color
  * The user can choose text
  * The user can choose a image
* The user can see the result on a new page
<details>
  <summary>Wireflow</summary>
<img width="400" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/78015049-175d0380-7349-11ea-8e0c-adead8022836.jpg">

</details>


</details>

<details>
  <summary>Code details</summary>
 
### 1. Form

index.ejs gives a form where the user can choose a color, image and fill in a text.

For color use, [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) recommend to use the color names like orange.

```
 <label for="powderblue"> 
        <input type="radio" id="powderblue" name="shirtColor" value="powderblue" />
    <span> Blue</span>
   </label>
```

### 2. Submit - server side

When the user clicks on the submit button from the form, de values will be passed to the URL. This is done server side so that it also works when JS is not present.

```
app.post('/', (req, res) => {
  res.redirect('/design/' + req.body.shirtColor + '/' + req.body.text + '/' + req.body.shirtImage)
})
```

### 3. URL parameters
The values from the URL are retrieved and passed to design.ejs.
```
app.get('/design/:shirtColor/:text/:shirtImage', (req, res) => {
  const shirtColor = req.param('shirtColor')
  const shirtText = req.param('text')
  const shirtImage = req.param('shirtImage')
  res.render('design', { shirtColor, shirtText, shirtImage })
})
```

### 4. SVG 
In design.ejs a t-shirt SVG is shown. With the template engine: EJS I ensure that the color, image and text are adjusted to the input of the user. In this way, the user can also see his designed t-shirt without CSS and JS.

***Inline CSS:** This is inline CSS which is not very neat but for enhancement no problem. The only problem you can get, is that the HTML inline-CSS overlaps the CSS-file. Keep this in mind.

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
</details>

### Screenshot

<img width="500" alt="Schermafbeelding 2020-03-20 om 12 21 03" src="https://user-images.githubusercontent.com/43657951/77654288-2c185080-6f71-11ea-8c37-386ba4134596.png">

<img width="500" alt="Schermafbeelding 2020-03-19 om 21 16 53" src="https://user-images.githubusercontent.com/43657951/77654298-2fabd780-6f71-11ea-9fae-747b1b9a8334.png">

## 2. Usable (HTML + CSS)
### Features
* Styled website
* The form is styled
  * Radio buttons are colors/images
<details>
  <summary>Wireflow</summary>
<img width="400" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/78015053-1926c700-7349-11ea-8fb1-41343a69840a.jpg">
</details>


<details>

   <summary>Code details</summary>
 
### 1. Form labels

Style the labels

Koop wrote me an issue to nest the input in a label for better [accessibility](https://24ways.org/2015/the-accessibility-mindset/). This wasn't easy because I want to style the label when the radiobutton is checked. If the label becomes a parent element, this will not be possilble anymore. That is why I choose to use a span element inside the label:     
```
<label for="green"> 
<input type="radio" id="darkseagreen" name="shirtColor" value="darkseagreen" />
<span>Green</span>  
</label>
```

### 2. Colorblindness

To help people who can't see colors, I left the name of the color inside the button.

<img width="300" alt="Schermafbeelding 2020-03-26 om 16 50 32" src="https://user-images.githubusercontent.com/43657951/77667161-237c4600-6f82-11ea-81ea-fcb30cfe7921.png">

<img width="300" alt="Schermafbeelding 2020-03-26 om 16 50 53" src="https://user-images.githubusercontent.com/43657951/77667165-25460980-6f82-11ea-864f-deed73d42bcb.png">




</details>

### Screenshot

<img width="500" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/77767508-79fc8980-7041-11ea-82d3-81caf5271483.png">

<img width="500" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/77767779-d65fa900-7041-11ea-98df-565e24c83254.png">



## 3. Pleasurable (HTML + CSS + JS)

### Features
* The user can see directly the input result on the same page.
* Print the design with the print-button
<details>
  <summary>Wireflow</summary>

<img width="250" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/78016145-b3d3d580-734a-11ea-8c7c-488cb8687223.jpg">

</details>


<details>

   <summary>Code details</summary>

### 1. See directly the result

XMLHttpRequest is a JS object that retrieves data from a URL/other HTML-page without having to do a full page refresh. On this way I can show the result directly next to the form. There is a fallback if the browser don't support XMLHttpRequest.

Source: [Developer.mozilla, XML Http requst](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest)

 ```
 function setupXHR() {
  if (!window.XMLHttpRequest) {
    console.log("XML wordt niet ondersteund")
  } else {
    console.log("XML wordt ondersteund")
    const request = new XMLHttpRequest();
    request.onload = function() {
      const shirtImage = request.response.querySelector("#result")
    }
    request.open('GET', pages[1]);
    request.responseType = 'document';
    request.send();
  }
}
 ```

### 2. Changes in form

When the user changes something in the form,  a function is called.

Source: [Developer.mozilla, Form Change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

```
fieldset[0].addEventListener("change", function() {
      // Change SVG color
      const currentSVGColor = document.querySelector("#SVGcolor");
      currentSVGColor.removeAttribute("fill");
      currentSVGColor.setAttribute("fill", event.target.value);
```

Replace an value for a new one

Source: [Developer.mozilla, String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```
const currentTextColorSelector = document.querySelector("#textColor");
let currentTextColor = currentTextColorSelector.textContent;
let newcurrentTextColor = currentTextColor.replace(currentTextColor, event.target.value);
currentTextColorSelector.textContent = "Color: " + newcurrentTextColor;
```

### 3. InnerHTML/textContent

I'll use textContent because it is supported by more browsers.

Source: [Can I use, InnerHTML/textContent ](https://caniuse.com/#search=insertAdjacentHTML)

<img width="500" alt="Schermafbeelding 2020-03-31 om 09 57 54" src="https://user-images.githubusercontent.com/43657951/78024891-67dc5d00-7359-11ea-8cb0-d3f45af08df4.png">

<img width="500" alt="Schermafbeelding 2020-03-31 om 09 58 17" src="https://user-images.githubusercontent.com/43657951/78024899-6ad74d80-7359-11ea-92e6-89f80bf3ec04.png">

### 4. Remove()
The submit button from the form navigates to the old URL so it has to be removed.

I use the fallback .style.opacity = "0" if .remove() is not supported by the browser.

```
function deleteSubmitButton() {
  const submitButton = document.querySelector("#submit");
  submitButton.remove()
  submitButton.style.opacity = "0";
}
```


</details>

### Screenshot

<img width="500" alt="Schermafbeelding 2020-03-12 om 14 12 11" src="https://user-images.githubusercontent.com/43657951/78012418-36f22d00-7345-11ea-81bf-e5a02294647a.png">

## Test
The website is tested on several browsers/ devices. I used [Browserstack](https://www.browserstack.com/)for testing different devices and I've installed Chrome, Safari and Firefox on my Macbook Pro. The only problem I found was that .remove() did not work on all the browsers.

### 1. Chrome
* No Problems

### 2. Safari
* No Problems

### 3. Firefox
* No Problems

### 5. Motorola Moto G 2nd Gen, Android, v5. Browser: UC
* No Problems

### 6. Nokia Lumia 930 8.1
* There is no basic style and the submit button is still there. Fortunately, when the user changes the form, the shirt changes. So it is not a big issue. But something to look at when I have more time.

<img width="373" alt="Schermafbeelding 2020-03-31 om 15 25 22" src="https://user-images.githubusercontent.com/43657951/78031888-74b27e00-7364-11ea-9558-d0923093054d.png">

### 7. Windows 10, Microsoft Edge 15
* No Problems


## Sources
* [Developer.mozilla, Color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* [Developer.mozilla, Change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
* [Developer.mozilla, String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
* [Developer.mozilla, XML Http requst](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest)
* [Can I use](https://caniuse.com)
* [Browserstack](https://www.browserstack.com/)

## Conclusie
* I learned that a website should be accessible to all users on all devices.
* I learned what progressive enhancement is and how you can apply it when creating a website.
* The core functionality is usable in the HTML and CSS and JS provide extra features.
* I learned that you should check your codes for feature detection and use fallbacks when a feature is not supported.
* I learned how to test a website.

## License
MIT License