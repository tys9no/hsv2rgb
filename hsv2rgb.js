/*
  h: Hue 0 - 360 degree
  s: Saturation 0 - 100 %
  v: Value 0 - 100 %
*/
var HSV2RGB = function(h, s, v) {
  if (h < 0 || h > 360) { throw new Error('Hue is invalid value. is allowed in range of from 0 to 360.')}
  if (s < 0.0 || s > 100.0) { throw new Error('Saturation is invalid value. is allowed in range of from 0 to 100.')}
  if (v < 0.0 || v > 100.0) { throw new Error('Value is invalid value. is allowed in range of from 0 to 100.')}

  var _s = s / 100.0
  var _v = v / 100.0

  // only value = brightness.
  if(_s == 0.0){
    return {
      r: 255 * _v,
      g: 255 * _v,
      b: 255 * _v      
    }
  }

  // first find chroma:
  var _c = _v * _s;

  // the second largest component of this color
  var _h = h / 60;
  var _i = Math.floor(_h);
  var _x = _c * (1 - Math.abs( _h % 2 - 1));

  var _rgb = {};
  switch(_i){
    case 0:
      _rgb = { r: _c, g: _x, b: 0 };
      break;
    case 1:
      _rgb = { r: _x, g: _c, b: 0 };
      break;
    case 2:
      _rgb = { r: 0, g: _c, b: _x };
      break;
    case 3:
      _rgb = { r: 0, g: _x, b: _c };
      break;
    case 4:
      _rgb = { r: _x, g: 0, b: _c };
      break;
    case 5:
      _rgb = { r: _c, g: 0, b: _x };
      break;
  }
  var _m = _v - _c;

  return {
    r: Math.floor(255 * (_rgb.r + _m)), 
    g: Math.floor(255 * (_rgb.g + _m)), 
    b: Math.floor(255 * (_rgb.b + _m))
  }
}

module.exports = HSV2RGB;
