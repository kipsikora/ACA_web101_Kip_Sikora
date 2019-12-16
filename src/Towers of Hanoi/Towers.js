"use strict";

$(document).ready(function() {
  let $block = null;
  //the initial value of block is null.

  $("[data-row]").click(function() {
    //if($block===true) this is the same as if ($block)
    if ($block) {
      //if block exists then it will be appended to "this", which is the [data-row]
      $(this).append($block);
      //this will reset the block to null so the process will hit the else statement and can be repeated
      $block = null;
    } else {
      //delcaring a variable called "block"...using "this" we are referencing [data-row]
      $block = $(this)
        //children method targets children elements in the DOM so that we can make a new jQuery object from the element that matches.
        //the scope only travels down a single element in the DOM tree.
        .children()
        //.last targets the last child because it's happening under .children.
        .last()
        //.detach removes the targeted element and is useful to reinsert it into the DOM at a later time. It's more flexible than .remove()
        .detach();
    }
  });
});

// $block = $(this).children().last().detach();
