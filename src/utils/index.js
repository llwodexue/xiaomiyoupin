const debounce = (fn, wait = 300) => {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
};

const throttle = (fn, wait = 300) => {
  let timer = null,
    previous = Date.now();
  return function() {
    let now = Date.now(),
      remaining = wait - (now - previous);
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(this, arguments);
      previous = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
};

const win = (attr, val) => {
  if (!val) {
    return document.documentElement[attr] || document.body[attr];
  }
  document.documentElement[attr] = val;
  document.body[attr] = val;
};

import md5 from "blueimp-md5";
const passTrans = pass => {
  return md5(pass)
    .substring(4)
    .split("")
    .reverse()
    .join("")
    .substring(4);
};

module.exports = {
  debounce,
  throttle,
  win,
  passTrans
};
