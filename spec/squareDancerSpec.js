describe('squareDancer', function () {

  var squareDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    squareDancer = new makeSquareDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be square', function () {
    expect(squareDancer.$node[0].className).to.be.equal('squareDancer');
  });

  it('should have a randomly set position', function () {
    sinon.spy(squareDancer, 'setPosition');
    squareDancer.setPosition(15, 30);
    expect(squareDancer.setPosition.called).to.be.true;
  });

});