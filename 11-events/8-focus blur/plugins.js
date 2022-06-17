$(document).ready(function () {
  //   $("input").focus(function () {
  //     $(".change").text("you focused now !");
  //   });
  //   $("input").blur(function () {
  //     $(".change").text("wait !");
  //   });
  $("input").on({
    focus: function () {
      $(this).addClass("focus");
    },
    blur: function () {
      $(".result").text($(this).val());
      this.value = ""; //to remove inner text
      //or $(this).text("");
      $(this).removeClass("focus");
    },
  });
});
