/*
1-$(selector).remove() => will remove element and it's chlidren from layout
note => $(selector).hide/slideUp/fadeOut will lead to display: "none" it means element still exist in layout but not appear in html.
    several ways to use:
 A-$("p.className").remove();
 B-$("p").remove("className");
 C-$("p").remove("className1, className2");
 E-S("p").remove(":contains('text')")
 ==========
 2-$(selector).empty() => Removes only the child elements/texts from the selected element
 */
$(function () {
  $("button").click(function () {
    //$(".sp1").remove();
    //$("span").remove(".sp1");
    // $("span").remove(".sp1,.sp2");
    $("span").remove(":contains('span-1')");
    // $(".sp2").empty();
  });
});
