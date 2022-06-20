$(document).ready(function () {
  $("button").click(function () {
    /*$("div").replaceWith("<p>Hello P</p>");*/
    /*$("div").replaceWith($("<p>jQuery</p>"));*/
    /*let newP = document.createElement("span");
    newP.appendChild(document.createTextNode("I'm Span"));
    $("div").replaceWith(newP);*/
    /*
    $("div").replaceWith(function (i) {
      console.log(i);
      return `<p>${$(":text").val()}</p>`;
    });
    */
  });
  $("div").click(function () {
    $(this).replaceWith(`<br/><input type='text' value='${$("div").text()}'/>`);
  });
});
