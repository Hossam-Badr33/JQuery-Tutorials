/*
1-$(selector).parent() => direct father
2-$(selector).parents() => direct fathers till html
3-$(selector).parents($(selector/parent)) => all parents till  selected-parent(included).
4-$(selector).parentsUntill($(selector/parent)) => all parents till  selected-parent(not-included).

 */
$(document).ready(function () {
  $(".child, .father").css({
    display: "block",
    backgroundColor: "red",
    color: "#bcb",
    "font-weight": "bold",
    marginTop: "10px",
  });
  //$(selector).parent()
  $(".child").parent().css({
    backgroundColor: "rgb(0, 0, 255)",
    padding: "10px",
    marginTop: "10px",
  });
  //$(selector).parents($(selector/parent))
  $(".father").parents($(".grandFa")).css({
    backgroundColor: "yellow",
    padding: "10px",
    marginTop: "10px",
  });
  $(".father").parentsUntil($(".html")).css({
    border: "2px solid #000",
  });
  //$(selector).parents()
  $(".child").parents().css({
    border: "3px solid #771",
  });
  //4-$(selector).parentsUntill($(selector/parent))
  $(".father").parentsUntil($(".grandFa")).fadeOut();
});
