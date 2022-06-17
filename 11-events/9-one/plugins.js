/*$(selector).one(event,data,function) =>event work one-time
Increase the text size of a <p> element when it is clicked (the event will only trigger once for each <p> element*/
$(document).ready(function () {
  let p = document.querySelector("p");
  console.log($("p").text());
  // console.log(p.innerText);
  // console.log(p.innerText);
  // console.log(p.textContent);
  //   $("p").click(function () {
  //     $(this).css("fontSize", "+=10px");
  //   });
  $("p").one("dblclick", function () {
    $(this).css("fontSize", "+=10px");
  });
});
