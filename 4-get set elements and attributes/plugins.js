/*
1-$(selector).text()
$(selector).text() => will return/get only text not html-tags
$(selector).text("text") => will set text
2-$(selector).html()
$(selector).html() => will return/get html-tags
$(selector).html("html") => will set html-tags
3-$(inputSelectors).val()
$(inputSelectors).val() => will return/get input-value
$(selector).text/html((inputSelectors).val()) => will set this value to that selector
4-$(selector).attr()
$(selector).attr() => will return/get attr-value
$(selector).attr("attr-name", "new-value") => will set new-value for that attribute
note u can set for many attr-values like this
$(selector).attr({
    attr-name: "new-value",
    attr-name: "new-value"
})
*/
$(document).ready(function () {
  let div1 = $("div.first");
  let div1Text = $("div.first").text();
  let div1Html = $("div.first").html();
  let div2 = $(".second");
  let div2Text = $(".second").text();
  let div2Html = $(".second").html();
  //   console.log(div1.html());
  $("button").click(function () {
    // div1.html("<p>hossam</p>");
    // div1.text(div1.html());
    // $("div").html($("input").val());
    // $("a").attr("target", "_self");
    // console.log($("a").attr("target"));
    $("a").attr({
      target: "_self",
      href: "https:www/twitter.com",
    });
    $(".result").text($("input").val());
    $(".result").show();
    console.log($("input").val());
  });
});
