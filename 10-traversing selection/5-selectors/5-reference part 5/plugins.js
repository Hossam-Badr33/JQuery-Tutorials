$(document).ready(function () {
  /* 1- to choose attribute in css tag[atttribute=''] */
  /* 2- in js select element with attribute:
  document.querySelectorAll("[alt]")[0].style.marginTop = "50px";
  document.querySelectorAll("p[class]")[0].style.color = "blue"; */
  /* 3- in Jquery 
        $("[attribute_name]") => all elements contain that attribute_name
    */
  //   $("[src]").css({
  //     borderRadius: "20%",
  //   });
  /* 4- $("tag[attribute_name='value']") => only elements with that attribute and value
   */
  //   $("section[class='hossam']").css({
  //     textAlign: "center",
  //     fontSize: "20px",
  //   });
  /* 5-$("tag[attribute*='value']") => all eleemnts with that attribute_value first or end or inside text(anywhere in text) */
  //   $("[alt*='norma']").animate({ width: "200px" }, 1000);
  /* 6-$("tag[attribute^='value']") => only elements starts with that attribute_value even next to it text
   */
  //   $("img[alt^='norma']").fadeOut(500);
  /* 7-$("tag[attribute~='value']") => only elements with that individual attribute_value means separate (doesnot matter any position inside text)
   */
  //   $("img[alt~='normal']").fadeOut(500);
  /* 8- $("tag[attribute!='value']") => elements not equal to that attribute will be selected
note => generally u can choose chin selectors inside one line code by ,
*/
  $("p[lang != 'en']").css({
    color: "#01e",
  });
  $("p[lang!='ar'], aside[lang!='ar'], div[lang!='en']").css({
    color: "#0f0",
    fontSize: "30px",
  });
});
