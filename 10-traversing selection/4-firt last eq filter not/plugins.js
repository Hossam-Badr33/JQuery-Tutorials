$(document).ready(function () {
  /*
    //$(selector).first()
  $("section").first().css("border", "4px solid #bcc");
    //$(selector).first().next/nextAll/prev() ....chain
  $("section").first().next().css("border", "4px solid #bcc");
  */
  //$(selector).last()
  /*
  $("section").last().css("border", "4px solid #bcc");
  //$(selector).last().prev/prevAll/prevUntil() ....chain
  $("section").last().prev().css("border", "4px solid #bcc");
  $("section").last().prevUntil(".jQuery").css("color", "#bcc");
    */
  /*
   //$(selector).eq(index 0,1,2... or -1,-2,-3)
  $("section").eq(0).css("border", "4px solid #bcc");
   //$(selector).eq(index 0,1,2... or -1,-2,-3).next() => chain

  $("section").eq(-2).next().css("border", "4px solid #bcc");
  */
  /*
  //$(selector).filter("selector");
  $("section").filter(".jQuery").css("border", "4px solid #bcc");
  //$(selector).filter(Object);
  $("section").filter($(":contains('love')")).css("color", "#44c");
  //$(selector).filter(function);
  $("section")
    .filter((index) => index === 5)
    .css("backgroundColor", "grey"); //5 section index
    */
  /*
  //$(selector).not("selector"); apply actions and except this selector
  $("section").not(".jQuery").css("border", "4px solid #bcc");
  //$(selector).filter(Object);
  $("section").not("section:contains('love')").css("color", "#00e");
  //$(selector).filter(function);
  $("section")
    .not((index) => index === 5)
    .fadeOut();
    */
});
