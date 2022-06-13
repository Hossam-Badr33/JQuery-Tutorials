$(document).ready(function () {
  // 1- $("header") => select any header in page (h1, h2, h3, ....h6)
  /*$(":header").css({
    color: "#fa2",
  });
  $("p:first-of-type").animate(
    {
      width: "600px",
    },
    1000
  );
  */
  // 2- $(":animated") => select any element that has animation in page
  /*
  $(":animated").animate(() => $(this).css("backgroundColor", "red"));
  $(":animated").animate({ height: "300px" }, 1000);
  $(":animated").css({ "background-color": "red" });
  */
  // 3- $(":not(selector)") => select any element except that selector
  /*$(":not(:animated)").css("color", "crimson");*/
  // 4- $(":has(selector)") => any parent who has that selector
  /*
  $("button:only-of-type").click(function () {
    $("h3:has('span')").css("color", "crimson");
    $("h3:has('.test')").css("color", "crimson");
  });
  */
  // 5- $(":empty") => select only empty elements note <tag><tag/> => empty-element <tag> <tag/> => not-empty
  /*
  $(":empty").css({"width":"auto", height: "auto", backgroundColor: "yellow"})
      .text("empty")
  */
  // 6- $(":hidden") => only select elements that has display: none or width & heigt = 0 but not-visible-elements not selected because they not appear in page but appear in page-elements.
  // 7- $(":visible") => select all visible elements in page
  /*
  $("button").click(function () {
      $("p:hidden, h4:hidden").animate({width:"400px"});
      $("p, h4").fadeToggle();
      $("p:visible, h4:visible").css("backgroundColor", "green");
  });
  $("section:visible").css("backgroundColor", "green")
  */
  // 8- $(":root") => html
  /*
  $("button").click(function () {
    $(":root").css({ border: "5px solid #000" });
  });
  */
  // 9- $(":lang('en/ar/fr ...')") => select only eleemnt contains lang-attribute of determined language
  /*
  $(":lang(en)").css({
    color: "crimson",
  });
  $(":lang(ar)").css({
    border: "4px dotted crimson",
    width: "fit-content",
  });
  */
  // 10-$(":focus") => select focused elements in page but you need to add element.focus() or use eventListner to
  /*$("input").focus(); 
  document.querySelector("input").addEventListener("focus", function () {
    $(":focus").css({
      dispaly: "inline-block",
      padding: "10px",
      width: "300px",
      color: "white",
      backgroundColor: "red",
    });
  });
  */
  // 11- $(":parent") => select only elements that have parent
  /*
  $("h4:parent:contains('مرحبا')").css("color", "crimson");
  */
});
