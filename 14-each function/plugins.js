$(document).ready(function () {
  let div = $("div"),
    text = "";
  $("li").each(function (index, element) {
    /* alert("index: " + index + " element-text: " + $(element).text());*/
    //if u wanna to stop loop return false
    /*if ($(this).text() === "Egypt") {
      return false;
    }*/
    //if u wanna to update DOM-element with each-elements
    /*$("div").append($(this));*/ //=> the problem here it's not good for performance to update DOM-elements within loop so u can use variable like text and then append it inside div outside-loop (each)
    text += "<br/>" + $(this).text();
  });
  div.html(text);
});
