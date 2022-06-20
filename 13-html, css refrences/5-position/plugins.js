/*
- The position() method returns the position (relative to its parent element) of the first matched element.
note => return only/get value not set new-value.
note => padding, border, margin not calculated only position calculated.
$(selector).position()
$(selector).position().top / $(selector).position().left
 */
$(document).ready(function () {
  let div = $("div");
  let p = $("p");
  console.log(div.position()); //Position: return object {top: value, left: value} from parent-element.
  console.log(div.offset()); //offset: return object {top: value, left: value} from window.
  console.log("Position => " + p.position().top + " " + p.position().left);
  console.log(p.offset());
});
