var expect = chai.expect,
    should = chai.should;
 
describe("dispatch", function() {

  it("should be loaded globally", function() {
    expect(dispatch).to.be.an("object");
  });

  it("should have a global event element", function() {
    expect(dispatch.global).to.be.an("object");
  });

  it("should have an events object", function() {
    expect(dispatch.events).to.be.an("object");
  });

  describe("on", function() {

    dispatch.on('ontest', function(){});

    it("should create a new global event binding", function() {
      expect(Object.prototype.toString.apply(dispatch.events['ontest'].ev).indexOf('Event')).to.not.equal(-1);
    });

  });

  describe("off", function() {

    dispatch.on('offtest')
    dispatch.off('offtest');

    it("should remove a global event binding", function() {
      expect(dispatch.events['offtest']).to.equal(undefined);
    });

  });

  describe("trigger", function() {

    var triggerValue = null;
    var dataValue = null;

    dispatch.on('triggertest', function(data){
      triggerValue = true;
      dataValue = data.testValue;
    });

    dispatch.trigger('triggertest', {testValue: 5});

    it("should trigger a global event binding", function() {
      expect(triggerValue).to.equal(true);
    });

    it("should pass data to the method", function() {
      expect(dataValue).to.equal(5);
    });

  });

});