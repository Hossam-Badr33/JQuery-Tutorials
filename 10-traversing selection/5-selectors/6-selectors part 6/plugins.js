$(document).ready(function () {
  /* 1- $(":input") => to choose all inputs */
  $(":input").css("marginBottom", "3px");
  /* 2- $(":input_type") => to select input tag by it's type */
  // $(":text").fadeOut(3000);
  /* 3- $(":checked") => to choose checked checkbox_tags & radio_tags */
  //   $(":checked").hide();
  /* 4- $(":selected") => to select select_tag options */
  console.log($(":selected").val());
  /* 5- $(":disabled") => to select disabled inputs */
  //   $(":disabled").hide();
  /* 6- $(":enabled") => to select all non-disabled inputs*/
  //   $(":enabled").hide();
});
