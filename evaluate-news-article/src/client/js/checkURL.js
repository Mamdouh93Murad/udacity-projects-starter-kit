// TODO declare a function to check the url ..
//  The question now how can i do it. I understand you are very busy mate so here's some hints pick the one you like
/* HINTS
    1. https://gist.github.com/franciskim/41a959f8e3989254ef5d
    2. https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
    3. https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
    4. https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
    5. https://stackoverflow.com/a/5717133/6483379
    6. https://www.npmjs.com/package/valid-url
 */
import "babel-polyfill"
function checkURL()
{
  // URL Regex copied from https://www.urlregex.com/
    let urlPattern = new RegExp(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    );
    return urlPattern.test(inputText);
}

export default checkURL