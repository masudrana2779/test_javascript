var longText = document.querySelector("#longText");
var shortText = document.querySelector("#shortText");
var review = document.querySelector("#review");

shortText.addEventListener("keypress", function() {
  //var match = longText.value.indexOf(shortText.value);

  var match = longText.value.indexOf(shortText.value);

  if (match === -1) {
    review.innerHTML = `
    The Value 

    ${shortText.value}

    is Not Found at 

    ${longText}

    `;
  } else {
    review.innerHTML = `
    The Value 

    ${shortText.value}

    is Found at 

    ${match}

    `;
  }
});
