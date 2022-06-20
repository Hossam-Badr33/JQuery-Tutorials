$(document).ready(function () {
  let div = $("div");
  //   console.log(div.offset().top); //=> to get offset-top of element;
  //   console.log(div.offset().left);//=> to get offset-left of element;
  $("button").click(function () {
    // 1- set offset-object inside offset-function
    /*div.offset({ top: 50, left: 50 });*/
    /*div.offset(function (index, offset) {
      let ob = new Object();
      ob.left = offset.left + 50;
      ob.top = offset.top + 50;
      return ob;
    });*/
    // 2- set offset-object from new object
    /*
    let ob2 = new Object();
    ob2.top = $(div).offset().top + 50;
    ob2.left = $(div).offset().left + 50;
    $(div).offset(ob2);
    */
  });
  // 3- set offset-object from offset-function
  /*
  $(window).on("mousemove", function (e) {
    $(div).offset({ top: e.pageY, left: e.pageX });
  });
  */
  $(window).scroll(function () {
    if ($(div).offset().top <= $(this).scrollTop()) {
      console.log("equal");
      $(div).css("color", "crimson");
    }
    console.log($(div).offset().top);
    console.log($(this).scrollTop());
  });
});
