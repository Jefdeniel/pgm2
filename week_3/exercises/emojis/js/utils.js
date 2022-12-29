String.prototype.charCodeUTF32 = function () {
  return (
    (this.charCodeAt(0) - 0xd800) * 0x400 +
    (this.charCodeAt(1) - 0xdc00) +
    0x10000
  );
};

String.prototype.unicode = function () {
  return `&#x${this.charCodeUTF32().toString(16)}`;
};

String.prototype.unicodeEscape = function () {
  return `&amp;${this.unicode().substring(1)}`;
};
