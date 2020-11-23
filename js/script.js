$(function() { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...

  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


(function (global) {

  sc = {};

  var homeHtml = "snippets/home-snippet.html";
  var racingCategory = "snippets/racing-games-snippet.html";
  var fpsCategory = "snippets/fps-games-snippet.html";
  var adventureCategory = "snippets/adventure-games-snippet.html";
  var aboutHtml = "snippets/about-snippet.html";

  // Convenience function for inserting innerHTML for 'select'
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  // Show loading icon inside element identified by 'selector'.
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {

  // On first load, show home view
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
  });

  // Load the racing category page
  sc.loadRacingPage = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      racingCategory, 
      function (racingCategory) {
        insertHtml("#main-content", racingCategory);
      },
    false);
  };

  // Load the fps category page
  sc.loadFPSPage = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      fpsCategory,
      function (fpsCategory) {
        insertHtml("#main-content", fpsCategory);
      },
    false);
  };

  // Load the adventure category page
  sc.loadAdventurePage = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      adventureCategory,
      function (adventureCategory) {
        insertHtml("#main-content", adventureCategory);
      },
    false);
  };

  // Load the about page
  sc.loadAboutPage = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      aboutHtml,
      function (aboutHtml) {
        insertHtml("#main-content", aboutHtml);
      },
    false);
  };

global.$sc = sc;

})(window);