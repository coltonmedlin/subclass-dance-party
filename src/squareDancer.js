const makeSquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="squareDancer"></span>');
  // console.log('squareDancer', this);
  this.setPosition(top, left);
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};