$(document).ready(function() {
  window.dancers = [];

  $('#dancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new makeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('#squareDancerButton').on('click', function(event) {
    var dancer = new makeSquareDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('#bouncyDancerButton').on('click', function(event) {
    var dancer = new makeBouncyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('#lineUpButton').on('click', function(event) {
    let dancers = window.dancers;
    let distance = $('body').height() / dancers.length;
    for (let i = 0; i < dancers.length; i++) {
      let x = i * distance;
      dancers[i].setPosition(x, 5);
    }
  });

  $('#pairUpButton').on('click', function(event) {
    const dancers = window.dancers;
    const middle = $('body').width() / 2;
    for (let i = 0; i < dancers.length; i += 2) {
      let pair1 = dancers[i];
      let pair2 = dancers[i + 1];
      if (pair2 === undefined) {
        return;
      }
      let top = dancers[i].$node.css('top');
      pair1.setPosition(top, middle + 50 + 'px');
      pair2.setPosition(top, middle - 50 + 'px');
    }
  });


  $(document).on('mouseover', '.dancer', function(event) {
    const colors = ['red', 'orange', 'pink', 'yellow', 'purple', 'magenta'];
    let i = Math.floor(Math.random() * colors.length);
    let color = colors[i];
    let style = '10px solid ' + color;
    var styleSettings = {
      border: style
    };
    $('.dancer').css(styleSettings);
  });
});

