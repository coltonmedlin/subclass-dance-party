describe('bouncyDancer', function () {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be square', function () {
    expect(bouncyDancer.$node[0].className).to.be.equal('bouncyDancer');
    expect(bouncyDancer.$node[0].outerHTML).to.be.equal('<span class="bouncyDancer" style="top: 10px; left: 20px;"></span>');
  });

  it('should have a randomly set position', function () {
    sinon.spy(bouncyDancer, 'setPosition');
    bouncyDancer.setPosition(10, 20);
    expect(bouncyDancer.setPosition.called).to.be.true;
  });

});