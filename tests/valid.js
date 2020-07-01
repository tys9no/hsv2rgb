var assert = require('assert');
var HSV2RGB = require("../hsv2rgb.js");

describe('suite of converting color', function() {
  describe('HSV2RGB()', function() {
    it('when hsv(0,50,50) should return rgb(127, 63, 63)', function() {
      var rgb = HSV2RGB(0, 50, 50);
      assert.equal(127, rgb.r);
      assert.equal(63, rgb.g);
      assert.equal(63, rgb.b);
    });

    it('when hsv(90,50,50) should return rgb(95, 127, 63)', function() {
      var rgb = HSV2RGB(90, 50, 50);
      assert.equal(95, rgb.r);
      assert.equal(127, rgb.g);
      assert.equal(63, rgb.b);
    });

    it('when hsv(270,50,50) should return rgb(95, 63, 127)', function() {
      var rgb = HSV2RGB(270, 50, 50);
      assert.equal(95, rgb.r);
      assert.equal(63, rgb.g);
      assert.equal(127, rgb.b);
    });

    it('when hsv(400,50,50) should throw Error, because hue is a range of from 0 to 360.', function() {
      assert.throws(function() {
        HSV2RGB(400, 50, 50);
      }, Error);
    });

    it('when hsv(100,200,50) should throw Error, because saturation is a range of from 0 to 100.', function() {
      assert.throws(function() {
        HSV2RGB(100, 200, 50);
      }, Error);
    });

    it('when hsv(200,50,101) should throw Error, because value is a range of from 0 to 100.', function() {
      assert.throws(function() {
        HSV2RGB(200, 50, 101);
      }, Error);
    });

  });
});
