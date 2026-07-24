'use strict';

angular.module("ng-smooth-scroll", []).directive("ngSmoothScroll", [function () {
  return {
    restrict: "A",
    scope: {
      duration: "@",
      offset: "@"
    },
    link: function (a, b) {
      console.log("[smoothScroll] init");
      var c = angular.element(".scroll-to", b);
      c.on("click", function () {
        var b = angular.element(this),
          c = b.attr("href"),
          d = $("a[name=" + c.slice(1) + "]");
        return $("html, body").animate({
          scrollTop: d.offset().top - a.offset
        }, 1000), !0
      })
    }
  }
}]);
