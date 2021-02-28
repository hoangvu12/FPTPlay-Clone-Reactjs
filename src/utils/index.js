/* eslint-disable no-extend-native */
export function textAbstract(text, length) {
  let last;
  if (text == null) {
    return "";
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  last = text.lastIndexOf(" ");
  text = text.substring(0, last);
  return text + "...";
}

export function isEmptyArray(array) {
  return JSON.stringify(array) === "[]";
}

export function isEmptyObject(object) {
  return JSON.stringify(object) === "{}";
}

Object.defineProperty(Array.prototype, "chunk", {
  value: function (chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  },
});
