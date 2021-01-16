const makeBouncyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncyDancer"></span>');
  // console.log('squareDancer', this);
  this.setPosition(top, left);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};