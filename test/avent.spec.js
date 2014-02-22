var expect = chai.expect,
    should = chai.should;
 
describe("avent", function() {

  it("should be loaded globally", function() {
    expect(avent).to.be.an("object");
  });

  it("should have a global event element", function() {
    expect(avent.global).to.be.an("object");
  });

  it("should have an events object", function() {
    expect(avent.events).to.be.an("object");
  });

  describe("on", function() {

    avent.on('ontest', function(){});

    it("should create a new global event binding", function() {
      expect(Object.prototype.toString.apply(avent.events['ontest'].ev).indexOf('Event')).to.not.equal(-1);
    });

  });

  describe("off", function() {

    avent.on('offtest')
    avent.off('offtest');

    it("should remove a global event binding", function() {
      expect(avent.events['offtest']).to.equal(undefined);
    });

  });

  describe("trigger", function() {

    var triggerValue = null;

    avent.on('triggertest', function(){
      triggerValue = true;
    });

    avent.trigger('triggertest');

    it("should trigger a global event binding", function() {
      expect(triggerValue).to.equal(true);
    });

  });

});