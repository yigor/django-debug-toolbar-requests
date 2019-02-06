"use strict";

(function () {
  // Based on http://youmightnotneedjquery.com/
  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function toggleClass(el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);

      el.className = classes.join(' ');
    }
  }

  function toggleLink(event) {
    var link = event.target;
    var targetElement = document.querySelector(link.getAttribute('href'));
    if (targetElement) {
      toggleClass(targetElement, 'requests-toolbar-hidden');
    }
  }

  ready(function () {
    var rtOpenLinks = document.querySelectorAll('.requests-toolbar-open');
    for (var i = 0; i < rtOpenLinks.length; i++) {
      rtOpenLinks[i].addEventListener('click', toggleLink);
    }
  });
})();
