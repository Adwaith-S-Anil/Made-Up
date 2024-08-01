// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');``
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
// justify one line of text
function linejustify(s, x, y, w) {
  // how long is the text?
  var tw = textWidth(s);

  // is it longer than expected width? if so, return
  if (tw > w) {
    print("Text is too long.");
    return;
  }

  // does it match perfectly? if so, print it
  if (tw == w) {
    text(s, x, y);
    return;
  }

  // if not, how much pixels shall we add to reach expected length?
  var gap = w - tw;

  // split the text into words
  var tokens = split(s, " ");

  // is there only one word - or no word at all? if so, print it
  if (tokens.length <= 1) {
    text(s, x, y);
    return;
  }

  // otherwise,
  // we will distribute the missing pixels after each word, in the spaces
  var spaces = tokens.length - 1;
  var pixelsToAddAfterToken = new Array(tokens.length);

  for (var i = 0; i < spaces; i++) {
    pixelsToAddAfterToken[i] = floor(gap / spaces);
    if (i <= gap % spaces) pixelsToAddAfterToken[i]++;
  }

  for (var i = 0; i < tokens.length; i++) {
    text(tokens[i], x, y);
    x += textWidth(tokens[i]) + textWidth(" ") + pixelsToAddAfterToken[i];
  }
}

//All should be self-explanatory except leading...
//leading is how much room should be in-between each line of text.

function textJustify(input, x, y, w, leading) {
  push();

  var seperatedStrings = [""];
  var lastSeperation = 0;

  for (var i = 0; i < input.length; i++) {
    if (textWidth(input.substring(0, i - lastSeperation)) > w * 0.99) {
      seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, i));
      lastSeperation = i;
    }
  }

  if (lastSeperation < input.length()) seperatedStrings = append(seperatedStrings, input.substring(lastSeperation, input.length()));

  for (var i = 0; i < seperatedStrings.length; i++) {
    linejustify(seperatedStrings[i], x, y + leading * i, w);
  }

  pop();
}

function setup() {
  size(250, 150);
  background(255);
  fill(0);
  textFont(createFont("", 12), 12);
  textJustify("This text should be perfectly justified. Even with two lines! You can add more text... And it still works, as far as I can tell.", 0, 40, width, 14);
}
