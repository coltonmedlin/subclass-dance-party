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
    // expect((squareDancer.$node).getCssProperty('border-radius').value).to.be.equal('0px');
    expect(squareDancer.$node.css('border-radius')).to.eq('0px');
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(squareDancer, 'step');
      expect(squareDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });
  });
});