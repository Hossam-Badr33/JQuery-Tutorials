/*
- The prop() method sets or returns properties and values of the selected elements.
When this method is used to return the property value, it returns the value of the FIRST matched element.
When this method is used to set property values, it sets one or more property/value pairs for the set of matched elements.
- Syntax :  A- $(selector).prop(property) => Return the value of a property
            B-$(selector).prop(property,value) => Set the property and value.
            C-$(selector).prop(property,function(index,currentvalue)) => Set property and value using a function.
            D-$(selector).prop({property:value, property:value,...}) => Set multiple properties and values.
            E-$(selector).removeProp(property)
            The removeProp() method removes a property set by the prop() method.
            Note: Do not use this method to remove HTML attributes like style, id, or checked. Use the removeAttr() method instead.
 */
$(document).ready(function () {
  let liClass = $("li:nth-of-type(2)");
  let input = $(":text");
  //1-get attr & prop values
  /*
  console.log($(liClass).attr("class"));
  console.log($(liClass).attr("class")); // string
 console.log(input.prop("disabled"));    //boolyen
  */
  //2-set property and value
  /*
  liClass.prop("class", "test1");
  input.prop("disabled", false);
  input.prop("disabled", true);
  */
  //3-set many properties name & value
  /*
  $("img").prop({
    width: 200,
    height: 200,
  });
  //4- use prop with function
  */
  input.prop("disabled", function (i, v) {
    console.log(i);
    console.log(v);
    v = false;
    return v;
  });
  //remove prop
  $("img").click(function () {
    $(this).prop("border", "4px solid");
    setTimeout(function () {
      $(this).removeProp("border");
      console.log("set")
    }, 1000);
  });
});
