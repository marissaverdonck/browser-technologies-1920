const pages = [
  "/",
  "/design/:shirtColor/:text/:shirtImage"
];

function setupXHR() {
  if (!window.XMLHttpRequest) {
    console.log("XML wordt niet ondersteund")
  } else {
    console.log("XML wordt ondersteund")
    const request = new XMLHttpRequest();
    request.onload = function() {
      const shirtImage = request.response.querySelector("#result")
      shirtImage.setAttribute("class", "shirtSvg");
      document.querySelector("main").appendChild(shirtImage)
      setBasicSVG()
      addPrintButton()
      deleteSubmitButton()
      changeFormMethod()
    }
    request.open('GET', pages[1]);
    request.responseType = 'document';
    request.send();
  }
}

function setBasicSVG() {
  const currentSVGColor = document.querySelector("#SVGcolor");
  const currentTextColorSelector = document.querySelector("#textColor");
  const currentSVGTextSelector = document.querySelector("#SVGtext");
  const currentTextTextSelector = document.querySelector("#textText");
  const currentSVGImage = document.querySelector("#SVGimage");
  const currentTextImageSelector = document.querySelector("#textImage");

  if (currentSVGColor.getAttribute("fill").includes(":")) {
    currentSVGColor.removeAttribute("fill");
    currentSVGColor.setAttribute("fill", "gold");
  }
  if (currentTextColorSelector.textContent.includes(":")) {
    let newcurrentTextColor = currentTextColorSelector.textContent.replace(currentTextColorSelector.textContent, "gold");
    currentTextColorSelector.textContent = 'Color: ' + newcurrentTextColor;
  }
  if (currentSVGTextSelector.textContent.includes(":")) {
    let newcurrentSVGText = currentSVGTextSelector.textContent.replace(currentSVGTextSelector.textContent, "Get Nerdy!");
    currentSVGTextSelector.textContent = newcurrentSVGText;
  }
  if (currentTextTextSelector.textContent.includes(":")) {
    let newcurrentTextText = currentTextTextSelector.textContent.replace(currentTextTextSelector.textContent, "Get Nerdy!");
    currentTextTextSelector.textContent = 'Text: ' + newcurrentTextText;
  }
  if (currentSVGImage.getAttribute("xlink:href").includes(":")) {
    currentSVGImage.removeAttribute("href")
    currentSVGImage.setAttribute("href", ("/img/glasses.png"))
  }
  if (currentTextImageSelector.textContent.includes(":")) {
    let newcurrentTextImage = currentTextImageSelector.textContent.replace(currentTextImageSelector.textContent, "glasses");
    currentTextImageSelector.textContent = 'Image: ' + newcurrentTextImage;
  }
}

function getFormInput() {
  const fieldset = document.querySelectorAll("fieldset");
  // Color input
  fieldset[0].addEventListener("change", function() {
      // Change SVG color
      const currentSVGColor = document.querySelector("#SVGcolor");
      currentSVGColor.removeAttribute("fill");
      currentSVGColor.setAttribute("fill", event.target.value);
      // Change result text color
      const currentTextColorSelector = document.querySelector("#textColor");
      let currentTextColor = currentTextColorSelector.textContent;
      let newcurrentTextColor = currentTextColor.replace(currentTextColor, event.target.value);
      currentTextColorSelector.textContent = "Color: " + newcurrentTextColor;
    })
    // Text input
  fieldset[1].addEventListener("change", function() {
      // Change SVG text
      const currentSVGTextSelector = document.querySelector("#SVGtext")
      let currentSVGText = currentSVGTextSelector.textContent
      let newcurrentSVGText = currentSVGText.replace(currentSVGText, event.target.value);
      currentSVGTextSelector.textContent = newcurrentSVGText;
      // Change text text
      const currentTextTextSelector = document.querySelector("#textText");
      let currentTextText = currentTextTextSelector.textContent
      let newcurrentTextText = currentTextText.replace(currentTextText, event.target.value);
      currentTextTextSelector.textContent = 'Text: ' + newcurrentTextText;
    })
    // Image input
  fieldset[2].addEventListener("change", function() {
    // Change SVG image
    const currentSVGImage = document.querySelector("#SVGimage");
    currentSVGImage.removeAttribute("href")
    currentSVGImage.setAttribute("href", ("/img/" + event.target.value + ".png"))
      // Change text image
    const currentTextImageSelector = document.querySelector("#textImage");
    let currentTextImage = currentTextImageSelector.textContent;
    let newcurrentTextImage = currentTextImage.replace(currentTextImage, event.target.value);
    currentTextImageSelector.textContent = 'Image: ' + newcurrentTextImage;
  })
}

function addPrintButton() {
  const textArticle = document.querySelector("#resultText");
  textArticle.insertAdjacentHTML('beforeend', '<a href="javascript: window.print()"><button>Print</button></a>')
}

function deleteSubmitButton() {
  const submitButton = document.querySelector("input[type=submit");
  submitButton.remove()
}

function changeFormMethod() {
  const form = document.querySelector("form");
  form.removeAttribute("method")
  form.setAttribute("method", "GET")
}


setupXHR()
getFormInput()