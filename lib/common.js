var sizes = {
  Mini: 'mini',
  Tiny: 'tiny',
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  Big: 'big',
  Huge: 'huge',
  Massive: 'massive'
};

var colors = {
  Black: 'black',
  Green: 'green',
  Red: 'red',
  Blue: 'blue',
  Purple: 'purple',
  Teal: 'teal',
  Orange: 'orange'
};

var social = {
  Facebook: 'facebook',
  Twitter: 'twitter',
  'Google Plus': 'google plus',
  LinkedIn: 'linkedin',
  Instagram: 'instagram'
};

var pointing = {
  Above: 'above',
  Below: 'below',
  Left: 'left',
  Right: 'right'
};

function values(key) {
  var values = [], map = common[key], k;
  for (k in map) {
    if (map.hasOwnProperty(k)) {
      values.push(map[k]);
    }
  }
  return values;
}

var common = {
  Sizes: sizes,
  Colors: colors,
  Social: social,
  Pointing: pointing,
  values: values
};

module.exports = common;