/*
1-$(selector).siblings() => will choose all brothers except selector it self.
2-$(selector).siblings("filter") => will choose all brothers agreed with filter except selector it self.
==================================================
1-$(selector).next() => will choose next brother for that selector.
2-$(selector).next("filter") => will choose brothers next to selector if it agreed with a filter.
3-$(selector).nextAll() => will choose all brother next to selector to end.
4-$(selector).nextAll(filter) => will choose all brothers next to selector agreed with a filter to end.
5-$(selector).nextUntil("filter") => will choose al brothers next to selector until a filter not included.

$(selector).prev/prevAll/prevUntil() =>same like next except works for previous brothers
 */
$(document).ready(function () {
  $("div:contains('1')").siblings("aside").css({
    backgroundColor: "hsl(100, 50%, 90%)",
  });
  $("div, section, aside").click(function () {
    // $(this).next(".test").css({
    //     border: "3px solid #f00",
    // })
    // $(this).nextAll("aside").css({
    //     backgroundColor: "#f00",
    // })
    // $(this).nextUntil("aside").css({
    //     backgroundColor: "#f00",
    // })

    // $(this).prev().css({
    //   backgroundColor: "#f00",
    // });
    // $(this).prev("aside").css({
    //   backgroundColor: "#f00",
    // });
    // $(this).prevAll().css({
    //   backgroundColor: "#f00",
    // });
    // $(this).nextAll("aside").fadeOut(1000);
    $(this).prevUntil(".test").css({
      backgroundColor: "#f00",
    });
  });
});
