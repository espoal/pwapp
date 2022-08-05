var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// pnp:/home/mamluk/.yarn/berry/cache/chart.js-npm-3.9.1-931bfaba91-9.zip/node_modules/chart.js/dist/chart.js
var require_chart = __commonJS({
  "pnp:/home/mamluk/.yarn/berry/cache/chart.js-npm-3.9.1-931bfaba91-9.zip/node_modules/chart.js/dist/chart.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Chart = factory());
    })(exports, function() {
      "use strict";
      function noop() {
      }
      const uid = function() {
        let id = 0;
        return function() {
          return id++;
        };
      }();
      function isNullOrUndef(value) {
        return value === null || typeof value === "undefined";
      }
      function isArray(value) {
        if (Array.isArray && Array.isArray(value)) {
          return true;
        }
        const type = Object.prototype.toString.call(value);
        if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") {
          return true;
        }
        return false;
      }
      function isObject(value) {
        return value !== null && Object.prototype.toString.call(value) === "[object Object]";
      }
      const isNumberFinite = (value) => (typeof value === "number" || value instanceof Number) && isFinite(+value);
      function finiteOrDefault(value, defaultValue) {
        return isNumberFinite(value) ? value : defaultValue;
      }
      function valueOrDefault(value, defaultValue) {
        return typeof value === "undefined" ? defaultValue : value;
      }
      const toPercentage = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : value / dimension;
      const toDimension = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
      function callback(fn, args, thisArg) {
        if (fn && typeof fn.call === "function") {
          return fn.apply(thisArg, args);
        }
      }
      function each(loopable, fn, thisArg, reverse) {
        let i, len, keys;
        if (isArray(loopable)) {
          len = loopable.length;
          if (reverse) {
            for (i = len - 1; i >= 0; i--) {
              fn.call(thisArg, loopable[i], i);
            }
          } else {
            for (i = 0; i < len; i++) {
              fn.call(thisArg, loopable[i], i);
            }
          }
        } else if (isObject(loopable)) {
          keys = Object.keys(loopable);
          len = keys.length;
          for (i = 0; i < len; i++) {
            fn.call(thisArg, loopable[keys[i]], keys[i]);
          }
        }
      }
      function _elementsEqual(a0, a1) {
        let i, ilen, v0, v1;
        if (!a0 || !a1 || a0.length !== a1.length) {
          return false;
        }
        for (i = 0, ilen = a0.length; i < ilen; ++i) {
          v0 = a0[i];
          v1 = a1[i];
          if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
            return false;
          }
        }
        return true;
      }
      function clone$1(source) {
        if (isArray(source)) {
          return source.map(clone$1);
        }
        if (isObject(source)) {
          const target = /* @__PURE__ */ Object.create(null);
          const keys = Object.keys(source);
          const klen = keys.length;
          let k = 0;
          for (; k < klen; ++k) {
            target[keys[k]] = clone$1(source[keys[k]]);
          }
          return target;
        }
        return source;
      }
      function isValidKey(key) {
        return ["__proto__", "prototype", "constructor"].indexOf(key) === -1;
      }
      function _merger(key, target, source, options) {
        if (!isValidKey(key)) {
          return;
        }
        const tval = target[key];
        const sval = source[key];
        if (isObject(tval) && isObject(sval)) {
          merge(tval, sval, options);
        } else {
          target[key] = clone$1(sval);
        }
      }
      function merge(target, source, options) {
        const sources = isArray(source) ? source : [source];
        const ilen = sources.length;
        if (!isObject(target)) {
          return target;
        }
        options = options || {};
        const merger = options.merger || _merger;
        for (let i = 0; i < ilen; ++i) {
          source = sources[i];
          if (!isObject(source)) {
            continue;
          }
          const keys = Object.keys(source);
          for (let k = 0, klen = keys.length; k < klen; ++k) {
            merger(keys[k], target, source, options);
          }
        }
        return target;
      }
      function mergeIf(target, source) {
        return merge(target, source, { merger: _mergerIf });
      }
      function _mergerIf(key, target, source) {
        if (!isValidKey(key)) {
          return;
        }
        const tval = target[key];
        const sval = source[key];
        if (isObject(tval) && isObject(sval)) {
          mergeIf(tval, sval);
        } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
          target[key] = clone$1(sval);
        }
      }
      function _deprecated(scope, value, previous, current) {
        if (value !== void 0) {
          console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
        }
      }
      const keyResolvers = {
        "": (v) => v,
        x: (o) => o.x,
        y: (o) => o.y
      };
      function resolveObjectKey(obj, key) {
        const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
        return resolver(obj);
      }
      function _getKeyResolver(key) {
        const keys = _splitKey(key);
        return (obj) => {
          for (const k of keys) {
            if (k === "") {
              break;
            }
            obj = obj && obj[k];
          }
          return obj;
        };
      }
      function _splitKey(key) {
        const parts = key.split(".");
        const keys = [];
        let tmp = "";
        for (const part of parts) {
          tmp += part;
          if (tmp.endsWith("\\")) {
            tmp = tmp.slice(0, -1) + ".";
          } else {
            keys.push(tmp);
            tmp = "";
          }
        }
        return keys;
      }
      function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      const defined = (value) => typeof value !== "undefined";
      const isFunction = (value) => typeof value === "function";
      const setsEqual = (a, b) => {
        if (a.size !== b.size) {
          return false;
        }
        for (const item of a) {
          if (!b.has(item)) {
            return false;
          }
        }
        return true;
      };
      function _isClickEvent(e) {
        return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
      }
      const PI = Math.PI;
      const TAU = 2 * PI;
      const PITAU = TAU + PI;
      const INFINITY = Number.POSITIVE_INFINITY;
      const RAD_PER_DEG = PI / 180;
      const HALF_PI = PI / 2;
      const QUARTER_PI = PI / 4;
      const TWO_THIRDS_PI = PI * 2 / 3;
      const log10 = Math.log10;
      const sign = Math.sign;
      function niceNum(range) {
        const roundedRange = Math.round(range);
        range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
        const niceRange = Math.pow(10, Math.floor(log10(range)));
        const fraction = range / niceRange;
        const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
        return niceFraction * niceRange;
      }
      function _factorize(value) {
        const result = [];
        const sqrt = Math.sqrt(value);
        let i;
        for (i = 1; i < sqrt; i++) {
          if (value % i === 0) {
            result.push(i);
            result.push(value / i);
          }
        }
        if (sqrt === (sqrt | 0)) {
          result.push(sqrt);
        }
        result.sort((a, b) => a - b).pop();
        return result;
      }
      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      function almostEquals(x, y, epsilon) {
        return Math.abs(x - y) < epsilon;
      }
      function almostWhole(x, epsilon) {
        const rounded = Math.round(x);
        return rounded - epsilon <= x && rounded + epsilon >= x;
      }
      function _setMinAndMaxByKey(array, target, property) {
        let i, ilen, value;
        for (i = 0, ilen = array.length; i < ilen; i++) {
          value = array[i][property];
          if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
          }
        }
      }
      function toRadians(degrees) {
        return degrees * (PI / 180);
      }
      function toDegrees(radians) {
        return radians * (180 / PI);
      }
      function _decimalPlaces(x) {
        if (!isNumberFinite(x)) {
          return;
        }
        let e = 1;
        let p = 0;
        while (Math.round(x * e) / e !== x) {
          e *= 10;
          p++;
        }
        return p;
      }
      function getAngleFromPoint(centrePoint, anglePoint) {
        const distanceFromXCenter = anglePoint.x - centrePoint.x;
        const distanceFromYCenter = anglePoint.y - centrePoint.y;
        const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
        let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
        if (angle < -0.5 * PI) {
          angle += TAU;
        }
        return {
          angle,
          distance: radialDistanceFromCenter
        };
      }
      function distanceBetweenPoints(pt1, pt2) {
        return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
      }
      function _angleDiff(a, b) {
        return (a - b + PITAU) % TAU - PI;
      }
      function _normalizeAngle(a) {
        return (a % TAU + TAU) % TAU;
      }
      function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
        const a = _normalizeAngle(angle);
        const s = _normalizeAngle(start);
        const e = _normalizeAngle(end);
        const angleToStart = _normalizeAngle(s - a);
        const angleToEnd = _normalizeAngle(e - a);
        const startToAngle = _normalizeAngle(a - s);
        const endToAngle = _normalizeAngle(a - e);
        return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
      }
      function _limitValue(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      function _int16Range(value) {
        return _limitValue(value, -32768, 32767);
      }
      function _isBetween(value, start, end, epsilon = 1e-6) {
        return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
      }
      function _lookup(table, value, cmp) {
        cmp = cmp || ((index2) => table[index2] < value);
        let hi = table.length - 1;
        let lo = 0;
        let mid;
        while (hi - lo > 1) {
          mid = lo + hi >> 1;
          if (cmp(mid)) {
            lo = mid;
          } else {
            hi = mid;
          }
        }
        return { lo, hi };
      }
      const _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? (index2) => table[index2][key] <= value : (index2) => table[index2][key] < value);
      const _rlookupByKey = (table, key, value) => _lookup(table, value, (index2) => table[index2][key] >= value);
      function _filterBetween(values, min, max) {
        let start = 0;
        let end = values.length;
        while (start < end && values[start] < min) {
          start++;
        }
        while (end > start && values[end - 1] > max) {
          end--;
        }
        return start > 0 || end < values.length ? values.slice(start, end) : values;
      }
      const arrayEvents = ["push", "pop", "shift", "splice", "unshift"];
      function listenArrayEvents(array, listener) {
        if (array._chartjs) {
          array._chartjs.listeners.push(listener);
          return;
        }
        Object.defineProperty(array, "_chartjs", {
          configurable: true,
          enumerable: false,
          value: {
            listeners: [listener]
          }
        });
        arrayEvents.forEach((key) => {
          const method = "_onData" + _capitalize(key);
          const base = array[key];
          Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value(...args) {
              const res = base.apply(this, args);
              array._chartjs.listeners.forEach((object) => {
                if (typeof object[method] === "function") {
                  object[method](...args);
                }
              });
              return res;
            }
          });
        });
      }
      function unlistenArrayEvents(array, listener) {
        const stub = array._chartjs;
        if (!stub) {
          return;
        }
        const listeners = stub.listeners;
        const index2 = listeners.indexOf(listener);
        if (index2 !== -1) {
          listeners.splice(index2, 1);
        }
        if (listeners.length > 0) {
          return;
        }
        arrayEvents.forEach((key) => {
          delete array[key];
        });
        delete array._chartjs;
      }
      function _arrayUnique(items) {
        const set2 = /* @__PURE__ */ new Set();
        let i, ilen;
        for (i = 0, ilen = items.length; i < ilen; ++i) {
          set2.add(items[i]);
        }
        if (set2.size === ilen) {
          return items;
        }
        return Array.from(set2);
      }
      function fontString(pixelSize, fontStyle, fontFamily) {
        return fontStyle + " " + pixelSize + "px " + fontFamily;
      }
      const requestAnimFrame = function() {
        if (typeof window === "undefined") {
          return function(callback2) {
            return callback2();
          };
        }
        return window.requestAnimationFrame;
      }();
      function throttled(fn, thisArg, updateFn) {
        const updateArgs = updateFn || ((args2) => Array.prototype.slice.call(args2));
        let ticking = false;
        let args = [];
        return function(...rest) {
          args = updateArgs(rest);
          if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, () => {
              ticking = false;
              fn.apply(thisArg, args);
            });
          }
        };
      }
      function debounce(fn, delay) {
        let timeout;
        return function(...args) {
          if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
          } else {
            fn.apply(this, args);
          }
          return delay;
        };
      }
      const _toLeftRightCenter = (align) => align === "start" ? "left" : align === "end" ? "right" : "center";
      const _alignStartEnd = (align, start, end) => align === "start" ? start : align === "end" ? end : (start + end) / 2;
      const _textX = (align, left, right, rtl) => {
        const check = rtl ? "left" : "right";
        return align === check ? right : align === "center" ? (left + right) / 2 : left;
      };
      function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
        const pointCount = points.length;
        let start = 0;
        let count = pointCount;
        if (meta._sorted) {
          const { iScale, _parsed } = meta;
          const axis = iScale.axis;
          const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
          if (minDefined) {
            start = _limitValue(
              Math.min(
                _lookupByKey(_parsed, iScale.axis, min).lo,
                animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo
              ),
              0,
              pointCount - 1
            );
          }
          if (maxDefined) {
            count = _limitValue(
              Math.max(
                _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
                animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1
              ),
              start,
              pointCount
            ) - start;
          } else {
            count = pointCount - start;
          }
        }
        return { start, count };
      }
      function _scaleRangesChanged(meta) {
        const { xScale, yScale, _scaleRanges } = meta;
        const newRanges = {
          xmin: xScale.min,
          xmax: xScale.max,
          ymin: yScale.min,
          ymax: yScale.max
        };
        if (!_scaleRanges) {
          meta._scaleRanges = newRanges;
          return true;
        }
        const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
        Object.assign(_scaleRanges, newRanges);
        return changed;
      }
      class Animator {
        constructor() {
          this._request = null;
          this._charts = /* @__PURE__ */ new Map();
          this._running = false;
          this._lastDate = void 0;
        }
        _notify(chart, anims, date, type) {
          const callbacks = anims.listeners[type];
          const numSteps = anims.duration;
          callbacks.forEach((fn) => fn({
            chart,
            initial: anims.initial,
            numSteps,
            currentStep: Math.min(date - anims.start, numSteps)
          }));
        }
        _refresh() {
          if (this._request) {
            return;
          }
          this._running = true;
          this._request = requestAnimFrame.call(window, () => {
            this._update();
            this._request = null;
            if (this._running) {
              this._refresh();
            }
          });
        }
        _update(date = Date.now()) {
          let remaining = 0;
          this._charts.forEach((anims, chart) => {
            if (!anims.running || !anims.items.length) {
              return;
            }
            const items = anims.items;
            let i = items.length - 1;
            let draw2 = false;
            let item;
            for (; i >= 0; --i) {
              item = items[i];
              if (item._active) {
                if (item._total > anims.duration) {
                  anims.duration = item._total;
                }
                item.tick(date);
                draw2 = true;
              } else {
                items[i] = items[items.length - 1];
                items.pop();
              }
            }
            if (draw2) {
              chart.draw();
              this._notify(chart, anims, date, "progress");
            }
            if (!items.length) {
              anims.running = false;
              this._notify(chart, anims, date, "complete");
              anims.initial = false;
            }
            remaining += items.length;
          });
          this._lastDate = date;
          if (remaining === 0) {
            this._running = false;
          }
        }
        _getAnims(chart) {
          const charts = this._charts;
          let anims = charts.get(chart);
          if (!anims) {
            anims = {
              running: false,
              initial: true,
              items: [],
              listeners: {
                complete: [],
                progress: []
              }
            };
            charts.set(chart, anims);
          }
          return anims;
        }
        listen(chart, event, cb) {
          this._getAnims(chart).listeners[event].push(cb);
        }
        add(chart, items) {
          if (!items || !items.length) {
            return;
          }
          this._getAnims(chart).items.push(...items);
        }
        has(chart) {
          return this._getAnims(chart).items.length > 0;
        }
        start(chart) {
          const anims = this._charts.get(chart);
          if (!anims) {
            return;
          }
          anims.running = true;
          anims.start = Date.now();
          anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
          this._refresh();
        }
        running(chart) {
          if (!this._running) {
            return false;
          }
          const anims = this._charts.get(chart);
          if (!anims || !anims.running || !anims.items.length) {
            return false;
          }
          return true;
        }
        stop(chart) {
          const anims = this._charts.get(chart);
          if (!anims || !anims.items.length) {
            return;
          }
          const items = anims.items;
          let i = items.length - 1;
          for (; i >= 0; --i) {
            items[i].cancel();
          }
          anims.items = [];
          this._notify(chart, anims, Date.now(), "complete");
        }
        remove(chart) {
          return this._charts.delete(chart);
        }
      }
      var animator = new Animator();
      function round(v) {
        return v + 0.5 | 0;
      }
      const lim = (v, l, h) => Math.max(Math.min(v, h), l);
      function p2b(v) {
        return lim(round(v * 2.55), 0, 255);
      }
      function n2b(v) {
        return lim(round(v * 255), 0, 255);
      }
      function b2n(v) {
        return lim(round(v / 2.55) / 100, 0, 1);
      }
      function n2p(v) {
        return lim(round(v * 100), 0, 100);
      }
      const map$1 = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
      const hex = [..."0123456789ABCDEF"];
      const h1 = (b) => hex[b & 15];
      const h2 = (b) => hex[(b & 240) >> 4] + hex[b & 15];
      const eq = (b) => (b & 240) >> 4 === (b & 15);
      const isShort = (v) => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
      function hexParse(str) {
        var len = str.length;
        var ret;
        if (str[0] === "#") {
          if (len === 4 || len === 5) {
            ret = {
              r: 255 & map$1[str[1]] * 17,
              g: 255 & map$1[str[2]] * 17,
              b: 255 & map$1[str[3]] * 17,
              a: len === 5 ? map$1[str[4]] * 17 : 255
            };
          } else if (len === 7 || len === 9) {
            ret = {
              r: map$1[str[1]] << 4 | map$1[str[2]],
              g: map$1[str[3]] << 4 | map$1[str[4]],
              b: map$1[str[5]] << 4 | map$1[str[6]],
              a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
            };
          }
        }
        return ret;
      }
      const alpha = (a, f) => a < 255 ? f(a) : "";
      function hexString(v) {
        var f = isShort(v) ? h1 : h2;
        return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : void 0;
      }
      const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function hsl2rgbn(h, s, l) {
        const a = s * Math.min(l, 1 - l);
        const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return [f(0), f(8), f(4)];
      }
      function hsv2rgbn(h, s, v) {
        const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
        return [f(5), f(3), f(1)];
      }
      function hwb2rgbn(h, w, b) {
        const rgb = hsl2rgbn(h, 1, 0.5);
        let i;
        if (w + b > 1) {
          i = 1 / (w + b);
          w *= i;
          b *= i;
        }
        for (i = 0; i < 3; i++) {
          rgb[i] *= 1 - w - b;
          rgb[i] += w;
        }
        return rgb;
      }
      function hueValue(r, g, b, d, max) {
        if (r === max) {
          return (g - b) / d + (g < b ? 6 : 0);
        }
        if (g === max) {
          return (b - r) / d + 2;
        }
        return (r - g) / d + 4;
      }
      function rgb2hsl(v) {
        const range = 255;
        const r = v.r / range;
        const g = v.g / range;
        const b = v.b / range;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2;
        let h, s, d;
        if (max !== min) {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = hueValue(r, g, b, d, max);
          h = h * 60 + 0.5;
        }
        return [h | 0, s || 0, l];
      }
      function calln(f, a, b, c) {
        return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
      }
      function hsl2rgb(h, s, l) {
        return calln(hsl2rgbn, h, s, l);
      }
      function hwb2rgb(h, w, b) {
        return calln(hwb2rgbn, h, w, b);
      }
      function hsv2rgb(h, s, v) {
        return calln(hsv2rgbn, h, s, v);
      }
      function hue(h) {
        return (h % 360 + 360) % 360;
      }
      function hueParse(str) {
        const m = HUE_RE.exec(str);
        let a = 255;
        let v;
        if (!m) {
          return;
        }
        if (m[5] !== v) {
          a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
        }
        const h = hue(+m[2]);
        const p1 = +m[3] / 100;
        const p2 = +m[4] / 100;
        if (m[1] === "hwb") {
          v = hwb2rgb(h, p1, p2);
        } else if (m[1] === "hsv") {
          v = hsv2rgb(h, p1, p2);
        } else {
          v = hsl2rgb(h, p1, p2);
        }
        return {
          r: v[0],
          g: v[1],
          b: v[2],
          a
        };
      }
      function rotate(v, deg) {
        var h = rgb2hsl(v);
        h[0] = hue(h[0] + deg);
        h = hsl2rgb(h);
        v.r = h[0];
        v.g = h[1];
        v.b = h[2];
      }
      function hslString(v) {
        if (!v) {
          return;
        }
        const a = rgb2hsl(v);
        const h = a[0];
        const s = n2p(a[1]);
        const l = n2p(a[2]);
        return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
      }
      const map$2 = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
      };
      const names$1 = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
      };
      function unpack() {
        const unpacked = {};
        const keys = Object.keys(names$1);
        const tkeys = Object.keys(map$2);
        let i, j, k, ok, nk;
        for (i = 0; i < keys.length; i++) {
          ok = nk = keys[i];
          for (j = 0; j < tkeys.length; j++) {
            k = tkeys[j];
            nk = nk.replace(k, map$2[k]);
          }
          k = parseInt(names$1[ok], 16);
          unpacked[nk] = [k >> 16 & 255, k >> 8 & 255, k & 255];
        }
        return unpacked;
      }
      let names;
      function nameParse(str) {
        if (!names) {
          names = unpack();
          names.transparent = [0, 0, 0, 0];
        }
        const a = names[str.toLowerCase()];
        return a && {
          r: a[0],
          g: a[1],
          b: a[2],
          a: a.length === 4 ? a[3] : 255
        };
      }
      const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      function rgbParse(str) {
        const m = RGB_RE.exec(str);
        let a = 255;
        let r, g, b;
        if (!m) {
          return;
        }
        if (m[7] !== r) {
          const v = +m[7];
          a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
        }
        r = +m[1];
        g = +m[3];
        b = +m[5];
        r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
        g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
        b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
        return {
          r,
          g,
          b,
          a
        };
      }
      function rgbString(v) {
        return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
      }
      const to = (v) => v <= 31308e-7 ? v * 12.92 : Math.pow(v, 1 / 2.4) * 1.055 - 0.055;
      const from = (v) => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      function interpolate$1(rgb1, rgb2, t) {
        const r = from(b2n(rgb1.r));
        const g = from(b2n(rgb1.g));
        const b = from(b2n(rgb1.b));
        return {
          r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
          g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
          b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
          a: rgb1.a + t * (rgb2.a - rgb1.a)
        };
      }
      function modHSL(v, i, ratio) {
        if (v) {
          let tmp = rgb2hsl(v);
          tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
          tmp = hsl2rgb(tmp);
          v.r = tmp[0];
          v.g = tmp[1];
          v.b = tmp[2];
        }
      }
      function clone(v, proto) {
        return v ? Object.assign(proto || {}, v) : v;
      }
      function fromObject(input) {
        var v = { r: 0, g: 0, b: 0, a: 255 };
        if (Array.isArray(input)) {
          if (input.length >= 3) {
            v = { r: input[0], g: input[1], b: input[2], a: 255 };
            if (input.length > 3) {
              v.a = n2b(input[3]);
            }
          }
        } else {
          v = clone(input, { r: 0, g: 0, b: 0, a: 1 });
          v.a = n2b(v.a);
        }
        return v;
      }
      function functionParse(str) {
        if (str.charAt(0) === "r") {
          return rgbParse(str);
        }
        return hueParse(str);
      }
      class Color {
        constructor(input) {
          if (input instanceof Color) {
            return input;
          }
          const type = typeof input;
          let v;
          if (type === "object") {
            v = fromObject(input);
          } else if (type === "string") {
            v = hexParse(input) || nameParse(input) || functionParse(input);
          }
          this._rgb = v;
          this._valid = !!v;
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var v = clone(this._rgb);
          if (v) {
            v.a = b2n(v.a);
          }
          return v;
        }
        set rgb(obj) {
          this._rgb = fromObject(obj);
        }
        rgbString() {
          return this._valid ? rgbString(this._rgb) : void 0;
        }
        hexString() {
          return this._valid ? hexString(this._rgb) : void 0;
        }
        hslString() {
          return this._valid ? hslString(this._rgb) : void 0;
        }
        mix(color2, weight) {
          if (color2) {
            const c1 = this.rgb;
            const c2 = color2.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
            w2 = 1 - w1;
            c1.r = 255 & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 255 & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 255 & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
          }
          return this;
        }
        interpolate(color2, t) {
          if (color2) {
            this._rgb = interpolate$1(this._rgb, color2._rgb, t);
          }
          return this;
        }
        clone() {
          return new Color(this.rgb);
        }
        alpha(a) {
          this._rgb.a = n2b(a);
          return this;
        }
        clearer(ratio) {
          const rgb = this._rgb;
          rgb.a *= 1 - ratio;
          return this;
        }
        greyscale() {
          const rgb = this._rgb;
          const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
          rgb.r = rgb.g = rgb.b = val;
          return this;
        }
        opaquer(ratio) {
          const rgb = this._rgb;
          rgb.a *= 1 + ratio;
          return this;
        }
        negate() {
          const v = this._rgb;
          v.r = 255 - v.r;
          v.g = 255 - v.g;
          v.b = 255 - v.b;
          return this;
        }
        lighten(ratio) {
          modHSL(this._rgb, 2, ratio);
          return this;
        }
        darken(ratio) {
          modHSL(this._rgb, 2, -ratio);
          return this;
        }
        saturate(ratio) {
          modHSL(this._rgb, 1, ratio);
          return this;
        }
        desaturate(ratio) {
          modHSL(this._rgb, 1, -ratio);
          return this;
        }
        rotate(deg) {
          rotate(this._rgb, deg);
          return this;
        }
      }
      function index_esm(input) {
        return new Color(input);
      }
      function isPatternOrGradient(value) {
        if (value && typeof value === "object") {
          const type = value.toString();
          return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
        }
        return false;
      }
      function color(value) {
        return isPatternOrGradient(value) ? value : index_esm(value);
      }
      function getHoverColor(value) {
        return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
      }
      const overrides = /* @__PURE__ */ Object.create(null);
      const descriptors = /* @__PURE__ */ Object.create(null);
      function getScope$1(node, key) {
        if (!key) {
          return node;
        }
        const keys = key.split(".");
        for (let i = 0, n = keys.length; i < n; ++i) {
          const k = keys[i];
          node = node[k] || (node[k] = /* @__PURE__ */ Object.create(null));
        }
        return node;
      }
      function set(root, scope, values) {
        if (typeof scope === "string") {
          return merge(getScope$1(root, scope), values);
        }
        return merge(getScope$1(root, ""), scope);
      }
      class Defaults {
        constructor(_descriptors2) {
          this.animation = void 0;
          this.backgroundColor = "rgba(0,0,0,0.1)";
          this.borderColor = "rgba(0,0,0,0.1)";
          this.color = "#666";
          this.datasets = {};
          this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
          this.elements = {};
          this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
          ];
          this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
          };
          this.hover = {};
          this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
          this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
          this.hoverColor = (ctx, options) => getHoverColor(options.color);
          this.indexAxis = "x";
          this.interaction = {
            mode: "nearest",
            intersect: true,
            includeInvisible: false
          };
          this.maintainAspectRatio = true;
          this.onHover = null;
          this.onClick = null;
          this.parsing = true;
          this.plugins = {};
          this.responsive = true;
          this.scale = void 0;
          this.scales = {};
          this.showLine = true;
          this.drawActiveElementsOnTop = true;
          this.describe(_descriptors2);
        }
        set(scope, values) {
          return set(this, scope, values);
        }
        get(scope) {
          return getScope$1(this, scope);
        }
        describe(scope, values) {
          return set(descriptors, scope, values);
        }
        override(scope, values) {
          return set(overrides, scope, values);
        }
        route(scope, name, targetScope, targetName) {
          const scopeObject = getScope$1(this, scope);
          const targetScopeObject = getScope$1(this, targetScope);
          const privateName = "_" + name;
          Object.defineProperties(scopeObject, {
            [privateName]: {
              value: scopeObject[name],
              writable: true
            },
            [name]: {
              enumerable: true,
              get() {
                const local = this[privateName];
                const target = targetScopeObject[targetName];
                if (isObject(local)) {
                  return Object.assign({}, target, local);
                }
                return valueOrDefault(local, target);
              },
              set(value) {
                this[privateName] = value;
              }
            }
          });
        }
      }
      var defaults = new Defaults({
        _scriptable: (name) => !name.startsWith("on"),
        _indexable: (name) => name !== "events",
        hover: {
          _fallback: "interaction"
        },
        interaction: {
          _scriptable: false,
          _indexable: false
        }
      });
      function _isDomSupported() {
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function _getParentNode(domNode) {
        let parent = domNode.parentNode;
        if (parent && parent.toString() === "[object ShadowRoot]") {
          parent = parent.host;
        }
        return parent;
      }
      function parseMaxStyle(styleValue, node, parentProperty) {
        let valueInPixels;
        if (typeof styleValue === "string") {
          valueInPixels = parseInt(styleValue, 10);
          if (styleValue.indexOf("%") !== -1) {
            valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
          }
        } else {
          valueInPixels = styleValue;
        }
        return valueInPixels;
      }
      const getComputedStyle = (element) => window.getComputedStyle(element, null);
      function getStyle(el, property) {
        return getComputedStyle(el).getPropertyValue(property);
      }
      const positions = ["top", "right", "bottom", "left"];
      function getPositionedStyle(styles, style, suffix) {
        const result = {};
        suffix = suffix ? "-" + suffix : "";
        for (let i = 0; i < 4; i++) {
          const pos = positions[i];
          result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
        }
        result.width = result.left + result.right;
        result.height = result.top + result.bottom;
        return result;
      }
      const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
      function getCanvasPosition(e, canvas) {
        const touches = e.touches;
        const source = touches && touches.length ? touches[0] : e;
        const { offsetX, offsetY } = source;
        let box = false;
        let x, y;
        if (useOffsetPos(offsetX, offsetY, e.target)) {
          x = offsetX;
          y = offsetY;
        } else {
          const rect = canvas.getBoundingClientRect();
          x = source.clientX - rect.left;
          y = source.clientY - rect.top;
          box = true;
        }
        return { x, y, box };
      }
      function getRelativePosition(evt, chart) {
        if ("native" in evt) {
          return evt;
        }
        const { canvas, currentDevicePixelRatio } = chart;
        const style = getComputedStyle(canvas);
        const borderBox = style.boxSizing === "border-box";
        const paddings = getPositionedStyle(style, "padding");
        const borders = getPositionedStyle(style, "border", "width");
        const { x, y, box } = getCanvasPosition(evt, canvas);
        const xOffset = paddings.left + (box && borders.left);
        const yOffset = paddings.top + (box && borders.top);
        let { width, height } = chart;
        if (borderBox) {
          width -= paddings.width + borders.width;
          height -= paddings.height + borders.height;
        }
        return {
          x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
          y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
        };
      }
      function getContainerSize(canvas, width, height) {
        let maxWidth, maxHeight;
        if (width === void 0 || height === void 0) {
          const container = _getParentNode(canvas);
          if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
          } else {
            const rect = container.getBoundingClientRect();
            const containerStyle = getComputedStyle(container);
            const containerBorder = getPositionedStyle(containerStyle, "border", "width");
            const containerPadding = getPositionedStyle(containerStyle, "padding");
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
          }
        }
        return {
          width,
          height,
          maxWidth: maxWidth || INFINITY,
          maxHeight: maxHeight || INFINITY
        };
      }
      const round1 = (v) => Math.round(v * 10) / 10;
      function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
        const style = getComputedStyle(canvas);
        const margins = getPositionedStyle(style, "margin");
        const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
        const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
        const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
        let { width, height } = containerSize;
        if (style.boxSizing === "content-box") {
          const borders = getPositionedStyle(style, "border", "width");
          const paddings = getPositionedStyle(style, "padding");
          width -= paddings.width + borders.width;
          height -= paddings.height + borders.height;
        }
        width = Math.max(0, width - margins.width);
        height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
        width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
        height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
        if (width && !height) {
          height = round1(width / 2);
        }
        return {
          width,
          height
        };
      }
      function retinaScale(chart, forceRatio, forceStyle) {
        const pixelRatio = forceRatio || 1;
        const deviceHeight = Math.floor(chart.height * pixelRatio);
        const deviceWidth = Math.floor(chart.width * pixelRatio);
        chart.height = deviceHeight / pixelRatio;
        chart.width = deviceWidth / pixelRatio;
        const canvas = chart.canvas;
        if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
          canvas.style.height = `${chart.height}px`;
          canvas.style.width = `${chart.width}px`;
        }
        if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
          chart.currentDevicePixelRatio = pixelRatio;
          canvas.height = deviceHeight;
          canvas.width = deviceWidth;
          chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          return true;
        }
        return false;
      }
      const supportsEventListenerOptions = function() {
        let passiveSupported = false;
        try {
          const options = {
            get passive() {
              passiveSupported = true;
              return false;
            }
          };
          window.addEventListener("test", null, options);
          window.removeEventListener("test", null, options);
        } catch (e) {
        }
        return passiveSupported;
      }();
      function readUsedSize(element, property) {
        const value = getStyle(element, property);
        const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
        return matches ? +matches[1] : void 0;
      }
      function toFontString(font) {
        if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
          return null;
        }
        return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
      }
      function _measureText(ctx, data, gc, longest, string) {
        let textWidth = data[string];
        if (!textWidth) {
          textWidth = data[string] = ctx.measureText(string).width;
          gc.push(string);
        }
        if (textWidth > longest) {
          longest = textWidth;
        }
        return longest;
      }
      function _longestText(ctx, font, arrayOfThings, cache) {
        cache = cache || {};
        let data = cache.data = cache.data || {};
        let gc = cache.garbageCollect = cache.garbageCollect || [];
        if (cache.font !== font) {
          data = cache.data = {};
          gc = cache.garbageCollect = [];
          cache.font = font;
        }
        ctx.save();
        ctx.font = font;
        let longest = 0;
        const ilen = arrayOfThings.length;
        let i, j, jlen, thing, nestedThing;
        for (i = 0; i < ilen; i++) {
          thing = arrayOfThings[i];
          if (thing !== void 0 && thing !== null && isArray(thing) !== true) {
            longest = _measureText(ctx, data, gc, longest, thing);
          } else if (isArray(thing)) {
            for (j = 0, jlen = thing.length; j < jlen; j++) {
              nestedThing = thing[j];
              if (nestedThing !== void 0 && nestedThing !== null && !isArray(nestedThing)) {
                longest = _measureText(ctx, data, gc, longest, nestedThing);
              }
            }
          }
        }
        ctx.restore();
        const gcLen = gc.length / 2;
        if (gcLen > arrayOfThings.length) {
          for (i = 0; i < gcLen; i++) {
            delete data[gc[i]];
          }
          gc.splice(0, gcLen);
        }
        return longest;
      }
      function _alignPixel(chart, pixel, width) {
        const devicePixelRatio = chart.currentDevicePixelRatio;
        const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
      }
      function clearCanvas(canvas, ctx) {
        ctx = ctx || canvas.getContext("2d");
        ctx.save();
        ctx.resetTransform();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }
      function drawPoint(ctx, options, x, y) {
        drawPointLegend(ctx, options, x, y, null);
      }
      function drawPointLegend(ctx, options, x, y, w) {
        let type, xOffset, yOffset, size, cornerRadius, width;
        const style = options.pointStyle;
        const rotation = options.rotation;
        const radius = options.radius;
        let rad = (rotation || 0) * RAD_PER_DEG;
        if (style && typeof style === "object") {
          type = style.toString();
          if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
          }
        }
        if (isNaN(radius) || radius <= 0) {
          return;
        }
        ctx.beginPath();
        switch (style) {
          default:
            if (w) {
              ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
            } else {
              ctx.arc(x, y, radius, 0, TAU);
            }
            ctx.closePath();
            break;
          case "triangle":
            ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
          case "rectRounded":
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;
          case "rect":
            if (!rotation) {
              size = Math.SQRT1_2 * radius;
              width = w ? w / 2 : size;
              ctx.rect(x - width, y - size, 2 * width, 2 * size);
              break;
            }
            rad += QUARTER_PI;
          case "rectRot":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + yOffset, y - xOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            ctx.closePath();
            break;
          case "crossRot":
            rad += QUARTER_PI;
          case "cross":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;
          case "star":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            rad += QUARTER_PI;
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;
          case "line":
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
          case "dash":
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
            break;
        }
        ctx.fill();
        if (options.borderWidth > 0) {
          ctx.stroke();
        }
      }
      function _isPointInArea(point, area, margin) {
        margin = margin || 0.5;
        return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
      }
      function clipArea(ctx, area) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
        ctx.clip();
      }
      function unclipArea(ctx) {
        ctx.restore();
      }
      function _steppedLineTo(ctx, previous, target, flip, mode) {
        if (!previous) {
          return ctx.lineTo(target.x, target.y);
        }
        if (mode === "middle") {
          const midpoint = (previous.x + target.x) / 2;
          ctx.lineTo(midpoint, previous.y);
          ctx.lineTo(midpoint, target.y);
        } else if (mode === "after" !== !!flip) {
          ctx.lineTo(previous.x, target.y);
        } else {
          ctx.lineTo(target.x, previous.y);
        }
        ctx.lineTo(target.x, target.y);
      }
      function _bezierCurveTo(ctx, previous, target, flip) {
        if (!previous) {
          return ctx.lineTo(target.x, target.y);
        }
        ctx.bezierCurveTo(
          flip ? previous.cp1x : previous.cp2x,
          flip ? previous.cp1y : previous.cp2y,
          flip ? target.cp2x : target.cp1x,
          flip ? target.cp2y : target.cp1y,
          target.x,
          target.y
        );
      }
      function renderText(ctx, text, x, y, font, opts = {}) {
        const lines = isArray(text) ? text : [text];
        const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
        let i, line;
        ctx.save();
        ctx.font = font.string;
        setRenderOpts(ctx, opts);
        for (i = 0; i < lines.length; ++i) {
          line = lines[i];
          if (stroke) {
            if (opts.strokeColor) {
              ctx.strokeStyle = opts.strokeColor;
            }
            if (!isNullOrUndef(opts.strokeWidth)) {
              ctx.lineWidth = opts.strokeWidth;
            }
            ctx.strokeText(line, x, y, opts.maxWidth);
          }
          ctx.fillText(line, x, y, opts.maxWidth);
          decorateText(ctx, x, y, line, opts);
          y += font.lineHeight;
        }
        ctx.restore();
      }
      function setRenderOpts(ctx, opts) {
        if (opts.translation) {
          ctx.translate(opts.translation[0], opts.translation[1]);
        }
        if (!isNullOrUndef(opts.rotation)) {
          ctx.rotate(opts.rotation);
        }
        if (opts.color) {
          ctx.fillStyle = opts.color;
        }
        if (opts.textAlign) {
          ctx.textAlign = opts.textAlign;
        }
        if (opts.textBaseline) {
          ctx.textBaseline = opts.textBaseline;
        }
      }
      function decorateText(ctx, x, y, line, opts) {
        if (opts.strikethrough || opts.underline) {
          const metrics = ctx.measureText(line);
          const left = x - metrics.actualBoundingBoxLeft;
          const right = x + metrics.actualBoundingBoxRight;
          const top = y - metrics.actualBoundingBoxAscent;
          const bottom = y + metrics.actualBoundingBoxDescent;
          const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.beginPath();
          ctx.lineWidth = opts.decorationWidth || 2;
          ctx.moveTo(left, yDecoration);
          ctx.lineTo(right, yDecoration);
          ctx.stroke();
        }
      }
      function addRoundedRectPath(ctx, rect) {
        const { x, y, w, h, radius } = rect;
        ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
        ctx.lineTo(x, y + h - radius.bottomLeft);
        ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
        ctx.lineTo(x + w - radius.bottomRight, y + h);
        ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
        ctx.lineTo(x + w, y + radius.topRight);
        ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
        ctx.lineTo(x + radius.topLeft, y);
      }
      function _createResolver(scopes, prefixes = [""], rootScopes = scopes, fallback, getTarget = () => scopes[0]) {
        if (!defined(fallback)) {
          fallback = _resolve("_fallback", scopes);
        }
        const cache = {
          [Symbol.toStringTag]: "Object",
          _cacheable: true,
          _scopes: scopes,
          _rootScopes: rootScopes,
          _fallback: fallback,
          _getTarget: getTarget,
          override: (scope) => _createResolver([scope, ...scopes], prefixes, rootScopes, fallback)
        };
        return new Proxy(cache, {
          deleteProperty(target, prop) {
            delete target[prop];
            delete target._keys;
            delete scopes[0][prop];
            return true;
          },
          get(target, prop) {
            return _cached(
              target,
              prop,
              () => _resolveWithPrefixes(prop, prefixes, scopes, target)
            );
          },
          getOwnPropertyDescriptor(target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
          },
          getPrototypeOf() {
            return Reflect.getPrototypeOf(scopes[0]);
          },
          has(target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
          },
          ownKeys(target) {
            return getKeysFromAllScopes(target);
          },
          set(target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value;
            delete target._keys;
            return true;
          }
        });
      }
      function _attachContext(proxy, context, subProxy, descriptorDefaults) {
        const cache = {
          _cacheable: false,
          _proxy: proxy,
          _context: context,
          _subProxy: subProxy,
          _stack: /* @__PURE__ */ new Set(),
          _descriptors: _descriptors(proxy, descriptorDefaults),
          setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
          override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
        };
        return new Proxy(cache, {
          deleteProperty(target, prop) {
            delete target[prop];
            delete proxy[prop];
            return true;
          },
          get(target, prop, receiver) {
            return _cached(
              target,
              prop,
              () => _resolveWithContext(target, prop, receiver)
            );
          },
          getOwnPropertyDescriptor(target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? { enumerable: true, configurable: true } : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
          },
          getPrototypeOf() {
            return Reflect.getPrototypeOf(proxy);
          },
          has(target, prop) {
            return Reflect.has(proxy, prop);
          },
          ownKeys() {
            return Reflect.ownKeys(proxy);
          },
          set(target, prop, value) {
            proxy[prop] = value;
            delete target[prop];
            return true;
          }
        });
      }
      function _descriptors(proxy, defaults2 = { scriptable: true, indexable: true }) {
        const { _scriptable = defaults2.scriptable, _indexable = defaults2.indexable, _allKeys = defaults2.allKeys } = proxy;
        return {
          allKeys: _allKeys,
          scriptable: _scriptable,
          indexable: _indexable,
          isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
          isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
        };
      }
      const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
      const needsSubResolver = (prop, value) => isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
      function _cached(target, prop, resolve2) {
        if (Object.prototype.hasOwnProperty.call(target, prop)) {
          return target[prop];
        }
        const value = resolve2();
        target[prop] = value;
        return value;
      }
      function _resolveWithContext(target, prop, receiver) {
        const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
        let value = _proxy[prop];
        if (isFunction(value) && descriptors2.isScriptable(prop)) {
          value = _resolveScriptable(prop, value, target, receiver);
        }
        if (isArray(value) && value.length) {
          value = _resolveArray(prop, value, target, descriptors2.isIndexable);
        }
        if (needsSubResolver(prop, value)) {
          value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors2);
        }
        return value;
      }
      function _resolveScriptable(prop, value, target, receiver) {
        const { _proxy, _context, _subProxy, _stack } = target;
        if (_stack.has(prop)) {
          throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
        }
        _stack.add(prop);
        value = value(_context, _subProxy || receiver);
        _stack.delete(prop);
        if (needsSubResolver(prop, value)) {
          value = createSubResolver(_proxy._scopes, _proxy, prop, value);
        }
        return value;
      }
      function _resolveArray(prop, value, target, isIndexable) {
        const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
        if (defined(_context.index) && isIndexable(prop)) {
          value = value[_context.index % value.length];
        } else if (isObject(value[0])) {
          const arr = value;
          const scopes = _proxy._scopes.filter((s) => s !== arr);
          value = [];
          for (const item of arr) {
            const resolver = createSubResolver(scopes, _proxy, prop, item);
            value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors2));
          }
        }
        return value;
      }
      function resolveFallback(fallback, prop, value) {
        return isFunction(fallback) ? fallback(prop, value) : fallback;
      }
      const getScope = (key, parent) => key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : void 0;
      function addScopes(set2, parentScopes, key, parentFallback, value) {
        for (const parent of parentScopes) {
          const scope = getScope(key, parent);
          if (scope) {
            set2.add(scope);
            const fallback = resolveFallback(scope._fallback, key, value);
            if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
              return fallback;
            }
          } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
            return null;
          }
        }
        return false;
      }
      function createSubResolver(parentScopes, resolver, prop, value) {
        const rootScopes = resolver._rootScopes;
        const fallback = resolveFallback(resolver._fallback, prop, value);
        const allScopes = [...parentScopes, ...rootScopes];
        const set2 = /* @__PURE__ */ new Set();
        set2.add(value);
        let key = addScopesFromKey(set2, allScopes, prop, fallback || prop, value);
        if (key === null) {
          return false;
        }
        if (defined(fallback) && fallback !== prop) {
          key = addScopesFromKey(set2, allScopes, fallback, key, value);
          if (key === null) {
            return false;
          }
        }
        return _createResolver(
          Array.from(set2),
          [""],
          rootScopes,
          fallback,
          () => subGetTarget(resolver, prop, value)
        );
      }
      function addScopesFromKey(set2, allScopes, key, fallback, item) {
        while (key) {
          key = addScopes(set2, allScopes, key, fallback, item);
        }
        return key;
      }
      function subGetTarget(resolver, prop, value) {
        const parent = resolver._getTarget();
        if (!(prop in parent)) {
          parent[prop] = {};
        }
        const target = parent[prop];
        if (isArray(target) && isObject(value)) {
          return value;
        }
        return target;
      }
      function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
        let value;
        for (const prefix of prefixes) {
          value = _resolve(readKey(prefix, prop), scopes);
          if (defined(value)) {
            return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
          }
        }
      }
      function _resolve(key, scopes) {
        for (const scope of scopes) {
          if (!scope) {
            continue;
          }
          const value = scope[key];
          if (defined(value)) {
            return value;
          }
        }
      }
      function getKeysFromAllScopes(target) {
        let keys = target._keys;
        if (!keys) {
          keys = target._keys = resolveKeysFromAllScopes(target._scopes);
        }
        return keys;
      }
      function resolveKeysFromAllScopes(scopes) {
        const set2 = /* @__PURE__ */ new Set();
        for (const scope of scopes) {
          for (const key of Object.keys(scope).filter((k) => !k.startsWith("_"))) {
            set2.add(key);
          }
        }
        return Array.from(set2);
      }
      function _parseObjectDataRadialScale(meta, data, start, count) {
        const { iScale } = meta;
        const { key = "r" } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index2, item;
        for (i = 0, ilen = count; i < ilen; ++i) {
          index2 = i + start;
          item = data[index2];
          parsed[i] = {
            r: iScale.parse(resolveObjectKey(item, key), index2)
          };
        }
        return parsed;
      }
      const EPSILON = Number.EPSILON || 1e-14;
      const getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
      const getValueAxis = (indexAxis) => indexAxis === "x" ? "y" : "x";
      function splineCurve(firstPoint, middlePoint, afterPoint, t) {
        const previous = firstPoint.skip ? middlePoint : firstPoint;
        const current = middlePoint;
        const next = afterPoint.skip ? middlePoint : afterPoint;
        const d01 = distanceBetweenPoints(current, previous);
        const d12 = distanceBetweenPoints(next, current);
        let s01 = d01 / (d01 + d12);
        let s12 = d12 / (d01 + d12);
        s01 = isNaN(s01) ? 0 : s01;
        s12 = isNaN(s12) ? 0 : s12;
        const fa = t * s01;
        const fb = t * s12;
        return {
          previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
          },
          next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
          }
        };
      }
      function monotoneAdjust(points, deltaK, mK) {
        const pointsLen = points.length;
        let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
        let pointAfter = getPoint(points, 0);
        for (let i = 0; i < pointsLen - 1; ++i) {
          pointCurrent = pointAfter;
          pointAfter = getPoint(points, i + 1);
          if (!pointCurrent || !pointAfter) {
            continue;
          }
          if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
          }
          alphaK = mK[i] / deltaK[i];
          betaK = mK[i + 1] / deltaK[i];
          squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
          if (squaredMagnitude <= 9) {
            continue;
          }
          tauK = 3 / Math.sqrt(squaredMagnitude);
          mK[i] = alphaK * tauK * deltaK[i];
          mK[i + 1] = betaK * tauK * deltaK[i];
        }
      }
      function monotoneCompute(points, mK, indexAxis = "x") {
        const valueAxis = getValueAxis(indexAxis);
        const pointsLen = points.length;
        let delta, pointBefore, pointCurrent;
        let pointAfter = getPoint(points, 0);
        for (let i = 0; i < pointsLen; ++i) {
          pointBefore = pointCurrent;
          pointCurrent = pointAfter;
          pointAfter = getPoint(points, i + 1);
          if (!pointCurrent) {
            continue;
          }
          const iPixel = pointCurrent[indexAxis];
          const vPixel = pointCurrent[valueAxis];
          if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
          }
          if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
          }
        }
      }
      function splineCurveMonotone(points, indexAxis = "x") {
        const valueAxis = getValueAxis(indexAxis);
        const pointsLen = points.length;
        const deltaK = Array(pointsLen).fill(0);
        const mK = Array(pointsLen);
        let i, pointBefore, pointCurrent;
        let pointAfter = getPoint(points, 0);
        for (i = 0; i < pointsLen; ++i) {
          pointBefore = pointCurrent;
          pointCurrent = pointAfter;
          pointAfter = getPoint(points, i + 1);
          if (!pointCurrent) {
            continue;
          }
          if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
          }
          mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
        }
        monotoneAdjust(points, deltaK, mK);
        monotoneCompute(points, mK, indexAxis);
      }
      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }
      function capBezierPoints(points, area) {
        let i, ilen, point, inArea, inAreaPrev;
        let inAreaNext = _isPointInArea(points[0], area);
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          inAreaPrev = inArea;
          inArea = inAreaNext;
          inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
          if (!inArea) {
            continue;
          }
          point = points[i];
          if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
          }
          if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
          }
        }
      }
      function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
        let i, ilen, point, controlPoints;
        if (options.spanGaps) {
          points = points.filter((pt) => !pt.skip);
        }
        if (options.cubicInterpolationMode === "monotone") {
          splineCurveMonotone(points, indexAxis);
        } else {
          let prev = loop ? points[points.length - 1] : points[0];
          for (i = 0, ilen = points.length; i < ilen; ++i) {
            point = points[i];
            controlPoints = splineCurve(
              prev,
              point,
              points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen],
              options.tension
            );
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
          }
        }
        if (options.capBezierPoints) {
          capBezierPoints(points, area);
        }
      }
      const atEdge = (t) => t === 0 || t === 1;
      const elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
      const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
      const effects = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => (t -= 1) * t * t + 1,
        easeInOutCubic: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
        easeInOutQuart: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
        easeInOutQuint: (t) => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => -Math.cos(t * HALF_PI) + 1,
        easeOutSine: (t) => Math.sin(t * HALF_PI),
        easeInOutSine: (t) => -0.5 * (Math.cos(PI * t) - 1),
        easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
        easeOutExpo: (t) => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
        easeInOutExpo: (t) => atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
        easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
        easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
        easeInOutCirc: (t) => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
        easeOutElastic: (t) => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
        easeInOutElastic(t) {
          const s = 0.1125;
          const p = 0.45;
          return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
        },
        easeInBack(t) {
          const s = 1.70158;
          return t * t * ((s + 1) * t - s);
        },
        easeOutBack(t) {
          const s = 1.70158;
          return (t -= 1) * t * ((s + 1) * t + s) + 1;
        },
        easeInOutBack(t) {
          let s = 1.70158;
          if ((t /= 0.5) < 1) {
            return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
          }
          return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
        },
        easeInBounce: (t) => 1 - effects.easeOutBounce(1 - t),
        easeOutBounce(t) {
          const m = 7.5625;
          const d = 2.75;
          if (t < 1 / d) {
            return m * t * t;
          }
          if (t < 2 / d) {
            return m * (t -= 1.5 / d) * t + 0.75;
          }
          if (t < 2.5 / d) {
            return m * (t -= 2.25 / d) * t + 0.9375;
          }
          return m * (t -= 2.625 / d) * t + 0.984375;
        },
        easeInOutBounce: (t) => t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
      };
      function _pointInLine(p1, p2, t, mode) {
        return {
          x: p1.x + t * (p2.x - p1.x),
          y: p1.y + t * (p2.y - p1.y)
        };
      }
      function _steppedInterpolation(p1, p2, t, mode) {
        return {
          x: p1.x + t * (p2.x - p1.x),
          y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
        };
      }
      function _bezierInterpolation(p1, p2, t, mode) {
        const cp1 = { x: p1.cp2x, y: p1.cp2y };
        const cp2 = { x: p2.cp1x, y: p2.cp1y };
        const a = _pointInLine(p1, cp1, t);
        const b = _pointInLine(cp1, cp2, t);
        const c = _pointInLine(cp2, p2, t);
        const d = _pointInLine(a, b, t);
        const e = _pointInLine(b, c, t);
        return _pointInLine(d, e, t);
      }
      const intlCache = /* @__PURE__ */ new Map();
      function getNumberFormat(locale, options) {
        options = options || {};
        const cacheKey = locale + JSON.stringify(options);
        let formatter = intlCache.get(cacheKey);
        if (!formatter) {
          formatter = new Intl.NumberFormat(locale, options);
          intlCache.set(cacheKey, formatter);
        }
        return formatter;
      }
      function formatNumber(num, locale, options) {
        return getNumberFormat(locale, options).format(num);
      }
      const LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      const FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
      function toLineHeight(value, size) {
        const matches = ("" + value).match(LINE_HEIGHT);
        if (!matches || matches[1] === "normal") {
          return size * 1.2;
        }
        value = +matches[2];
        switch (matches[3]) {
          case "px":
            return value;
          case "%":
            value /= 100;
            break;
        }
        return size * value;
      }
      const numberOrZero = (v) => +v || 0;
      function _readValueToProps(value, props) {
        const ret = {};
        const objProps = isObject(props);
        const keys = objProps ? Object.keys(props) : props;
        const read = isObject(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
        for (const prop of keys) {
          ret[prop] = numberOrZero(read(prop));
        }
        return ret;
      }
      function toTRBL(value) {
        return _readValueToProps(value, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function toTRBLCorners(value) {
        return _readValueToProps(value, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function toPadding(value) {
        const obj = toTRBL(value);
        obj.width = obj.left + obj.right;
        obj.height = obj.top + obj.bottom;
        return obj;
      }
      function toFont(options, fallback) {
        options = options || {};
        fallback = fallback || defaults.font;
        let size = valueOrDefault(options.size, fallback.size);
        if (typeof size === "string") {
          size = parseInt(size, 10);
        }
        let style = valueOrDefault(options.style, fallback.style);
        if (style && !("" + style).match(FONT_STYLE)) {
          console.warn('Invalid font style specified: "' + style + '"');
          style = "";
        }
        const font = {
          family: valueOrDefault(options.family, fallback.family),
          lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
          size,
          style,
          weight: valueOrDefault(options.weight, fallback.weight),
          string: ""
        };
        font.string = toFontString(font);
        return font;
      }
      function resolve(inputs, context, index2, info) {
        let cacheable = true;
        let i, ilen, value;
        for (i = 0, ilen = inputs.length; i < ilen; ++i) {
          value = inputs[i];
          if (value === void 0) {
            continue;
          }
          if (context !== void 0 && typeof value === "function") {
            value = value(context);
            cacheable = false;
          }
          if (index2 !== void 0 && isArray(value)) {
            value = value[index2 % value.length];
            cacheable = false;
          }
          if (value !== void 0) {
            if (info && !cacheable) {
              info.cacheable = false;
            }
            return value;
          }
        }
      }
      function _addGrace(minmax, grace, beginAtZero) {
        const { min, max } = minmax;
        const change = toDimension(grace, (max - min) / 2);
        const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
        return {
          min: keepZero(min, -Math.abs(change)),
          max: keepZero(max, change)
        };
      }
      function createContext(parentContext, context) {
        return Object.assign(Object.create(parentContext), context);
      }
      const getRightToLeftAdapter = function(rectX, width) {
        return {
          x(x) {
            return rectX + rectX + width - x;
          },
          setWidth(w) {
            width = w;
          },
          textAlign(align) {
            if (align === "center") {
              return align;
            }
            return align === "right" ? "left" : "right";
          },
          xPlus(x, value) {
            return x - value;
          },
          leftForLtr(x, itemWidth) {
            return x - itemWidth;
          }
        };
      };
      const getLeftToRightAdapter = function() {
        return {
          x(x) {
            return x;
          },
          setWidth(w) {
          },
          textAlign(align) {
            return align;
          },
          xPlus(x, value) {
            return x + value;
          },
          leftForLtr(x, _itemWidth) {
            return x;
          }
        };
      };
      function getRtlAdapter(rtl, rectX, width) {
        return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
      }
      function overrideTextDirection(ctx, direction) {
        let style, original;
        if (direction === "ltr" || direction === "rtl") {
          style = ctx.canvas.style;
          original = [
            style.getPropertyValue("direction"),
            style.getPropertyPriority("direction")
          ];
          style.setProperty("direction", direction, "important");
          ctx.prevTextDirection = original;
        }
      }
      function restoreTextDirection(ctx, original) {
        if (original !== void 0) {
          delete ctx.prevTextDirection;
          ctx.canvas.style.setProperty("direction", original[0], original[1]);
        }
      }
      function propertyFn(property) {
        if (property === "angle") {
          return {
            between: _angleBetween,
            compare: _angleDiff,
            normalize: _normalizeAngle
          };
        }
        return {
          between: _isBetween,
          compare: (a, b) => a - b,
          normalize: (x) => x
        };
      }
      function normalizeSegment({ start, end, count, loop, style }) {
        return {
          start: start % count,
          end: end % count,
          loop: loop && (end - start + 1) % count === 0,
          style
        };
      }
      function getSegment(segment, points, bounds) {
        const { property, start: startBound, end: endBound } = bounds;
        const { between, normalize } = propertyFn(property);
        const count = points.length;
        let { start, end, loop } = segment;
        let i, ilen;
        if (loop) {
          start += count;
          end += count;
          for (i = 0, ilen = count; i < ilen; ++i) {
            if (!between(normalize(points[start % count][property]), startBound, endBound)) {
              break;
            }
            start--;
            end--;
          }
          start %= count;
          end %= count;
        }
        if (end < start) {
          end += count;
        }
        return { start, end, loop, style: segment.style };
      }
      function _boundSegment(segment, points, bounds) {
        if (!bounds) {
          return [segment];
        }
        const { property, start: startBound, end: endBound } = bounds;
        const count = points.length;
        const { compare, between, normalize } = propertyFn(property);
        const { start, end, loop, style } = getSegment(segment, points, bounds);
        const result = [];
        let inside = false;
        let subStart = null;
        let value, point, prevValue;
        const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
        const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
        const shouldStart = () => inside || startIsBefore();
        const shouldStop = () => !inside || endIsBefore();
        for (let i = start, prev = start; i <= end; ++i) {
          point = points[i % count];
          if (point.skip) {
            continue;
          }
          value = normalize(point[property]);
          if (value === prevValue) {
            continue;
          }
          inside = between(value, startBound, endBound);
          if (subStart === null && shouldStart()) {
            subStart = compare(value, startBound) === 0 ? i : prev;
          }
          if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({ start: subStart, end: i, loop, count, style }));
            subStart = null;
          }
          prev = i;
          prevValue = value;
        }
        if (subStart !== null) {
          result.push(normalizeSegment({ start: subStart, end, loop, count, style }));
        }
        return result;
      }
      function _boundSegments(line, bounds) {
        const result = [];
        const segments = line.segments;
        for (let i = 0; i < segments.length; i++) {
          const sub = _boundSegment(segments[i], line.points, bounds);
          if (sub.length) {
            result.push(...sub);
          }
        }
        return result;
      }
      function findStartAndEnd(points, count, loop, spanGaps) {
        let start = 0;
        let end = count - 1;
        if (loop && !spanGaps) {
          while (start < count && !points[start].skip) {
            start++;
          }
        }
        while (start < count && points[start].skip) {
          start++;
        }
        start %= count;
        if (loop) {
          end += start;
        }
        while (end > start && points[end % count].skip) {
          end--;
        }
        end %= count;
        return { start, end };
      }
      function solidSegments(points, start, max, loop) {
        const count = points.length;
        const result = [];
        let last = start;
        let prev = points[start];
        let end;
        for (end = start + 1; end <= max; ++end) {
          const cur = points[end % count];
          if (cur.skip || cur.stop) {
            if (!prev.skip) {
              loop = false;
              result.push({ start: start % count, end: (end - 1) % count, loop });
              start = last = cur.stop ? end : null;
            }
          } else {
            last = end;
            if (prev.skip) {
              start = end;
            }
          }
          prev = cur;
        }
        if (last !== null) {
          result.push({ start: start % count, end: last % count, loop });
        }
        return result;
      }
      function _computeSegments(line, segmentOptions) {
        const points = line.points;
        const spanGaps = line.options.spanGaps;
        const count = points.length;
        if (!count) {
          return [];
        }
        const loop = !!line._loop;
        const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
        if (spanGaps === true) {
          return splitByStyles(line, [{ start, end, loop }], points, segmentOptions);
        }
        const max = end < start ? end + count : end;
        const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
        return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
      }
      function splitByStyles(line, segments, points, segmentOptions) {
        if (!segmentOptions || !segmentOptions.setContext || !points) {
          return segments;
        }
        return doSplitByStyles(line, segments, points, segmentOptions);
      }
      function doSplitByStyles(line, segments, points, segmentOptions) {
        const chartContext = line._chart.getContext();
        const baseStyle = readStyle(line.options);
        const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
        const count = points.length;
        const result = [];
        let prevStyle = baseStyle;
        let start = segments[0].start;
        let i = start;
        function addStyle(s, e, l, st) {
          const dir = spanGaps ? -1 : 1;
          if (s === e) {
            return;
          }
          s += count;
          while (points[s % count].skip) {
            s -= dir;
          }
          while (points[e % count].skip) {
            e += dir;
          }
          if (s % count !== e % count) {
            result.push({ start: s % count, end: e % count, loop: l, style: st });
            prevStyle = st;
            start = e % count;
          }
        }
        for (const segment of segments) {
          start = spanGaps ? start : segment.start;
          let prev = points[start % count];
          let style;
          for (i = start + 1; i <= segment.end; i++) {
            const pt = points[i % count];
            style = readStyle(segmentOptions.setContext(createContext(chartContext, {
              type: "segment",
              p0: prev,
              p1: pt,
              p0DataIndex: (i - 1) % count,
              p1DataIndex: i % count,
              datasetIndex
            })));
            if (styleChanged(style, prevStyle)) {
              addStyle(start, i - 1, segment.loop, prevStyle);
            }
            prev = pt;
            prevStyle = style;
          }
          if (start < i - 1) {
            addStyle(start, i - 1, segment.loop, prevStyle);
          }
        }
        return result;
      }
      function readStyle(options) {
        return {
          backgroundColor: options.backgroundColor,
          borderCapStyle: options.borderCapStyle,
          borderDash: options.borderDash,
          borderDashOffset: options.borderDashOffset,
          borderJoinStyle: options.borderJoinStyle,
          borderWidth: options.borderWidth,
          borderColor: options.borderColor
        };
      }
      function styleChanged(style, prevStyle) {
        return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
      }
      var helpers = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        easingEffects: effects,
        isPatternOrGradient,
        color,
        getHoverColor,
        noop,
        uid,
        isNullOrUndef,
        isArray,
        isObject,
        isFinite: isNumberFinite,
        finiteOrDefault,
        valueOrDefault,
        toPercentage,
        toDimension,
        callback,
        each,
        _elementsEqual,
        clone: clone$1,
        _merger,
        merge,
        mergeIf,
        _mergerIf,
        _deprecated,
        resolveObjectKey,
        _splitKey,
        _capitalize,
        defined,
        isFunction,
        setsEqual,
        _isClickEvent,
        toFontString,
        _measureText,
        _longestText,
        _alignPixel,
        clearCanvas,
        drawPoint,
        drawPointLegend,
        _isPointInArea,
        clipArea,
        unclipArea,
        _steppedLineTo,
        _bezierCurveTo,
        renderText,
        addRoundedRectPath,
        _lookup,
        _lookupByKey,
        _rlookupByKey,
        _filterBetween,
        listenArrayEvents,
        unlistenArrayEvents,
        _arrayUnique,
        _createResolver,
        _attachContext,
        _descriptors,
        _parseObjectDataRadialScale,
        splineCurve,
        splineCurveMonotone,
        _updateBezierControlPoints,
        _isDomSupported,
        _getParentNode,
        getStyle,
        getRelativePosition,
        getMaximumSize,
        retinaScale,
        supportsEventListenerOptions,
        readUsedSize,
        fontString,
        requestAnimFrame,
        throttled,
        debounce,
        _toLeftRightCenter,
        _alignStartEnd,
        _textX,
        _getStartAndCountOfVisiblePoints,
        _scaleRangesChanged,
        _pointInLine,
        _steppedInterpolation,
        _bezierInterpolation,
        formatNumber,
        toLineHeight,
        _readValueToProps,
        toTRBL,
        toTRBLCorners,
        toPadding,
        toFont,
        resolve,
        _addGrace,
        createContext,
        PI,
        TAU,
        PITAU,
        INFINITY,
        RAD_PER_DEG,
        HALF_PI,
        QUARTER_PI,
        TWO_THIRDS_PI,
        log10,
        sign,
        niceNum,
        _factorize,
        isNumber,
        almostEquals,
        almostWhole,
        _setMinAndMaxByKey,
        toRadians,
        toDegrees,
        _decimalPlaces,
        getAngleFromPoint,
        distanceBetweenPoints,
        _angleDiff,
        _normalizeAngle,
        _angleBetween,
        _limitValue,
        _int16Range,
        _isBetween,
        getRtlAdapter,
        overrideTextDirection,
        restoreTextDirection,
        _boundSegment,
        _boundSegments,
        _computeSegments
      });
      function binarySearch(metaset, axis, value, intersect) {
        const { controller, data, _sorted } = metaset;
        const iScale = controller._cachedMeta.iScale;
        if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
          const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
          if (!intersect) {
            return lookupMethod(data, axis, value);
          } else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === "function" && el.getRange(axis);
            if (range) {
              const start = lookupMethod(data, axis, value - range);
              const end = lookupMethod(data, axis, value + range);
              return { lo: start.lo, hi: end.hi };
            }
          }
        }
        return { lo: 0, hi: data.length - 1 };
      }
      function evaluateInteractionItems(chart, axis, position, handler, intersect) {
        const metasets = chart.getSortedVisibleDatasetMetas();
        const value = position[axis];
        for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
          const { index: index2, data } = metasets[i];
          const { lo, hi } = binarySearch(metasets[i], axis, value, intersect);
          for (let j = lo; j <= hi; ++j) {
            const element = data[j];
            if (!element.skip) {
              handler(element, index2, j);
            }
          }
        }
      }
      function getDistanceMetricForAxis(axis) {
        const useX = axis.indexOf("x") !== -1;
        const useY = axis.indexOf("y") !== -1;
        return function(pt1, pt2) {
          const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
          const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
          return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        };
      }
      function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
        const items = [];
        if (!includeInvisible && !chart.isPointInArea(position)) {
          return items;
        }
        const evaluationFunc = function(element, datasetIndex, index2) {
          if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) {
            return;
          }
          if (element.inRange(position.x, position.y, useFinalPosition)) {
            items.push({ element, datasetIndex, index: index2 });
          }
        };
        evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
        return items;
      }
      function getNearestRadialItems(chart, position, axis, useFinalPosition) {
        let items = [];
        function evaluationFunc(element, datasetIndex, index2) {
          const { startAngle, endAngle } = element.getProps(["startAngle", "endAngle"], useFinalPosition);
          const { angle } = getAngleFromPoint(element, { x: position.x, y: position.y });
          if (_angleBetween(angle, startAngle, endAngle)) {
            items.push({ element, datasetIndex, index: index2 });
          }
        }
        evaluateInteractionItems(chart, axis, position, evaluationFunc);
        return items;
      }
      function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
        let items = [];
        const distanceMetric = getDistanceMetricForAxis(axis);
        let minDistance = Number.POSITIVE_INFINITY;
        function evaluationFunc(element, datasetIndex, index2) {
          const inRange2 = element.inRange(position.x, position.y, useFinalPosition);
          if (intersect && !inRange2) {
            return;
          }
          const center = element.getCenterPoint(useFinalPosition);
          const pointInArea = !!includeInvisible || chart.isPointInArea(center);
          if (!pointInArea && !inRange2) {
            return;
          }
          const distance = distanceMetric(position, center);
          if (distance < minDistance) {
            items = [{ element, datasetIndex, index: index2 }];
            minDistance = distance;
          } else if (distance === minDistance) {
            items.push({ element, datasetIndex, index: index2 });
          }
        }
        evaluateInteractionItems(chart, axis, position, evaluationFunc);
        return items;
      }
      function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
        if (!includeInvisible && !chart.isPointInArea(position)) {
          return [];
        }
        return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
      }
      function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
        const items = [];
        const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
        let intersectsItem = false;
        evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index2) => {
          if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({ element, datasetIndex, index: index2 });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
          }
        });
        if (intersect && !intersectsItem) {
          return [];
        }
        return items;
      }
      var Interaction = {
        evaluateInteractionItems,
        modes: {
          index(chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || "x";
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements2 = [];
            if (!items.length) {
              return [];
            }
            chart.getSortedVisibleDatasetMetas().forEach((meta) => {
              const index2 = items[0].index;
              const element = meta.data[index2];
              if (element && !element.skip) {
                elements2.push({ element, datasetIndex: meta.index, index: index2 });
              }
            });
            return elements2;
          },
          dataset(chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
              const datasetIndex = items[0].datasetIndex;
              const data = chart.getDatasetMeta(datasetIndex).data;
              items = [];
              for (let i = 0; i < data.length; ++i) {
                items.push({ element: data[i], datasetIndex, index: i });
              }
            }
            return items;
          },
          point(chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
          },
          nearest(chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
          },
          x(chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
          },
          y(chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
          }
        }
      };
      const STATIC_POSITIONS = ["left", "top", "right", "bottom"];
      function filterByPosition(array, position) {
        return array.filter((v) => v.pos === position);
      }
      function filterDynamicPositionByAxis(array, axis) {
        return array.filter((v) => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
      }
      function sortByWeight(array, reverse) {
        return array.sort((a, b) => {
          const v0 = reverse ? b : a;
          const v1 = reverse ? a : b;
          return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
        });
      }
      function wrapBoxes(boxes) {
        const layoutBoxes = [];
        let i, ilen, box, pos, stack, stackWeight;
        for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
          box = boxes[i];
          ({ position: pos, options: { stack, stackWeight = 1 } } = box);
          layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
          });
        }
        return layoutBoxes;
      }
      function buildStacks(layouts2) {
        const stacks = {};
        for (const wrap of layouts2) {
          const { stack, pos, stackWeight } = wrap;
          if (!stack || !STATIC_POSITIONS.includes(pos)) {
            continue;
          }
          const _stack = stacks[stack] || (stacks[stack] = { count: 0, placed: 0, weight: 0, size: 0 });
          _stack.count++;
          _stack.weight += stackWeight;
        }
        return stacks;
      }
      function setLayoutDims(layouts2, params) {
        const stacks = buildStacks(layouts2);
        const { vBoxMaxWidth, hBoxMaxHeight } = params;
        let i, ilen, layout;
        for (i = 0, ilen = layouts2.length; i < ilen; ++i) {
          layout = layouts2[i];
          const { fullSize } = layout.box;
          const stack = stacks[layout.stack];
          const factor = stack && layout.stackWeight / stack.weight;
          if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
          } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
          }
        }
        return stacks;
      }
      function buildLayoutBoxes(boxes) {
        const layoutBoxes = wrapBoxes(boxes);
        const fullSize = sortByWeight(layoutBoxes.filter((wrap) => wrap.box.fullSize), true);
        const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
        const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
        const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
        const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
        const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
        const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
        return {
          fullSize,
          leftAndTop: left.concat(top),
          rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
          chartArea: filterByPosition(layoutBoxes, "chartArea"),
          vertical: left.concat(right).concat(centerVertical),
          horizontal: top.concat(bottom).concat(centerHorizontal)
        };
      }
      function getCombinedMax(maxPadding, chartArea, a, b) {
        return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
      }
      function updateMaxPadding(maxPadding, boxPadding) {
        maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
        maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
        maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
        maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
      }
      function updateDims(chartArea, params, layout, stacks) {
        const { pos, box } = layout;
        const maxPadding = chartArea.maxPadding;
        if (!isObject(pos)) {
          if (layout.size) {
            chartArea[pos] -= layout.size;
          }
          const stack = stacks[layout.stack] || { size: 0, count: 1 };
          stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
          layout.size = stack.size / stack.count;
          chartArea[pos] += layout.size;
        }
        if (box.getPadding) {
          updateMaxPadding(maxPadding, box.getPadding());
        }
        const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
        const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
        const widthChanged = newWidth !== chartArea.w;
        const heightChanged = newHeight !== chartArea.h;
        chartArea.w = newWidth;
        chartArea.h = newHeight;
        return layout.horizontal ? { same: widthChanged, other: heightChanged } : { same: heightChanged, other: widthChanged };
      }
      function handleMaxPadding(chartArea) {
        const maxPadding = chartArea.maxPadding;
        function updatePos(pos) {
          const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
          chartArea[pos] += change;
          return change;
        }
        chartArea.y += updatePos("top");
        chartArea.x += updatePos("left");
        updatePos("right");
        updatePos("bottom");
      }
      function getMargins(horizontal, chartArea) {
        const maxPadding = chartArea.maxPadding;
        function marginForPositions(positions2) {
          const margin = { left: 0, top: 0, right: 0, bottom: 0 };
          positions2.forEach((pos) => {
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
          });
          return margin;
        }
        return horizontal ? marginForPositions(["left", "right"]) : marginForPositions(["top", "bottom"]);
      }
      function fitBoxes(boxes, chartArea, params, stacks) {
        const refitBoxes = [];
        let i, ilen, layout, box, refit, changed;
        for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
          layout = boxes[i];
          box = layout.box;
          box.update(
            layout.width || chartArea.w,
            layout.height || chartArea.h,
            getMargins(layout.horizontal, chartArea)
          );
          const { same, other } = updateDims(chartArea, params, layout, stacks);
          refit |= same && refitBoxes.length;
          changed = changed || other;
          if (!box.fullSize) {
            refitBoxes.push(layout);
          }
        }
        return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
      }
      function setBoxDims(box, left, top, width, height) {
        box.top = top;
        box.left = left;
        box.right = left + width;
        box.bottom = top + height;
        box.width = width;
        box.height = height;
      }
      function placeBoxes(boxes, chartArea, params, stacks) {
        const userPadding = params.padding;
        let { x, y } = chartArea;
        for (const layout of boxes) {
          const box = layout.box;
          const stack = stacks[layout.stack] || { count: 1, placed: 0, weight: 1 };
          const weight = layout.stackWeight / stack.weight || 1;
          if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if (defined(stack.start)) {
              y = stack.start;
            }
            if (box.fullSize) {
              setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            } else {
              setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            }
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
          } else {
            const height = chartArea.h * weight;
            const width = stack.size || box.width;
            if (defined(stack.start)) {
              x = stack.start;
            }
            if (box.fullSize) {
              setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
            } else {
              setBoxDims(box, x, chartArea.top + stack.placed, width, height);
            }
            stack.start = x;
            stack.placed += height;
            x = box.right;
          }
        }
        chartArea.x = x;
        chartArea.y = y;
      }
      defaults.set("layout", {
        autoPadding: true,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      });
      var layouts = {
        addBox(chart, item) {
          if (!chart.boxes) {
            chart.boxes = [];
          }
          item.fullSize = item.fullSize || false;
          item.position = item.position || "top";
          item.weight = item.weight || 0;
          item._layers = item._layers || function() {
            return [{
              z: 0,
              draw(chartArea) {
                item.draw(chartArea);
              }
            }];
          };
          chart.boxes.push(item);
        },
        removeBox(chart, layoutItem) {
          const index2 = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
          if (index2 !== -1) {
            chart.boxes.splice(index2, 1);
          }
        },
        configure(chart, item, options) {
          item.fullSize = options.fullSize;
          item.position = options.position;
          item.weight = options.weight;
        },
        update(chart, width, height, minPadding) {
          if (!chart) {
            return;
          }
          const padding = toPadding(chart.options.layout.padding);
          const availableWidth = Math.max(width - padding.width, 0);
          const availableHeight = Math.max(height - padding.height, 0);
          const boxes = buildLayoutBoxes(chart.boxes);
          const verticalBoxes = boxes.vertical;
          const horizontalBoxes = boxes.horizontal;
          each(chart.boxes, (box) => {
            if (typeof box.beforeLayout === "function") {
              box.beforeLayout();
            }
          });
          const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
          const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
          });
          const maxPadding = Object.assign({}, padding);
          updateMaxPadding(maxPadding, toPadding(minPadding));
          const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
          }, padding);
          const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
          fitBoxes(boxes.fullSize, chartArea, params, stacks);
          fitBoxes(verticalBoxes, chartArea, params, stacks);
          if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
            fitBoxes(verticalBoxes, chartArea, params, stacks);
          }
          handleMaxPadding(chartArea);
          placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
          chartArea.x += chartArea.w;
          chartArea.y += chartArea.h;
          placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
          chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
          };
          each(boxes.chartArea, (layout) => {
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, { left: 0, top: 0, right: 0, bottom: 0 });
          });
        }
      };
      class BasePlatform {
        acquireContext(canvas, aspectRatio) {
        }
        releaseContext(context) {
          return false;
        }
        addEventListener(chart, type, listener) {
        }
        removeEventListener(chart, type, listener) {
        }
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(element, width, height, aspectRatio) {
          width = Math.max(0, width || element.width);
          height = height || element.height;
          return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
          };
        }
        isAttached(canvas) {
          return true;
        }
        updateConfig(config) {
        }
      }
      class BasicPlatform extends BasePlatform {
        acquireContext(item) {
          return item && item.getContext && item.getContext("2d") || null;
        }
        updateConfig(config) {
          config.options.animation = false;
        }
      }
      const EXPANDO_KEY = "$chartjs";
      const EVENT_TYPES = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };
      const isNullOrEmpty = (value) => value === null || value === "";
      function initCanvas(canvas, aspectRatio) {
        const style = canvas.style;
        const renderHeight = canvas.getAttribute("height");
        const renderWidth = canvas.getAttribute("width");
        canvas[EXPANDO_KEY] = {
          initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
              display: style.display,
              height: style.height,
              width: style.width
            }
          }
        };
        style.display = style.display || "block";
        style.boxSizing = style.boxSizing || "border-box";
        if (isNullOrEmpty(renderWidth)) {
          const displayWidth = readUsedSize(canvas, "width");
          if (displayWidth !== void 0) {
            canvas.width = displayWidth;
          }
        }
        if (isNullOrEmpty(renderHeight)) {
          if (canvas.style.height === "") {
            canvas.height = canvas.width / (aspectRatio || 2);
          } else {
            const displayHeight = readUsedSize(canvas, "height");
            if (displayHeight !== void 0) {
              canvas.height = displayHeight;
            }
          }
        }
        return canvas;
      }
      const eventListenerOptions = supportsEventListenerOptions ? { passive: true } : false;
      function addListener(node, type, listener) {
        node.addEventListener(type, listener, eventListenerOptions);
      }
      function removeListener(chart, type, listener) {
        chart.canvas.removeEventListener(type, listener, eventListenerOptions);
      }
      function fromNativeEvent(event, chart) {
        const type = EVENT_TYPES[event.type] || event.type;
        const { x, y } = getRelativePosition(event, chart);
        return {
          type,
          chart,
          native: event,
          x: x !== void 0 ? x : null,
          y: y !== void 0 ? y : null
        };
      }
      function nodeListContains(nodeList, canvas) {
        for (const node of nodeList) {
          if (node === canvas || node.contains(canvas)) {
            return true;
          }
        }
      }
      function createAttachObserver(chart, type, listener) {
        const canvas = chart.canvas;
        const observer = new MutationObserver((entries) => {
          let trigger = false;
          for (const entry of entries) {
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
          }
          if (trigger) {
            listener();
          }
        });
        observer.observe(document, { childList: true, subtree: true });
        return observer;
      }
      function createDetachObserver(chart, type, listener) {
        const canvas = chart.canvas;
        const observer = new MutationObserver((entries) => {
          let trigger = false;
          for (const entry of entries) {
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
          }
          if (trigger) {
            listener();
          }
        });
        observer.observe(document, { childList: true, subtree: true });
        return observer;
      }
      const drpListeningCharts = /* @__PURE__ */ new Map();
      let oldDevicePixelRatio = 0;
      function onWindowResize() {
        const dpr = window.devicePixelRatio;
        if (dpr === oldDevicePixelRatio) {
          return;
        }
        oldDevicePixelRatio = dpr;
        drpListeningCharts.forEach((resize, chart) => {
          if (chart.currentDevicePixelRatio !== dpr) {
            resize();
          }
        });
      }
      function listenDevicePixelRatioChanges(chart, resize) {
        if (!drpListeningCharts.size) {
          window.addEventListener("resize", onWindowResize);
        }
        drpListeningCharts.set(chart, resize);
      }
      function unlistenDevicePixelRatioChanges(chart) {
        drpListeningCharts.delete(chart);
        if (!drpListeningCharts.size) {
          window.removeEventListener("resize", onWindowResize);
        }
      }
      function createResizeObserver(chart, type, listener) {
        const canvas = chart.canvas;
        const container = canvas && _getParentNode(canvas);
        if (!container) {
          return;
        }
        const resize = throttled((width, height) => {
          const w = container.clientWidth;
          listener(width, height);
          if (w < container.clientWidth) {
            listener();
          }
        }, window);
        const observer = new ResizeObserver((entries) => {
          const entry = entries[0];
          const width = entry.contentRect.width;
          const height = entry.contentRect.height;
          if (width === 0 && height === 0) {
            return;
          }
          resize(width, height);
        });
        observer.observe(container);
        listenDevicePixelRatioChanges(chart, resize);
        return observer;
      }
      function releaseObserver(chart, type, observer) {
        if (observer) {
          observer.disconnect();
        }
        if (type === "resize") {
          unlistenDevicePixelRatioChanges(chart);
        }
      }
      function createProxyAndListen(chart, type, listener) {
        const canvas = chart.canvas;
        const proxy = throttled((event) => {
          if (chart.ctx !== null) {
            listener(fromNativeEvent(event, chart));
          }
        }, chart, (args) => {
          const event = args[0];
          return [event, event.offsetX, event.offsetY];
        });
        addListener(canvas, type, proxy);
        return proxy;
      }
      class DomPlatform extends BasePlatform {
        acquireContext(canvas, aspectRatio) {
          const context = canvas && canvas.getContext && canvas.getContext("2d");
          if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
          }
          return null;
        }
        releaseContext(context) {
          const canvas = context.canvas;
          if (!canvas[EXPANDO_KEY]) {
            return false;
          }
          const initial = canvas[EXPANDO_KEY].initial;
          ["height", "width"].forEach((prop) => {
            const value = initial[prop];
            if (isNullOrUndef(value)) {
              canvas.removeAttribute(prop);
            } else {
              canvas.setAttribute(prop, value);
            }
          });
          const style = initial.style || {};
          Object.keys(style).forEach((key) => {
            canvas.style[key] = style[key];
          });
          canvas.width = canvas.width;
          delete canvas[EXPANDO_KEY];
          return true;
        }
        addEventListener(chart, type, listener) {
          this.removeEventListener(chart, type);
          const proxies = chart.$proxies || (chart.$proxies = {});
          const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
          };
          const handler = handlers[type] || createProxyAndListen;
          proxies[type] = handler(chart, type, listener);
        }
        removeEventListener(chart, type) {
          const proxies = chart.$proxies || (chart.$proxies = {});
          const proxy = proxies[type];
          if (!proxy) {
            return;
          }
          const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
          };
          const handler = handlers[type] || removeListener;
          handler(chart, type, proxy);
          proxies[type] = void 0;
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(canvas, width, height, aspectRatio) {
          return getMaximumSize(canvas, width, height, aspectRatio);
        }
        isAttached(canvas) {
          const container = _getParentNode(canvas);
          return !!(container && container.isConnected);
        }
      }
      function _detectPlatform(canvas) {
        if (!_isDomSupported() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
          return BasicPlatform;
        }
        return DomPlatform;
      }
      var platforms = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        _detectPlatform,
        BasePlatform,
        BasicPlatform,
        DomPlatform
      });
      const transparent = "transparent";
      const interpolators = {
        boolean(from2, to2, factor) {
          return factor > 0.5 ? to2 : from2;
        },
        color(from2, to2, factor) {
          const c0 = color(from2 || transparent);
          const c1 = c0.valid && color(to2 || transparent);
          return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to2;
        },
        number(from2, to2, factor) {
          return from2 + (to2 - from2) * factor;
        }
      };
      class Animation {
        constructor(cfg, target, prop, to2) {
          const currentValue = target[prop];
          to2 = resolve([cfg.to, to2, currentValue, cfg.from]);
          const from2 = resolve([cfg.from, currentValue, to2]);
          this._active = true;
          this._fn = cfg.fn || interpolators[cfg.type || typeof from2];
          this._easing = effects[cfg.easing] || effects.linear;
          this._start = Math.floor(Date.now() + (cfg.delay || 0));
          this._duration = this._total = Math.floor(cfg.duration);
          this._loop = !!cfg.loop;
          this._target = target;
          this._prop = prop;
          this._from = from2;
          this._to = to2;
          this._promises = void 0;
        }
        active() {
          return this._active;
        }
        update(cfg, to2, date) {
          if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = resolve([cfg.to, to2, currentValue, cfg.from]);
            this._from = resolve([cfg.from, currentValue, to2]);
          }
        }
        cancel() {
          if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
          }
        }
        tick(date) {
          const elapsed = date - this._start;
          const duration = this._duration;
          const prop = this._prop;
          const from2 = this._from;
          const loop = this._loop;
          const to2 = this._to;
          let factor;
          this._active = from2 !== to2 && (loop || elapsed < duration);
          if (!this._active) {
            this._target[prop] = to2;
            this._notify(true);
            return;
          }
          if (elapsed < 0) {
            this._target[prop] = from2;
            return;
          }
          factor = elapsed / duration % 2;
          factor = loop && factor > 1 ? 2 - factor : factor;
          factor = this._easing(Math.min(1, Math.max(0, factor)));
          this._target[prop] = this._fn(from2, to2, factor);
        }
        wait() {
          const promises = this._promises || (this._promises = []);
          return new Promise((res, rej) => {
            promises.push({ res, rej });
          });
        }
        _notify(resolved) {
          const method = resolved ? "res" : "rej";
          const promises = this._promises || [];
          for (let i = 0; i < promises.length; i++) {
            promises[i][method]();
          }
        }
      }
      const numbers = ["x", "y", "borderWidth", "radius", "tension"];
      const colors = ["color", "borderColor", "backgroundColor"];
      defaults.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
      });
      const animationOptions = Object.keys(defaults.animation);
      defaults.describe("animation", {
        _fallback: false,
        _indexable: false,
        _scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
      });
      defaults.set("animations", {
        colors: {
          type: "color",
          properties: colors
        },
        numbers: {
          type: "number",
          properties: numbers
        }
      });
      defaults.describe("animations", {
        _fallback: "animation"
      });
      defaults.set("transitions", {
        active: {
          animation: {
            duration: 400
          }
        },
        resize: {
          animation: {
            duration: 0
          }
        },
        show: {
          animations: {
            colors: {
              from: "transparent"
            },
            visible: {
              type: "boolean",
              duration: 0
            }
          }
        },
        hide: {
          animations: {
            colors: {
              to: "transparent"
            },
            visible: {
              type: "boolean",
              easing: "linear",
              fn: (v) => v | 0
            }
          }
        }
      });
      class Animations {
        constructor(chart, config) {
          this._chart = chart;
          this._properties = /* @__PURE__ */ new Map();
          this.configure(config);
        }
        configure(config) {
          if (!isObject(config)) {
            return;
          }
          const animatedProps = this._properties;
          Object.getOwnPropertyNames(config).forEach((key) => {
            const cfg = config[key];
            if (!isObject(cfg)) {
              return;
            }
            const resolved = {};
            for (const option of animationOptions) {
              resolved[option] = cfg[option];
            }
            (isArray(cfg.properties) && cfg.properties || [key]).forEach((prop) => {
              if (prop === key || !animatedProps.has(prop)) {
                animatedProps.set(prop, resolved);
              }
            });
          });
        }
        _animateOptions(target, values) {
          const newOptions = values.options;
          const options = resolveTargetOptions(target, newOptions);
          if (!options) {
            return [];
          }
          const animations = this._createAnimations(options, newOptions);
          if (newOptions.$shared) {
            awaitAll(target.options.$animations, newOptions).then(() => {
              target.options = newOptions;
            }, () => {
            });
          }
          return animations;
        }
        _createAnimations(target, values) {
          const animatedProps = this._properties;
          const animations = [];
          const running = target.$animations || (target.$animations = {});
          const props = Object.keys(values);
          const date = Date.now();
          let i;
          for (i = props.length - 1; i >= 0; --i) {
            const prop = props[i];
            if (prop.charAt(0) === "$") {
              continue;
            }
            if (prop === "options") {
              animations.push(...this._animateOptions(target, values));
              continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
              if (cfg && animation.active()) {
                animation.update(cfg, value, date);
                continue;
              } else {
                animation.cancel();
              }
            }
            if (!cfg || !cfg.duration) {
              target[prop] = value;
              continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
          }
          return animations;
        }
        update(target, values) {
          if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
          }
          const animations = this._createAnimations(target, values);
          if (animations.length) {
            animator.add(this._chart, animations);
            return true;
          }
        }
      }
      function awaitAll(animations, properties) {
        const running = [];
        const keys = Object.keys(properties);
        for (let i = 0; i < keys.length; i++) {
          const anim = animations[keys[i]];
          if (anim && anim.active()) {
            running.push(anim.wait());
          }
        }
        return Promise.all(running);
      }
      function resolveTargetOptions(target, newOptions) {
        if (!newOptions) {
          return;
        }
        let options = target.options;
        if (!options) {
          target.options = newOptions;
          return;
        }
        if (options.$shared) {
          target.options = options = Object.assign({}, options, { $shared: false, $animations: {} });
        }
        return options;
      }
      function scaleClip(scale, allowedOverflow) {
        const opts = scale && scale.options || {};
        const reverse = opts.reverse;
        const min = opts.min === void 0 ? allowedOverflow : 0;
        const max = opts.max === void 0 ? allowedOverflow : 0;
        return {
          start: reverse ? max : min,
          end: reverse ? min : max
        };
      }
      function defaultClip(xScale, yScale, allowedOverflow) {
        if (allowedOverflow === false) {
          return false;
        }
        const x = scaleClip(xScale, allowedOverflow);
        const y = scaleClip(yScale, allowedOverflow);
        return {
          top: y.end,
          right: x.end,
          bottom: y.start,
          left: x.start
        };
      }
      function toClip(value) {
        let t, r, b, l;
        if (isObject(value)) {
          t = value.top;
          r = value.right;
          b = value.bottom;
          l = value.left;
        } else {
          t = r = b = l = value;
        }
        return {
          top: t,
          right: r,
          bottom: b,
          left: l,
          disabled: value === false
        };
      }
      function getSortedDatasetIndices(chart, filterVisible) {
        const keys = [];
        const metasets = chart._getSortedDatasetMetas(filterVisible);
        let i, ilen;
        for (i = 0, ilen = metasets.length; i < ilen; ++i) {
          keys.push(metasets[i].index);
        }
        return keys;
      }
      function applyStack(stack, value, dsIndex, options = {}) {
        const keys = stack.keys;
        const singleMode = options.mode === "single";
        let i, ilen, datasetIndex, otherValue;
        if (value === null) {
          return;
        }
        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          datasetIndex = +keys[i];
          if (datasetIndex === dsIndex) {
            if (options.all) {
              continue;
            }
            break;
          }
          otherValue = stack.values[datasetIndex];
          if (isNumberFinite(otherValue) && (singleMode || (value === 0 || sign(value) === sign(otherValue)))) {
            value += otherValue;
          }
        }
        return value;
      }
      function convertObjectDataToArray(data) {
        const keys = Object.keys(data);
        const adata = new Array(keys.length);
        let i, ilen, key;
        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          key = keys[i];
          adata[i] = {
            x: key,
            y: data[key]
          };
        }
        return adata;
      }
      function isStacked(scale, meta) {
        const stacked = scale && scale.options.stacked;
        return stacked || stacked === void 0 && meta.stack !== void 0;
      }
      function getStackKey(indexScale, valueScale, meta) {
        return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
      }
      function getUserBounds(scale) {
        const { min, max, minDefined, maxDefined } = scale.getUserBounds();
        return {
          min: minDefined ? min : Number.NEGATIVE_INFINITY,
          max: maxDefined ? max : Number.POSITIVE_INFINITY
        };
      }
      function getOrCreateStack(stacks, stackKey, indexValue) {
        const subStack = stacks[stackKey] || (stacks[stackKey] = {});
        return subStack[indexValue] || (subStack[indexValue] = {});
      }
      function getLastIndexInStack(stack, vScale, positive, type) {
        for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
          const value = stack[meta.index];
          if (positive && value > 0 || !positive && value < 0) {
            return meta.index;
          }
        }
        return null;
      }
      function updateStacks(controller, parsed) {
        const { chart, _cachedMeta: meta } = controller;
        const stacks = chart._stacks || (chart._stacks = {});
        const { iScale, vScale, index: datasetIndex } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const key = getStackKey(iScale, vScale, meta);
        const ilen = parsed.length;
        let stack;
        for (let i = 0; i < ilen; ++i) {
          const item = parsed[i];
          const { [iAxis]: index2, [vAxis]: value } = item;
          const itemStacks = item._stacks || (item._stacks = {});
          stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index2);
          stack[datasetIndex] = value;
          stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
          stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
        }
      }
      function getFirstScaleId(chart, axis) {
        const scales2 = chart.scales;
        return Object.keys(scales2).filter((key) => scales2[key].axis === axis).shift();
      }
      function createDatasetContext(parent, index2) {
        return createContext(
          parent,
          {
            active: false,
            dataset: void 0,
            datasetIndex: index2,
            index: index2,
            mode: "default",
            type: "dataset"
          }
        );
      }
      function createDataContext(parent, index2, element) {
        return createContext(parent, {
          active: false,
          dataIndex: index2,
          parsed: void 0,
          raw: void 0,
          element,
          index: index2,
          mode: "default",
          type: "data"
        });
      }
      function clearStacks(meta, items) {
        const datasetIndex = meta.controller.index;
        const axis = meta.vScale && meta.vScale.axis;
        if (!axis) {
          return;
        }
        items = items || meta._parsed;
        for (const parsed of items) {
          const stacks = parsed._stacks;
          if (!stacks || stacks[axis] === void 0 || stacks[axis][datasetIndex] === void 0) {
            return;
          }
          delete stacks[axis][datasetIndex];
        }
      }
      const isDirectUpdateMode = (mode) => mode === "reset" || mode === "none";
      const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
      const createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && { keys: getSortedDatasetIndices(chart, true), values: null };
      class DatasetController {
        constructor(chart, datasetIndex) {
          this.chart = chart;
          this._ctx = chart.ctx;
          this.index = datasetIndex;
          this._cachedDataOpts = {};
          this._cachedMeta = this.getMeta();
          this._type = this._cachedMeta.type;
          this.options = void 0;
          this._parsing = false;
          this._data = void 0;
          this._objectData = void 0;
          this._sharedOptions = void 0;
          this._drawStart = void 0;
          this._drawCount = void 0;
          this.enableOptionSharing = false;
          this.supportsDecimation = false;
          this.$context = void 0;
          this._syncList = [];
          this.initialize();
        }
        initialize() {
          const meta = this._cachedMeta;
          this.configure();
          this.linkScales();
          meta._stacked = isStacked(meta.vScale, meta);
          this.addElements();
        }
        updateIndex(datasetIndex) {
          if (this.index !== datasetIndex) {
            clearStacks(this._cachedMeta);
          }
          this.index = datasetIndex;
        }
        linkScales() {
          const chart = this.chart;
          const meta = this._cachedMeta;
          const dataset = this.getDataset();
          const chooseId = (axis, x, y, r) => axis === "x" ? x : axis === "r" ? r : y;
          const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, "x"));
          const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, "y"));
          const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, "r"));
          const indexAxis = meta.indexAxis;
          const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
          const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
          meta.xScale = this.getScaleForId(xid);
          meta.yScale = this.getScaleForId(yid);
          meta.rScale = this.getScaleForId(rid);
          meta.iScale = this.getScaleForId(iid);
          meta.vScale = this.getScaleForId(vid);
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(scaleID) {
          return this.chart.scales[scaleID];
        }
        _getOtherScale(scale) {
          const meta = this._cachedMeta;
          return scale === meta.iScale ? meta.vScale : meta.iScale;
        }
        reset() {
          this._update("reset");
        }
        _destroy() {
          const meta = this._cachedMeta;
          if (this._data) {
            unlistenArrayEvents(this._data, this);
          }
          if (meta._stacked) {
            clearStacks(meta);
          }
        }
        _dataCheck() {
          const dataset = this.getDataset();
          const data = dataset.data || (dataset.data = []);
          const _data = this._data;
          if (isObject(data)) {
            this._data = convertObjectDataToArray(data);
          } else if (_data !== data) {
            if (_data) {
              unlistenArrayEvents(_data, this);
              const meta = this._cachedMeta;
              clearStacks(meta);
              meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) {
              listenArrayEvents(data, this);
            }
            this._syncList = [];
            this._data = data;
          }
        }
        addElements() {
          const meta = this._cachedMeta;
          this._dataCheck();
          if (this.datasetElementType) {
            meta.dataset = new this.datasetElementType();
          }
        }
        buildOrUpdateElements(resetNewElements) {
          const meta = this._cachedMeta;
          const dataset = this.getDataset();
          let stackChanged = false;
          this._dataCheck();
          const oldStacked = meta._stacked;
          meta._stacked = isStacked(meta.vScale, meta);
          if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
          }
          this._resyncElements(resetNewElements);
          if (stackChanged || oldStacked !== meta._stacked) {
            updateStacks(this, meta._parsed);
          }
        }
        configure() {
          const config = this.chart.config;
          const scopeKeys = config.datasetScopeKeys(this._type);
          const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
          this.options = config.createResolver(scopes, this.getContext());
          this._parsing = this.options.parsing;
          this._cachedDataOpts = {};
        }
        parse(start, count) {
          const { _cachedMeta: meta, _data: data } = this;
          const { iScale, _stacked } = meta;
          const iAxis = iScale.axis;
          let sorted = start === 0 && count === data.length ? true : meta._sorted;
          let prev = start > 0 && meta._parsed[start - 1];
          let i, cur, parsed;
          if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
          } else {
            if (isArray(data[start])) {
              parsed = this.parseArrayData(meta, data, start, count);
            } else if (isObject(data[start])) {
              parsed = this.parseObjectData(meta, data, start, count);
            } else {
              parsed = this.parsePrimitiveData(meta, data, start, count);
            }
            const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for (i = 0; i < count; ++i) {
              meta._parsed[i + start] = cur = parsed[i];
              if (sorted) {
                if (isNotInOrderComparedToPrev()) {
                  sorted = false;
                }
                prev = cur;
              }
            }
            meta._sorted = sorted;
          }
          if (_stacked) {
            updateStacks(this, parsed);
          }
        }
        parsePrimitiveData(meta, data, start, count) {
          const { iScale, vScale } = meta;
          const iAxis = iScale.axis;
          const vAxis = vScale.axis;
          const labels = iScale.getLabels();
          const singleScale = iScale === vScale;
          const parsed = new Array(count);
          let i, ilen, index2;
          for (i = 0, ilen = count; i < ilen; ++i) {
            index2 = i + start;
            parsed[i] = {
              [iAxis]: singleScale || iScale.parse(labels[index2], index2),
              [vAxis]: vScale.parse(data[index2], index2)
            };
          }
          return parsed;
        }
        parseArrayData(meta, data, start, count) {
          const { xScale, yScale } = meta;
          const parsed = new Array(count);
          let i, ilen, index2, item;
          for (i = 0, ilen = count; i < ilen; ++i) {
            index2 = i + start;
            item = data[index2];
            parsed[i] = {
              x: xScale.parse(item[0], index2),
              y: yScale.parse(item[1], index2)
            };
          }
          return parsed;
        }
        parseObjectData(meta, data, start, count) {
          const { xScale, yScale } = meta;
          const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
          const parsed = new Array(count);
          let i, ilen, index2, item;
          for (i = 0, ilen = count; i < ilen; ++i) {
            index2 = i + start;
            item = data[index2];
            parsed[i] = {
              x: xScale.parse(resolveObjectKey(item, xAxisKey), index2),
              y: yScale.parse(resolveObjectKey(item, yAxisKey), index2)
            };
          }
          return parsed;
        }
        getParsed(index2) {
          return this._cachedMeta._parsed[index2];
        }
        getDataElement(index2) {
          return this._cachedMeta.data[index2];
        }
        applyStack(scale, parsed, mode) {
          const chart = this.chart;
          const meta = this._cachedMeta;
          const value = parsed[scale.axis];
          const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]
          };
          return applyStack(stack, value, meta.index, { mode });
        }
        updateRangeFromParsed(range, scale, parsed, stack) {
          const parsedValue = parsed[scale.axis];
          let value = parsedValue === null ? NaN : parsedValue;
          const values = stack && parsed._stacks[scale.axis];
          if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
          }
          range.min = Math.min(range.min, value);
          range.max = Math.max(range.max, value);
        }
        getMinMax(scale, canStack) {
          const meta = this._cachedMeta;
          const _parsed = meta._parsed;
          const sorted = meta._sorted && scale === meta.iScale;
          const ilen = _parsed.length;
          const otherScale = this._getOtherScale(scale);
          const stack = createStack(canStack, meta, this.chart);
          const range = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
          const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
          let i, parsed;
          function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
          }
          for (i = 0; i < ilen; ++i) {
            if (_skip()) {
              continue;
            }
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) {
              break;
            }
          }
          if (sorted) {
            for (i = ilen - 1; i >= 0; --i) {
              if (_skip()) {
                continue;
              }
              this.updateRangeFromParsed(range, scale, parsed, stack);
              break;
            }
          }
          return range;
        }
        getAllParsedValues(scale) {
          const parsed = this._cachedMeta._parsed;
          const values = [];
          let i, ilen, value;
          for (i = 0, ilen = parsed.length; i < ilen; ++i) {
            value = parsed[i][scale.axis];
            if (isNumberFinite(value)) {
              values.push(value);
            }
          }
          return values;
        }
        getMaxOverflow() {
          return false;
        }
        getLabelAndValue(index2) {
          const meta = this._cachedMeta;
          const iScale = meta.iScale;
          const vScale = meta.vScale;
          const parsed = this.getParsed(index2);
          return {
            label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
            value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
          };
        }
        _update(mode) {
          const meta = this._cachedMeta;
          this.update(mode || "default");
          meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
        }
        update(mode) {
        }
        draw() {
          const ctx = this._ctx;
          const chart = this.chart;
          const meta = this._cachedMeta;
          const elements2 = meta.data || [];
          const area = chart.chartArea;
          const active = [];
          const start = this._drawStart || 0;
          const count = this._drawCount || elements2.length - start;
          const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
          let i;
          if (meta.dataset) {
            meta.dataset.draw(ctx, area, start, count);
          }
          for (i = start; i < start + count; ++i) {
            const element = elements2[i];
            if (element.hidden) {
              continue;
            }
            if (element.active && drawActiveElementsOnTop) {
              active.push(element);
            } else {
              element.draw(ctx, area);
            }
          }
          for (i = 0; i < active.length; ++i) {
            active[i].draw(ctx, area);
          }
        }
        getStyle(index2, active) {
          const mode = active ? "active" : "default";
          return index2 === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index2 || 0, mode);
        }
        getContext(index2, active, mode) {
          const dataset = this.getDataset();
          let context;
          if (index2 >= 0 && index2 < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index2];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index2, element));
            context.parsed = this.getParsed(index2);
            context.raw = dataset.data[index2];
            context.index = context.dataIndex = index2;
          } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
          }
          context.active = !!active;
          context.mode = mode;
          return context;
        }
        resolveDatasetElementOptions(mode) {
          return this._resolveElementOptions(this.datasetElementType.id, mode);
        }
        resolveDataElementOptions(index2, mode) {
          return this._resolveElementOptions(this.dataElementType.id, mode, index2);
        }
        _resolveElementOptions(elementType, mode = "default", index2) {
          const active = mode === "active";
          const cache = this._cachedDataOpts;
          const cacheKey = elementType + "-" + mode;
          const cached = cache[cacheKey];
          const sharing = this.enableOptionSharing && defined(index2);
          if (cached) {
            return cloneIfNotShared(cached, sharing);
          }
          const config = this.chart.config;
          const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
          const prefixes = active ? [`${elementType}Hover`, "hover", elementType, ""] : [elementType, ""];
          const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
          const names2 = Object.keys(defaults.elements[elementType]);
          const context = () => this.getContext(index2, active);
          const values = config.resolveNamedOptions(scopes, names2, context, prefixes);
          if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
          }
          return values;
        }
        _resolveAnimations(index2, transition, active) {
          const chart = this.chart;
          const cache = this._cachedDataOpts;
          const cacheKey = `animation-${transition}`;
          const cached = cache[cacheKey];
          if (cached) {
            return cached;
          }
          let options;
          if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index2, active, transition));
          }
          const animations = new Animations(chart, options && options.animations);
          if (options && options._cacheable) {
            cache[cacheKey] = Object.freeze(animations);
          }
          return animations;
        }
        getSharedOptions(options) {
          if (!options.$shared) {
            return;
          }
          return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
        }
        includeOptions(mode, sharedOptions) {
          return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
        }
        _getSharedOptions(start, mode) {
          const firstOpts = this.resolveDataElementOptions(start, mode);
          const previouslySharedOptions = this._sharedOptions;
          const sharedOptions = this.getSharedOptions(firstOpts);
          const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
          this.updateSharedOptions(sharedOptions, mode, firstOpts);
          return { sharedOptions, includeOptions };
        }
        updateElement(element, index2, properties, mode) {
          if (isDirectUpdateMode(mode)) {
            Object.assign(element, properties);
          } else {
            this._resolveAnimations(index2, mode).update(element, properties);
          }
        }
        updateSharedOptions(sharedOptions, mode, newOptions) {
          if (sharedOptions && !isDirectUpdateMode(mode)) {
            this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
          }
        }
        _setStyle(element, index2, mode, active) {
          element.active = active;
          const options = this.getStyle(index2, active);
          this._resolveAnimations(index2, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
          });
        }
        removeHoverStyle(element, datasetIndex, index2) {
          this._setStyle(element, index2, "active", false);
        }
        setHoverStyle(element, datasetIndex, index2) {
          this._setStyle(element, index2, "active", true);
        }
        _removeDatasetHoverStyle() {
          const element = this._cachedMeta.dataset;
          if (element) {
            this._setStyle(element, void 0, "active", false);
          }
        }
        _setDatasetHoverStyle() {
          const element = this._cachedMeta.dataset;
          if (element) {
            this._setStyle(element, void 0, "active", true);
          }
        }
        _resyncElements(resetNewElements) {
          const data = this._data;
          const elements2 = this._cachedMeta.data;
          for (const [method, arg1, arg2] of this._syncList) {
            this[method](arg1, arg2);
          }
          this._syncList = [];
          const numMeta = elements2.length;
          const numData = data.length;
          const count = Math.min(numData, numMeta);
          if (count) {
            this.parse(0, count);
          }
          if (numData > numMeta) {
            this._insertElements(numMeta, numData - numMeta, resetNewElements);
          } else if (numData < numMeta) {
            this._removeElements(numData, numMeta - numData);
          }
        }
        _insertElements(start, count, resetNewElements = true) {
          const meta = this._cachedMeta;
          const data = meta.data;
          const end = start + count;
          let i;
          const move = (arr) => {
            arr.length += count;
            for (i = arr.length - 1; i >= end; i--) {
              arr[i] = arr[i - count];
            }
          };
          move(data);
          for (i = start; i < end; ++i) {
            data[i] = new this.dataElementType();
          }
          if (this._parsing) {
            move(meta._parsed);
          }
          this.parse(start, count);
          if (resetNewElements) {
            this.updateElements(data, start, count, "reset");
          }
        }
        updateElements(element, start, count, mode) {
        }
        _removeElements(start, count) {
          const meta = this._cachedMeta;
          if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) {
              clearStacks(meta, removed);
            }
          }
          meta.data.splice(start, count);
        }
        _sync(args) {
          if (this._parsing) {
            this._syncList.push(args);
          } else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
          }
          this.chart._dataChanges.push([this.index, ...args]);
        }
        _onDataPush() {
          const count = arguments.length;
          this._sync(["_insertElements", this.getDataset().data.length - count, count]);
        }
        _onDataPop() {
          this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(["_removeElements", 0, 1]);
        }
        _onDataSplice(start, count) {
          if (count) {
            this._sync(["_removeElements", start, count]);
          }
          const newCount = arguments.length - 2;
          if (newCount) {
            this._sync(["_insertElements", start, newCount]);
          }
        }
        _onDataUnshift() {
          this._sync(["_insertElements", 0, arguments.length]);
        }
      }
      DatasetController.defaults = {};
      DatasetController.prototype.datasetElementType = null;
      DatasetController.prototype.dataElementType = null;
      class Element {
        constructor() {
          this.x = void 0;
          this.y = void 0;
          this.active = false;
          this.options = void 0;
          this.$animations = void 0;
        }
        tooltipPosition(useFinalPosition) {
          const { x, y } = this.getProps(["x", "y"], useFinalPosition);
          return { x, y };
        }
        hasValue() {
          return isNumber(this.x) && isNumber(this.y);
        }
        getProps(props, final) {
          const anims = this.$animations;
          if (!final || !anims) {
            return this;
          }
          const ret = {};
          props.forEach((prop) => {
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
          });
          return ret;
        }
      }
      Element.defaults = {};
      Element.defaultRoutes = void 0;
      const formatters = {
        values(value) {
          return isArray(value) ? value : "" + value;
        },
        numeric(tickValue, index2, ticks) {
          if (tickValue === 0) {
            return "0";
          }
          const locale = this.chart.options.locale;
          let notation;
          let delta = tickValue;
          if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e15) {
              notation = "scientific";
            }
            delta = calculateDelta(tickValue, ticks);
          }
          const logDelta = log10(Math.abs(delta));
          const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
          const options = { notation, minimumFractionDigits: numDecimal, maximumFractionDigits: numDecimal };
          Object.assign(options, this.options.ticks.format);
          return formatNumber(tickValue, locale, options);
        },
        logarithmic(tickValue, index2, ticks) {
          if (tickValue === 0) {
            return "0";
          }
          const remain = tickValue / Math.pow(10, Math.floor(log10(tickValue)));
          if (remain === 1 || remain === 2 || remain === 5) {
            return formatters.numeric.call(this, tickValue, index2, ticks);
          }
          return "";
        }
      };
      function calculateDelta(tickValue, ticks) {
        let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
        if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
          delta = tickValue - Math.floor(tickValue);
        }
        return delta;
      }
      var Ticks = { formatters };
      defaults.set("scale", {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: true,
          lineWidth: 1,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
          tickLength: 8,
          tickWidth: (_ctx, options) => options.lineWidth,
          tickColor: (_ctx, options) => options.color,
          offset: false,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1
        },
        title: {
          display: false,
          text: "",
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: false,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: true,
          autoSkip: true,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Ticks.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: false,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2
        }
      });
      defaults.route("scale.ticks", "color", "", "color");
      defaults.route("scale.grid", "color", "", "borderColor");
      defaults.route("scale.grid", "borderColor", "", "borderColor");
      defaults.route("scale.title", "color", "", "color");
      defaults.describe("scale", {
        _fallback: false,
        _scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
        _indexable: (name) => name !== "borderDash" && name !== "tickBorderDash"
      });
      defaults.describe("scales", {
        _fallback: "scale"
      });
      defaults.describe("scale.ticks", {
        _scriptable: (name) => name !== "backdropPadding" && name !== "callback",
        _indexable: (name) => name !== "backdropPadding"
      });
      function autoSkip(scale, ticks) {
        const tickOpts = scale.options.ticks;
        const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
        const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
        const numMajorIndices = majorIndices.length;
        const first = majorIndices[0];
        const last = majorIndices[numMajorIndices - 1];
        const newTicks = [];
        if (numMajorIndices > ticksLimit) {
          skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
          return newTicks;
        }
        const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
        if (numMajorIndices > 0) {
          let i, ilen;
          const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
          skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
          for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
            skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
          }
          skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
          return newTicks;
        }
        skip(ticks, newTicks, spacing);
        return newTicks;
      }
      function determineMaxTicks(scale) {
        const offset = scale.options.offset;
        const tickLength = scale._tickSize();
        const maxScale = scale._length / tickLength + (offset ? 0 : 1);
        const maxChart = scale._maxLength / tickLength;
        return Math.floor(Math.min(maxScale, maxChart));
      }
      function calculateSpacing(majorIndices, ticks, ticksLimit) {
        const evenMajorSpacing = getEvenSpacing(majorIndices);
        const spacing = ticks.length / ticksLimit;
        if (!evenMajorSpacing) {
          return Math.max(spacing, 1);
        }
        const factors = _factorize(evenMajorSpacing);
        for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
          const factor = factors[i];
          if (factor > spacing) {
            return factor;
          }
        }
        return Math.max(spacing, 1);
      }
      function getMajorIndices(ticks) {
        const result = [];
        let i, ilen;
        for (i = 0, ilen = ticks.length; i < ilen; i++) {
          if (ticks[i].major) {
            result.push(i);
          }
        }
        return result;
      }
      function skipMajors(ticks, newTicks, majorIndices, spacing) {
        let count = 0;
        let next = majorIndices[0];
        let i;
        spacing = Math.ceil(spacing);
        for (i = 0; i < ticks.length; i++) {
          if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = majorIndices[count * spacing];
          }
        }
      }
      function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
        const start = valueOrDefault(majorStart, 0);
        const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
        let count = 0;
        let length, i, next;
        spacing = Math.ceil(spacing);
        if (majorEnd) {
          length = majorEnd - majorStart;
          spacing = length / Math.floor(length / spacing);
        }
        next = start;
        while (next < 0) {
          count++;
          next = Math.round(start + count * spacing);
        }
        for (i = Math.max(start, 0); i < end; i++) {
          if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = Math.round(start + count * spacing);
          }
        }
      }
      function getEvenSpacing(arr) {
        const len = arr.length;
        let i, diff;
        if (len < 2) {
          return false;
        }
        for (diff = arr[0], i = 1; i < len; ++i) {
          if (arr[i] - arr[i - 1] !== diff) {
            return false;
          }
        }
        return diff;
      }
      const reverseAlign = (align) => align === "left" ? "right" : align === "right" ? "left" : align;
      const offsetFromEdge = (scale, edge, offset) => edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
      function sample(arr, numItems) {
        const result = [];
        const increment = arr.length / numItems;
        const len = arr.length;
        let i = 0;
        for (; i < len; i += increment) {
          result.push(arr[Math.floor(i)]);
        }
        return result;
      }
      function getPixelForGridLine(scale, index2, offsetGridLines) {
        const length = scale.ticks.length;
        const validIndex2 = Math.min(index2, length - 1);
        const start = scale._startPixel;
        const end = scale._endPixel;
        const epsilon = 1e-6;
        let lineValue = scale.getPixelForTick(validIndex2);
        let offset;
        if (offsetGridLines) {
          if (length === 1) {
            offset = Math.max(lineValue - start, end - lineValue);
          } else if (index2 === 0) {
            offset = (scale.getPixelForTick(1) - lineValue) / 2;
          } else {
            offset = (lineValue - scale.getPixelForTick(validIndex2 - 1)) / 2;
          }
          lineValue += validIndex2 < index2 ? offset : -offset;
          if (lineValue < start - epsilon || lineValue > end + epsilon) {
            return;
          }
        }
        return lineValue;
      }
      function garbageCollect(caches, length) {
        each(caches, (cache) => {
          const gc = cache.gc;
          const gcLen = gc.length / 2;
          let i;
          if (gcLen > length) {
            for (i = 0; i < gcLen; ++i) {
              delete cache.data[gc[i]];
            }
            gc.splice(0, gcLen);
          }
        });
      }
      function getTickMarkLength(options) {
        return options.drawTicks ? options.tickLength : 0;
      }
      function getTitleHeight(options, fallback) {
        if (!options.display) {
          return 0;
        }
        const font = toFont(options.font, fallback);
        const padding = toPadding(options.padding);
        const lines = isArray(options.text) ? options.text.length : 1;
        return lines * font.lineHeight + padding.height;
      }
      function createScaleContext(parent, scale) {
        return createContext(parent, {
          scale,
          type: "scale"
        });
      }
      function createTickContext(parent, index2, tick) {
        return createContext(parent, {
          tick,
          index: index2,
          type: "tick"
        });
      }
      function titleAlign(align, position, reverse) {
        let ret = _toLeftRightCenter(align);
        if (reverse && position !== "right" || !reverse && position === "right") {
          ret = reverseAlign(ret);
        }
        return ret;
      }
      function titleArgs(scale, offset, position, align) {
        const { top, left, bottom, right, chart } = scale;
        const { chartArea, scales: scales2 } = chart;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        const height = bottom - top;
        const width = right - left;
        if (scale.isHorizontal()) {
          titleX = _alignStartEnd(align, left, right);
          if (isObject(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales2[positionAxisID].getPixelForValue(value) + height - offset;
          } else if (position === "center") {
            titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
          } else {
            titleY = offsetFromEdge(scale, position, offset);
          }
          maxWidth = right - left;
        } else {
          if (isObject(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleX = scales2[positionAxisID].getPixelForValue(value) - width + offset;
          } else if (position === "center") {
            titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
          } else {
            titleX = offsetFromEdge(scale, position, offset);
          }
          titleY = _alignStartEnd(align, bottom, top);
          rotation = position === "left" ? -HALF_PI : HALF_PI;
        }
        return { titleX, titleY, maxWidth, rotation };
      }
      class Scale extends Element {
        constructor(cfg) {
          super();
          this.id = cfg.id;
          this.type = cfg.type;
          this.options = void 0;
          this.ctx = cfg.ctx;
          this.chart = cfg.chart;
          this.top = void 0;
          this.bottom = void 0;
          this.left = void 0;
          this.right = void 0;
          this.width = void 0;
          this.height = void 0;
          this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
          this.maxWidth = void 0;
          this.maxHeight = void 0;
          this.paddingTop = void 0;
          this.paddingBottom = void 0;
          this.paddingLeft = void 0;
          this.paddingRight = void 0;
          this.axis = void 0;
          this.labelRotation = void 0;
          this.min = void 0;
          this.max = void 0;
          this._range = void 0;
          this.ticks = [];
          this._gridLineItems = null;
          this._labelItems = null;
          this._labelSizes = null;
          this._length = 0;
          this._maxLength = 0;
          this._longestTextCache = {};
          this._startPixel = void 0;
          this._endPixel = void 0;
          this._reversePixels = false;
          this._userMax = void 0;
          this._userMin = void 0;
          this._suggestedMax = void 0;
          this._suggestedMin = void 0;
          this._ticksLength = 0;
          this._borderValue = 0;
          this._cache = {};
          this._dataLimitsCached = false;
          this.$context = void 0;
        }
        init(options) {
          this.options = options.setContext(this.getContext());
          this.axis = options.axis;
          this._userMin = this.parse(options.min);
          this._userMax = this.parse(options.max);
          this._suggestedMin = this.parse(options.suggestedMin);
          this._suggestedMax = this.parse(options.suggestedMax);
        }
        parse(raw, index2) {
          return raw;
        }
        getUserBounds() {
          let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
          _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
          _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
          _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
          _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
          return {
            min: finiteOrDefault(_userMin, _suggestedMin),
            max: finiteOrDefault(_userMax, _suggestedMax),
            minDefined: isNumberFinite(_userMin),
            maxDefined: isNumberFinite(_userMax)
          };
        }
        getMinMax(canStack) {
          let { min, max, minDefined, maxDefined } = this.getUserBounds();
          let range;
          if (minDefined && maxDefined) {
            return { min, max };
          }
          const metas = this.getMatchingVisibleMetas();
          for (let i = 0, ilen = metas.length; i < ilen; ++i) {
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) {
              min = Math.min(min, range.min);
            }
            if (!maxDefined) {
              max = Math.max(max, range.max);
            }
          }
          min = maxDefined && min > max ? max : min;
          max = minDefined && min > max ? min : max;
          return {
            min: finiteOrDefault(min, finiteOrDefault(max, min)),
            max: finiteOrDefault(max, finiteOrDefault(min, max))
          };
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const data = this.chart.data;
          return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
        }
        beforeLayout() {
          this._cache = {};
          this._dataLimitsCached = false;
        }
        beforeUpdate() {
          callback(this.options.beforeUpdate, [this]);
        }
        update(maxWidth, maxHeight, margins) {
          const { beginAtZero, grace, ticks: tickOpts } = this.options;
          const sampleSize = tickOpts.sampleSize;
          this.beforeUpdate();
          this.maxWidth = maxWidth;
          this.maxHeight = maxHeight;
          this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, margins);
          this.ticks = null;
          this._labelSizes = null;
          this._gridLineItems = null;
          this._labelItems = null;
          this.beforeSetDimensions();
          this.setDimensions();
          this.afterSetDimensions();
          this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
          if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = _addGrace(this, grace, beginAtZero);
            this._dataLimitsCached = true;
          }
          this.beforeBuildTicks();
          this.ticks = this.buildTicks() || [];
          this.afterBuildTicks();
          const samplingEnabled = sampleSize < this.ticks.length;
          this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
          this.configure();
          this.beforeCalculateLabelRotation();
          this.calculateLabelRotation();
          this.afterCalculateLabelRotation();
          if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
          }
          if (samplingEnabled) {
            this._convertTicksToLabels(this.ticks);
          }
          this.beforeFit();
          this.fit();
          this.afterFit();
          this.afterUpdate();
        }
        configure() {
          let reversePixels = this.options.reverse;
          let startPixel, endPixel;
          if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
          } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
          }
          this._startPixel = startPixel;
          this._endPixel = endPixel;
          this._reversePixels = reversePixels;
          this._length = endPixel - startPixel;
          this._alignToPixels = this.options.alignToPixels;
        }
        afterUpdate() {
          callback(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          callback(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
          } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
          }
          this.paddingLeft = 0;
          this.paddingTop = 0;
          this.paddingRight = 0;
          this.paddingBottom = 0;
        }
        afterSetDimensions() {
          callback(this.options.afterSetDimensions, [this]);
        }
        _callHooks(name) {
          this.chart.notifyPlugins(name, this.getContext());
          callback(this.options[name], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {
        }
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          callback(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(ticks) {
          const tickOpts = this.options.ticks;
          let i, ilen, tick;
          for (i = 0, ilen = ticks.length; i < ilen; i++) {
            tick = ticks[i];
            tick.label = callback(tickOpts.callback, [tick.value, i, ticks], this);
          }
        }
        afterTickToLabelConversion() {
          callback(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          callback(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const options = this.options;
          const tickOpts = options.ticks;
          const numTicks = this.ticks.length;
          const minRotation = tickOpts.minRotation || 0;
          const maxRotation = tickOpts.maxRotation;
          let labelRotation = minRotation;
          let tickWidth, maxHeight, maxLabelDiagonal;
          if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
          }
          const labelSizes = this._getLabelSizes();
          const maxLabelWidth = labelSizes.widest.width;
          const maxLabelHeight = labelSizes.highest.height;
          const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
          tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
          if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = toDegrees(Math.min(
              Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)),
              Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))
            ));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
          }
          this.labelRotation = labelRotation;
        }
        afterCalculateLabelRotation() {
          callback(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {
        }
        beforeFit() {
          callback(this.options.beforeFit, [this]);
        }
        fit() {
          const minSize = {
            width: 0,
            height: 0
          };
          const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
          const display = this._isVisible();
          const isHorizontal = this.isHorizontal();
          if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
              minSize.width = this.maxWidth;
              minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
              minSize.height = this.maxHeight;
              minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
              const { first, last, widest, highest } = this._getLabelSizes();
              const tickPadding = tickOpts.padding * 2;
              const angleRadians = toRadians(this.labelRotation);
              const cos = Math.cos(angleRadians);
              const sin = Math.sin(angleRadians);
              if (isHorizontal) {
                const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
              } else {
                const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
              }
              this._calculatePadding(first, last, sin, cos);
            }
          }
          this._handleMargins();
          if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
          } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
          }
        }
        _calculatePadding(first, last, sin, cos) {
          const { ticks: { align, padding }, position } = this.options;
          const isRotated = this.labelRotation !== 0;
          const labelsBelowTicks = position !== "top" && this.axis === "x";
          if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
              if (labelsBelowTicks) {
                paddingLeft = cos * first.width;
                paddingRight = sin * last.height;
              } else {
                paddingLeft = sin * first.height;
                paddingRight = cos * last.width;
              }
            } else if (align === "start") {
              paddingRight = last.width;
            } else if (align === "end") {
              paddingLeft = first.width;
            } else if (align !== "inner") {
              paddingLeft = first.width / 2;
              paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
          } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === "start") {
              paddingTop = 0;
              paddingBottom = first.height;
            } else if (align === "end") {
              paddingTop = last.height;
              paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
          }
        }
        _handleMargins() {
          if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
          }
        }
        afterFit() {
          callback(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis, position } = this.options;
          return position === "top" || position === "bottom" || axis === "x";
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(ticks) {
          this.beforeTickToLabelConversion();
          this.generateTickLabels(ticks);
          let i, ilen;
          for (i = 0, ilen = ticks.length; i < ilen; i++) {
            if (isNullOrUndef(ticks[i].label)) {
              ticks.splice(i, 1);
              ilen--;
              i--;
            }
          }
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let labelSizes = this._labelSizes;
          if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) {
              ticks = sample(ticks, sampleSize);
            }
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
          }
          return labelSizes;
        }
        _computeLabelSizes(ticks, length) {
          const { ctx, _longestTextCache: caches } = this;
          const widths = [];
          const heights = [];
          let widestLabelSize = 0;
          let highestLabelSize = 0;
          let i, j, jlen, label, tickFont, fontString2, cache, lineHeight, width, height, nestedLabel;
          for (i = 0; i < length; ++i) {
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString2 = tickFont.string;
            cache = caches[fontString2] = caches[fontString2] || { data: {}, gc: [] };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!isNullOrUndef(label) && !isArray(label)) {
              width = _measureText(ctx, cache.data, cache.gc, width, label);
              height = lineHeight;
            } else if (isArray(label)) {
              for (j = 0, jlen = label.length; j < jlen; ++j) {
                nestedLabel = label[j];
                if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
                  width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
                  height += lineHeight;
                }
              }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
          }
          garbageCollect(caches, length);
          const widest = widths.indexOf(widestLabelSize);
          const highest = heights.indexOf(highestLabelSize);
          const valueAt = (idx) => ({ width: widths[idx] || 0, height: heights[idx] || 0 });
          return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
          };
        }
        getLabelForValue(value) {
          return value;
        }
        getPixelForValue(value, index2) {
          return NaN;
        }
        getValueForPixel(pixel) {
        }
        getPixelForTick(index2) {
          const ticks = this.ticks;
          if (index2 < 0 || index2 > ticks.length - 1) {
            return null;
          }
          return this.getPixelForValue(ticks[index2].value);
        }
        getPixelForDecimal(decimal) {
          if (this._reversePixels) {
            decimal = 1 - decimal;
          }
          const pixel = this._startPixel + decimal * this._length;
          return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
        }
        getDecimalForPixel(pixel) {
          const decimal = (pixel - this._startPixel) / this._length;
          return this._reversePixels ? 1 - decimal : decimal;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min, max } = this;
          return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
        }
        getContext(index2) {
          const ticks = this.ticks || [];
          if (index2 >= 0 && index2 < ticks.length) {
            const tick = ticks[index2];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index2, tick));
          }
          return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
        }
        _tickSize() {
          const optionTicks = this.options.ticks;
          const rot = toRadians(this.labelRotation);
          const cos = Math.abs(Math.cos(rot));
          const sin = Math.abs(Math.sin(rot));
          const labelSizes = this._getLabelSizes();
          const padding = optionTicks.autoSkipPadding || 0;
          const w = labelSizes ? labelSizes.widest.width + padding : 0;
          const h = labelSizes ? labelSizes.highest.height + padding : 0;
          return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
        }
        _isVisible() {
          const display = this.options.display;
          if (display !== "auto") {
            return !!display;
          }
          return this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(chartArea) {
          const axis = this.axis;
          const chart = this.chart;
          const options = this.options;
          const { grid, position } = options;
          const offset = grid.offset;
          const isHorizontal = this.isHorizontal();
          const ticks = this.ticks;
          const ticksLength = ticks.length + (offset ? 1 : 0);
          const tl = getTickMarkLength(grid);
          const items = [];
          const borderOpts = grid.setContext(this.getContext());
          const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
          const axisHalfWidth = axisWidth / 2;
          const alignBorderValue = function(pixel) {
            return _alignPixel(chart, pixel, axisWidth);
          };
          let borderValue, i, lineValue, alignedLineValue;
          let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
          if (position === "top") {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
          } else if (position === "bottom") {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
          } else if (position === "left") {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
          } else if (position === "right") {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
          } else if (axis === "x") {
            if (position === "center") {
              borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            } else if (isObject(position)) {
              const positionAxisID = Object.keys(position)[0];
              const value = position[positionAxisID];
              borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
          } else if (axis === "y") {
            if (position === "center") {
              borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            } else if (isObject(position)) {
              const positionAxisID = Object.keys(position)[0];
              const value = position[positionAxisID];
              borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
          }
          const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
          const step = Math.max(1, Math.ceil(ticksLength / limit));
          for (i = 0; i < ticksLength; i += step) {
            const optsAtIndex = grid.setContext(this.getContext(i));
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndex.borderDash || [];
            const borderDashOffset = optsAtIndex.borderDashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === void 0) {
              continue;
            }
            alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
            if (isHorizontal) {
              tx1 = tx2 = x1 = x2 = alignedLineValue;
            } else {
              ty1 = ty2 = y1 = y2 = alignedLineValue;
            }
            items.push({
              tx1,
              ty1,
              tx2,
              ty2,
              x1,
              y1,
              x2,
              y2,
              width: lineWidth,
              color: lineColor,
              borderDash,
              borderDashOffset,
              tickWidth,
              tickColor,
              tickBorderDash,
              tickBorderDashOffset
            });
          }
          this._ticksLength = ticksLength;
          this._borderValue = borderValue;
          return items;
        }
        _computeLabelItems(chartArea) {
          const axis = this.axis;
          const options = this.options;
          const { position, ticks: optionTicks } = options;
          const isHorizontal = this.isHorizontal();
          const ticks = this.ticks;
          const { align, crossAlign, padding, mirror } = optionTicks;
          const tl = getTickMarkLength(options.grid);
          const tickAndPadding = tl + padding;
          const hTickAndPadding = mirror ? -padding : tickAndPadding;
          const rotation = -toRadians(this.labelRotation);
          const items = [];
          let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
          let textBaseline = "middle";
          if (position === "top") {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
          } else if (position === "bottom") {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
          } else if (position === "left") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
          } else if (position === "right") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
          } else if (axis === "x") {
            if (position === "center") {
              y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            } else if (isObject(position)) {
              const positionAxisID = Object.keys(position)[0];
              const value = position[positionAxisID];
              y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
          } else if (axis === "y") {
            if (position === "center") {
              x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            } else if (isObject(position)) {
              const positionAxisID = Object.keys(position)[0];
              const value = position[positionAxisID];
              x = this.chart.scales[positionAxisID].getPixelForValue(value);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
          }
          if (axis === "y") {
            if (align === "start") {
              textBaseline = "top";
            } else if (align === "end") {
              textBaseline = "bottom";
            }
          }
          const labelSizes = this._getLabelSizes();
          for (i = 0, ilen = ticks.length; i < ilen; ++i) {
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = isArray(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color2 = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
              x = pixel;
              if (textAlign === "inner") {
                if (i === ilen - 1) {
                  tickTextAlign = !this.options.reverse ? "right" : "left";
                } else if (i === 0) {
                  tickTextAlign = !this.options.reverse ? "left" : "right";
                } else {
                  tickTextAlign = "center";
                }
              }
              if (position === "top") {
                if (crossAlign === "near" || rotation !== 0) {
                  textOffset = -lineCount * lineHeight + lineHeight / 2;
                } else if (crossAlign === "center") {
                  textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                } else {
                  textOffset = -labelSizes.highest.height + lineHeight / 2;
                }
              } else {
                if (crossAlign === "near" || rotation !== 0) {
                  textOffset = lineHeight / 2;
                } else if (crossAlign === "center") {
                  textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                } else {
                  textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
              }
              if (mirror) {
                textOffset *= -1;
              }
            } else {
              y = pixel;
              textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
              const labelPadding = toPadding(optsAtIndex.backdropPadding);
              const height = labelSizes.heights[i];
              const width = labelSizes.widths[i];
              let top = y + textOffset - labelPadding.top;
              let left = x - labelPadding.left;
              switch (textBaseline) {
                case "middle":
                  top -= height / 2;
                  break;
                case "bottom":
                  top -= height;
                  break;
              }
              switch (textAlign) {
                case "center":
                  left -= width / 2;
                  break;
                case "right":
                  left -= width;
                  break;
              }
              backdrop = {
                left,
                top,
                width: width + labelPadding.width,
                height: height + labelPadding.height,
                color: optsAtIndex.backdropColor
              };
            }
            items.push({
              rotation,
              label,
              font,
              color: color2,
              strokeColor,
              strokeWidth,
              textOffset,
              textAlign: tickTextAlign,
              textBaseline,
              translation: [x, y],
              backdrop
            });
          }
          return items;
        }
        _getXAxisLabelAlignment() {
          const { position, ticks } = this.options;
          const rotation = -toRadians(this.labelRotation);
          if (rotation) {
            return position === "top" ? "left" : "right";
          }
          let align = "center";
          if (ticks.align === "start") {
            align = "left";
          } else if (ticks.align === "end") {
            align = "right";
          } else if (ticks.align === "inner") {
            align = "inner";
          }
          return align;
        }
        _getYAxisLabelAlignment(tl) {
          const { position, ticks: { crossAlign, mirror, padding } } = this.options;
          const labelSizes = this._getLabelSizes();
          const tickAndPadding = tl + padding;
          const widest = labelSizes.widest.width;
          let textAlign;
          let x;
          if (position === "left") {
            if (mirror) {
              x = this.right + padding;
              if (crossAlign === "near") {
                textAlign = "left";
              } else if (crossAlign === "center") {
                textAlign = "center";
                x += widest / 2;
              } else {
                textAlign = "right";
                x += widest;
              }
            } else {
              x = this.right - tickAndPadding;
              if (crossAlign === "near") {
                textAlign = "right";
              } else if (crossAlign === "center") {
                textAlign = "center";
                x -= widest / 2;
              } else {
                textAlign = "left";
                x = this.left;
              }
            }
          } else if (position === "right") {
            if (mirror) {
              x = this.left + padding;
              if (crossAlign === "near") {
                textAlign = "right";
              } else if (crossAlign === "center") {
                textAlign = "center";
                x -= widest / 2;
              } else {
                textAlign = "left";
                x -= widest;
              }
            } else {
              x = this.left + tickAndPadding;
              if (crossAlign === "near") {
                textAlign = "left";
              } else if (crossAlign === "center") {
                textAlign = "center";
                x += widest / 2;
              } else {
                textAlign = "right";
                x = this.right;
              }
            }
          } else {
            textAlign = "right";
          }
          return { textAlign, x };
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) {
            return;
          }
          const chart = this.chart;
          const position = this.options.position;
          if (position === "left" || position === "right") {
            return { top: 0, left: this.left, bottom: chart.height, right: this.right };
          }
          if (position === "top" || position === "bottom") {
            return { top: this.top, left: 0, bottom: this.bottom, right: chart.width };
          }
        }
        drawBackground() {
          const { ctx, options: { backgroundColor }, left, top, width, height } = this;
          if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
          }
        }
        getLineWidthForValue(value) {
          const grid = this.options.grid;
          if (!this._isVisible() || !grid.display) {
            return 0;
          }
          const ticks = this.ticks;
          const index2 = ticks.findIndex((t) => t.value === value);
          if (index2 >= 0) {
            const opts = grid.setContext(this.getContext(index2));
            return opts.lineWidth;
          }
          return 0;
        }
        drawGrid(chartArea) {
          const grid = this.options.grid;
          const ctx = this.ctx;
          const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
          let i, ilen;
          const drawLine = (p1, p2, style) => {
            if (!style.width || !style.color) {
              return;
            }
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          };
          if (grid.display) {
            for (i = 0, ilen = items.length; i < ilen; ++i) {
              const item = items[i];
              if (grid.drawOnChartArea) {
                drawLine(
                  { x: item.x1, y: item.y1 },
                  { x: item.x2, y: item.y2 },
                  item
                );
              }
              if (grid.drawTicks) {
                drawLine(
                  { x: item.tx1, y: item.ty1 },
                  { x: item.tx2, y: item.ty2 },
                  {
                    color: item.tickColor,
                    width: item.tickWidth,
                    borderDash: item.tickBorderDash,
                    borderDashOffset: item.tickBorderDashOffset
                  }
                );
              }
            }
          }
        }
        drawBorder() {
          const { chart, ctx, options: { grid } } = this;
          const borderOpts = grid.setContext(this.getContext());
          const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
          if (!axisWidth) {
            return;
          }
          const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
          const borderValue = this._borderValue;
          let x1, x2, y1, y2;
          if (this.isHorizontal()) {
            x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
          } else {
            y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
          }
          ctx.save();
          ctx.lineWidth = borderOpts.borderWidth;
          ctx.strokeStyle = borderOpts.borderColor;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.restore();
        }
        drawLabels(chartArea) {
          const optionTicks = this.options.ticks;
          if (!optionTicks.display) {
            return;
          }
          const ctx = this.ctx;
          const area = this._computeLabelArea();
          if (area) {
            clipArea(ctx, area);
          }
          const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
          let i, ilen;
          for (i = 0, ilen = items.length; i < ilen; ++i) {
            const item = items[i];
            const tickFont = item.font;
            const label = item.label;
            if (item.backdrop) {
              ctx.fillStyle = item.backdrop.color;
              ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
            }
            let y = item.textOffset;
            renderText(ctx, label, 0, y, tickFont, item);
          }
          if (area) {
            unclipArea(ctx);
          }
        }
        drawTitle() {
          const { ctx, options: { position, title, reverse } } = this;
          if (!title.display) {
            return;
          }
          const font = toFont(title.font);
          const padding = toPadding(title.padding);
          const align = title.align;
          let offset = font.lineHeight / 2;
          if (position === "bottom" || position === "center" || isObject(position)) {
            offset += padding.bottom;
            if (isArray(title.text)) {
              offset += font.lineHeight * (title.text.length - 1);
            }
          } else {
            offset += padding.top;
          }
          const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
          renderText(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: "middle",
            translation: [titleX, titleY]
          });
        }
        draw(chartArea) {
          if (!this._isVisible()) {
            return;
          }
          this.drawBackground();
          this.drawGrid(chartArea);
          this.drawBorder();
          this.drawTitle();
          this.drawLabels(chartArea);
        }
        _layers() {
          const opts = this.options;
          const tz = opts.ticks && opts.ticks.z || 0;
          const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
          if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
            return [{
              z: tz,
              draw: (chartArea) => {
                this.draw(chartArea);
              }
            }];
          }
          return [{
            z: gz,
            draw: (chartArea) => {
              this.drawBackground();
              this.drawGrid(chartArea);
              this.drawTitle();
            }
          }, {
            z: gz + 1,
            draw: () => {
              this.drawBorder();
            }
          }, {
            z: tz,
            draw: (chartArea) => {
              this.drawLabels(chartArea);
            }
          }];
        }
        getMatchingVisibleMetas(type) {
          const metas = this.chart.getSortedVisibleDatasetMetas();
          const axisID = this.axis + "AxisID";
          const result = [];
          let i, ilen;
          for (i = 0, ilen = metas.length; i < ilen; ++i) {
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) {
              result.push(meta);
            }
          }
          return result;
        }
        _resolveTickFontOptions(index2) {
          const opts = this.options.ticks.setContext(this.getContext(index2));
          return toFont(opts.font);
        }
        _maxDigits() {
          const fontSize = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / fontSize;
        }
      }
      class TypedRegistry {
        constructor(type, scope, override) {
          this.type = type;
          this.scope = scope;
          this.override = override;
          this.items = /* @__PURE__ */ Object.create(null);
        }
        isForType(type) {
          return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
        }
        register(item) {
          const proto = Object.getPrototypeOf(item);
          let parentScope;
          if (isIChartComponent(proto)) {
            parentScope = this.register(proto);
          }
          const items = this.items;
          const id = item.id;
          const scope = this.scope + "." + id;
          if (!id) {
            throw new Error("class does not have id: " + item);
          }
          if (id in items) {
            return scope;
          }
          items[id] = item;
          registerDefaults(item, scope, parentScope);
          if (this.override) {
            defaults.override(item.id, item.overrides);
          }
          return scope;
        }
        get(id) {
          return this.items[id];
        }
        unregister(item) {
          const items = this.items;
          const id = item.id;
          const scope = this.scope;
          if (id in items) {
            delete items[id];
          }
          if (scope && id in defaults[scope]) {
            delete defaults[scope][id];
            if (this.override) {
              delete overrides[id];
            }
          }
        }
      }
      function registerDefaults(item, scope, parentScope) {
        const itemDefaults = merge(/* @__PURE__ */ Object.create(null), [
          parentScope ? defaults.get(parentScope) : {},
          defaults.get(scope),
          item.defaults
        ]);
        defaults.set(scope, itemDefaults);
        if (item.defaultRoutes) {
          routeDefaults(scope, item.defaultRoutes);
        }
        if (item.descriptors) {
          defaults.describe(scope, item.descriptors);
        }
      }
      function routeDefaults(scope, routes) {
        Object.keys(routes).forEach((property) => {
          const propertyParts = property.split(".");
          const sourceName = propertyParts.pop();
          const sourceScope = [scope].concat(propertyParts).join(".");
          const parts = routes[property].split(".");
          const targetName = parts.pop();
          const targetScope = parts.join(".");
          defaults.route(sourceScope, sourceName, targetScope, targetName);
        });
      }
      function isIChartComponent(proto) {
        return "id" in proto && "defaults" in proto;
      }
      class Registry {
        constructor() {
          this.controllers = new TypedRegistry(DatasetController, "datasets", true);
          this.elements = new TypedRegistry(Element, "elements");
          this.plugins = new TypedRegistry(Object, "plugins");
          this.scales = new TypedRegistry(Scale, "scales");
          this._typedRegistries = [this.controllers, this.scales, this.elements];
        }
        add(...args) {
          this._each("register", args);
        }
        remove(...args) {
          this._each("unregister", args);
        }
        addControllers(...args) {
          this._each("register", args, this.controllers);
        }
        addElements(...args) {
          this._each("register", args, this.elements);
        }
        addPlugins(...args) {
          this._each("register", args, this.plugins);
        }
        addScales(...args) {
          this._each("register", args, this.scales);
        }
        getController(id) {
          return this._get(id, this.controllers, "controller");
        }
        getElement(id) {
          return this._get(id, this.elements, "element");
        }
        getPlugin(id) {
          return this._get(id, this.plugins, "plugin");
        }
        getScale(id) {
          return this._get(id, this.scales, "scale");
        }
        removeControllers(...args) {
          this._each("unregister", args, this.controllers);
        }
        removeElements(...args) {
          this._each("unregister", args, this.elements);
        }
        removePlugins(...args) {
          this._each("unregister", args, this.plugins);
        }
        removeScales(...args) {
          this._each("unregister", args, this.scales);
        }
        _each(method, args, typedRegistry) {
          [...args].forEach((arg) => {
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
              this._exec(method, reg, arg);
            } else {
              each(arg, (item) => {
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
              });
            }
          });
        }
        _exec(method, registry2, component) {
          const camelMethod = _capitalize(method);
          callback(component["before" + camelMethod], [], component);
          registry2[method](component);
          callback(component["after" + camelMethod], [], component);
        }
        _getRegistryForType(type) {
          for (let i = 0; i < this._typedRegistries.length; i++) {
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) {
              return reg;
            }
          }
          return this.plugins;
        }
        _get(id, typedRegistry, type) {
          const item = typedRegistry.get(id);
          if (item === void 0) {
            throw new Error('"' + id + '" is not a registered ' + type + ".");
          }
          return item;
        }
      }
      var registry = new Registry();
      class PluginService {
        constructor() {
          this._init = [];
        }
        notify(chart, hook, args, filter) {
          if (hook === "beforeInit") {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, "install");
          }
          const descriptors2 = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
          const result = this._notify(descriptors2, chart, hook, args);
          if (hook === "afterDestroy") {
            this._notify(descriptors2, chart, "stop");
            this._notify(this._init, chart, "uninstall");
          }
          return result;
        }
        _notify(descriptors2, chart, hook, args) {
          args = args || {};
          for (const descriptor of descriptors2) {
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [chart, args, descriptor.options];
            if (callback(method, params, plugin) === false && args.cancelable) {
              return false;
            }
          }
          return true;
        }
        invalidate() {
          if (!isNullOrUndef(this._cache)) {
            this._oldCache = this._cache;
            this._cache = void 0;
          }
        }
        _descriptors(chart) {
          if (this._cache) {
            return this._cache;
          }
          const descriptors2 = this._cache = this._createDescriptors(chart);
          this._notifyStateChanges(chart);
          return descriptors2;
        }
        _createDescriptors(chart, all) {
          const config = chart && chart.config;
          const options = valueOrDefault(config.options && config.options.plugins, {});
          const plugins2 = allPlugins(config);
          return options === false && !all ? [] : createDescriptors(chart, plugins2, options, all);
        }
        _notifyStateChanges(chart) {
          const previousDescriptors = this._oldCache || [];
          const descriptors2 = this._cache;
          const diff = (a, b) => a.filter((x) => !b.some((y) => x.plugin.id === y.plugin.id));
          this._notify(diff(previousDescriptors, descriptors2), chart, "stop");
          this._notify(diff(descriptors2, previousDescriptors), chart, "start");
        }
      }
      function allPlugins(config) {
        const localIds = {};
        const plugins2 = [];
        const keys = Object.keys(registry.plugins.items);
        for (let i = 0; i < keys.length; i++) {
          plugins2.push(registry.getPlugin(keys[i]));
        }
        const local = config.plugins || [];
        for (let i = 0; i < local.length; i++) {
          const plugin = local[i];
          if (plugins2.indexOf(plugin) === -1) {
            plugins2.push(plugin);
            localIds[plugin.id] = true;
          }
        }
        return { plugins: plugins2, localIds };
      }
      function getOpts(options, all) {
        if (!all && options === false) {
          return null;
        }
        if (options === true) {
          return {};
        }
        return options;
      }
      function createDescriptors(chart, { plugins: plugins2, localIds }, options, all) {
        const result = [];
        const context = chart.getContext();
        for (const plugin of plugins2) {
          const id = plugin.id;
          const opts = getOpts(options[id], all);
          if (opts === null) {
            continue;
          }
          result.push({
            plugin,
            options: pluginOpts(chart.config, { plugin, local: localIds[id] }, opts, context)
          });
        }
        return result;
      }
      function pluginOpts(config, { plugin, local }, opts, context) {
        const keys = config.pluginScopeKeys(plugin);
        const scopes = config.getOptionScopes(opts, keys);
        if (local && plugin.defaults) {
          scopes.push(plugin.defaults);
        }
        return config.createResolver(scopes, context, [""], {
          scriptable: false,
          indexable: false,
          allKeys: true
        });
      }
      function getIndexAxis(type, options) {
        const datasetDefaults = defaults.datasets[type] || {};
        const datasetOptions = (options.datasets || {})[type] || {};
        return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
      }
      function getAxisFromDefaultScaleID(id, indexAxis) {
        let axis = id;
        if (id === "_index_") {
          axis = indexAxis;
        } else if (id === "_value_") {
          axis = indexAxis === "x" ? "y" : "x";
        }
        return axis;
      }
      function getDefaultScaleIDFromAxis(axis, indexAxis) {
        return axis === indexAxis ? "_index_" : "_value_";
      }
      function axisFromPosition(position) {
        if (position === "top" || position === "bottom") {
          return "x";
        }
        if (position === "left" || position === "right") {
          return "y";
        }
      }
      function determineAxis(id, scaleOptions) {
        if (id === "x" || id === "y") {
          return id;
        }
        return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
      }
      function mergeScaleConfig(config, options) {
        const chartDefaults = overrides[config.type] || { scales: {} };
        const configScales = options.scales || {};
        const chartIndexAxis = getIndexAxis(config.type, options);
        const firstIDs = /* @__PURE__ */ Object.create(null);
        const scales2 = /* @__PURE__ */ Object.create(null);
        Object.keys(configScales).forEach((id) => {
          const scaleConf = configScales[id];
          if (!isObject(scaleConf)) {
            return console.error(`Invalid scale configuration for scale: ${id}`);
          }
          if (scaleConf._proxy) {
            return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
          }
          const axis = determineAxis(id, scaleConf);
          const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
          const defaultScaleOptions = chartDefaults.scales || {};
          firstIDs[axis] = firstIDs[axis] || id;
          scales2[id] = mergeIf(/* @__PURE__ */ Object.create(null), [{ axis }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
        });
        config.data.datasets.forEach((dataset) => {
          const type = dataset.type || config.type;
          const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
          const datasetDefaults = overrides[type] || {};
          const defaultScaleOptions = datasetDefaults.scales || {};
          Object.keys(defaultScaleOptions).forEach((defaultID) => {
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + "AxisID"] || firstIDs[axis] || axis;
            scales2[id] = scales2[id] || /* @__PURE__ */ Object.create(null);
            mergeIf(scales2[id], [{ axis }, configScales[id], defaultScaleOptions[defaultID]]);
          });
        });
        Object.keys(scales2).forEach((key) => {
          const scale = scales2[key];
          mergeIf(scale, [defaults.scales[scale.type], defaults.scale]);
        });
        return scales2;
      }
      function initOptions(config) {
        const options = config.options || (config.options = {});
        options.plugins = valueOrDefault(options.plugins, {});
        options.scales = mergeScaleConfig(config, options);
      }
      function initData(data) {
        data = data || {};
        data.datasets = data.datasets || [];
        data.labels = data.labels || [];
        return data;
      }
      function initConfig(config) {
        config = config || {};
        config.data = initData(config.data);
        initOptions(config);
        return config;
      }
      const keyCache = /* @__PURE__ */ new Map();
      const keysCached = /* @__PURE__ */ new Set();
      function cachedKeys(cacheKey, generate) {
        let keys = keyCache.get(cacheKey);
        if (!keys) {
          keys = generate();
          keyCache.set(cacheKey, keys);
          keysCached.add(keys);
        }
        return keys;
      }
      const addIfFound = (set2, obj, key) => {
        const opts = resolveObjectKey(obj, key);
        if (opts !== void 0) {
          set2.add(opts);
        }
      };
      class Config {
        constructor(config) {
          this._config = initConfig(config);
          this._scopeCache = /* @__PURE__ */ new Map();
          this._resolverCache = /* @__PURE__ */ new Map();
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(type) {
          this._config.type = type;
        }
        get data() {
          return this._config.data;
        }
        set data(data) {
          this._config.data = initData(data);
        }
        get options() {
          return this._config.options;
        }
        set options(options) {
          this._config.options = options;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const config = this._config;
          this.clearCache();
          initOptions(config);
        }
        clearCache() {
          this._scopeCache.clear();
          this._resolverCache.clear();
        }
        datasetScopeKeys(datasetType) {
          return cachedKeys(
            datasetType,
            () => [[
              `datasets.${datasetType}`,
              ""
            ]]
          );
        }
        datasetAnimationScopeKeys(datasetType, transition) {
          return cachedKeys(
            `${datasetType}.transition.${transition}`,
            () => [
              [
                `datasets.${datasetType}.transitions.${transition}`,
                `transitions.${transition}`
              ],
              [
                `datasets.${datasetType}`,
                ""
              ]
            ]
          );
        }
        datasetElementScopeKeys(datasetType, elementType) {
          return cachedKeys(
            `${datasetType}-${elementType}`,
            () => [[
              `datasets.${datasetType}.elements.${elementType}`,
              `datasets.${datasetType}`,
              `elements.${elementType}`,
              ""
            ]]
          );
        }
        pluginScopeKeys(plugin) {
          const id = plugin.id;
          const type = this.type;
          return cachedKeys(
            `${type}-plugin-${id}`,
            () => [[
              `plugins.${id}`,
              ...plugin.additionalOptionScopes || []
            ]]
          );
        }
        _cachedScopes(mainScope, resetCache) {
          const _scopeCache = this._scopeCache;
          let cache = _scopeCache.get(mainScope);
          if (!cache || resetCache) {
            cache = /* @__PURE__ */ new Map();
            _scopeCache.set(mainScope, cache);
          }
          return cache;
        }
        getOptionScopes(mainScope, keyLists, resetCache) {
          const { options, type } = this;
          const cache = this._cachedScopes(mainScope, resetCache);
          const cached = cache.get(keyLists);
          if (cached) {
            return cached;
          }
          const scopes = /* @__PURE__ */ new Set();
          keyLists.forEach((keys) => {
            if (mainScope) {
              scopes.add(mainScope);
              keys.forEach((key) => addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key) => addIfFound(scopes, options, key));
            keys.forEach((key) => addIfFound(scopes, overrides[type] || {}, key));
            keys.forEach((key) => addIfFound(scopes, defaults, key));
            keys.forEach((key) => addIfFound(scopes, descriptors, key));
          });
          const array = Array.from(scopes);
          if (array.length === 0) {
            array.push(/* @__PURE__ */ Object.create(null));
          }
          if (keysCached.has(keyLists)) {
            cache.set(keyLists, array);
          }
          return array;
        }
        chartOptionScopes() {
          const { options, type } = this;
          return [
            options,
            overrides[type] || {},
            defaults.datasets[type] || {},
            { type },
            defaults,
            descriptors
          ];
        }
        resolveNamedOptions(scopes, names2, context, prefixes = [""]) {
          const result = { $shared: true };
          const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
          let options = resolver;
          if (needContext(resolver, names2)) {
            result.$shared = false;
            context = isFunction(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = _attachContext(resolver, context, subResolver);
          }
          for (const prop of names2) {
            result[prop] = options[prop];
          }
          return result;
        }
        createResolver(scopes, context, prefixes = [""], descriptorDefaults) {
          const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
          return isObject(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
        }
      }
      function getResolver(resolverCache, scopes, prefixes) {
        let cache = resolverCache.get(scopes);
        if (!cache) {
          cache = /* @__PURE__ */ new Map();
          resolverCache.set(scopes, cache);
        }
        const cacheKey = prefixes.join();
        let cached = cache.get(cacheKey);
        if (!cached) {
          const resolver = _createResolver(scopes, prefixes);
          cached = {
            resolver,
            subPrefixes: prefixes.filter((p) => !p.toLowerCase().includes("hover"))
          };
          cache.set(cacheKey, cached);
        }
        return cached;
      }
      const hasFunction = (value) => isObject(value) && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || isFunction(value[key]), false);
      function needContext(proxy, names2) {
        const { isScriptable, isIndexable } = _descriptors(proxy);
        for (const prop of names2) {
          const scriptable = isScriptable(prop);
          const indexable = isIndexable(prop);
          const value = (indexable || scriptable) && proxy[prop];
          if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) {
            return true;
          }
        }
        return false;
      }
      var version = "3.9.1";
      const KNOWN_POSITIONS = ["top", "bottom", "left", "right", "chartArea"];
      function positionIsHorizontal(position, axis) {
        return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
      }
      function compare2Level(l1, l2) {
        return function(a, b) {
          return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
        };
      }
      function onAnimationsComplete(context) {
        const chart = context.chart;
        const animationOptions2 = chart.options.animation;
        chart.notifyPlugins("afterRender");
        callback(animationOptions2 && animationOptions2.onComplete, [context], chart);
      }
      function onAnimationProgress(context) {
        const chart = context.chart;
        const animationOptions2 = chart.options.animation;
        callback(animationOptions2 && animationOptions2.onProgress, [context], chart);
      }
      function getCanvas(item) {
        if (_isDomSupported() && typeof item === "string") {
          item = document.getElementById(item);
        } else if (item && item.length) {
          item = item[0];
        }
        if (item && item.canvas) {
          item = item.canvas;
        }
        return item;
      }
      const instances = {};
      const getChart = (key) => {
        const canvas = getCanvas(key);
        return Object.values(instances).filter((c) => c.canvas === canvas).pop();
      };
      function moveNumericKeys(obj, start, move) {
        const keys = Object.keys(obj);
        for (const key of keys) {
          const intKey = +key;
          if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) {
              obj[intKey + move] = value;
            }
          }
        }
      }
      function determineLastEvent(e, lastEvent, inChartArea, isClick) {
        if (!inChartArea || e.type === "mouseout") {
          return null;
        }
        if (isClick) {
          return lastEvent;
        }
        return e;
      }
      class Chart2 {
        constructor(item, userConfig) {
          const config = this.config = new Config(userConfig);
          const initialCanvas = getCanvas(item);
          const existingChart = getChart(initialCanvas);
          if (existingChart) {
            throw new Error(
              "Canvas is already in use. Chart with ID '" + existingChart.id + "' must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused."
            );
          }
          const options = config.createResolver(config.chartOptionScopes(), this.getContext());
          this.platform = new (config.platform || _detectPlatform(initialCanvas))();
          this.platform.updateConfig(config);
          const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
          const canvas = context && context.canvas;
          const height = canvas && canvas.height;
          const width = canvas && canvas.width;
          this.id = uid();
          this.ctx = context;
          this.canvas = canvas;
          this.width = width;
          this.height = height;
          this._options = options;
          this._aspectRatio = this.aspectRatio;
          this._layers = [];
          this._metasets = [];
          this._stacks = void 0;
          this.boxes = [];
          this.currentDevicePixelRatio = void 0;
          this.chartArea = void 0;
          this._active = [];
          this._lastEvent = void 0;
          this._listeners = {};
          this._responsiveListeners = void 0;
          this._sortedMetasets = [];
          this.scales = {};
          this._plugins = new PluginService();
          this.$proxies = {};
          this._hiddenIndices = {};
          this.attached = false;
          this._animationsDisabled = void 0;
          this.$context = void 0;
          this._doResize = debounce((mode) => this.update(mode), options.resizeDelay || 0);
          this._dataChanges = [];
          instances[this.id] = this;
          if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
          }
          animator.listen(this, "complete", onAnimationsComplete);
          animator.listen(this, "progress", onAnimationProgress);
          this._initialize();
          if (this.attached) {
            this.update();
          }
        }
        get aspectRatio() {
          const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
          if (!isNullOrUndef(aspectRatio)) {
            return aspectRatio;
          }
          if (maintainAspectRatio && _aspectRatio) {
            return _aspectRatio;
          }
          return height ? width / height : null;
        }
        get data() {
          return this.config.data;
        }
        set data(data) {
          this.config.data = data;
        }
        get options() {
          return this._options;
        }
        set options(options) {
          this.config.options = options;
        }
        _initialize() {
          this.notifyPlugins("beforeInit");
          if (this.options.responsive) {
            this.resize();
          } else {
            retinaScale(this, this.options.devicePixelRatio);
          }
          this.bindEvents();
          this.notifyPlugins("afterInit");
          return this;
        }
        clear() {
          clearCanvas(this.canvas, this.ctx);
          return this;
        }
        stop() {
          animator.stop(this);
          return this;
        }
        resize(width, height) {
          if (!animator.running(this)) {
            this._resize(width, height);
          } else {
            this._resizeBeforeDraw = { width, height };
          }
        }
        _resize(width, height) {
          const options = this.options;
          const canvas = this.canvas;
          const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
          const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
          const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
          const mode = this.width ? "resize" : "attach";
          this.width = newSize.width;
          this.height = newSize.height;
          this._aspectRatio = this.aspectRatio;
          if (!retinaScale(this, newRatio, true)) {
            return;
          }
          this.notifyPlugins("resize", { size: newSize });
          callback(options.onResize, [this, newSize], this);
          if (this.attached) {
            if (this._doResize(mode)) {
              this.render();
            }
          }
        }
        ensureScalesHaveIDs() {
          const options = this.options;
          const scalesOptions = options.scales || {};
          each(scalesOptions, (axisOptions, axisID) => {
            axisOptions.id = axisID;
          });
        }
        buildOrUpdateScales() {
          const options = this.options;
          const scaleOpts = options.scales;
          const scales2 = this.scales;
          const updated = Object.keys(scales2).reduce((obj, id) => {
            obj[id] = false;
            return obj;
          }, {});
          let items = [];
          if (scaleOpts) {
            items = items.concat(
              Object.keys(scaleOpts).map((id) => {
                const scaleOptions = scaleOpts[id];
                const axis = determineAxis(id, scaleOptions);
                const isRadial = axis === "r";
                const isHorizontal = axis === "x";
                return {
                  options: scaleOptions,
                  dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
                  dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
                };
              })
            );
          }
          each(items, (item) => {
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
            if (scaleOptions.position === void 0 || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
              scaleOptions.position = item.dposition;
            }
            updated[id] = true;
            let scale = null;
            if (id in scales2 && scales2[id].type === scaleType) {
              scale = scales2[id];
            } else {
              const scaleClass = registry.getScale(scaleType);
              scale = new scaleClass({
                id,
                type: scaleType,
                ctx: this.ctx,
                chart: this
              });
              scales2[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
          });
          each(updated, (hasUpdated, id) => {
            if (!hasUpdated) {
              delete scales2[id];
            }
          });
          each(scales2, (scale) => {
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
          });
        }
        _updateMetasets() {
          const metasets = this._metasets;
          const numData = this.data.datasets.length;
          const numMeta = metasets.length;
          metasets.sort((a, b) => a.index - b.index);
          if (numMeta > numData) {
            for (let i = numData; i < numMeta; ++i) {
              this._destroyDatasetMeta(i);
            }
            metasets.splice(numData, numMeta - numData);
          }
          this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
        }
        _removeUnreferencedMetasets() {
          const { _metasets: metasets, data: { datasets } } = this;
          if (metasets.length > datasets.length) {
            delete this._stacks;
          }
          metasets.forEach((meta, index2) => {
            if (datasets.filter((x) => x === meta._dataset).length === 0) {
              this._destroyDatasetMeta(index2);
            }
          });
        }
        buildOrUpdateControllers() {
          const newControllers = [];
          const datasets = this.data.datasets;
          let i, ilen;
          this._removeUnreferencedMetasets();
          for (i = 0, ilen = datasets.length; i < ilen; i++) {
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
              this._destroyDatasetMeta(i);
              meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = "" + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
              meta.controller.updateIndex(i);
              meta.controller.linkScales();
            } else {
              const ControllerClass = registry.getController(type);
              const { datasetElementType, dataElementType } = defaults.datasets[type];
              Object.assign(ControllerClass.prototype, {
                dataElementType: registry.getElement(dataElementType),
                datasetElementType: datasetElementType && registry.getElement(datasetElementType)
              });
              meta.controller = new ControllerClass(this, i);
              newControllers.push(meta.controller);
            }
          }
          this._updateMetasets();
          return newControllers;
        }
        _resetElements() {
          each(this.data.datasets, (dataset, datasetIndex) => {
            this.getDatasetMeta(datasetIndex).controller.reset();
          }, this);
        }
        reset() {
          this._resetElements();
          this.notifyPlugins("reset");
        }
        update(mode) {
          const config = this.config;
          config.update();
          const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
          const animsDisabled = this._animationsDisabled = !options.animation;
          this._updateScales();
          this._checkEventBindings();
          this._updateHiddenIndices();
          this._plugins.invalidate();
          if (this.notifyPlugins("beforeUpdate", { mode, cancelable: true }) === false) {
            return;
          }
          const newControllers = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let minPadding = 0;
          for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
            const { controller } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
          }
          minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
          this._updateLayout(minPadding);
          if (!animsDisabled) {
            each(newControllers, (controller) => {
              controller.reset();
            });
          }
          this._updateDatasets(mode);
          this.notifyPlugins("afterUpdate", { mode });
          this._layers.sort(compare2Level("z", "_idx"));
          const { _active, _lastEvent } = this;
          if (_lastEvent) {
            this._eventHandler(_lastEvent, true);
          } else if (_active.length) {
            this._updateHoverStyles(_active, _active, true);
          }
          this.render();
        }
        _updateScales() {
          each(this.scales, (scale) => {
            layouts.removeBox(this, scale);
          });
          this.ensureScalesHaveIDs();
          this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const options = this.options;
          const existingEvents = new Set(Object.keys(this._listeners));
          const newEvents = new Set(options.events);
          if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
          }
        }
        _updateHiddenIndices() {
          const { _hiddenIndices } = this;
          const changes = this._getUniformDataChanges() || [];
          for (const { method, start, count } of changes) {
            const move = method === "_removeElements" ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
          }
        }
        _getUniformDataChanges() {
          const _dataChanges = this._dataChanges;
          if (!_dataChanges || !_dataChanges.length) {
            return;
          }
          this._dataChanges = [];
          const datasetCount = this.data.datasets.length;
          const makeSet = (idx) => new Set(
            _dataChanges.filter((c) => c[0] === idx).map((c, i) => i + "," + c.splice(1).join(","))
          );
          const changeSet = makeSet(0);
          for (let i = 1; i < datasetCount; i++) {
            if (!setsEqual(changeSet, makeSet(i))) {
              return;
            }
          }
          return Array.from(changeSet).map((c) => c.split(",")).map((a) => ({ method: a[1], start: +a[2], count: +a[3] }));
        }
        _updateLayout(minPadding) {
          if (this.notifyPlugins("beforeLayout", { cancelable: true }) === false) {
            return;
          }
          layouts.update(this, this.width, this.height, minPadding);
          const area = this.chartArea;
          const noArea = area.width <= 0 || area.height <= 0;
          this._layers = [];
          each(this.boxes, (box) => {
            if (noArea && box.position === "chartArea") {
              return;
            }
            if (box.configure) {
              box.configure();
            }
            this._layers.push(...box._layers());
          }, this);
          this._layers.forEach((item, index2) => {
            item._idx = index2;
          });
          this.notifyPlugins("afterLayout");
        }
        _updateDatasets(mode) {
          if (this.notifyPlugins("beforeDatasetsUpdate", { mode, cancelable: true }) === false) {
            return;
          }
          for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
            this.getDatasetMeta(i).controller.configure();
          }
          for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
            this._updateDataset(i, isFunction(mode) ? mode({ datasetIndex: i }) : mode);
          }
          this.notifyPlugins("afterDatasetsUpdate", { mode });
        }
        _updateDataset(index2, mode) {
          const meta = this.getDatasetMeta(index2);
          const args = { meta, index: index2, mode, cancelable: true };
          if (this.notifyPlugins("beforeDatasetUpdate", args) === false) {
            return;
          }
          meta.controller._update(mode);
          args.cancelable = false;
          this.notifyPlugins("afterDatasetUpdate", args);
        }
        render() {
          if (this.notifyPlugins("beforeRender", { cancelable: true }) === false) {
            return;
          }
          if (animator.has(this)) {
            if (this.attached && !animator.running(this)) {
              animator.start(this);
            }
          } else {
            this.draw();
            onAnimationsComplete({ chart: this });
          }
        }
        draw() {
          let i;
          if (this._resizeBeforeDraw) {
            const { width, height } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
          }
          this.clear();
          if (this.width <= 0 || this.height <= 0) {
            return;
          }
          if (this.notifyPlugins("beforeDraw", { cancelable: true }) === false) {
            return;
          }
          const layers = this._layers;
          for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
            layers[i].draw(this.chartArea);
          }
          this._drawDatasets();
          for (; i < layers.length; ++i) {
            layers[i].draw(this.chartArea);
          }
          this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(filterVisible) {
          const metasets = this._sortedMetasets;
          const result = [];
          let i, ilen;
          for (i = 0, ilen = metasets.length; i < ilen; ++i) {
            const meta = metasets[i];
            if (!filterVisible || meta.visible) {
              result.push(meta);
            }
          }
          return result;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(true);
        }
        _drawDatasets() {
          if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: true }) === false) {
            return;
          }
          const metasets = this.getSortedVisibleDatasetMetas();
          for (let i = metasets.length - 1; i >= 0; --i) {
            this._drawDataset(metasets[i]);
          }
          this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(meta) {
          const ctx = this.ctx;
          const clip = meta._clip;
          const useClip = !clip.disabled;
          const area = this.chartArea;
          const args = {
            meta,
            index: meta.index,
            cancelable: true
          };
          if (this.notifyPlugins("beforeDatasetDraw", args) === false) {
            return;
          }
          if (useClip) {
            clipArea(ctx, {
              left: clip.left === false ? 0 : area.left - clip.left,
              right: clip.right === false ? this.width : area.right + clip.right,
              top: clip.top === false ? 0 : area.top - clip.top,
              bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
            });
          }
          meta.controller.draw();
          if (useClip) {
            unclipArea(ctx);
          }
          args.cancelable = false;
          this.notifyPlugins("afterDatasetDraw", args);
        }
        isPointInArea(point) {
          return _isPointInArea(point, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(e, mode, options, useFinalPosition) {
          const method = Interaction.modes[mode];
          if (typeof method === "function") {
            return method(this, e, options, useFinalPosition);
          }
          return [];
        }
        getDatasetMeta(datasetIndex) {
          const dataset = this.data.datasets[datasetIndex];
          const metasets = this._metasets;
          let meta = metasets.filter((x) => x && x._dataset === dataset).pop();
          if (!meta) {
            meta = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: dataset && dataset.order || 0,
              index: datasetIndex,
              _dataset: dataset,
              _parsed: [],
              _sorted: false
            };
            metasets.push(meta);
          }
          return meta;
        }
        getContext() {
          return this.$context || (this.$context = createContext(null, { chart: this, type: "chart" }));
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(datasetIndex) {
          const dataset = this.data.datasets[datasetIndex];
          if (!dataset) {
            return false;
          }
          const meta = this.getDatasetMeta(datasetIndex);
          return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
        }
        setDatasetVisibility(datasetIndex, visible) {
          const meta = this.getDatasetMeta(datasetIndex);
          meta.hidden = !visible;
        }
        toggleDataVisibility(index2) {
          this._hiddenIndices[index2] = !this._hiddenIndices[index2];
        }
        getDataVisibility(index2) {
          return !this._hiddenIndices[index2];
        }
        _updateVisibility(datasetIndex, dataIndex, visible) {
          const mode = visible ? "show" : "hide";
          const meta = this.getDatasetMeta(datasetIndex);
          const anims = meta.controller._resolveAnimations(void 0, mode);
          if (defined(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
          } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, { visible });
            this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : void 0);
          }
        }
        hide(datasetIndex, dataIndex) {
          this._updateVisibility(datasetIndex, dataIndex, false);
        }
        show(datasetIndex, dataIndex) {
          this._updateVisibility(datasetIndex, dataIndex, true);
        }
        _destroyDatasetMeta(datasetIndex) {
          const meta = this._metasets[datasetIndex];
          if (meta && meta.controller) {
            meta.controller._destroy();
          }
          delete this._metasets[datasetIndex];
        }
        _stop() {
          let i, ilen;
          this.stop();
          animator.remove(this);
          for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
            this._destroyDatasetMeta(i);
          }
        }
        destroy() {
          this.notifyPlugins("beforeDestroy");
          const { canvas, ctx } = this;
          this._stop();
          this.config.clearCache();
          if (canvas) {
            this.unbindEvents();
            clearCanvas(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
          }
          this.notifyPlugins("destroy");
          delete instances[this.id];
          this.notifyPlugins("afterDestroy");
        }
        toBase64Image(...args) {
          return this.canvas.toDataURL(...args);
        }
        bindEvents() {
          this.bindUserEvents();
          if (this.options.responsive) {
            this.bindResponsiveEvents();
          } else {
            this.attached = true;
          }
        }
        bindUserEvents() {
          const listeners = this._listeners;
          const platform = this.platform;
          const _add = (type, listener2) => {
            platform.addEventListener(this, type, listener2);
            listeners[type] = listener2;
          };
          const listener = (e, x, y) => {
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
          };
          each(this.options.events, (type) => _add(type, listener));
        }
        bindResponsiveEvents() {
          if (!this._responsiveListeners) {
            this._responsiveListeners = {};
          }
          const listeners = this._responsiveListeners;
          const platform = this.platform;
          const _add = (type, listener2) => {
            platform.addEventListener(this, type, listener2);
            listeners[type] = listener2;
          };
          const _remove = (type, listener2) => {
            if (listeners[type]) {
              platform.removeEventListener(this, type, listener2);
              delete listeners[type];
            }
          };
          const listener = (width, height) => {
            if (this.canvas) {
              this.resize(width, height);
            }
          };
          let detached;
          const attached = () => {
            _remove("attach", attached);
            this.attached = true;
            this.resize();
            _add("resize", listener);
            _add("detach", detached);
          };
          detached = () => {
            this.attached = false;
            _remove("resize", listener);
            this._stop();
            this._resize(0, 0);
            _add("attach", attached);
          };
          if (platform.isAttached(this.canvas)) {
            attached();
          } else {
            detached();
          }
        }
        unbindEvents() {
          each(this._listeners, (listener, type) => {
            this.platform.removeEventListener(this, type, listener);
          });
          this._listeners = {};
          each(this._responsiveListeners, (listener, type) => {
            this.platform.removeEventListener(this, type, listener);
          });
          this._responsiveListeners = void 0;
        }
        updateHoverStyle(items, mode, enabled) {
          const prefix = enabled ? "set" : "remove";
          let meta, item, i, ilen;
          if (mode === "dataset") {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller["_" + prefix + "DatasetHoverStyle"]();
          }
          for (i = 0, ilen = items.length; i < ilen; ++i) {
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) {
              controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
            }
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(activeElements) {
          const lastActive = this._active || [];
          const active = activeElements.map(({ datasetIndex, index: index2 }) => {
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) {
              throw new Error("No dataset found at index " + datasetIndex);
            }
            return {
              datasetIndex,
              element: meta.data[index2],
              index: index2
            };
          });
          const changed = !_elementsEqual(active, lastActive);
          if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
          }
        }
        notifyPlugins(hook, args, filter) {
          return this._plugins.notify(this, hook, args, filter);
        }
        _updateHoverStyles(active, lastActive, replay) {
          const hoverOptions = this.options.hover;
          const diff = (a, b) => a.filter((x) => !b.some((y) => x.datasetIndex === y.datasetIndex && x.index === y.index));
          const deactivated = diff(lastActive, active);
          const activated = replay ? active : diff(active, lastActive);
          if (deactivated.length) {
            this.updateHoverStyle(deactivated, hoverOptions.mode, false);
          }
          if (activated.length && hoverOptions.mode) {
            this.updateHoverStyle(activated, hoverOptions.mode, true);
          }
        }
        _eventHandler(e, replay) {
          const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
          };
          const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e.native.type);
          if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) {
            return;
          }
          const changed = this._handleEvent(e, replay, args.inChartArea);
          args.cancelable = false;
          this.notifyPlugins("afterEvent", args, eventFilter);
          if (changed || args.changed) {
            this.render();
          }
          return this;
        }
        _handleEvent(e, replay, inChartArea) {
          const { _active: lastActive = [], options } = this;
          const useFinalPosition = replay;
          const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
          const isClick = _isClickEvent(e);
          const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
          if (inChartArea) {
            this._lastEvent = null;
            callback(options.onHover, [e, active, this], this);
            if (isClick) {
              callback(options.onClick, [e, active, this], this);
            }
          }
          const changed = !_elementsEqual(active, lastActive);
          if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
          }
          this._lastEvent = lastEvent;
          return changed;
        }
        _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
          if (e.type === "mouseout") {
            return [];
          }
          if (!inChartArea) {
            return lastActive;
          }
          const hoverOptions = this.options.hover;
          return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
        }
      }
      const invalidatePlugins = () => each(Chart2.instances, (chart) => chart._plugins.invalidate());
      const enumerable = true;
      Object.defineProperties(Chart2, {
        defaults: {
          enumerable,
          value: defaults
        },
        instances: {
          enumerable,
          value: instances
        },
        overrides: {
          enumerable,
          value: overrides
        },
        registry: {
          enumerable,
          value: registry
        },
        version: {
          enumerable,
          value: version
        },
        getChart: {
          enumerable,
          value: getChart
        },
        register: {
          enumerable,
          value: (...items) => {
            registry.add(...items);
            invalidatePlugins();
          }
        },
        unregister: {
          enumerable,
          value: (...items) => {
            registry.remove(...items);
            invalidatePlugins();
          }
        }
      });
      function abstract() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
      }
      class DateAdapter {
        constructor(options) {
          this.options = options || {};
        }
        init(chartOptions) {
        }
        formats() {
          return abstract();
        }
        parse(value, format) {
          return abstract();
        }
        format(timestamp, format) {
          return abstract();
        }
        add(timestamp, amount, unit) {
          return abstract();
        }
        diff(a, b, unit) {
          return abstract();
        }
        startOf(timestamp, unit, weekday) {
          return abstract();
        }
        endOf(timestamp, unit) {
          return abstract();
        }
      }
      DateAdapter.override = function(members) {
        Object.assign(DateAdapter.prototype, members);
      };
      var _adapters = {
        _date: DateAdapter
      };
      function getAllScaleValues(scale, type) {
        if (!scale._cache.$bar) {
          const visibleMetas = scale.getMatchingVisibleMetas(type);
          let values = [];
          for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
            values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
          }
          scale._cache.$bar = _arrayUnique(values.sort((a, b) => a - b));
        }
        return scale._cache.$bar;
      }
      function computeMinSampleSize(meta) {
        const scale = meta.iScale;
        const values = getAllScaleValues(scale, meta.type);
        let min = scale._length;
        let i, ilen, curr, prev;
        const updateMinAndPrev = () => {
          if (curr === 32767 || curr === -32768) {
            return;
          }
          if (defined(prev)) {
            min = Math.min(min, Math.abs(curr - prev) || min);
          }
          prev = curr;
        };
        for (i = 0, ilen = values.length; i < ilen; ++i) {
          curr = scale.getPixelForValue(values[i]);
          updateMinAndPrev();
        }
        prev = void 0;
        for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
          curr = scale.getPixelForTick(i);
          updateMinAndPrev();
        }
        return min;
      }
      function computeFitCategoryTraits(index2, ruler, options, stackCount) {
        const thickness = options.barThickness;
        let size, ratio;
        if (isNullOrUndef(thickness)) {
          size = ruler.min * options.categoryPercentage;
          ratio = options.barPercentage;
        } else {
          size = thickness * stackCount;
          ratio = 1;
        }
        return {
          chunk: size / stackCount,
          ratio,
          start: ruler.pixels[index2] - size / 2
        };
      }
      function computeFlexCategoryTraits(index2, ruler, options, stackCount) {
        const pixels = ruler.pixels;
        const curr = pixels[index2];
        let prev = index2 > 0 ? pixels[index2 - 1] : null;
        let next = index2 < pixels.length - 1 ? pixels[index2 + 1] : null;
        const percent = options.categoryPercentage;
        if (prev === null) {
          prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
        }
        if (next === null) {
          next = curr + curr - prev;
        }
        const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
        const size = Math.abs(next - prev) / 2 * percent;
        return {
          chunk: size / stackCount,
          ratio: options.barPercentage,
          start
        };
      }
      function parseFloatBar(entry, item, vScale, i) {
        const startValue = vScale.parse(entry[0], i);
        const endValue = vScale.parse(entry[1], i);
        const min = Math.min(startValue, endValue);
        const max = Math.max(startValue, endValue);
        let barStart = min;
        let barEnd = max;
        if (Math.abs(min) > Math.abs(max)) {
          barStart = max;
          barEnd = min;
        }
        item[vScale.axis] = barEnd;
        item._custom = {
          barStart,
          barEnd,
          start: startValue,
          end: endValue,
          min,
          max
        };
      }
      function parseValue(entry, item, vScale, i) {
        if (isArray(entry)) {
          parseFloatBar(entry, item, vScale, i);
        } else {
          item[vScale.axis] = vScale.parse(entry, i);
        }
        return item;
      }
      function parseArrayOrPrimitive(meta, data, start, count) {
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = [];
        let i, ilen, item, entry;
        for (i = start, ilen = start + count; i < ilen; ++i) {
          entry = data[i];
          item = {};
          item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
          parsed.push(parseValue(entry, item, vScale, i));
        }
        return parsed;
      }
      function isFloatBar(custom) {
        return custom && custom.barStart !== void 0 && custom.barEnd !== void 0;
      }
      function barSign(size, vScale, actualBase) {
        if (size !== 0) {
          return sign(size);
        }
        return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
      }
      function borderProps(properties) {
        let reverse, start, end, top, bottom;
        if (properties.horizontal) {
          reverse = properties.base > properties.x;
          start = "left";
          end = "right";
        } else {
          reverse = properties.base < properties.y;
          start = "bottom";
          end = "top";
        }
        if (reverse) {
          top = "end";
          bottom = "start";
        } else {
          top = "start";
          bottom = "end";
        }
        return { start, end, reverse, top, bottom };
      }
      function setBorderSkipped(properties, options, stack, index2) {
        let edge = options.borderSkipped;
        const res = {};
        if (!edge) {
          properties.borderSkipped = res;
          return;
        }
        if (edge === true) {
          properties.borderSkipped = { top: true, right: true, bottom: true, left: true };
          return;
        }
        const { start, end, reverse, top, bottom } = borderProps(properties);
        if (edge === "middle" && stack) {
          properties.enableBorderRadius = true;
          if ((stack._top || 0) === index2) {
            edge = top;
          } else if ((stack._bottom || 0) === index2) {
            edge = bottom;
          } else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
          }
        }
        res[parseEdge(edge, start, end, reverse)] = true;
        properties.borderSkipped = res;
      }
      function parseEdge(edge, a, b, reverse) {
        if (reverse) {
          edge = swap(edge, a, b);
          edge = startEnd(edge, b, a);
        } else {
          edge = startEnd(edge, a, b);
        }
        return edge;
      }
      function swap(orig, v1, v2) {
        return orig === v1 ? v2 : orig === v2 ? v1 : orig;
      }
      function startEnd(v, start, end) {
        return v === "start" ? start : v === "end" ? end : v;
      }
      function setInflateAmount(properties, { inflateAmount }, ratio) {
        properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
      }
      class BarController2 extends DatasetController {
        parsePrimitiveData(meta, data, start, count) {
          return parseArrayOrPrimitive(meta, data, start, count);
        }
        parseArrayData(meta, data, start, count) {
          return parseArrayOrPrimitive(meta, data, start, count);
        }
        parseObjectData(meta, data, start, count) {
          const { iScale, vScale } = meta;
          const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
          const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
          const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
          const parsed = [];
          let i, ilen, item, obj;
          for (i = start, ilen = start + count; i < ilen; ++i) {
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
            parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
          }
          return parsed;
        }
        updateRangeFromParsed(range, scale, parsed, stack) {
          super.updateRangeFromParsed(range, scale, parsed, stack);
          const custom = parsed._custom;
          if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
          }
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(index2) {
          const meta = this._cachedMeta;
          const { iScale, vScale } = meta;
          const parsed = this.getParsed(index2);
          const custom = parsed._custom;
          const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
          return {
            label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
            value
          };
        }
        initialize() {
          this.enableOptionSharing = true;
          super.initialize();
          const meta = this._cachedMeta;
          meta.stack = this.getDataset().stack;
        }
        update(mode) {
          const meta = this._cachedMeta;
          this.updateElements(meta.data, 0, meta.data.length, mode);
        }
        updateElements(bars, start, count, mode) {
          const reset = mode === "reset";
          const { index: index2, _cachedMeta: { vScale } } = this;
          const base = vScale.getBasePixel();
          const horizontal = vScale.isHorizontal();
          const ruler = this._getRuler();
          const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
          for (let i = start; i < start + count; i++) {
            const parsed = this.getParsed(i);
            const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? { base, head: base } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
              horizontal,
              base: vpixels.base,
              enableBorderRadius: !stack || isFloatBar(parsed._custom) || (index2 === stack._top || index2 === stack._bottom),
              x: horizontal ? vpixels.head : ipixels.center,
              y: horizontal ? ipixels.center : vpixels.head,
              height: horizontal ? ipixels.size : Math.abs(vpixels.size),
              width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) {
              properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
            }
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index2);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
          }
        }
        _getStacks(last, dataIndex) {
          const { iScale } = this._cachedMeta;
          const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta) => meta.controller.options.grouped);
          const stacked = iScale.options.stacked;
          const stacks = [];
          const skipNull = (meta) => {
            const parsed = meta.controller.getParsed(dataIndex);
            const val = parsed && parsed[meta.vScale.axis];
            if (isNullOrUndef(val) || isNaN(val)) {
              return true;
            }
          };
          for (const meta of metasets) {
            if (dataIndex !== void 0 && skipNull(meta)) {
              continue;
            }
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === void 0 && meta.stack === void 0) {
              stacks.push(meta.stack);
            }
            if (meta.index === last) {
              break;
            }
          }
          if (!stacks.length) {
            stacks.push(void 0);
          }
          return stacks;
        }
        _getStackCount(index2) {
          return this._getStacks(void 0, index2).length;
        }
        _getStackIndex(datasetIndex, name, dataIndex) {
          const stacks = this._getStacks(datasetIndex, dataIndex);
          const index2 = name !== void 0 ? stacks.indexOf(name) : -1;
          return index2 === -1 ? stacks.length - 1 : index2;
        }
        _getRuler() {
          const opts = this.options;
          const meta = this._cachedMeta;
          const iScale = meta.iScale;
          const pixels = [];
          let i, ilen;
          for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
            pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
          }
          const barThickness = opts.barThickness;
          const min = barThickness || computeMinSampleSize(meta);
          return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
          };
        }
        _calculateBarValuePixels(index2) {
          const { _cachedMeta: { vScale, _stacked }, options: { base: baseValue, minBarLength } } = this;
          const actualBase = baseValue || 0;
          const parsed = this.getParsed(index2);
          const custom = parsed._custom;
          const floating = isFloatBar(custom);
          let value = parsed[vScale.axis];
          let start = 0;
          let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
          let head, size;
          if (length !== value) {
            start = length - value;
            length = value;
          }
          if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
              start = 0;
            }
            start += value;
          }
          const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
          let base = vScale.getPixelForValue(startValue);
          if (this.chart.getDataVisibility(index2)) {
            head = vScale.getPixelForValue(start + length);
          } else {
            head = base;
          }
          size = head - base;
          if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) {
              base -= size / 2;
            }
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
          }
          if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
          }
          return {
            size,
            base,
            head,
            center: head + size / 2
          };
        }
        _calculateBarIndexPixels(index2, ruler) {
          const scale = ruler.scale;
          const options = this.options;
          const skipNull = options.skipNull;
          const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
          let center, size;
          if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index2) : ruler.stackCount;
            const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index2, ruler, options, stackCount) : computeFitCategoryTraits(index2, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index2 : void 0);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
          } else {
            center = scale.getPixelForValue(this.getParsed(index2)[scale.axis], index2);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
          }
          return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
          };
        }
        draw() {
          const meta = this._cachedMeta;
          const vScale = meta.vScale;
          const rects = meta.data;
          const ilen = rects.length;
          let i = 0;
          for (; i < ilen; ++i) {
            if (this.getParsed(i)[vScale.axis] !== null) {
              rects[i].draw(this._ctx);
            }
          }
        }
      }
      BarController2.id = "bar";
      BarController2.defaults = {
        datasetElementType: false,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"]
          }
        }
      };
      BarController2.overrides = {
        scales: {
          _index_: {
            type: "category",
            offset: true,
            grid: {
              offset: true
            }
          },
          _value_: {
            type: "linear",
            beginAtZero: true
          }
        }
      };
      class BubbleController extends DatasetController {
        initialize() {
          this.enableOptionSharing = true;
          super.initialize();
        }
        parsePrimitiveData(meta, data, start, count) {
          const parsed = super.parsePrimitiveData(meta, data, start, count);
          for (let i = 0; i < parsed.length; i++) {
            parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
          }
          return parsed;
        }
        parseArrayData(meta, data, start, count) {
          const parsed = super.parseArrayData(meta, data, start, count);
          for (let i = 0; i < parsed.length; i++) {
            const item = data[start + i];
            parsed[i]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i + start).radius);
          }
          return parsed;
        }
        parseObjectData(meta, data, start, count) {
          const parsed = super.parseObjectData(meta, data, start, count);
          for (let i = 0; i < parsed.length; i++) {
            const item = data[start + i];
            parsed[i]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
          }
          return parsed;
        }
        getMaxOverflow() {
          const data = this._cachedMeta.data;
          let max = 0;
          for (let i = data.length - 1; i >= 0; --i) {
            max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
          }
          return max > 0 && max;
        }
        getLabelAndValue(index2) {
          const meta = this._cachedMeta;
          const { xScale, yScale } = meta;
          const parsed = this.getParsed(index2);
          const x = xScale.getLabelForValue(parsed.x);
          const y = yScale.getLabelForValue(parsed.y);
          const r = parsed._custom;
          return {
            label: meta.label,
            value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
          };
        }
        update(mode) {
          const points = this._cachedMeta.data;
          this.updateElements(points, 0, points.length, mode);
        }
        updateElements(points, start, count, mode) {
          const reset = mode === "reset";
          const { iScale, vScale } = this._cachedMeta;
          const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
          const iAxis = iScale.axis;
          const vAxis = vScale.axis;
          for (let i = start; i < start + count; i++) {
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
              properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
              if (reset) {
                properties.options.radius = 0;
              }
            }
            this.updateElement(point, i, properties, mode);
          }
        }
        resolveDataElementOptions(index2, mode) {
          const parsed = this.getParsed(index2);
          let values = super.resolveDataElementOptions(index2, mode);
          if (values.$shared) {
            values = Object.assign({}, values, { $shared: false });
          }
          const radius = values.radius;
          if (mode !== "active") {
            values.radius = 0;
          }
          values.radius += valueOrDefault(parsed && parsed._custom, radius);
          return values;
        }
      }
      BubbleController.id = "bubble";
      BubbleController.defaults = {
        datasetElementType: false,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"]
          }
        }
      };
      BubbleController.overrides = {
        scales: {
          x: {
            type: "linear"
          },
          y: {
            type: "linear"
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              title() {
                return "";
              }
            }
          }
        }
      };
      function getRatioAndOffset(rotation, circumference, cutout) {
        let ratioX = 1;
        let ratioY = 1;
        let offsetX = 0;
        let offsetY = 0;
        if (circumference < TAU) {
          const startAngle = rotation;
          const endAngle = startAngle + circumference;
          const startX = Math.cos(startAngle);
          const startY = Math.sin(startAngle);
          const endX = Math.cos(endAngle);
          const endY = Math.sin(endAngle);
          const calcMax = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
          const calcMin = (angle, a, b) => _angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
          const maxX = calcMax(0, startX, endX);
          const maxY = calcMax(HALF_PI, startY, endY);
          const minX = calcMin(PI, startX, endX);
          const minY = calcMin(PI + HALF_PI, startY, endY);
          ratioX = (maxX - minX) / 2;
          ratioY = (maxY - minY) / 2;
          offsetX = -(maxX + minX) / 2;
          offsetY = -(maxY + minY) / 2;
        }
        return { ratioX, ratioY, offsetX, offsetY };
      }
      class DoughnutController2 extends DatasetController {
        constructor(chart, datasetIndex) {
          super(chart, datasetIndex);
          this.enableOptionSharing = true;
          this.innerRadius = void 0;
          this.outerRadius = void 0;
          this.offsetX = void 0;
          this.offsetY = void 0;
        }
        linkScales() {
        }
        parse(start, count) {
          const data = this.getDataset().data;
          const meta = this._cachedMeta;
          if (this._parsing === false) {
            meta._parsed = data;
          } else {
            let getter = (i2) => +data[i2];
            if (isObject(data[start])) {
              const { key = "value" } = this._parsing;
              getter = (i2) => +resolveObjectKey(data[i2], key);
            }
            let i, ilen;
            for (i = start, ilen = start + count; i < ilen; ++i) {
              meta._parsed[i] = getter(i);
            }
          }
        }
        _getRotation() {
          return toRadians(this.options.rotation - 90);
        }
        _getCircumference() {
          return toRadians(this.options.circumference);
        }
        _getRotationExtents() {
          let min = TAU;
          let max = -TAU;
          for (let i = 0; i < this.chart.data.datasets.length; ++i) {
            if (this.chart.isDatasetVisible(i)) {
              const controller = this.chart.getDatasetMeta(i).controller;
              const rotation = controller._getRotation();
              const circumference = controller._getCircumference();
              min = Math.min(min, rotation);
              max = Math.max(max, rotation + circumference);
            }
          }
          return {
            rotation: min,
            circumference: max - min
          };
        }
        update(mode) {
          const chart = this.chart;
          const { chartArea } = chart;
          const meta = this._cachedMeta;
          const arcs = meta.data;
          const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
          const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
          const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
          const chartWeight = this._getRingWeight(this.index);
          const { circumference, rotation } = this._getRotationExtents();
          const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
          const maxWidth = (chartArea.width - spacing) / ratioX;
          const maxHeight = (chartArea.height - spacing) / ratioY;
          const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
          const outerRadius = toDimension(this.options.radius, maxRadius);
          const innerRadius = Math.max(outerRadius * cutout, 0);
          const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
          this.offsetX = offsetX * outerRadius;
          this.offsetY = offsetY * outerRadius;
          meta.total = this.calculateTotal();
          this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
          this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
          this.updateElements(arcs, 0, arcs.length, mode);
        }
        _circumference(i, reset) {
          const opts = this.options;
          const meta = this._cachedMeta;
          const circumference = this._getCircumference();
          if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
            return 0;
          }
          return this.calculateCircumference(meta._parsed[i] * circumference / TAU);
        }
        updateElements(arcs, start, count, mode) {
          const reset = mode === "reset";
          const chart = this.chart;
          const chartArea = chart.chartArea;
          const opts = chart.options;
          const animationOpts = opts.animation;
          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;
          const animateScale = reset && animationOpts.animateScale;
          const innerRadius = animateScale ? 0 : this.innerRadius;
          const outerRadius = animateScale ? 0 : this.outerRadius;
          const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
          let startAngle = this._getRotation();
          let i;
          for (i = 0; i < start; ++i) {
            startAngle += this._circumference(i, reset);
          }
          for (i = start; i < start + count; ++i) {
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
              x: centerX + this.offsetX,
              y: centerY + this.offsetY,
              startAngle,
              endAngle: startAngle + circumference,
              circumference,
              outerRadius,
              innerRadius
            };
            if (includeOptions) {
              properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
            }
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
          }
        }
        calculateTotal() {
          const meta = this._cachedMeta;
          const metaData = meta.data;
          let total = 0;
          let i;
          for (i = 0; i < metaData.length; i++) {
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
              total += Math.abs(value);
            }
          }
          return total;
        }
        calculateCircumference(value) {
          const total = this._cachedMeta.total;
          if (total > 0 && !isNaN(value)) {
            return TAU * (Math.abs(value) / total);
          }
          return 0;
        }
        getLabelAndValue(index2) {
          const meta = this._cachedMeta;
          const chart = this.chart;
          const labels = chart.data.labels || [];
          const value = formatNumber(meta._parsed[index2], chart.options.locale);
          return {
            label: labels[index2] || "",
            value
          };
        }
        getMaxBorderWidth(arcs) {
          let max = 0;
          const chart = this.chart;
          let i, ilen, meta, controller, options;
          if (!arcs) {
            for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
              if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
              }
            }
          }
          if (!arcs) {
            return 0;
          }
          for (i = 0, ilen = arcs.length; i < ilen; ++i) {
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== "inner") {
              max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
            }
          }
          return max;
        }
        getMaxOffset(arcs) {
          let max = 0;
          for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
          }
          return max;
        }
        _getRingWeightOffset(datasetIndex) {
          let ringWeightOffset = 0;
          for (let i = 0; i < datasetIndex; ++i) {
            if (this.chart.isDatasetVisible(i)) {
              ringWeightOffset += this._getRingWeight(i);
            }
          }
          return ringWeightOffset;
        }
        _getRingWeight(datasetIndex) {
          return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
      }
      DoughnutController2.id = "doughnut";
      DoughnutController2.defaults = {
        datasetElementType: false,
        dataElementType: "arc",
        animation: {
          animateRotate: true,
          animateScale: false
        },
        animations: {
          numbers: {
            type: "number",
            properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
          }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
      };
      DoughnutController2.descriptors = {
        _scriptable: (name) => name !== "spacing",
        _indexable: (name) => name !== "spacing"
      };
      DoughnutController2.overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  const { labels: { pointStyle } } = chart.legend.options;
                  return data.labels.map((label, i) => {
                    const meta = chart.getDatasetMeta(0);
                    const style = meta.controller.getStyle(i);
                    return {
                      text: label,
                      fillStyle: style.backgroundColor,
                      strokeStyle: style.borderColor,
                      lineWidth: style.borderWidth,
                      pointStyle,
                      hidden: !chart.getDataVisibility(i),
                      index: i
                    };
                  });
                }
                return [];
              }
            },
            onClick(e, legendItem, legend) {
              legend.chart.toggleDataVisibility(legendItem.index);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              title() {
                return "";
              },
              label(tooltipItem) {
                let dataLabel = tooltipItem.label;
                const value = ": " + tooltipItem.formattedValue;
                if (isArray(dataLabel)) {
                  dataLabel = dataLabel.slice();
                  dataLabel[0] += value;
                } else {
                  dataLabel += value;
                }
                return dataLabel;
              }
            }
          }
        }
      };
      class LineController2 extends DatasetController {
        initialize() {
          this.enableOptionSharing = true;
          this.supportsDecimation = true;
          super.initialize();
        }
        update(mode) {
          const meta = this._cachedMeta;
          const { dataset: line, data: points = [], _dataset } = meta;
          const animationsDisabled = this.chart._animationsDisabled;
          let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
          this._drawStart = start;
          this._drawCount = count;
          if (_scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
          }
          line._chart = this.chart;
          line._datasetIndex = this.index;
          line._decimated = !!_dataset._decimated;
          line.points = points;
          const options = this.resolveDatasetElementOptions(mode);
          if (!this.options.showLine) {
            options.borderWidth = 0;
          }
          options.segment = this.options.segment;
          this.updateElement(line, void 0, {
            animated: !animationsDisabled,
            options
          }, mode);
          this.updateElements(points, start, count, mode);
        }
        updateElements(points, start, count, mode) {
          const reset = mode === "reset";
          const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
          const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
          const iAxis = iScale.axis;
          const vAxis = vScale.axis;
          const { spanGaps, segment } = this.options;
          const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
          const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
          let prevParsed = start > 0 && this.getParsed(start - 1);
          for (let i = start; i < start + count; ++i) {
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = isNullOrUndef(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
              properties.parsed = parsed;
              properties.raw = _dataset.data[i];
            }
            if (includeOptions) {
              properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            }
            if (!directUpdate) {
              this.updateElement(point, i, properties, mode);
            }
            prevParsed = parsed;
          }
        }
        getMaxOverflow() {
          const meta = this._cachedMeta;
          const dataset = meta.dataset;
          const border = dataset.options && dataset.options.borderWidth || 0;
          const data = meta.data || [];
          if (!data.length) {
            return border;
          }
          const firstPoint = data[0].size(this.resolveDataElementOptions(0));
          const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
          return Math.max(border, firstPoint, lastPoint) / 2;
        }
        draw() {
          const meta = this._cachedMeta;
          meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
          super.draw();
        }
      }
      LineController2.id = "line";
      LineController2.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: true,
        spanGaps: false
      };
      LineController2.overrides = {
        scales: {
          _index_: {
            type: "category"
          },
          _value_: {
            type: "linear"
          }
        }
      };
      class PolarAreaController extends DatasetController {
        constructor(chart, datasetIndex) {
          super(chart, datasetIndex);
          this.innerRadius = void 0;
          this.outerRadius = void 0;
        }
        getLabelAndValue(index2) {
          const meta = this._cachedMeta;
          const chart = this.chart;
          const labels = chart.data.labels || [];
          const value = formatNumber(meta._parsed[index2].r, chart.options.locale);
          return {
            label: labels[index2] || "",
            value
          };
        }
        parseObjectData(meta, data, start, count) {
          return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
        }
        update(mode) {
          const arcs = this._cachedMeta.data;
          this._updateRadius();
          this.updateElements(arcs, 0, arcs.length, mode);
        }
        getMinMax() {
          const meta = this._cachedMeta;
          const range = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
          meta.data.forEach((element, index2) => {
            const parsed = this.getParsed(index2).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index2)) {
              if (parsed < range.min) {
                range.min = parsed;
              }
              if (parsed > range.max) {
                range.max = parsed;
              }
            }
          });
          return range;
        }
        _updateRadius() {
          const chart = this.chart;
          const chartArea = chart.chartArea;
          const opts = chart.options;
          const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
          const outerRadius = Math.max(minSize / 2, 0);
          const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
          const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
          this.outerRadius = outerRadius - radiusLength * this.index;
          this.innerRadius = this.outerRadius - radiusLength;
        }
        updateElements(arcs, start, count, mode) {
          const reset = mode === "reset";
          const chart = this.chart;
          const opts = chart.options;
          const animationOpts = opts.animation;
          const scale = this._cachedMeta.rScale;
          const centerX = scale.xCenter;
          const centerY = scale.yCenter;
          const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
          let angle = datasetStartAngle;
          let i;
          const defaultAngle = 360 / this.countVisibleElements();
          for (i = 0; i < start; ++i) {
            angle += this._computeAngle(i, mode, defaultAngle);
          }
          for (i = start; i < start + count; i++) {
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
              if (animationOpts.animateScale) {
                outerRadius = 0;
              }
              if (animationOpts.animateRotate) {
                startAngle = endAngle = datasetStartAngle;
              }
            }
            const properties = {
              x: centerX,
              y: centerY,
              innerRadius: 0,
              outerRadius,
              startAngle,
              endAngle,
              options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
            };
            this.updateElement(arc, i, properties, mode);
          }
        }
        countVisibleElements() {
          const meta = this._cachedMeta;
          let count = 0;
          meta.data.forEach((element, index2) => {
            if (!isNaN(this.getParsed(index2).r) && this.chart.getDataVisibility(index2)) {
              count++;
            }
          });
          return count;
        }
        _computeAngle(index2, mode, defaultAngle) {
          return this.chart.getDataVisibility(index2) ? toRadians(this.resolveDataElementOptions(index2, mode).angle || defaultAngle) : 0;
        }
      }
      PolarAreaController.id = "polarArea";
      PolarAreaController.defaults = {
        dataElementType: "arc",
        animation: {
          animateRotate: true,
          animateScale: true
        },
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
          }
        },
        indexAxis: "r",
        startAngle: 0
      };
      PolarAreaController.overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(chart) {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  const { labels: { pointStyle } } = chart.legend.options;
                  return data.labels.map((label, i) => {
                    const meta = chart.getDatasetMeta(0);
                    const style = meta.controller.getStyle(i);
                    return {
                      text: label,
                      fillStyle: style.backgroundColor,
                      strokeStyle: style.borderColor,
                      lineWidth: style.borderWidth,
                      pointStyle,
                      hidden: !chart.getDataVisibility(i),
                      index: i
                    };
                  });
                }
                return [];
              }
            },
            onClick(e, legendItem, legend) {
              legend.chart.toggleDataVisibility(legendItem.index);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              title() {
                return "";
              },
              label(context) {
                return context.chart.data.labels[context.dataIndex] + ": " + context.formattedValue;
              }
            }
          }
        },
        scales: {
          r: {
            type: "radialLinear",
            angleLines: {
              display: false
            },
            beginAtZero: true,
            grid: {
              circular: true
            },
            pointLabels: {
              display: false
            },
            startAngle: 0
          }
        }
      };
      class PieController2 extends DoughnutController2 {
      }
      PieController2.id = "pie";
      PieController2.defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
      };
      class RadarController extends DatasetController {
        getLabelAndValue(index2) {
          const vScale = this._cachedMeta.vScale;
          const parsed = this.getParsed(index2);
          return {
            label: vScale.getLabels()[index2],
            value: "" + vScale.getLabelForValue(parsed[vScale.axis])
          };
        }
        parseObjectData(meta, data, start, count) {
          return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
        }
        update(mode) {
          const meta = this._cachedMeta;
          const line = meta.dataset;
          const points = meta.data || [];
          const labels = meta.iScale.getLabels();
          line.points = points;
          if (mode !== "resize") {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) {
              options.borderWidth = 0;
            }
            const properties = {
              _loop: true,
              _fullLoop: labels.length === points.length,
              options
            };
            this.updateElement(line, void 0, properties, mode);
          }
          this.updateElements(points, 0, points.length, mode);
        }
        updateElements(points, start, count, mode) {
          const scale = this._cachedMeta.rScale;
          const reset = mode === "reset";
          for (let i = start; i < start + count; i++) {
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
              x,
              y,
              angle: pointPosition.angle,
              skip: isNaN(x) || isNaN(y),
              options
            };
            this.updateElement(point, i, properties, mode);
          }
        }
      }
      RadarController.id = "radar";
      RadarController.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: true,
        elements: {
          line: {
            fill: "start"
          }
        }
      };
      RadarController.overrides = {
        aspectRatio: 1,
        scales: {
          r: {
            type: "radialLinear"
          }
        }
      };
      class ScatterController extends DatasetController {
        update(mode) {
          const meta = this._cachedMeta;
          const { data: points = [] } = meta;
          const animationsDisabled = this.chart._animationsDisabled;
          let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
          this._drawStart = start;
          this._drawCount = count;
          if (_scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
          }
          if (this.options.showLine) {
            const { dataset: line, _dataset } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, void 0, {
              animated: !animationsDisabled,
              options
            }, mode);
          }
          this.updateElements(points, start, count, mode);
        }
        addElements() {
          const { showLine } = this.options;
          if (!this.datasetElementType && showLine) {
            this.datasetElementType = registry.getElement("line");
          }
          super.addElements();
        }
        updateElements(points, start, count, mode) {
          const reset = mode === "reset";
          const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
          const firstOpts = this.resolveDataElementOptions(start, mode);
          const sharedOptions = this.getSharedOptions(firstOpts);
          const includeOptions = this.includeOptions(mode, sharedOptions);
          const iAxis = iScale.axis;
          const vAxis = vScale.axis;
          const { spanGaps, segment } = this.options;
          const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
          const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
          let prevParsed = start > 0 && this.getParsed(start - 1);
          for (let i = start; i < start + count; ++i) {
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = isNullOrUndef(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
              properties.parsed = parsed;
              properties.raw = _dataset.data[i];
            }
            if (includeOptions) {
              properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            }
            if (!directUpdate) {
              this.updateElement(point, i, properties, mode);
            }
            prevParsed = parsed;
          }
          this.updateSharedOptions(sharedOptions, mode, firstOpts);
        }
        getMaxOverflow() {
          const meta = this._cachedMeta;
          const data = meta.data || [];
          if (!this.options.showLine) {
            let max = 0;
            for (let i = data.length - 1; i >= 0; --i) {
              max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            }
            return max > 0 && max;
          }
          const dataset = meta.dataset;
          const border = dataset.options && dataset.options.borderWidth || 0;
          if (!data.length) {
            return border;
          }
          const firstPoint = data[0].size(this.resolveDataElementOptions(0));
          const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
          return Math.max(border, firstPoint, lastPoint) / 2;
        }
      }
      ScatterController.id = "scatter";
      ScatterController.defaults = {
        datasetElementType: false,
        dataElementType: "point",
        showLine: false,
        fill: false
      };
      ScatterController.overrides = {
        interaction: {
          mode: "point"
        },
        plugins: {
          tooltip: {
            callbacks: {
              title() {
                return "";
              },
              label(item) {
                return "(" + item.label + ", " + item.formattedValue + ")";
              }
            }
          }
        },
        scales: {
          x: {
            type: "linear"
          },
          y: {
            type: "linear"
          }
        }
      };
      var controllers = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        BarController: BarController2,
        BubbleController,
        DoughnutController: DoughnutController2,
        LineController: LineController2,
        PolarAreaController,
        PieController: PieController2,
        RadarController,
        ScatterController
      });
      function clipArc(ctx, element, endAngle) {
        const { startAngle, pixelMargin, x, y, outerRadius, innerRadius } = element;
        let angleMargin = pixelMargin / outerRadius;
        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
        if (innerRadius > pixelMargin) {
          angleMargin = pixelMargin / innerRadius;
          ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
        } else {
          ctx.arc(x, y, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
        }
        ctx.closePath();
        ctx.clip();
      }
      function toRadiusCorners(value) {
        return _readValueToProps(value, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
      }
      function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
        const o = toRadiusCorners(arc.options.borderRadius);
        const halfThickness = (outerRadius - innerRadius) / 2;
        const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
        const computeOuterLimit = (val) => {
          const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
          return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
        };
        return {
          outerStart: computeOuterLimit(o.outerStart),
          outerEnd: computeOuterLimit(o.outerEnd),
          innerStart: _limitValue(o.innerStart, 0, innerLimit),
          innerEnd: _limitValue(o.innerEnd, 0, innerLimit)
        };
      }
      function rThetaToXY(r, theta, x, y) {
        return {
          x: x + r * Math.cos(theta),
          y: y + r * Math.sin(theta)
        };
      }
      function pathArc(ctx, element, offset, spacing, end, circular) {
        const { x, y, startAngle: start, pixelMargin, innerRadius: innerR } = element;
        const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
        const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
        let spacingOffset = 0;
        const alpha2 = end - start;
        if (spacing) {
          const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
          const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
          const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
          const adjustedAngle = avNogSpacingRadius !== 0 ? alpha2 * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha2;
          spacingOffset = (alpha2 - adjustedAngle) / 2;
        }
        const beta = Math.max(1e-3, alpha2 * outerRadius - offset / PI) / outerRadius;
        const angleOffset = (alpha2 - beta) / 2;
        const startAngle = start + angleOffset + spacingOffset;
        const endAngle = end - angleOffset - spacingOffset;
        const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
        const outerStartAdjustedRadius = outerRadius - outerStart;
        const outerEndAdjustedRadius = outerRadius - outerEnd;
        const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
        const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
        const innerStartAdjustedRadius = innerRadius + innerStart;
        const innerEndAdjustedRadius = innerRadius + innerEnd;
        const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
        const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
        ctx.beginPath();
        if (circular) {
          ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
          if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
          }
          const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
          ctx.lineTo(p4.x, p4.y);
          if (innerEnd > 0) {
            const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
          }
          ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, startAngle + innerStart / innerRadius, true);
          if (innerStart > 0) {
            const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
          }
          const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
          ctx.lineTo(p8.x, p8.y);
          if (outerStart > 0) {
            const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
          }
        } else {
          ctx.moveTo(x, y);
          const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
          const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
          ctx.lineTo(outerStartX, outerStartY);
          const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
          const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
          ctx.lineTo(outerEndX, outerEndY);
        }
        ctx.closePath();
      }
      function drawArc(ctx, element, offset, spacing, circular) {
        const { fullCircles, startAngle, circumference } = element;
        let endAngle = element.endAngle;
        if (fullCircles) {
          pathArc(ctx, element, offset, spacing, startAngle + TAU, circular);
          for (let i = 0; i < fullCircles; ++i) {
            ctx.fill();
          }
          if (!isNaN(circumference)) {
            endAngle = startAngle + circumference % TAU;
            if (circumference % TAU === 0) {
              endAngle += TAU;
            }
          }
        }
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.fill();
        return endAngle;
      }
      function drawFullCircleBorders(ctx, element, inner) {
        const { x, y, startAngle, pixelMargin, fullCircles } = element;
        const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
        const innerRadius = element.innerRadius + pixelMargin;
        let i;
        if (inner) {
          clipArc(ctx, element, startAngle + TAU);
        }
        ctx.beginPath();
        ctx.arc(x, y, innerRadius, startAngle + TAU, startAngle, true);
        for (i = 0; i < fullCircles; ++i) {
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle, startAngle + TAU);
        for (i = 0; i < fullCircles; ++i) {
          ctx.stroke();
        }
      }
      function drawBorder(ctx, element, offset, spacing, endAngle, circular) {
        const { options } = element;
        const { borderWidth, borderJoinStyle } = options;
        const inner = options.borderAlign === "inner";
        if (!borderWidth) {
          return;
        }
        if (inner) {
          ctx.lineWidth = borderWidth * 2;
          ctx.lineJoin = borderJoinStyle || "round";
        } else {
          ctx.lineWidth = borderWidth;
          ctx.lineJoin = borderJoinStyle || "bevel";
        }
        if (element.fullCircles) {
          drawFullCircleBorders(ctx, element, inner);
        }
        if (inner) {
          clipArc(ctx, element, endAngle);
        }
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
      }
      class ArcElement2 extends Element {
        constructor(cfg) {
          super();
          this.options = void 0;
          this.circumference = void 0;
          this.startAngle = void 0;
          this.endAngle = void 0;
          this.innerRadius = void 0;
          this.outerRadius = void 0;
          this.pixelMargin = 0;
          this.fullCircles = 0;
          if (cfg) {
            Object.assign(this, cfg);
          }
        }
        inRange(chartX, chartY, useFinalPosition) {
          const point = this.getProps(["x", "y"], useFinalPosition);
          const { angle, distance } = getAngleFromPoint(point, { x: chartX, y: chartY });
          const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
          ], useFinalPosition);
          const rAdjust = this.options.spacing / 2;
          const _circumference = valueOrDefault(circumference, endAngle - startAngle);
          const betweenAngles = _circumference >= TAU || _angleBetween(angle, startAngle, endAngle);
          const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
          return betweenAngles && withinRadius;
        }
        getCenterPoint(useFinalPosition) {
          const { x, y, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
          ], useFinalPosition);
          const { offset, spacing } = this.options;
          const halfAngle = (startAngle + endAngle) / 2;
          const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
          return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
          };
        }
        tooltipPosition(useFinalPosition) {
          return this.getCenterPoint(useFinalPosition);
        }
        draw(ctx) {
          const { options, circumference } = this;
          const offset = (options.offset || 0) / 2;
          const spacing = (options.spacing || 0) / 2;
          const circular = options.circular;
          this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
          this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
          if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
            return;
          }
          ctx.save();
          let radiusOffset = 0;
          if (offset) {
            radiusOffset = offset / 2;
            const halfAngle = (this.startAngle + this.endAngle) / 2;
            ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
            if (this.circumference >= PI) {
              radiusOffset = offset;
            }
          }
          ctx.fillStyle = options.backgroundColor;
          ctx.strokeStyle = options.borderColor;
          const endAngle = drawArc(ctx, this, radiusOffset, spacing, circular);
          drawBorder(ctx, this, radiusOffset, spacing, endAngle, circular);
          ctx.restore();
        }
      }
      ArcElement2.id = "arc";
      ArcElement2.defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: true
      };
      ArcElement2.defaultRoutes = {
        backgroundColor: "backgroundColor"
      };
      function setStyle(ctx, options, style = options) {
        ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
        ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
        ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
        ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
        ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
        ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
      }
      function lineTo(ctx, previous, target) {
        ctx.lineTo(target.x, target.y);
      }
      function getLineMethod(options) {
        if (options.stepped) {
          return _steppedLineTo;
        }
        if (options.tension || options.cubicInterpolationMode === "monotone") {
          return _bezierCurveTo;
        }
        return lineTo;
      }
      function pathVars(points, segment, params = {}) {
        const count = points.length;
        const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
        const { start: segmentStart, end: segmentEnd } = segment;
        const start = Math.max(paramsStart, segmentStart);
        const end = Math.min(paramsEnd, segmentEnd);
        const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
        return {
          count,
          start,
          loop: segment.loop,
          ilen: end < start && !outside ? count + end - start : end - start
        };
      }
      function pathSegment(ctx, line, segment, params) {
        const { points, options } = line;
        const { count, start, loop, ilen } = pathVars(points, segment, params);
        const lineMethod = getLineMethod(options);
        let { move = true, reverse } = params || {};
        let i, point, prev;
        for (i = 0; i <= ilen; ++i) {
          point = points[(start + (reverse ? ilen - i : i)) % count];
          if (point.skip) {
            continue;
          } else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
          } else {
            lineMethod(ctx, prev, point, reverse, options.stepped);
          }
          prev = point;
        }
        if (loop) {
          point = points[(start + (reverse ? ilen : 0)) % count];
          lineMethod(ctx, prev, point, reverse, options.stepped);
        }
        return !!loop;
      }
      function fastPathSegment(ctx, line, segment, params) {
        const points = line.points;
        const { count, start, ilen } = pathVars(points, segment, params);
        const { move = true, reverse } = params || {};
        let avgX = 0;
        let countX = 0;
        let i, point, prevX, minY, maxY, lastY;
        const pointIndex = (index2) => (start + (reverse ? ilen - index2 : index2)) % count;
        const drawX = () => {
          if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
          }
        };
        if (move) {
          point = points[pointIndex(0)];
          ctx.moveTo(point.x, point.y);
        }
        for (i = 0; i <= ilen; ++i) {
          point = points[pointIndex(i)];
          if (point.skip) {
            continue;
          }
          const x = point.x;
          const y = point.y;
          const truncX = x | 0;
          if (truncX === prevX) {
            if (y < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            avgX = (countX * avgX + x) / ++countX;
          } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
          }
          lastY = y;
        }
        drawX();
      }
      function _getSegmentMethod(line) {
        const opts = line.options;
        const borderDash = opts.borderDash && opts.borderDash.length;
        const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
        return useFastPath ? fastPathSegment : pathSegment;
      }
      function _getInterpolationMethod(options) {
        if (options.stepped) {
          return _steppedInterpolation;
        }
        if (options.tension || options.cubicInterpolationMode === "monotone") {
          return _bezierInterpolation;
        }
        return _pointInLine;
      }
      function strokePathWithCache(ctx, line, start, count) {
        let path = line._path;
        if (!path) {
          path = line._path = new Path2D();
          if (line.path(path, start, count)) {
            path.closePath();
          }
        }
        setStyle(ctx, line.options);
        ctx.stroke(path);
      }
      function strokePathDirect(ctx, line, start, count) {
        const { segments, options } = line;
        const segmentMethod = _getSegmentMethod(line);
        for (const segment of segments) {
          setStyle(ctx, options, segment.style);
          ctx.beginPath();
          if (segmentMethod(ctx, line, segment, { start, end: start + count - 1 })) {
            ctx.closePath();
          }
          ctx.stroke();
        }
      }
      const usePath2D = typeof Path2D === "function";
      function draw(ctx, line, start, count) {
        if (usePath2D && !line.options.segment) {
          strokePathWithCache(ctx, line, start, count);
        } else {
          strokePathDirect(ctx, line, start, count);
        }
      }
      class LineElement2 extends Element {
        constructor(cfg) {
          super();
          this.animated = true;
          this.options = void 0;
          this._chart = void 0;
          this._loop = void 0;
          this._fullLoop = void 0;
          this._path = void 0;
          this._points = void 0;
          this._segments = void 0;
          this._decimated = false;
          this._pointsUpdated = false;
          this._datasetIndex = void 0;
          if (cfg) {
            Object.assign(this, cfg);
          }
        }
        updateControlPoints(chartArea, indexAxis) {
          const options = this.options;
          if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            _updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
          }
        }
        set points(points) {
          this._points = points;
          delete this._segments;
          delete this._path;
          this._pointsUpdated = false;
        }
        get points() {
          return this._points;
        }
        get segments() {
          return this._segments || (this._segments = _computeSegments(this, this.options.segment));
        }
        first() {
          const segments = this.segments;
          const points = this.points;
          return segments.length && points[segments[0].start];
        }
        last() {
          const segments = this.segments;
          const points = this.points;
          const count = segments.length;
          return count && points[segments[count - 1].end];
        }
        interpolate(point, property) {
          const options = this.options;
          const value = point[property];
          const points = this.points;
          const segments = _boundSegments(this, { property, start: value, end: value });
          if (!segments.length) {
            return;
          }
          const result = [];
          const _interpolate = _getInterpolationMethod(options);
          let i, ilen;
          for (i = 0, ilen = segments.length; i < ilen; ++i) {
            const { start, end } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
              result.push(p1);
              continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
          }
          return result.length === 1 ? result[0] : result;
        }
        pathSegment(ctx, segment, params) {
          const segmentMethod = _getSegmentMethod(this);
          return segmentMethod(ctx, this, segment, params);
        }
        path(ctx, start, count) {
          const segments = this.segments;
          const segmentMethod = _getSegmentMethod(this);
          let loop = this._loop;
          start = start || 0;
          count = count || this.points.length - start;
          for (const segment of segments) {
            loop &= segmentMethod(ctx, this, segment, { start, end: start + count - 1 });
          }
          return !!loop;
        }
        draw(ctx, chartArea, start, count) {
          const options = this.options || {};
          const points = this.points || [];
          if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
          }
          if (this.animated) {
            this._pointsUpdated = false;
            this._path = void 0;
          }
        }
      }
      LineElement2.id = "line";
      LineElement2.defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: "default",
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
      };
      LineElement2.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      };
      LineElement2.descriptors = {
        _scriptable: true,
        _indexable: (name) => name !== "borderDash" && name !== "fill"
      };
      function inRange$1(el, pos, axis, useFinalPosition) {
        const options = el.options;
        const { [axis]: value } = el.getProps([axis], useFinalPosition);
        return Math.abs(pos - value) < options.radius + options.hitRadius;
      }
      class PointElement2 extends Element {
        constructor(cfg) {
          super();
          this.options = void 0;
          this.parsed = void 0;
          this.skip = void 0;
          this.stop = void 0;
          if (cfg) {
            Object.assign(this, cfg);
          }
        }
        inRange(mouseX, mouseY, useFinalPosition) {
          const options = this.options;
          const { x, y } = this.getProps(["x", "y"], useFinalPosition);
          return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
        }
        inXRange(mouseX, useFinalPosition) {
          return inRange$1(this, mouseX, "x", useFinalPosition);
        }
        inYRange(mouseY, useFinalPosition) {
          return inRange$1(this, mouseY, "y", useFinalPosition);
        }
        getCenterPoint(useFinalPosition) {
          const { x, y } = this.getProps(["x", "y"], useFinalPosition);
          return { x, y };
        }
        size(options) {
          options = options || this.options || {};
          let radius = options.radius || 0;
          radius = Math.max(radius, radius && options.hoverRadius || 0);
          const borderWidth = radius && options.borderWidth || 0;
          return (radius + borderWidth) * 2;
        }
        draw(ctx, area) {
          const options = this.options;
          if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
            return;
          }
          ctx.strokeStyle = options.borderColor;
          ctx.lineWidth = options.borderWidth;
          ctx.fillStyle = options.backgroundColor;
          drawPoint(ctx, options, this.x, this.y);
        }
        getRange() {
          const options = this.options || {};
          return options.radius + options.hitRadius;
        }
      }
      PointElement2.id = "point";
      PointElement2.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
      };
      PointElement2.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      };
      function getBarBounds(bar, useFinalPosition) {
        const { x, y, base, width, height } = bar.getProps(["x", "y", "base", "width", "height"], useFinalPosition);
        let left, right, top, bottom, half;
        if (bar.horizontal) {
          half = height / 2;
          left = Math.min(x, base);
          right = Math.max(x, base);
          top = y - half;
          bottom = y + half;
        } else {
          half = width / 2;
          left = x - half;
          right = x + half;
          top = Math.min(y, base);
          bottom = Math.max(y, base);
        }
        return { left, top, right, bottom };
      }
      function skipOrLimit(skip2, value, min, max) {
        return skip2 ? 0 : _limitValue(value, min, max);
      }
      function parseBorderWidth(bar, maxW, maxH) {
        const value = bar.options.borderWidth;
        const skip2 = bar.borderSkipped;
        const o = toTRBL(value);
        return {
          t: skipOrLimit(skip2.top, o.top, 0, maxH),
          r: skipOrLimit(skip2.right, o.right, 0, maxW),
          b: skipOrLimit(skip2.bottom, o.bottom, 0, maxH),
          l: skipOrLimit(skip2.left, o.left, 0, maxW)
        };
      }
      function parseBorderRadius(bar, maxW, maxH) {
        const { enableBorderRadius } = bar.getProps(["enableBorderRadius"]);
        const value = bar.options.borderRadius;
        const o = toTRBLCorners(value);
        const maxR = Math.min(maxW, maxH);
        const skip2 = bar.borderSkipped;
        const enableBorder = enableBorderRadius || isObject(value);
        return {
          topLeft: skipOrLimit(!enableBorder || skip2.top || skip2.left, o.topLeft, 0, maxR),
          topRight: skipOrLimit(!enableBorder || skip2.top || skip2.right, o.topRight, 0, maxR),
          bottomLeft: skipOrLimit(!enableBorder || skip2.bottom || skip2.left, o.bottomLeft, 0, maxR),
          bottomRight: skipOrLimit(!enableBorder || skip2.bottom || skip2.right, o.bottomRight, 0, maxR)
        };
      }
      function boundingRects(bar) {
        const bounds = getBarBounds(bar);
        const width = bounds.right - bounds.left;
        const height = bounds.bottom - bounds.top;
        const border = parseBorderWidth(bar, width / 2, height / 2);
        const radius = parseBorderRadius(bar, width / 2, height / 2);
        return {
          outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
          },
          inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
              topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
              topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
              bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
              bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
          }
        };
      }
      function inRange(bar, x, y, useFinalPosition) {
        const skipX = x === null;
        const skipY = y === null;
        const skipBoth = skipX && skipY;
        const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
        return bounds && (skipX || _isBetween(x, bounds.left, bounds.right)) && (skipY || _isBetween(y, bounds.top, bounds.bottom));
      }
      function hasRadius(radius) {
        return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
      }
      function addNormalRectPath(ctx, rect) {
        ctx.rect(rect.x, rect.y, rect.w, rect.h);
      }
      function inflateRect(rect, amount, refRect = {}) {
        const x = rect.x !== refRect.x ? -amount : 0;
        const y = rect.y !== refRect.y ? -amount : 0;
        const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
        const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
        return {
          x: rect.x + x,
          y: rect.y + y,
          w: rect.w + w,
          h: rect.h + h,
          radius: rect.radius
        };
      }
      class BarElement2 extends Element {
        constructor(cfg) {
          super();
          this.options = void 0;
          this.horizontal = void 0;
          this.base = void 0;
          this.width = void 0;
          this.height = void 0;
          this.inflateAmount = void 0;
          if (cfg) {
            Object.assign(this, cfg);
          }
        }
        draw(ctx) {
          const { inflateAmount, options: { borderColor, backgroundColor } } = this;
          const { inner, outer } = boundingRects(this);
          const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
          ctx.save();
          if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill("evenodd");
          }
          ctx.beginPath();
          addRectPath(ctx, inflateRect(inner, inflateAmount));
          ctx.fillStyle = backgroundColor;
          ctx.fill();
          ctx.restore();
        }
        inRange(mouseX, mouseY, useFinalPosition) {
          return inRange(this, mouseX, mouseY, useFinalPosition);
        }
        inXRange(mouseX, useFinalPosition) {
          return inRange(this, mouseX, null, useFinalPosition);
        }
        inYRange(mouseY, useFinalPosition) {
          return inRange(this, null, mouseY, useFinalPosition);
        }
        getCenterPoint(useFinalPosition) {
          const { x, y, base, horizontal } = this.getProps(["x", "y", "base", "horizontal"], useFinalPosition);
          return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
          };
        }
        getRange(axis) {
          return axis === "x" ? this.width / 2 : this.height / 2;
        }
      }
      BarElement2.id = "bar";
      BarElement2.defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
      };
      BarElement2.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      };
      var elements = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        ArcElement: ArcElement2,
        LineElement: LineElement2,
        PointElement: PointElement2,
        BarElement: BarElement2
      });
      function lttbDecimation(data, start, count, availableWidth, options) {
        const samples = options.samples || availableWidth;
        if (samples >= count) {
          return data.slice(start, start + count);
        }
        const decimated = [];
        const bucketWidth = (count - 2) / (samples - 2);
        let sampledIndex = 0;
        const endIndex = start + count - 1;
        let a = start;
        let i, maxAreaPoint, maxArea, area, nextA;
        decimated[sampledIndex++] = data[a];
        for (i = 0; i < samples - 2; i++) {
          let avgX = 0;
          let avgY = 0;
          let j;
          const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
          const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
          const avgRangeLength = avgRangeEnd - avgRangeStart;
          for (j = avgRangeStart; j < avgRangeEnd; j++) {
            avgX += data[j].x;
            avgY += data[j].y;
          }
          avgX /= avgRangeLength;
          avgY /= avgRangeLength;
          const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
          const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
          const { x: pointAx, y: pointAy } = data[a];
          maxArea = area = -1;
          for (j = rangeOffs; j < rangeTo; j++) {
            area = 0.5 * Math.abs(
              (pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy)
            );
            if (area > maxArea) {
              maxArea = area;
              maxAreaPoint = data[j];
              nextA = j;
            }
          }
          decimated[sampledIndex++] = maxAreaPoint;
          a = nextA;
        }
        decimated[sampledIndex++] = data[endIndex];
        return decimated;
      }
      function minMaxDecimation(data, start, count, availableWidth) {
        let avgX = 0;
        let countX = 0;
        let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
        const decimated = [];
        const endIndex = start + count - 1;
        const xMin = data[start].x;
        const xMax = data[endIndex].x;
        const dx = xMax - xMin;
        for (i = start; i < start + count; ++i) {
          point = data[i];
          x = (point.x - xMin) / dx * availableWidth;
          y = point.y;
          const truncX = x | 0;
          if (truncX === prevX) {
            if (y < minY) {
              minY = y;
              minIndex = i;
            } else if (y > maxY) {
              maxY = y;
              maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
          } else {
            const lastIndex = i - 1;
            if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
              const intermediateIndex1 = Math.min(minIndex, maxIndex);
              const intermediateIndex2 = Math.max(minIndex, maxIndex);
              if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
                decimated.push({
                  ...data[intermediateIndex1],
                  x: avgX
                });
              }
              if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
                decimated.push({
                  ...data[intermediateIndex2],
                  x: avgX
                });
              }
            }
            if (i > 0 && lastIndex !== startIndex) {
              decimated.push(data[lastIndex]);
            }
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
          }
        }
        return decimated;
      }
      function cleanDecimatedDataset(dataset) {
        if (dataset._decimated) {
          const data = dataset._data;
          delete dataset._decimated;
          delete dataset._data;
          Object.defineProperty(dataset, "data", { value: data });
        }
      }
      function cleanDecimatedData(chart) {
        chart.data.datasets.forEach((dataset) => {
          cleanDecimatedDataset(dataset);
        });
      }
      function getStartAndCountOfVisiblePointsSimplified(meta, points) {
        const pointCount = points.length;
        let start = 0;
        let count;
        const { iScale } = meta;
        const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
        if (minDefined) {
          start = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
        }
        if (maxDefined) {
          count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
        } else {
          count = pointCount - start;
        }
        return { start, count };
      }
      var plugin_decimation = {
        id: "decimation",
        defaults: {
          algorithm: "min-max",
          enabled: false
        },
        beforeElementsUpdate: (chart, args, options) => {
          if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
          }
          const availableWidth = chart.width;
          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const { _data, indexAxis } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if (resolve([indexAxis, chart.options.indexAxis]) === "y") {
              return;
            }
            if (!meta.controller.supportsDecimation) {
              return;
            }
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== "linear" && xAxis.type !== "time") {
              return;
            }
            if (chart.options.parsing) {
              return;
            }
            let { start, count } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
              cleanDecimatedDataset(dataset);
              return;
            }
            if (isNullOrUndef(_data)) {
              dataset._data = data;
              delete dataset.data;
              Object.defineProperty(dataset, "data", {
                configurable: true,
                enumerable: true,
                get: function() {
                  return this._decimated;
                },
                set: function(d) {
                  this._data = d;
                }
              });
            }
            let decimated;
            switch (options.algorithm) {
              case "lttb":
                decimated = lttbDecimation(data, start, count, availableWidth, options);
                break;
              case "min-max":
                decimated = minMaxDecimation(data, start, count, availableWidth);
                break;
              default:
                throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
          });
        },
        destroy(chart) {
          cleanDecimatedData(chart);
        }
      };
      function _segments(line, target, property) {
        const segments = line.segments;
        const points = line.points;
        const tpoints = target.points;
        const parts = [];
        for (const segment of segments) {
          let { start, end } = segment;
          end = _findSegmentEnd(start, end, points);
          const bounds = _getBounds(property, points[start], points[end], segment.loop);
          if (!target.segments) {
            parts.push({
              source: segment,
              target: bounds,
              start: points[start],
              end: points[end]
            });
            continue;
          }
          const targetSegments = _boundSegments(target, bounds);
          for (const tgt of targetSegments) {
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = _boundSegment(segment, points, subBounds);
            for (const fillSource of fillSources) {
              parts.push({
                source: fillSource,
                target: tgt,
                start: {
                  [property]: _getEdge(bounds, subBounds, "start", Math.max)
                },
                end: {
                  [property]: _getEdge(bounds, subBounds, "end", Math.min)
                }
              });
            }
          }
        }
        return parts;
      }
      function _getBounds(property, first, last, loop) {
        if (loop) {
          return;
        }
        let start = first[property];
        let end = last[property];
        if (property === "angle") {
          start = _normalizeAngle(start);
          end = _normalizeAngle(end);
        }
        return { property, start, end };
      }
      function _pointsFromSegments(boundary, line) {
        const { x = null, y = null } = boundary || {};
        const linePoints = line.points;
        const points = [];
        line.segments.forEach(({ start, end }) => {
          end = _findSegmentEnd(start, end, linePoints);
          const first = linePoints[start];
          const last = linePoints[end];
          if (y !== null) {
            points.push({ x: first.x, y });
            points.push({ x: last.x, y });
          } else if (x !== null) {
            points.push({ x, y: first.y });
            points.push({ x, y: last.y });
          }
        });
        return points;
      }
      function _findSegmentEnd(start, end, points) {
        for (; end > start; end--) {
          const point = points[end];
          if (!isNaN(point.x) && !isNaN(point.y)) {
            break;
          }
        }
        return end;
      }
      function _getEdge(a, b, prop, fn) {
        if (a && b) {
          return fn(a[prop], b[prop]);
        }
        return a ? a[prop] : b ? b[prop] : 0;
      }
      function _createBoundaryLine(boundary, line) {
        let points = [];
        let _loop = false;
        if (isArray(boundary)) {
          _loop = true;
          points = boundary;
        } else {
          points = _pointsFromSegments(boundary, line);
        }
        return points.length ? new LineElement2({
          points,
          options: { tension: 0 },
          _loop,
          _fullLoop: _loop
        }) : null;
      }
      function _shouldApplyFill(source) {
        return source && source.fill !== false;
      }
      function _resolveTarget(sources, index2, propagate) {
        const source = sources[index2];
        let fill2 = source.fill;
        const visited = [index2];
        let target;
        if (!propagate) {
          return fill2;
        }
        while (fill2 !== false && visited.indexOf(fill2) === -1) {
          if (!isNumberFinite(fill2)) {
            return fill2;
          }
          target = sources[fill2];
          if (!target) {
            return false;
          }
          if (target.visible) {
            return fill2;
          }
          visited.push(fill2);
          fill2 = target.fill;
        }
        return false;
      }
      function _decodeFill(line, index2, count) {
        const fill2 = parseFillOption(line);
        if (isObject(fill2)) {
          return isNaN(fill2.value) ? false : fill2;
        }
        let target = parseFloat(fill2);
        if (isNumberFinite(target) && Math.floor(target) === target) {
          return decodeTargetIndex(fill2[0], index2, target, count);
        }
        return ["origin", "start", "end", "stack", "shape"].indexOf(fill2) >= 0 && fill2;
      }
      function decodeTargetIndex(firstCh, index2, target, count) {
        if (firstCh === "-" || firstCh === "+") {
          target = index2 + target;
        }
        if (target === index2 || target < 0 || target >= count) {
          return false;
        }
        return target;
      }
      function _getTargetPixel(fill2, scale) {
        let pixel = null;
        if (fill2 === "start") {
          pixel = scale.bottom;
        } else if (fill2 === "end") {
          pixel = scale.top;
        } else if (isObject(fill2)) {
          pixel = scale.getPixelForValue(fill2.value);
        } else if (scale.getBasePixel) {
          pixel = scale.getBasePixel();
        }
        return pixel;
      }
      function _getTargetValue(fill2, scale, startValue) {
        let value;
        if (fill2 === "start") {
          value = startValue;
        } else if (fill2 === "end") {
          value = scale.options.reverse ? scale.min : scale.max;
        } else if (isObject(fill2)) {
          value = fill2.value;
        } else {
          value = scale.getBaseValue();
        }
        return value;
      }
      function parseFillOption(line) {
        const options = line.options;
        const fillOption = options.fill;
        let fill2 = valueOrDefault(fillOption && fillOption.target, fillOption);
        if (fill2 === void 0) {
          fill2 = !!options.backgroundColor;
        }
        if (fill2 === false || fill2 === null) {
          return false;
        }
        if (fill2 === true) {
          return "origin";
        }
        return fill2;
      }
      function _buildStackLine(source) {
        const { scale, index: index2, line } = source;
        const points = [];
        const segments = line.segments;
        const sourcePoints = line.points;
        const linesBelow = getLinesBelow(scale, index2);
        linesBelow.push(_createBoundaryLine({ x: null, y: scale.bottom }, line));
        for (let i = 0; i < segments.length; i++) {
          const segment = segments[i];
          for (let j = segment.start; j <= segment.end; j++) {
            addPointsBelow(points, sourcePoints[j], linesBelow);
          }
        }
        return new LineElement2({ points, options: {} });
      }
      function getLinesBelow(scale, index2) {
        const below = [];
        const metas = scale.getMatchingVisibleMetas("line");
        for (let i = 0; i < metas.length; i++) {
          const meta = metas[i];
          if (meta.index === index2) {
            break;
          }
          if (!meta.hidden) {
            below.unshift(meta.dataset);
          }
        }
        return below;
      }
      function addPointsBelow(points, sourcePoint, linesBelow) {
        const postponed = [];
        for (let j = 0; j < linesBelow.length; j++) {
          const line = linesBelow[j];
          const { first, last, point } = findPoint(line, sourcePoint, "x");
          if (!point || first && last) {
            continue;
          }
          if (first) {
            postponed.unshift(point);
          } else {
            points.push(point);
            if (!last) {
              break;
            }
          }
        }
        points.push(...postponed);
      }
      function findPoint(line, sourcePoint, property) {
        const point = line.interpolate(sourcePoint, property);
        if (!point) {
          return {};
        }
        const pointValue = point[property];
        const segments = line.segments;
        const linePoints = line.points;
        let first = false;
        let last = false;
        for (let i = 0; i < segments.length; i++) {
          const segment = segments[i];
          const firstValue = linePoints[segment.start][property];
          const lastValue = linePoints[segment.end][property];
          if (_isBetween(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
          }
        }
        return { first, last, point };
      }
      class simpleArc {
        constructor(opts) {
          this.x = opts.x;
          this.y = opts.y;
          this.radius = opts.radius;
        }
        pathSegment(ctx, bounds, opts) {
          const { x, y, radius } = this;
          bounds = bounds || { start: 0, end: TAU };
          ctx.arc(x, y, radius, bounds.end, bounds.start, true);
          return !opts.bounds;
        }
        interpolate(point) {
          const { x, y, radius } = this;
          const angle = point.angle;
          return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
          };
        }
      }
      function _getTarget(source) {
        const { chart, fill: fill2, line } = source;
        if (isNumberFinite(fill2)) {
          return getLineByIndex(chart, fill2);
        }
        if (fill2 === "stack") {
          return _buildStackLine(source);
        }
        if (fill2 === "shape") {
          return true;
        }
        const boundary = computeBoundary(source);
        if (boundary instanceof simpleArc) {
          return boundary;
        }
        return _createBoundaryLine(boundary, line);
      }
      function getLineByIndex(chart, index2) {
        const meta = chart.getDatasetMeta(index2);
        const visible = meta && chart.isDatasetVisible(index2);
        return visible ? meta.dataset : null;
      }
      function computeBoundary(source) {
        const scale = source.scale || {};
        if (scale.getPointPositionForValue) {
          return computeCircularBoundary(source);
        }
        return computeLinearBoundary(source);
      }
      function computeLinearBoundary(source) {
        const { scale = {}, fill: fill2 } = source;
        const pixel = _getTargetPixel(fill2, scale);
        if (isNumberFinite(pixel)) {
          const horizontal = scale.isHorizontal();
          return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
          };
        }
        return null;
      }
      function computeCircularBoundary(source) {
        const { scale, fill: fill2 } = source;
        const options = scale.options;
        const length = scale.getLabels().length;
        const start = options.reverse ? scale.max : scale.min;
        const value = _getTargetValue(fill2, scale, start);
        const target = [];
        if (options.grid.circular) {
          const center = scale.getPointPositionForValue(0, start);
          return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
          });
        }
        for (let i = 0; i < length; ++i) {
          target.push(scale.getPointPositionForValue(i, value));
        }
        return target;
      }
      function _drawfill(ctx, source, area) {
        const target = _getTarget(source);
        const { line, scale, axis } = source;
        const lineOpts = line.options;
        const fillOption = lineOpts.fill;
        const color2 = lineOpts.backgroundColor;
        const { above = color2, below = color2 } = fillOption || {};
        if (target && line.points.length) {
          clipArea(ctx, area);
          doFill(ctx, { line, target, above, below, area, scale, axis });
          unclipArea(ctx);
        }
      }
      function doFill(ctx, cfg) {
        const { line, target, above, below, area, scale } = cfg;
        const property = line._loop ? "angle" : cfg.axis;
        ctx.save();
        if (property === "x" && below !== above) {
          clipVertical(ctx, target, area.top);
          fill(ctx, { line, target, color: above, scale, property });
          ctx.restore();
          ctx.save();
          clipVertical(ctx, target, area.bottom);
        }
        fill(ctx, { line, target, color: below, scale, property });
        ctx.restore();
      }
      function clipVertical(ctx, target, clipY) {
        const { segments, points } = target;
        let first = true;
        let lineLoop = false;
        ctx.beginPath();
        for (const segment of segments) {
          const { start, end } = segment;
          const firstPoint = points[start];
          const lastPoint = points[_findSegmentEnd(start, end, points)];
          if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
          } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
          }
          lineLoop = !!target.pathSegment(ctx, segment, { move: lineLoop });
          if (lineLoop) {
            ctx.closePath();
          } else {
            ctx.lineTo(lastPoint.x, clipY);
          }
        }
        ctx.lineTo(target.first().x, clipY);
        ctx.closePath();
        ctx.clip();
      }
      function fill(ctx, cfg) {
        const { line, target, property, color: color2, scale } = cfg;
        const segments = _segments(line, target, property);
        for (const { source: src, target: tgt, start, end } of segments) {
          const { style: { backgroundColor = color2 } = {} } = src;
          const notShape = target !== true;
          ctx.save();
          ctx.fillStyle = backgroundColor;
          clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
          ctx.beginPath();
          const lineLoop = !!line.pathSegment(ctx, src);
          let loop;
          if (notShape) {
            if (lineLoop) {
              ctx.closePath();
            } else {
              interpolatedLineTo(ctx, target, end, property);
            }
            const targetLoop = !!target.pathSegment(ctx, tgt, { move: lineLoop, reverse: true });
            loop = lineLoop && targetLoop;
            if (!loop) {
              interpolatedLineTo(ctx, target, start, property);
            }
          }
          ctx.closePath();
          ctx.fill(loop ? "evenodd" : "nonzero");
          ctx.restore();
        }
      }
      function clipBounds(ctx, scale, bounds) {
        const { top, bottom } = scale.chart.chartArea;
        const { property, start, end } = bounds || {};
        if (property === "x") {
          ctx.beginPath();
          ctx.rect(start, top, end - start, bottom - top);
          ctx.clip();
        }
      }
      function interpolatedLineTo(ctx, target, point, property) {
        const interpolatedPoint = target.interpolate(point, property);
        if (interpolatedPoint) {
          ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
        }
      }
      var index = {
        id: "filler",
        afterDatasetsUpdate(chart, _args, options) {
          const count = (chart.data.datasets || []).length;
          const sources = [];
          let meta, i, line, source;
          for (i = 0; i < count; ++i) {
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement2) {
              source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: _decodeFill(line, i, count),
                chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line
              };
            }
            meta.$filler = source;
            sources.push(source);
          }
          for (i = 0; i < count; ++i) {
            source = sources[i];
            if (!source || source.fill === false) {
              continue;
            }
            source.fill = _resolveTarget(sources, i, options.propagate);
          }
        },
        beforeDraw(chart, _args, options) {
          const draw2 = options.drawTime === "beforeDraw";
          const metasets = chart.getSortedVisibleDatasetMetas();
          const area = chart.chartArea;
          for (let i = metasets.length - 1; i >= 0; --i) {
            const source = metasets[i].$filler;
            if (!source) {
              continue;
            }
            source.line.updateControlPoints(area, source.axis);
            if (draw2 && source.fill) {
              _drawfill(chart.ctx, source, area);
            }
          }
        },
        beforeDatasetsDraw(chart, _args, options) {
          if (options.drawTime !== "beforeDatasetsDraw") {
            return;
          }
          const metasets = chart.getSortedVisibleDatasetMetas();
          for (let i = metasets.length - 1; i >= 0; --i) {
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) {
              _drawfill(chart.ctx, source, chart.chartArea);
            }
          }
        },
        beforeDatasetDraw(chart, args, options) {
          const source = args.meta.$filler;
          if (!_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") {
            return;
          }
          _drawfill(chart.ctx, source, chart.chartArea);
        },
        defaults: {
          propagate: true,
          drawTime: "beforeDatasetDraw"
        }
      };
      const getBoxSize = (labelOpts, fontSize) => {
        let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
        if (labelOpts.usePointStyle) {
          boxHeight = Math.min(boxHeight, fontSize);
          boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
        }
        return {
          boxWidth,
          boxHeight,
          itemHeight: Math.max(fontSize, boxHeight)
        };
      };
      const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
      class Legend2 extends Element {
        constructor(config) {
          super();
          this._added = false;
          this.legendHitBoxes = [];
          this._hoveredItem = null;
          this.doughnutMode = false;
          this.chart = config.chart;
          this.options = config.options;
          this.ctx = config.ctx;
          this.legendItems = void 0;
          this.columnSizes = void 0;
          this.lineWidths = void 0;
          this.maxHeight = void 0;
          this.maxWidth = void 0;
          this.top = void 0;
          this.bottom = void 0;
          this.left = void 0;
          this.right = void 0;
          this.height = void 0;
          this.width = void 0;
          this._margins = void 0;
          this.position = void 0;
          this.weight = void 0;
          this.fullSize = void 0;
        }
        update(maxWidth, maxHeight, margins) {
          this.maxWidth = maxWidth;
          this.maxHeight = maxHeight;
          this._margins = margins;
          this.setDimensions();
          this.buildLabels();
          this.fit();
        }
        setDimensions() {
          if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
          } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
          }
        }
        buildLabels() {
          const labelOpts = this.options.labels || {};
          let legendItems = callback(labelOpts.generateLabels, [this.chart], this) || [];
          if (labelOpts.filter) {
            legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
          }
          if (labelOpts.sort) {
            legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
          }
          if (this.options.reverse) {
            legendItems.reverse();
          }
          this.legendItems = legendItems;
        }
        fit() {
          const { options, ctx } = this;
          if (!options.display) {
            this.width = this.height = 0;
            return;
          }
          const labelOpts = options.labels;
          const labelFont = toFont(labelOpts.font);
          const fontSize = labelFont.size;
          const titleHeight = this._computeTitleHeight();
          const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
          let width, height;
          ctx.font = labelFont.string;
          if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
          } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
          }
          this.width = Math.min(width, options.maxWidth || this.maxWidth);
          this.height = Math.min(height, options.maxHeight || this.maxHeight);
        }
        _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
          const { ctx, maxWidth, options: { labels: { padding } } } = this;
          const hitboxes = this.legendHitBoxes = [];
          const lineWidths = this.lineWidths = [0];
          const lineHeight = itemHeight + padding;
          let totalHeight = titleHeight;
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          let row = -1;
          let top = -lineHeight;
          this.legendItems.forEach((legendItem, i) => {
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
              totalHeight += lineHeight;
              lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
              top += lineHeight;
              row++;
            }
            hitboxes[i] = { left: 0, top, row, width: itemWidth, height: itemHeight };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
          });
          return totalHeight;
        }
        _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
          const { ctx, maxHeight, options: { labels: { padding } } } = this;
          const hitboxes = this.legendHitBoxes = [];
          const columnSizes = this.columnSizes = [];
          const heightLimit = maxHeight - titleHeight;
          let totalWidth = padding;
          let currentColWidth = 0;
          let currentColHeight = 0;
          let left = 0;
          let col = 0;
          this.legendItems.forEach((legendItem, i) => {
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
              totalWidth += currentColWidth + padding;
              columnSizes.push({ width: currentColWidth, height: currentColHeight });
              left += currentColWidth + padding;
              col++;
              currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = { left, top: currentColHeight, col, width: itemWidth, height: itemHeight };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
          });
          totalWidth += currentColWidth;
          columnSizes.push({ width: currentColWidth, height: currentColHeight });
          return totalWidth;
        }
        adjustHitBoxes() {
          if (!this.options.display) {
            return;
          }
          const titleHeight = this._computeTitleHeight();
          const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
          const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
          if (this.isHorizontal()) {
            let row = 0;
            let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes) {
              if (row !== hitbox.row) {
                row = hitbox.row;
                left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
              }
              hitbox.top += this.top + titleHeight + padding;
              hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
              left += hitbox.width + padding;
            }
          } else {
            let col = 0;
            let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox of hitboxes) {
              if (hitbox.col !== col) {
                col = hitbox.col;
                top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
              }
              hitbox.top = top;
              hitbox.left += this.left + padding;
              hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
              top += hitbox.height + padding;
            }
          }
        }
        isHorizontal() {
          return this.options.position === "top" || this.options.position === "bottom";
        }
        draw() {
          if (this.options.display) {
            const ctx = this.ctx;
            clipArea(ctx, this);
            this._draw();
            unclipArea(ctx);
          }
        }
        _draw() {
          const { options: opts, columnSizes, lineWidths, ctx } = this;
          const { align, labels: labelOpts } = opts;
          const defaultColor = defaults.color;
          const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
          const labelFont = toFont(labelOpts.font);
          const { color: fontColor, padding } = labelOpts;
          const fontSize = labelFont.size;
          const halfFontSize = fontSize / 2;
          let cursor;
          this.drawTitle();
          ctx.textAlign = rtlHelper.textAlign("left");
          ctx.textBaseline = "middle";
          ctx.lineWidth = 0.5;
          ctx.font = labelFont.string;
          const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
          const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
              return;
            }
            ctx.save();
            const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
            ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
            ctx.lineCap = valueOrDefault(legendItem.lineCap, "butt");
            ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
            ctx.lineJoin = valueOrDefault(legendItem.lineJoin, "miter");
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
              const drawOptions = {
                radius: boxHeight * Math.SQRT2 / 2,
                pointStyle: legendItem.pointStyle,
                rotation: legendItem.rotation,
                borderWidth: lineWidth
              };
              const centerX = rtlHelper.xPlus(x, boxWidth / 2);
              const centerY = y + halfFontSize;
              drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
              const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
              const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
              const borderRadius = toTRBLCorners(legendItem.borderRadius);
              ctx.beginPath();
              if (Object.values(borderRadius).some((v) => v !== 0)) {
                addRoundedRectPath(ctx, {
                  x: xBoxLeft,
                  y: yBoxTop,
                  w: boxWidth,
                  h: boxHeight,
                  radius: borderRadius
                });
              } else {
                ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
              }
              ctx.fill();
              if (lineWidth !== 0) {
                ctx.stroke();
              }
            }
            ctx.restore();
          };
          const fillText = function(x, y, legendItem) {
            renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
              strikethrough: legendItem.hidden,
              textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
          };
          const isHorizontal = this.isHorizontal();
          const titleHeight = this._computeTitleHeight();
          if (isHorizontal) {
            cursor = {
              x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
              y: this.top + padding + titleHeight,
              line: 0
            };
          } else {
            cursor = {
              x: this.left + padding,
              y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
              line: 0
            };
          }
          overrideTextDirection(this.ctx, opts.textDirection);
          const lineHeight = itemHeight + padding;
          this.legendItems.forEach((legendItem, i) => {
            ctx.strokeStyle = legendItem.fontColor || fontColor;
            ctx.fillStyle = legendItem.fontColor || fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
              if (i > 0 && x + width + padding > this.right) {
                y = cursor.y += lineHeight;
                cursor.line++;
                x = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
              }
            } else if (i > 0 && y + lineHeight > this.bottom) {
              x = cursor.x = x + columnSizes[cursor.line].width + padding;
              cursor.line++;
              y = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = _textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) {
              cursor.x += width + padding;
            } else {
              cursor.y += lineHeight;
            }
          });
          restoreTextDirection(this.ctx, opts.textDirection);
        }
        drawTitle() {
          const opts = this.options;
          const titleOpts = opts.title;
          const titleFont = toFont(titleOpts.font);
          const titlePadding = toPadding(titleOpts.padding);
          if (!titleOpts.display) {
            return;
          }
          const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
          const ctx = this.ctx;
          const position = titleOpts.position;
          const halfFontSize = titleFont.size / 2;
          const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
          let y;
          let left = this.left;
          let maxWidth = this.width;
          if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = _alignStartEnd(opts.align, left, this.right - maxWidth);
          } else {
            const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
          }
          const x = _alignStartEnd(position, left, left + maxWidth);
          ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
          ctx.textBaseline = "middle";
          ctx.strokeStyle = titleOpts.color;
          ctx.fillStyle = titleOpts.color;
          ctx.font = titleFont.string;
          renderText(ctx, titleOpts.text, x, y, titleFont);
        }
        _computeTitleHeight() {
          const titleOpts = this.options.title;
          const titleFont = toFont(titleOpts.font);
          const titlePadding = toPadding(titleOpts.padding);
          return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
        }
        _getLegendItemAt(x, y) {
          let i, hitBox, lh;
          if (_isBetween(x, this.left, this.right) && _isBetween(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for (i = 0; i < lh.length; ++i) {
              hitBox = lh[i];
              if (_isBetween(x, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y, hitBox.top, hitBox.top + hitBox.height)) {
                return this.legendItems[i];
              }
            }
          }
          return null;
        }
        handleEvent(e) {
          const opts = this.options;
          if (!isListened(e.type, opts)) {
            return;
          }
          const hoveredItem = this._getLegendItemAt(e.x, e.y);
          if (e.type === "mousemove" || e.type === "mouseout") {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) {
              callback(opts.onLeave, [e, previous, this], this);
            }
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) {
              callback(opts.onHover, [e, hoveredItem, this], this);
            }
          } else if (hoveredItem) {
            callback(opts.onClick, [e, hoveredItem, this], this);
          }
        }
      }
      function isListened(type, opts) {
        if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) {
          return true;
        }
        if (opts.onClick && (type === "click" || type === "mouseup")) {
          return true;
        }
        return false;
      }
      var plugin_legend = {
        id: "legend",
        _element: Legend2,
        start(chart, _args, options) {
          const legend = chart.legend = new Legend2({ ctx: chart.ctx, options, chart });
          layouts.configure(chart, legend, options);
          layouts.addBox(chart, legend);
        },
        stop(chart) {
          layouts.removeBox(chart, chart.legend);
          delete chart.legend;
        },
        beforeUpdate(chart, _args, options) {
          const legend = chart.legend;
          layouts.configure(chart, legend, options);
          legend.options = options;
        },
        afterUpdate(chart) {
          const legend = chart.legend;
          legend.buildLabels();
          legend.adjustHitBoxes();
        },
        afterEvent(chart, args) {
          if (!args.replay) {
            chart.legend.handleEvent(args.event);
          }
        },
        defaults: {
          display: true,
          position: "top",
          align: "center",
          fullSize: true,
          reverse: false,
          weight: 1e3,
          onClick(e, legendItem, legend) {
            const index2 = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index2)) {
              ci.hide(index2);
              legendItem.hidden = true;
            } else {
              ci.show(index2);
              legendItem.hidden = false;
            }
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (ctx) => ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(chart) {
              const datasets = chart.data.datasets;
              const { labels: { usePointStyle, pointStyle, textAlign, color: color2 } } = chart.legend.options;
              return chart._getSortedDatasetMetas().map((meta) => {
                const style = meta.controller.getStyle(usePointStyle ? 0 : void 0);
                const borderWidth = toPadding(style.borderWidth);
                return {
                  text: datasets[meta.index].label,
                  fillStyle: style.backgroundColor,
                  fontColor: color2,
                  hidden: !meta.visible,
                  lineCap: style.borderCapStyle,
                  lineDash: style.borderDash,
                  lineDashOffset: style.borderDashOffset,
                  lineJoin: style.borderJoinStyle,
                  lineWidth: (borderWidth.width + borderWidth.height) / 4,
                  strokeStyle: style.borderColor,
                  pointStyle: pointStyle || style.pointStyle,
                  rotation: style.rotation,
                  textAlign: textAlign || style.textAlign,
                  borderRadius: 0,
                  datasetIndex: meta.index
                };
              }, this);
            }
          },
          title: {
            color: (ctx) => ctx.chart.options.color,
            display: false,
            position: "center",
            text: ""
          }
        },
        descriptors: {
          _scriptable: (name) => !name.startsWith("on"),
          labels: {
            _scriptable: (name) => !["generateLabels", "filter", "sort"].includes(name)
          }
        }
      };
      class Title extends Element {
        constructor(config) {
          super();
          this.chart = config.chart;
          this.options = config.options;
          this.ctx = config.ctx;
          this._padding = void 0;
          this.top = void 0;
          this.bottom = void 0;
          this.left = void 0;
          this.right = void 0;
          this.width = void 0;
          this.height = void 0;
          this.position = void 0;
          this.weight = void 0;
          this.fullSize = void 0;
        }
        update(maxWidth, maxHeight) {
          const opts = this.options;
          this.left = 0;
          this.top = 0;
          if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
          }
          this.width = this.right = maxWidth;
          this.height = this.bottom = maxHeight;
          const lineCount = isArray(opts.text) ? opts.text.length : 1;
          this._padding = toPadding(opts.padding);
          const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
          if (this.isHorizontal()) {
            this.height = textSize;
          } else {
            this.width = textSize;
          }
        }
        isHorizontal() {
          const pos = this.options.position;
          return pos === "top" || pos === "bottom";
        }
        _drawArgs(offset) {
          const { top, left, bottom, right, options } = this;
          const align = options.align;
          let rotation = 0;
          let maxWidth, titleX, titleY;
          if (this.isHorizontal()) {
            titleX = _alignStartEnd(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
          } else {
            if (options.position === "left") {
              titleX = left + offset;
              titleY = _alignStartEnd(align, bottom, top);
              rotation = PI * -0.5;
            } else {
              titleX = right - offset;
              titleY = _alignStartEnd(align, top, bottom);
              rotation = PI * 0.5;
            }
            maxWidth = bottom - top;
          }
          return { titleX, titleY, maxWidth, rotation };
        }
        draw() {
          const ctx = this.ctx;
          const opts = this.options;
          if (!opts.display) {
            return;
          }
          const fontOpts = toFont(opts.font);
          const lineHeight = fontOpts.lineHeight;
          const offset = lineHeight / 2 + this._padding.top;
          const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
          renderText(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: _toLeftRightCenter(opts.align),
            textBaseline: "middle",
            translation: [titleX, titleY]
          });
        }
      }
      function createTitle(chart, titleOpts) {
        const title = new Title({
          ctx: chart.ctx,
          options: titleOpts,
          chart
        });
        layouts.configure(chart, title, titleOpts);
        layouts.addBox(chart, title);
        chart.titleBlock = title;
      }
      var plugin_title = {
        id: "title",
        _element: Title,
        start(chart, _args, options) {
          createTitle(chart, options);
        },
        stop(chart) {
          const titleBlock = chart.titleBlock;
          layouts.removeBox(chart, titleBlock);
          delete chart.titleBlock;
        },
        beforeUpdate(chart, _args, options) {
          const title = chart.titleBlock;
          layouts.configure(chart, title, options);
          title.options = options;
        },
        defaults: {
          align: "center",
          display: false,
          font: {
            weight: "bold"
          },
          fullSize: true,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        },
        defaultRoutes: {
          color: "color"
        },
        descriptors: {
          _scriptable: true,
          _indexable: false
        }
      };
      const map = /* @__PURE__ */ new WeakMap();
      var plugin_subtitle = {
        id: "subtitle",
        start(chart, _args, options) {
          const title = new Title({
            ctx: chart.ctx,
            options,
            chart
          });
          layouts.configure(chart, title, options);
          layouts.addBox(chart, title);
          map.set(chart, title);
        },
        stop(chart) {
          layouts.removeBox(chart, map.get(chart));
          map.delete(chart);
        },
        beforeUpdate(chart, _args, options) {
          const title = map.get(chart);
          layouts.configure(chart, title, options);
          title.options = options;
        },
        defaults: {
          align: "center",
          display: false,
          font: {
            weight: "normal"
          },
          fullSize: true,
          padding: 0,
          position: "top",
          text: "",
          weight: 1500
        },
        defaultRoutes: {
          color: "color"
        },
        descriptors: {
          _scriptable: true,
          _indexable: false
        }
      };
      const positioners = {
        average(items) {
          if (!items.length) {
            return false;
          }
          let i, len;
          let x = 0;
          let y = 0;
          let count = 0;
          for (i = 0, len = items.length; i < len; ++i) {
            const el = items[i].element;
            if (el && el.hasValue()) {
              const pos = el.tooltipPosition();
              x += pos.x;
              y += pos.y;
              ++count;
            }
          }
          return {
            x: x / count,
            y: y / count
          };
        },
        nearest(items, eventPosition) {
          if (!items.length) {
            return false;
          }
          let x = eventPosition.x;
          let y = eventPosition.y;
          let minDistance = Number.POSITIVE_INFINITY;
          let i, len, nearestElement;
          for (i = 0, len = items.length; i < len; ++i) {
            const el = items[i].element;
            if (el && el.hasValue()) {
              const center = el.getCenterPoint();
              const d = distanceBetweenPoints(eventPosition, center);
              if (d < minDistance) {
                minDistance = d;
                nearestElement = el;
              }
            }
          }
          if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
          }
          return {
            x,
            y
          };
        }
      };
      function pushOrConcat(base, toPush) {
        if (toPush) {
          if (isArray(toPush)) {
            Array.prototype.push.apply(base, toPush);
          } else {
            base.push(toPush);
          }
        }
        return base;
      }
      function splitNewlines(str) {
        if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) {
          return str.split("\n");
        }
        return str;
      }
      function createTooltipItem(chart, item) {
        const { element, datasetIndex, index: index2 } = item;
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        const { label, value } = controller.getLabelAndValue(index2);
        return {
          chart,
          label,
          parsed: controller.getParsed(index2),
          raw: chart.data.datasets[datasetIndex].data[index2],
          formattedValue: value,
          dataset: controller.getDataset(),
          dataIndex: index2,
          datasetIndex,
          element
        };
      }
      function getTooltipSize(tooltip, options) {
        const ctx = tooltip.chart.ctx;
        const { body, footer, title } = tooltip;
        const { boxWidth, boxHeight } = options;
        const bodyFont = toFont(options.bodyFont);
        const titleFont = toFont(options.titleFont);
        const footerFont = toFont(options.footerFont);
        const titleLineCount = title.length;
        const footerLineCount = footer.length;
        const bodyLineItemCount = body.length;
        const padding = toPadding(options.padding);
        let height = padding.height;
        let width = 0;
        let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
        combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
        if (titleLineCount) {
          height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
        }
        if (combinedBodyLength) {
          const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
          height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
        }
        if (footerLineCount) {
          height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
        }
        let widthPadding = 0;
        const maxLineWidth = function(line) {
          width = Math.max(width, ctx.measureText(line).width + widthPadding);
        };
        ctx.save();
        ctx.font = titleFont.string;
        each(tooltip.title, maxLineWidth);
        ctx.font = bodyFont.string;
        each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
        widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
        each(body, (bodyItem) => {
          each(bodyItem.before, maxLineWidth);
          each(bodyItem.lines, maxLineWidth);
          each(bodyItem.after, maxLineWidth);
        });
        widthPadding = 0;
        ctx.font = footerFont.string;
        each(tooltip.footer, maxLineWidth);
        ctx.restore();
        width += padding.width;
        return { width, height };
      }
      function determineYAlign(chart, size) {
        const { y, height } = size;
        if (y < height / 2) {
          return "top";
        } else if (y > chart.height - height / 2) {
          return "bottom";
        }
        return "center";
      }
      function doesNotFitWithAlign(xAlign, chart, options, size) {
        const { x, width } = size;
        const caret = options.caretSize + options.caretPadding;
        if (xAlign === "left" && x + width + caret > chart.width) {
          return true;
        }
        if (xAlign === "right" && x - width - caret < 0) {
          return true;
        }
      }
      function determineXAlign(chart, options, size, yAlign) {
        const { x, width } = size;
        const { width: chartWidth, chartArea: { left, right } } = chart;
        let xAlign = "center";
        if (yAlign === "center") {
          xAlign = x <= (left + right) / 2 ? "left" : "right";
        } else if (x <= width / 2) {
          xAlign = "left";
        } else if (x >= chartWidth - width / 2) {
          xAlign = "right";
        }
        if (doesNotFitWithAlign(xAlign, chart, options, size)) {
          xAlign = "center";
        }
        return xAlign;
      }
      function determineAlignment(chart, options, size) {
        const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
        return {
          xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
          yAlign
        };
      }
      function alignX(size, xAlign) {
        let { x, width } = size;
        if (xAlign === "right") {
          x -= width;
        } else if (xAlign === "center") {
          x -= width / 2;
        }
        return x;
      }
      function alignY(size, yAlign, paddingAndSize) {
        let { y, height } = size;
        if (yAlign === "top") {
          y += paddingAndSize;
        } else if (yAlign === "bottom") {
          y -= height + paddingAndSize;
        } else {
          y -= height / 2;
        }
        return y;
      }
      function getBackgroundPoint(options, size, alignment, chart) {
        const { caretSize, caretPadding, cornerRadius } = options;
        const { xAlign, yAlign } = alignment;
        const paddingAndSize = caretSize + caretPadding;
        const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
        let x = alignX(size, xAlign);
        const y = alignY(size, yAlign, paddingAndSize);
        if (yAlign === "center") {
          if (xAlign === "left") {
            x += paddingAndSize;
          } else if (xAlign === "right") {
            x -= paddingAndSize;
          }
        } else if (xAlign === "left") {
          x -= Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === "right") {
          x += Math.max(topRight, bottomRight) + caretSize;
        }
        return {
          x: _limitValue(x, 0, chart.width - size.width),
          y: _limitValue(y, 0, chart.height - size.height)
        };
      }
      function getAlignedX(tooltip, align, options) {
        const padding = toPadding(options.padding);
        return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
      }
      function getBeforeAfterBodyLines(callback2) {
        return pushOrConcat([], splitNewlines(callback2));
      }
      function createTooltipContext(parent, tooltip, tooltipItems) {
        return createContext(parent, {
          tooltip,
          tooltipItems,
          type: "tooltip"
        });
      }
      function overrideCallbacks(callbacks, context) {
        const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
        return override ? callbacks.override(override) : callbacks;
      }
      class Tooltip2 extends Element {
        constructor(config) {
          super();
          this.opacity = 0;
          this._active = [];
          this._eventPosition = void 0;
          this._size = void 0;
          this._cachedAnimations = void 0;
          this._tooltipItems = [];
          this.$animations = void 0;
          this.$context = void 0;
          this.chart = config.chart || config._chart;
          this._chart = this.chart;
          this.options = config.options;
          this.dataPoints = void 0;
          this.title = void 0;
          this.beforeBody = void 0;
          this.body = void 0;
          this.afterBody = void 0;
          this.footer = void 0;
          this.xAlign = void 0;
          this.yAlign = void 0;
          this.x = void 0;
          this.y = void 0;
          this.height = void 0;
          this.width = void 0;
          this.caretX = void 0;
          this.caretY = void 0;
          this.labelColors = void 0;
          this.labelPointStyles = void 0;
          this.labelTextColors = void 0;
        }
        initialize(options) {
          this.options = options;
          this._cachedAnimations = void 0;
          this.$context = void 0;
        }
        _resolveAnimations() {
          const cached = this._cachedAnimations;
          if (cached) {
            return cached;
          }
          const chart = this.chart;
          const options = this.options.setContext(this.getContext());
          const opts = options.enabled && chart.options.animation && options.animations;
          const animations = new Animations(this.chart, opts);
          if (opts._cacheable) {
            this._cachedAnimations = Object.freeze(animations);
          }
          return animations;
        }
        getContext() {
          return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
        }
        getTitle(context, options) {
          const { callbacks } = options;
          const beforeTitle = callbacks.beforeTitle.apply(this, [context]);
          const title = callbacks.title.apply(this, [context]);
          const afterTitle = callbacks.afterTitle.apply(this, [context]);
          let lines = [];
          lines = pushOrConcat(lines, splitNewlines(beforeTitle));
          lines = pushOrConcat(lines, splitNewlines(title));
          lines = pushOrConcat(lines, splitNewlines(afterTitle));
          return lines;
        }
        getBeforeBody(tooltipItems, options) {
          return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [tooltipItems]));
        }
        getBody(tooltipItems, options) {
          const { callbacks } = options;
          const bodyItems = [];
          each(tooltipItems, (context) => {
            const bodyItem = {
              before: [],
              lines: [],
              after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(this, context)));
            pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
            pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(this, context)));
            bodyItems.push(bodyItem);
          });
          return bodyItems;
        }
        getAfterBody(tooltipItems, options) {
          return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [tooltipItems]));
        }
        getFooter(tooltipItems, options) {
          const { callbacks } = options;
          const beforeFooter = callbacks.beforeFooter.apply(this, [tooltipItems]);
          const footer = callbacks.footer.apply(this, [tooltipItems]);
          const afterFooter = callbacks.afterFooter.apply(this, [tooltipItems]);
          let lines = [];
          lines = pushOrConcat(lines, splitNewlines(beforeFooter));
          lines = pushOrConcat(lines, splitNewlines(footer));
          lines = pushOrConcat(lines, splitNewlines(afterFooter));
          return lines;
        }
        _createItems(options) {
          const active = this._active;
          const data = this.chart.data;
          const labelColors = [];
          const labelPointStyles = [];
          const labelTextColors = [];
          let tooltipItems = [];
          let i, len;
          for (i = 0, len = active.length; i < len; ++i) {
            tooltipItems.push(createTooltipItem(this.chart, active[i]));
          }
          if (options.filter) {
            tooltipItems = tooltipItems.filter((element, index2, array) => options.filter(element, index2, array, data));
          }
          if (options.itemSort) {
            tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
          }
          each(tooltipItems, (context) => {
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(scoped.labelColor.call(this, context));
            labelPointStyles.push(scoped.labelPointStyle.call(this, context));
            labelTextColors.push(scoped.labelTextColor.call(this, context));
          });
          this.labelColors = labelColors;
          this.labelPointStyles = labelPointStyles;
          this.labelTextColors = labelTextColors;
          this.dataPoints = tooltipItems;
          return tooltipItems;
        }
        update(changed, replay) {
          const options = this.options.setContext(this.getContext());
          const active = this._active;
          let properties;
          let tooltipItems = [];
          if (!active.length) {
            if (this.opacity !== 0) {
              properties = {
                opacity: 0
              };
            }
          } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
              opacity: 1,
              x: backgroundPoint.x,
              y: backgroundPoint.y,
              width: size.width,
              height: size.height,
              caretX: position.x,
              caretY: position.y
            };
          }
          this._tooltipItems = tooltipItems;
          this.$context = void 0;
          if (properties) {
            this._resolveAnimations().update(this, properties);
          }
          if (changed && options.external) {
            options.external.call(this, { chart: this.chart, tooltip: this, replay });
          }
        }
        drawCaret(tooltipPoint, ctx, size, options) {
          const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
          ctx.lineTo(caretPosition.x1, caretPosition.y1);
          ctx.lineTo(caretPosition.x2, caretPosition.y2);
          ctx.lineTo(caretPosition.x3, caretPosition.y3);
        }
        getCaretPosition(tooltipPoint, size, options) {
          const { xAlign, yAlign } = this;
          const { caretSize, cornerRadius } = options;
          const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
          const { x: ptX, y: ptY } = tooltipPoint;
          const { width, height } = size;
          let x1, x2, x3, y1, y2, y3;
          if (yAlign === "center") {
            y2 = ptY + height / 2;
            if (xAlign === "left") {
              x1 = ptX;
              x2 = x1 - caretSize;
              y1 = y2 + caretSize;
              y3 = y2 - caretSize;
            } else {
              x1 = ptX + width;
              x2 = x1 + caretSize;
              y1 = y2 - caretSize;
              y3 = y2 + caretSize;
            }
            x3 = x1;
          } else {
            if (xAlign === "left") {
              x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            } else if (xAlign === "right") {
              x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            } else {
              x2 = this.caretX;
            }
            if (yAlign === "top") {
              y1 = ptY;
              y2 = y1 - caretSize;
              x1 = x2 - caretSize;
              x3 = x2 + caretSize;
            } else {
              y1 = ptY + height;
              y2 = y1 + caretSize;
              x1 = x2 + caretSize;
              x3 = x2 - caretSize;
            }
            y3 = y1;
          }
          return { x1, x2, x3, y1, y2, y3 };
        }
        drawTitle(pt, ctx, options) {
          const title = this.title;
          const length = title.length;
          let titleFont, titleSpacing, i;
          if (length) {
            const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = "middle";
            titleFont = toFont(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for (i = 0; i < length; ++i) {
              ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
              pt.y += titleFont.lineHeight + titleSpacing;
              if (i + 1 === length) {
                pt.y += options.titleMarginBottom - titleSpacing;
              }
            }
          }
        }
        _drawColorBox(ctx, pt, i, rtlHelper, options) {
          const labelColors = this.labelColors[i];
          const labelPointStyle = this.labelPointStyles[i];
          const { boxHeight, boxWidth, boxPadding } = options;
          const bodyFont = toFont(options.bodyFont);
          const colorX = getAlignedX(this, "left", options);
          const rtlColorX = rtlHelper.x(colorX);
          const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
          const colorY = pt.y + yOffSet;
          if (options.usePointStyle) {
            const drawOptions = {
              radius: Math.min(boxWidth, boxHeight) / 2,
              pointStyle: labelPointStyle.pointStyle,
              rotation: labelPointStyle.rotation,
              borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            drawPoint(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColors.borderColor;
            ctx.fillStyle = labelColors.backgroundColor;
            drawPoint(ctx, drawOptions, centerX, centerY);
          } else {
            ctx.lineWidth = isObject(labelColors.borderWidth) ? Math.max(...Object.values(labelColors.borderWidth)) : labelColors.borderWidth || 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.setLineDash(labelColors.borderDash || []);
            ctx.lineDashOffset = labelColors.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
            const borderRadius = toTRBLCorners(labelColors.borderRadius);
            if (Object.values(borderRadius).some((v) => v !== 0)) {
              ctx.beginPath();
              ctx.fillStyle = options.multiKeyBackground;
              addRoundedRectPath(ctx, {
                x: outerX,
                y: colorY,
                w: boxWidth,
                h: boxHeight,
                radius: borderRadius
              });
              ctx.fill();
              ctx.stroke();
              ctx.fillStyle = labelColors.backgroundColor;
              ctx.beginPath();
              addRoundedRectPath(ctx, {
                x: innerX,
                y: colorY + 1,
                w: boxWidth - 2,
                h: boxHeight - 2,
                radius: borderRadius
              });
              ctx.fill();
            } else {
              ctx.fillStyle = options.multiKeyBackground;
              ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
              ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
              ctx.fillStyle = labelColors.backgroundColor;
              ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
          }
          ctx.fillStyle = this.labelTextColors[i];
        }
        drawBody(pt, ctx, options) {
          const { body } = this;
          const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
          const bodyFont = toFont(options.bodyFont);
          let bodyLineHeight = bodyFont.lineHeight;
          let xLinePadding = 0;
          const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
          const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
          };
          const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
          let bodyItem, textColor, lines, i, j, ilen, jlen;
          ctx.textAlign = bodyAlign;
          ctx.textBaseline = "middle";
          ctx.font = bodyFont.string;
          pt.x = getAlignedX(this, bodyAlignForCalculation, options);
          ctx.fillStyle = options.bodyColor;
          each(this.beforeBody, fillLineOfText);
          xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
          for (i = 0, ilen = body.length; i < ilen; ++i) {
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            each(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
              this._drawColorBox(ctx, pt, i, rtlHelper, options);
              bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for (j = 0, jlen = lines.length; j < jlen; ++j) {
              fillLineOfText(lines[j]);
              bodyLineHeight = bodyFont.lineHeight;
            }
            each(bodyItem.after, fillLineOfText);
          }
          xLinePadding = 0;
          bodyLineHeight = bodyFont.lineHeight;
          each(this.afterBody, fillLineOfText);
          pt.y -= bodySpacing;
        }
        drawFooter(pt, ctx, options) {
          const footer = this.footer;
          const length = footer.length;
          let footerFont, i;
          if (length) {
            const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = "middle";
            footerFont = toFont(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for (i = 0; i < length; ++i) {
              ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
              pt.y += footerFont.lineHeight + options.footerSpacing;
            }
          }
        }
        drawBackground(pt, ctx, tooltipSize, options) {
          const { xAlign, yAlign } = this;
          const { x, y } = pt;
          const { width, height } = tooltipSize;
          const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(options.cornerRadius);
          ctx.fillStyle = options.backgroundColor;
          ctx.strokeStyle = options.borderColor;
          ctx.lineWidth = options.borderWidth;
          ctx.beginPath();
          ctx.moveTo(x + topLeft, y);
          if (yAlign === "top") {
            this.drawCaret(pt, ctx, tooltipSize, options);
          }
          ctx.lineTo(x + width - topRight, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
          if (yAlign === "center" && xAlign === "right") {
            this.drawCaret(pt, ctx, tooltipSize, options);
          }
          ctx.lineTo(x + width, y + height - bottomRight);
          ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
          if (yAlign === "bottom") {
            this.drawCaret(pt, ctx, tooltipSize, options);
          }
          ctx.lineTo(x + bottomLeft, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
          if (yAlign === "center" && xAlign === "left") {
            this.drawCaret(pt, ctx, tooltipSize, options);
          }
          ctx.lineTo(x, y + topLeft);
          ctx.quadraticCurveTo(x, y, x + topLeft, y);
          ctx.closePath();
          ctx.fill();
          if (options.borderWidth > 0) {
            ctx.stroke();
          }
        }
        _updateAnimationTarget(options) {
          const chart = this.chart;
          const anims = this.$animations;
          const animX = anims && anims.x;
          const animY = anims && anims.y;
          if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) {
              return;
            }
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
              this.xAlign = alignment.xAlign;
              this.yAlign = alignment.yAlign;
              this.width = size.width;
              this.height = size.height;
              this.caretX = position.x;
              this.caretY = position.y;
              this._resolveAnimations().update(this, point);
            }
          }
        }
        _willRender() {
          return !!this.opacity;
        }
        draw(ctx) {
          const options = this.options.setContext(this.getContext());
          let opacity = this.opacity;
          if (!opacity) {
            return;
          }
          this._updateAnimationTarget(options);
          const tooltipSize = {
            width: this.width,
            height: this.height
          };
          const pt = {
            x: this.x,
            y: this.y
          };
          opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
          const padding = toPadding(options.padding);
          const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
          if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            overrideTextDirection(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            restoreTextDirection(ctx, options.textDirection);
            ctx.restore();
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(activeElements, eventPosition) {
          const lastActive = this._active;
          const active = activeElements.map(({ datasetIndex, index: index2 }) => {
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) {
              throw new Error("Cannot find a dataset at index " + datasetIndex);
            }
            return {
              datasetIndex,
              element: meta.data[index2],
              index: index2
            };
          });
          const changed = !_elementsEqual(lastActive, active);
          const positionChanged = this._positionChanged(active, eventPosition);
          if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
          }
        }
        handleEvent(e, replay, inChartArea = true) {
          if (replay && this._ignoreReplayEvents) {
            return false;
          }
          this._ignoreReplayEvents = false;
          const options = this.options;
          const lastActive = this._active || [];
          const active = this._getActiveElements(e, lastActive, replay, inChartArea);
          const positionChanged = this._positionChanged(active, e);
          const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
          if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
              this._eventPosition = {
                x: e.x,
                y: e.y
              };
              this.update(true, replay);
            }
          }
          return changed;
        }
        _getActiveElements(e, lastActive, replay, inChartArea) {
          const options = this.options;
          if (e.type === "mouseout") {
            return [];
          }
          if (!inChartArea) {
            return lastActive;
          }
          const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
          if (options.reverse) {
            active.reverse();
          }
          return active;
        }
        _positionChanged(active, e) {
          const { caretX, caretY, options } = this;
          const position = positioners[options.position].call(this, active, e);
          return position !== false && (caretX !== position.x || caretY !== position.y);
        }
      }
      Tooltip2.positioners = positioners;
      var plugin_tooltip = {
        id: "tooltip",
        _element: Tooltip2,
        positioners,
        afterInit(chart, _args, options) {
          if (options) {
            chart.tooltip = new Tooltip2({ chart, options });
          }
        },
        beforeUpdate(chart, _args, options) {
          if (chart.tooltip) {
            chart.tooltip.initialize(options);
          }
        },
        reset(chart, _args, options) {
          if (chart.tooltip) {
            chart.tooltip.initialize(options);
          }
        },
        afterDraw(chart) {
          const tooltip = chart.tooltip;
          if (tooltip && tooltip._willRender()) {
            const args = {
              tooltip
            };
            if (chart.notifyPlugins("beforeTooltipDraw", args) === false) {
              return;
            }
            tooltip.draw(chart.ctx);
            chart.notifyPlugins("afterTooltipDraw", args);
          }
        },
        afterEvent(chart, args) {
          if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
              args.changed = true;
            }
          }
        },
        defaults: {
          enabled: true,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: {
            weight: "bold"
          },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: {
            weight: "bold"
          },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (ctx, opts) => opts.bodyFont.size,
          boxWidth: (ctx, opts) => opts.bodyFont.size,
          multiKeyBackground: "#fff",
          displayColors: true,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: {
            duration: 400,
            easing: "easeOutQuart"
          },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"]
            },
            opacity: {
              easing: "linear",
              duration: 200
            }
          },
          callbacks: {
            beforeTitle: noop,
            title(tooltipItems) {
              if (tooltipItems.length > 0) {
                const item = tooltipItems[0];
                const labels = item.chart.data.labels;
                const labelCount = labels ? labels.length : 0;
                if (this && this.options && this.options.mode === "dataset") {
                  return item.dataset.label || "";
                } else if (item.label) {
                  return item.label;
                } else if (labelCount > 0 && item.dataIndex < labelCount) {
                  return labels[item.dataIndex];
                }
              }
              return "";
            },
            afterTitle: noop,
            beforeBody: noop,
            beforeLabel: noop,
            label(tooltipItem) {
              if (this && this.options && this.options.mode === "dataset") {
                return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
              }
              let label = tooltipItem.dataset.label || "";
              if (label) {
                label += ": ";
              }
              const value = tooltipItem.formattedValue;
              if (!isNullOrUndef(value)) {
                label += value;
              }
              return label;
            },
            labelColor(tooltipItem) {
              const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
              const options = meta.controller.getStyle(tooltipItem.dataIndex);
              return {
                borderColor: options.borderColor,
                backgroundColor: options.backgroundColor,
                borderWidth: options.borderWidth,
                borderDash: options.borderDash,
                borderDashOffset: options.borderDashOffset,
                borderRadius: 0
              };
            },
            labelTextColor() {
              return this.options.bodyColor;
            },
            labelPointStyle(tooltipItem) {
              const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
              const options = meta.controller.getStyle(tooltipItem.dataIndex);
              return {
                pointStyle: options.pointStyle,
                rotation: options.rotation
              };
            },
            afterLabel: noop,
            afterBody: noop,
            beforeFooter: noop,
            footer: noop,
            afterFooter: noop
          }
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font"
        },
        descriptors: {
          _scriptable: (name) => name !== "filter" && name !== "itemSort" && name !== "external",
          _indexable: false,
          callbacks: {
            _scriptable: false,
            _indexable: false
          },
          animation: {
            _fallback: false
          },
          animations: {
            _fallback: "animation"
          }
        },
        additionalOptionScopes: ["interaction"]
      };
      var plugins = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Decimation: plugin_decimation,
        Filler: index,
        Legend: plugin_legend,
        SubTitle: plugin_subtitle,
        Title: plugin_title,
        Tooltip: plugin_tooltip
      });
      const addIfString = (labels, raw, index2, addedLabels) => {
        if (typeof raw === "string") {
          index2 = labels.push(raw) - 1;
          addedLabels.unshift({ index: index2, label: raw });
        } else if (isNaN(raw)) {
          index2 = null;
        }
        return index2;
      };
      function findOrAddLabel(labels, raw, index2, addedLabels) {
        const first = labels.indexOf(raw);
        if (first === -1) {
          return addIfString(labels, raw, index2, addedLabels);
        }
        const last = labels.lastIndexOf(raw);
        return first !== last ? index2 : first;
      }
      const validIndex = (index2, max) => index2 === null ? null : _limitValue(Math.round(index2), 0, max);
      class CategoryScale extends Scale {
        constructor(cfg) {
          super(cfg);
          this._startValue = void 0;
          this._valueRange = 0;
          this._addedLabels = [];
        }
        init(scaleOptions) {
          const added = this._addedLabels;
          if (added.length) {
            const labels = this.getLabels();
            for (const { index: index2, label } of added) {
              if (labels[index2] === label) {
                labels.splice(index2, 1);
              }
            }
            this._addedLabels = [];
          }
          super.init(scaleOptions);
        }
        parse(raw, index2) {
          if (isNullOrUndef(raw)) {
            return null;
          }
          const labels = this.getLabels();
          index2 = isFinite(index2) && labels[index2] === raw ? index2 : findOrAddLabel(labels, raw, valueOrDefault(index2, raw), this._addedLabels);
          return validIndex(index2, labels.length - 1);
        }
        determineDataLimits() {
          const { minDefined, maxDefined } = this.getUserBounds();
          let { min, max } = this.getMinMax(true);
          if (this.options.bounds === "ticks") {
            if (!minDefined) {
              min = 0;
            }
            if (!maxDefined) {
              max = this.getLabels().length - 1;
            }
          }
          this.min = min;
          this.max = max;
        }
        buildTicks() {
          const min = this.min;
          const max = this.max;
          const offset = this.options.offset;
          const ticks = [];
          let labels = this.getLabels();
          labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
          this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
          this._startValue = this.min - (offset ? 0.5 : 0);
          for (let value = min; value <= max; value++) {
            ticks.push({ value });
          }
          return ticks;
        }
        getLabelForValue(value) {
          const labels = this.getLabels();
          if (value >= 0 && value < labels.length) {
            return labels[value];
          }
          return value;
        }
        configure() {
          super.configure();
          if (!this.isHorizontal()) {
            this._reversePixels = !this._reversePixels;
          }
        }
        getPixelForValue(value) {
          if (typeof value !== "number") {
            value = this.parse(value);
          }
          return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
        }
        getPixelForTick(index2) {
          const ticks = this.ticks;
          if (index2 < 0 || index2 > ticks.length - 1) {
            return null;
          }
          return this.getPixelForValue(ticks[index2].value);
        }
        getValueForPixel(pixel) {
          return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      CategoryScale.id = "category";
      CategoryScale.defaults = {
        ticks: {
          callback: CategoryScale.prototype.getLabelForValue
        }
      };
      function generateTicks$1(generationOptions, dataRange) {
        const ticks = [];
        const MIN_SPACING = 1e-14;
        const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
        const unit = step || 1;
        const maxSpaces = maxTicks - 1;
        const { min: rmin, max: rmax } = dataRange;
        const minDefined = !isNullOrUndef(min);
        const maxDefined = !isNullOrUndef(max);
        const countDefined = !isNullOrUndef(count);
        const minSpacing = (rmax - rmin) / (maxDigits + 1);
        let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
        let factor, niceMin, niceMax, numSpaces;
        if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
          return [{ value: rmin }, { value: rmax }];
        }
        numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
        if (numSpaces > maxSpaces) {
          spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
        }
        if (!isNullOrUndef(precision)) {
          factor = Math.pow(10, precision);
          spacing = Math.ceil(spacing * factor) / factor;
        }
        if (bounds === "ticks") {
          niceMin = Math.floor(rmin / spacing) * spacing;
          niceMax = Math.ceil(rmax / spacing) * spacing;
        } else {
          niceMin = rmin;
          niceMax = rmax;
        }
        if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
          numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
          spacing = (max - min) / numSpaces;
          niceMin = min;
          niceMax = max;
        } else if (countDefined) {
          niceMin = minDefined ? min : niceMin;
          niceMax = maxDefined ? max : niceMax;
          numSpaces = count - 1;
          spacing = (niceMax - niceMin) / numSpaces;
        } else {
          numSpaces = (niceMax - niceMin) / spacing;
          if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) {
            numSpaces = Math.round(numSpaces);
          } else {
            numSpaces = Math.ceil(numSpaces);
          }
        }
        const decimalPlaces = Math.max(
          _decimalPlaces(spacing),
          _decimalPlaces(niceMin)
        );
        factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
        niceMin = Math.round(niceMin * factor) / factor;
        niceMax = Math.round(niceMax * factor) / factor;
        let j = 0;
        if (minDefined) {
          if (includeBounds && niceMin !== min) {
            ticks.push({ value: min });
            if (niceMin < min) {
              j++;
            }
            if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
              j++;
            }
          } else if (niceMin < min) {
            j++;
          }
        }
        for (; j < numSpaces; ++j) {
          ticks.push({ value: Math.round((niceMin + j * spacing) * factor) / factor });
        }
        if (maxDefined && includeBounds && niceMax !== max) {
          if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
            ticks[ticks.length - 1].value = max;
          } else {
            ticks.push({ value: max });
          }
        } else if (!maxDefined || niceMax === max) {
          ticks.push({ value: niceMax });
        }
        return ticks;
      }
      function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
        const rad = toRadians(minRotation);
        const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 1e-3;
        const length = 0.75 * minSpacing * ("" + value).length;
        return Math.min(minSpacing / ratio, length);
      }
      class LinearScaleBase extends Scale {
        constructor(cfg) {
          super(cfg);
          this.start = void 0;
          this.end = void 0;
          this._startValue = void 0;
          this._endValue = void 0;
          this._valueRange = 0;
        }
        parse(raw, index2) {
          if (isNullOrUndef(raw)) {
            return null;
          }
          if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) {
            return null;
          }
          return +raw;
        }
        handleTickRangeOptions() {
          const { beginAtZero } = this.options;
          const { minDefined, maxDefined } = this.getUserBounds();
          let { min, max } = this;
          const setMin = (v) => min = minDefined ? min : v;
          const setMax = (v) => max = maxDefined ? max : v;
          if (beginAtZero) {
            const minSign = sign(min);
            const maxSign = sign(max);
            if (minSign < 0 && maxSign < 0) {
              setMax(0);
            } else if (minSign > 0 && maxSign > 0) {
              setMin(0);
            }
          }
          if (min === max) {
            let offset = 1;
            if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) {
              offset = Math.abs(max * 0.05);
            }
            setMax(max + offset);
            if (!beginAtZero) {
              setMin(min - offset);
            }
          }
          this.min = min;
          this.max = max;
        }
        getTickLimit() {
          const tickOpts = this.options.ticks;
          let { maxTicksLimit, stepSize } = tickOpts;
          let maxTicks;
          if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1e3) {
              console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
              maxTicks = 1e3;
            }
          } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
          }
          if (maxTicksLimit) {
            maxTicks = Math.min(maxTicksLimit, maxTicks);
          }
          return maxTicks;
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const opts = this.options;
          const tickOpts = opts.ticks;
          let maxTicks = this.getTickLimit();
          maxTicks = Math.max(2, maxTicks);
          const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
          };
          const dataRange = this._range || this;
          const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
          if (opts.bounds === "ticks") {
            _setMinAndMaxByKey(ticks, this, "value");
          }
          if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
          } else {
            this.start = this.min;
            this.end = this.max;
          }
          return ticks;
        }
        configure() {
          const ticks = this.ticks;
          let start = this.min;
          let end = this.max;
          super.configure();
          if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
          }
          this._startValue = start;
          this._endValue = end;
          this._valueRange = end - start;
        }
        getLabelForValue(value) {
          return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class LinearScale2 extends LinearScaleBase {
        determineDataLimits() {
          const { min, max } = this.getMinMax(true);
          this.min = isNumberFinite(min) ? min : 0;
          this.max = isNumberFinite(max) ? max : 1;
          this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const horizontal = this.isHorizontal();
          const length = horizontal ? this.width : this.height;
          const minRotation = toRadians(this.options.ticks.minRotation);
          const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 1e-3;
          const tickFont = this._resolveTickFontOptions(0);
          return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
        }
        getPixelForValue(value) {
          return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
        }
        getValueForPixel(pixel) {
          return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
        }
      }
      LinearScale2.id = "linear";
      LinearScale2.defaults = {
        ticks: {
          callback: Ticks.formatters.numeric
        }
      };
      function isMajor(tickVal) {
        const remain = tickVal / Math.pow(10, Math.floor(log10(tickVal)));
        return remain === 1;
      }
      function generateTicks(generationOptions, dataRange) {
        const endExp = Math.floor(log10(dataRange.max));
        const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
        const ticks = [];
        let tickVal = finiteOrDefault(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
        let exp = Math.floor(log10(tickVal));
        let significand = Math.floor(tickVal / Math.pow(10, exp));
        let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
        do {
          ticks.push({ value: tickVal, major: isMajor(tickVal) });
          ++significand;
          if (significand === 10) {
            significand = 1;
            ++exp;
            precision = exp >= 0 ? 1 : precision;
          }
          tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
        } while (exp < endExp || exp === endExp && significand < endSignificand);
        const lastTick = finiteOrDefault(generationOptions.max, tickVal);
        ticks.push({ value: lastTick, major: isMajor(tickVal) });
        return ticks;
      }
      class LogarithmicScale extends Scale {
        constructor(cfg) {
          super(cfg);
          this.start = void 0;
          this.end = void 0;
          this._startValue = void 0;
          this._valueRange = 0;
        }
        parse(raw, index2) {
          const value = LinearScaleBase.prototype.parse.apply(this, [raw, index2]);
          if (value === 0) {
            this._zero = true;
            return void 0;
          }
          return isNumberFinite(value) && value > 0 ? value : null;
        }
        determineDataLimits() {
          const { min, max } = this.getMinMax(true);
          this.min = isNumberFinite(min) ? Math.max(0, min) : null;
          this.max = isNumberFinite(max) ? Math.max(0, max) : null;
          if (this.options.beginAtZero) {
            this._zero = true;
          }
          this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined, maxDefined } = this.getUserBounds();
          let min = this.min;
          let max = this.max;
          const setMin = (v) => min = minDefined ? min : v;
          const setMax = (v) => max = maxDefined ? max : v;
          const exp = (v, m) => Math.pow(10, Math.floor(log10(v)) + m);
          if (min === max) {
            if (min <= 0) {
              setMin(1);
              setMax(10);
            } else {
              setMin(exp(min, -1));
              setMax(exp(max, 1));
            }
          }
          if (min <= 0) {
            setMin(exp(max, -1));
          }
          if (max <= 0) {
            setMax(exp(min, 1));
          }
          if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) {
            setMin(exp(min, -1));
          }
          this.min = min;
          this.max = max;
        }
        buildTicks() {
          const opts = this.options;
          const generationOptions = {
            min: this._userMin,
            max: this._userMax
          };
          const ticks = generateTicks(generationOptions, this);
          if (opts.bounds === "ticks") {
            _setMinAndMaxByKey(ticks, this, "value");
          }
          if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
          } else {
            this.start = this.min;
            this.end = this.max;
          }
          return ticks;
        }
        getLabelForValue(value) {
          return value === void 0 ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const start = this.min;
          super.configure();
          this._startValue = log10(start);
          this._valueRange = log10(this.max) - log10(start);
        }
        getPixelForValue(value) {
          if (value === void 0 || value === 0) {
            value = this.min;
          }
          if (value === null || isNaN(value)) {
            return NaN;
          }
          return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
        }
        getValueForPixel(pixel) {
          const decimal = this.getDecimalForPixel(pixel);
          return Math.pow(10, this._startValue + decimal * this._valueRange);
        }
      }
      LogarithmicScale.id = "logarithmic";
      LogarithmicScale.defaults = {
        ticks: {
          callback: Ticks.formatters.logarithmic,
          major: {
            enabled: true
          }
        }
      };
      function getTickBackdropHeight(opts) {
        const tickOpts = opts.ticks;
        if (tickOpts.display && opts.display) {
          const padding = toPadding(tickOpts.backdropPadding);
          return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
        }
        return 0;
      }
      function measureLabelSize(ctx, font, label) {
        label = isArray(label) ? label : [label];
        return {
          w: _longestText(ctx, font.string, label),
          h: label.length * font.lineHeight
        };
      }
      function determineLimits(angle, pos, size, min, max) {
        if (angle === min || angle === max) {
          return {
            start: pos - size / 2,
            end: pos + size / 2
          };
        } else if (angle < min || angle > max) {
          return {
            start: pos - size,
            end: pos
          };
        }
        return {
          start: pos,
          end: pos + size
        };
      }
      function fitWithPointLabels(scale) {
        const orig = {
          l: scale.left + scale._padding.left,
          r: scale.right - scale._padding.right,
          t: scale.top + scale._padding.top,
          b: scale.bottom - scale._padding.bottom
        };
        const limits = Object.assign({}, orig);
        const labelSizes = [];
        const padding = [];
        const valueCount = scale._pointLabels.length;
        const pointLabelOpts = scale.options.pointLabels;
        const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
        for (let i = 0; i < valueCount; i++) {
          const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
          padding[i] = opts.padding;
          const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
          const plFont = toFont(opts.font);
          const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
          labelSizes[i] = textSize;
          const angleRadians = _normalizeAngle(scale.getIndexAngle(i) + additionalAngle);
          const angle = Math.round(toDegrees(angleRadians));
          const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
          const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
          updateLimits(limits, orig, angleRadians, hLimits, vLimits);
        }
        scale.setCenterPoint(
          orig.l - limits.l,
          limits.r - orig.r,
          orig.t - limits.t,
          limits.b - orig.b
        );
        scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
      }
      function updateLimits(limits, orig, angle, hLimits, vLimits) {
        const sin = Math.abs(Math.sin(angle));
        const cos = Math.abs(Math.cos(angle));
        let x = 0;
        let y = 0;
        if (hLimits.start < orig.l) {
          x = (orig.l - hLimits.start) / sin;
          limits.l = Math.min(limits.l, orig.l - x);
        } else if (hLimits.end > orig.r) {
          x = (hLimits.end - orig.r) / sin;
          limits.r = Math.max(limits.r, orig.r + x);
        }
        if (vLimits.start < orig.t) {
          y = (orig.t - vLimits.start) / cos;
          limits.t = Math.min(limits.t, orig.t - y);
        } else if (vLimits.end > orig.b) {
          y = (vLimits.end - orig.b) / cos;
          limits.b = Math.max(limits.b, orig.b + y);
        }
      }
      function buildPointLabelItems(scale, labelSizes, padding) {
        const items = [];
        const valueCount = scale._pointLabels.length;
        const opts = scale.options;
        const extra = getTickBackdropHeight(opts) / 2;
        const outerDistance = scale.drawingArea;
        const additionalAngle = opts.pointLabels.centerPointLabels ? PI / valueCount : 0;
        for (let i = 0; i < valueCount; i++) {
          const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
          const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
          const size = labelSizes[i];
          const y = yForAngle(pointLabelPosition.y, size.h, angle);
          const textAlign = getTextAlignForAngle(angle);
          const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
          items.push({
            x: pointLabelPosition.x,
            y,
            textAlign,
            left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
          });
        }
        return items;
      }
      function getTextAlignForAngle(angle) {
        if (angle === 0 || angle === 180) {
          return "center";
        } else if (angle < 180) {
          return "left";
        }
        return "right";
      }
      function leftForTextAlign(x, w, align) {
        if (align === "right") {
          x -= w;
        } else if (align === "center") {
          x -= w / 2;
        }
        return x;
      }
      function yForAngle(y, h, angle) {
        if (angle === 90 || angle === 270) {
          y -= h / 2;
        } else if (angle > 270 || angle < 90) {
          y -= h;
        }
        return y;
      }
      function drawPointLabels(scale, labelCount) {
        const { ctx, options: { pointLabels } } = scale;
        for (let i = labelCount - 1; i >= 0; i--) {
          const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
          const plFont = toFont(optsAtIndex.font);
          const { x, y, textAlign, left, top, right, bottom } = scale._pointLabelItems[i];
          const { backdropColor } = optsAtIndex;
          if (!isNullOrUndef(backdropColor)) {
            const borderRadius = toTRBLCorners(optsAtIndex.borderRadius);
            const padding = toPadding(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            const backdropLeft = left - padding.left;
            const backdropTop = top - padding.top;
            const backdropWidth = right - left + padding.width;
            const backdropHeight = bottom - top + padding.height;
            if (Object.values(borderRadius).some((v) => v !== 0)) {
              ctx.beginPath();
              addRoundedRectPath(ctx, {
                x: backdropLeft,
                y: backdropTop,
                w: backdropWidth,
                h: backdropHeight,
                radius: borderRadius
              });
              ctx.fill();
            } else {
              ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
            }
          }
          renderText(
            ctx,
            scale._pointLabels[i],
            x,
            y + plFont.lineHeight / 2,
            plFont,
            {
              color: optsAtIndex.color,
              textAlign,
              textBaseline: "middle"
            }
          );
        }
      }
      function pathRadiusLine(scale, radius, circular, labelCount) {
        const { ctx } = scale;
        if (circular) {
          ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
        } else {
          let pointPosition = scale.getPointPosition(0, radius);
          ctx.moveTo(pointPosition.x, pointPosition.y);
          for (let i = 1; i < labelCount; i++) {
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
          }
        }
      }
      function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
        const ctx = scale.ctx;
        const circular = gridLineOpts.circular;
        const { color: color2, lineWidth } = gridLineOpts;
        if (!circular && !labelCount || !color2 || !lineWidth || radius < 0) {
          return;
        }
        ctx.save();
        ctx.strokeStyle = color2;
        ctx.lineWidth = lineWidth;
        ctx.setLineDash(gridLineOpts.borderDash);
        ctx.lineDashOffset = gridLineOpts.borderDashOffset;
        ctx.beginPath();
        pathRadiusLine(scale, radius, circular, labelCount);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
      function createPointLabelContext(parent, index2, label) {
        return createContext(parent, {
          label,
          index: index2,
          type: "pointLabel"
        });
      }
      class RadialLinearScale extends LinearScaleBase {
        constructor(cfg) {
          super(cfg);
          this.xCenter = void 0;
          this.yCenter = void 0;
          this.drawingArea = void 0;
          this._pointLabels = [];
          this._pointLabelItems = [];
        }
        setDimensions() {
          const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
          const w = this.width = this.maxWidth - padding.width;
          const h = this.height = this.maxHeight - padding.height;
          this.xCenter = Math.floor(this.left + w / 2 + padding.left);
          this.yCenter = Math.floor(this.top + h / 2 + padding.top);
          this.drawingArea = Math.floor(Math.min(w, h) / 2);
        }
        determineDataLimits() {
          const { min, max } = this.getMinMax(false);
          this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
          this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
          this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
        }
        generateTickLabels(ticks) {
          LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
          this._pointLabels = this.getLabels().map((value, index2) => {
            const label = callback(this.options.pointLabels.callback, [value, index2], this);
            return label || label === 0 ? label : "";
          }).filter((v, i) => this.chart.getDataVisibility(i));
        }
        fit() {
          const opts = this.options;
          if (opts.display && opts.pointLabels.display) {
            fitWithPointLabels(this);
          } else {
            this.setCenterPoint(0, 0, 0, 0);
          }
        }
        setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
          this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
          this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
          this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
        }
        getIndexAngle(index2) {
          const angleMultiplier = TAU / (this._pointLabels.length || 1);
          const startAngle = this.options.startAngle || 0;
          return _normalizeAngle(index2 * angleMultiplier + toRadians(startAngle));
        }
        getDistanceFromCenterForValue(value) {
          if (isNullOrUndef(value)) {
            return NaN;
          }
          const scalingFactor = this.drawingArea / (this.max - this.min);
          if (this.options.reverse) {
            return (this.max - value) * scalingFactor;
          }
          return (value - this.min) * scalingFactor;
        }
        getValueForDistanceFromCenter(distance) {
          if (isNullOrUndef(distance)) {
            return NaN;
          }
          const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
        }
        getPointLabelContext(index2) {
          const pointLabels = this._pointLabels || [];
          if (index2 >= 0 && index2 < pointLabels.length) {
            const pointLabel = pointLabels[index2];
            return createPointLabelContext(this.getContext(), index2, pointLabel);
          }
        }
        getPointPosition(index2, distanceFromCenter, additionalAngle = 0) {
          const angle = this.getIndexAngle(index2) - HALF_PI + additionalAngle;
          return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
          };
        }
        getPointPositionForValue(index2, value) {
          return this.getPointPosition(index2, this.getDistanceFromCenterForValue(value));
        }
        getBasePosition(index2) {
          return this.getPointPositionForValue(index2 || 0, this.getBaseValue());
        }
        getPointLabelPosition(index2) {
          const { left, top, right, bottom } = this._pointLabelItems[index2];
          return {
            left,
            top,
            right,
            bottom
          };
        }
        drawBackground() {
          const { backgroundColor, grid: { circular } } = this.options;
          if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
          }
        }
        drawGrid() {
          const ctx = this.ctx;
          const opts = this.options;
          const { angleLines, grid } = opts;
          const labelCount = this._pointLabels.length;
          let i, offset, position;
          if (opts.pointLabels.display) {
            drawPointLabels(this, labelCount);
          }
          if (grid.display) {
            this.ticks.forEach((tick, index2) => {
              if (index2 !== 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const optsAtIndex = grid.setContext(this.getContext(index2 - 1));
                drawRadiusLine(this, optsAtIndex, offset, labelCount);
              }
            });
          }
          if (angleLines.display) {
            ctx.save();
            for (i = labelCount - 1; i >= 0; i--) {
              const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
              const { color: color2, lineWidth } = optsAtIndex;
              if (!lineWidth || !color2) {
                continue;
              }
              ctx.lineWidth = lineWidth;
              ctx.strokeStyle = color2;
              ctx.setLineDash(optsAtIndex.borderDash);
              ctx.lineDashOffset = optsAtIndex.borderDashOffset;
              offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
              position = this.getPointPosition(i, offset);
              ctx.beginPath();
              ctx.moveTo(this.xCenter, this.yCenter);
              ctx.lineTo(position.x, position.y);
              ctx.stroke();
            }
            ctx.restore();
          }
        }
        drawBorder() {
        }
        drawLabels() {
          const ctx = this.ctx;
          const opts = this.options;
          const tickOpts = opts.ticks;
          if (!tickOpts.display) {
            return;
          }
          const startAngle = this.getIndexAngle(0);
          let offset, width;
          ctx.save();
          ctx.translate(this.xCenter, this.yCenter);
          ctx.rotate(startAngle);
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          this.ticks.forEach((tick, index2) => {
            if (index2 === 0 && !opts.reverse) {
              return;
            }
            const optsAtIndex = tickOpts.setContext(this.getContext(index2));
            const tickFont = toFont(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index2].value);
            if (optsAtIndex.showLabelBackdrop) {
              ctx.font = tickFont.string;
              width = ctx.measureText(tick.label).width;
              ctx.fillStyle = optsAtIndex.backdropColor;
              const padding = toPadding(optsAtIndex.backdropPadding);
              ctx.fillRect(
                -width / 2 - padding.left,
                -offset - tickFont.size / 2 - padding.top,
                width + padding.width,
                tickFont.size + padding.height
              );
            }
            renderText(ctx, tick.label, 0, -offset, tickFont, {
              color: optsAtIndex.color
            });
          });
          ctx.restore();
        }
        drawTitle() {
        }
      }
      RadialLinearScale.id = "radialLinear";
      RadialLinearScale.defaults = {
        display: true,
        animate: true,
        position: "chartArea",
        angleLines: {
          display: true,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0
        },
        grid: {
          circular: false
        },
        startAngle: 0,
        ticks: {
          showLabelBackdrop: true,
          callback: Ticks.formatters.numeric
        },
        pointLabels: {
          backdropColor: void 0,
          backdropPadding: 2,
          display: true,
          font: {
            size: 10
          },
          callback(label) {
            return label;
          },
          padding: 5,
          centerPointLabels: false
        }
      };
      RadialLinearScale.defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
      };
      RadialLinearScale.descriptors = {
        angleLines: {
          _fallback: "grid"
        }
      };
      const INTERVALS = {
        millisecond: { common: true, size: 1, steps: 1e3 },
        second: { common: true, size: 1e3, steps: 60 },
        minute: { common: true, size: 6e4, steps: 60 },
        hour: { common: true, size: 36e5, steps: 24 },
        day: { common: true, size: 864e5, steps: 30 },
        week: { common: false, size: 6048e5, steps: 4 },
        month: { common: true, size: 2628e6, steps: 12 },
        quarter: { common: false, size: 7884e6, steps: 4 },
        year: { common: true, size: 3154e7 }
      };
      const UNITS = Object.keys(INTERVALS);
      function sorter(a, b) {
        return a - b;
      }
      function parse(scale, input) {
        if (isNullOrUndef(input)) {
          return null;
        }
        const adapter = scale._adapter;
        const { parser, round: round2, isoWeekday } = scale._parseOpts;
        let value = input;
        if (typeof parser === "function") {
          value = parser(value);
        }
        if (!isNumberFinite(value)) {
          value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
        }
        if (value === null) {
          return null;
        }
        if (round2) {
          value = round2 === "week" && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round2);
        }
        return +value;
      }
      function determineUnitForAutoTicks(minUnit, min, max, capacity) {
        const ilen = UNITS.length;
        for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
          const interval = INTERVALS[UNITS[i]];
          const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
          if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
            return UNITS[i];
          }
        }
        return UNITS[ilen - 1];
      }
      function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
        for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
          const unit = UNITS[i];
          if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
            return unit;
          }
        }
        return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
      }
      function determineMajorUnit(unit) {
        for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
          if (INTERVALS[UNITS[i]].common) {
            return UNITS[i];
          }
        }
      }
      function addTick(ticks, time, timestamps) {
        if (!timestamps) {
          ticks[time] = true;
        } else if (timestamps.length) {
          const { lo, hi } = _lookup(timestamps, time);
          const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
          ticks[timestamp] = true;
        }
      }
      function setMajorTicks(scale, ticks, map2, majorUnit) {
        const adapter = scale._adapter;
        const first = +adapter.startOf(ticks[0].value, majorUnit);
        const last = ticks[ticks.length - 1].value;
        let major, index2;
        for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
          index2 = map2[major];
          if (index2 >= 0) {
            ticks[index2].major = true;
          }
        }
        return ticks;
      }
      function ticksFromTimestamps(scale, values, majorUnit) {
        const ticks = [];
        const map2 = {};
        const ilen = values.length;
        let i, value;
        for (i = 0; i < ilen; ++i) {
          value = values[i];
          map2[value] = i;
          ticks.push({
            value,
            major: false
          });
        }
        return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map2, majorUnit);
      }
      class TimeScale2 extends Scale {
        constructor(props) {
          super(props);
          this._cache = {
            data: [],
            labels: [],
            all: []
          };
          this._unit = "day";
          this._majorUnit = void 0;
          this._offsets = {};
          this._normalized = false;
          this._parseOpts = void 0;
        }
        init(scaleOpts, opts) {
          const time = scaleOpts.time || (scaleOpts.time = {});
          const adapter = this._adapter = new _adapters._date(scaleOpts.adapters.date);
          adapter.init(opts);
          mergeIf(time.displayFormats, adapter.formats());
          this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
          };
          super.init(scaleOpts);
          this._normalized = opts.normalized;
        }
        parse(raw, index2) {
          if (raw === void 0) {
            return null;
          }
          return parse(this, raw);
        }
        beforeLayout() {
          super.beforeLayout();
          this._cache = {
            data: [],
            labels: [],
            all: []
          };
        }
        determineDataLimits() {
          const options = this.options;
          const adapter = this._adapter;
          const unit = options.time.unit || "day";
          let { min, max, minDefined, maxDefined } = this.getUserBounds();
          function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) {
              min = Math.min(min, bounds.min);
            }
            if (!maxDefined && !isNaN(bounds.max)) {
              max = Math.max(max, bounds.max);
            }
          }
          if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== "ticks" || options.ticks.source !== "labels") {
              _applyBounds(this.getMinMax(false));
            }
          }
          min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
          max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
          this.min = Math.min(min, max - 1);
          this.max = Math.max(min + 1, max);
        }
        _getLabelBounds() {
          const arr = this.getLabelTimestamps();
          let min = Number.POSITIVE_INFINITY;
          let max = Number.NEGATIVE_INFINITY;
          if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
          }
          return { min, max };
        }
        buildTicks() {
          const options = this.options;
          const timeOpts = options.time;
          const tickOpts = options.ticks;
          const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
          if (options.bounds === "ticks" && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
          }
          const min = this.min;
          const max = this.max;
          const ticks = _filterBetween(timestamps, min, max);
          this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
          this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? void 0 : determineMajorUnit(this._unit);
          this.initOffsets(timestamps);
          if (options.reverse) {
            ticks.reverse();
          }
          return ticksFromTimestamps(this, ticks, this._majorUnit);
        }
        afterAutoSkip() {
          if (this.options.offsetAfterAutoskip) {
            this.initOffsets(this.ticks.map((tick) => +tick.value));
          }
        }
        initOffsets(timestamps) {
          let start = 0;
          let end = 0;
          let first, last;
          if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) {
              start = 1 - first;
            } else {
              start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            }
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) {
              end = last;
            } else {
              end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
            }
          }
          const limit = timestamps.length < 3 ? 0.5 : 0.25;
          start = _limitValue(start, 0, limit);
          end = _limitValue(end, 0, limit);
          this._offsets = { start, end, factor: 1 / (start + 1 + end) };
        }
        _generate() {
          const adapter = this._adapter;
          const min = this.min;
          const max = this.max;
          const options = this.options;
          const timeOpts = options.time;
          const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
          const stepSize = valueOrDefault(timeOpts.stepSize, 1);
          const weekday = minor === "week" ? timeOpts.isoWeekday : false;
          const hasWeekday = isNumber(weekday) || weekday === true;
          const ticks = {};
          let first = min;
          let time, count;
          if (hasWeekday) {
            first = +adapter.startOf(first, "isoWeek", weekday);
          }
          first = +adapter.startOf(first, hasWeekday ? "day" : minor);
          if (adapter.diff(max, min, minor) > 1e5 * stepSize) {
            throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
          }
          const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
          for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
            addTick(ticks, time, timestamps);
          }
          if (time === max || options.bounds === "ticks" || count === 1) {
            addTick(ticks, time, timestamps);
          }
          return Object.keys(ticks).sort((a, b) => a - b).map((x) => +x);
        }
        getLabelForValue(value) {
          const adapter = this._adapter;
          const timeOpts = this.options.time;
          if (timeOpts.tooltipFormat) {
            return adapter.format(value, timeOpts.tooltipFormat);
          }
          return adapter.format(value, timeOpts.displayFormats.datetime);
        }
        _tickFormatFunction(time, index2, ticks, format) {
          const options = this.options;
          const formats = options.time.displayFormats;
          const unit = this._unit;
          const majorUnit = this._majorUnit;
          const minorFormat = unit && formats[unit];
          const majorFormat = majorUnit && formats[majorUnit];
          const tick = ticks[index2];
          const major = majorUnit && majorFormat && tick && tick.major;
          const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
          const formatter = options.ticks.callback;
          return formatter ? callback(formatter, [label, index2, ticks], this) : label;
        }
        generateTickLabels(ticks) {
          let i, ilen, tick;
          for (i = 0, ilen = ticks.length; i < ilen; ++i) {
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
          }
        }
        getDecimalForValue(value) {
          return value === null ? NaN : (value - this.min) / (this.max - this.min);
        }
        getPixelForValue(value) {
          const offsets = this._offsets;
          const pos = this.getDecimalForValue(value);
          return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
        }
        getValueForPixel(pixel) {
          const offsets = this._offsets;
          const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
          return this.min + pos * (this.max - this.min);
        }
        _getLabelSize(label) {
          const ticksOpts = this.options.ticks;
          const tickLabelWidth = this.ctx.measureText(label).width;
          const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
          const cosRotation = Math.cos(angle);
          const sinRotation = Math.sin(angle);
          const tickFontSize = this._resolveTickFontOptions(0).size;
          return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
          };
        }
        _getLabelCapacity(exampleTime) {
          const timeOpts = this.options.time;
          const displayFormats = timeOpts.displayFormats;
          const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
          const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
          const size = this._getLabelSize(exampleLabel);
          const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
          return capacity > 0 ? capacity : 1;
        }
        getDataTimestamps() {
          let timestamps = this._cache.data || [];
          let i, ilen;
          if (timestamps.length) {
            return timestamps;
          }
          const metas = this.getMatchingVisibleMetas();
          if (this._normalized && metas.length) {
            return this._cache.data = metas[0].controller.getAllParsedValues(this);
          }
          for (i = 0, ilen = metas.length; i < ilen; ++i) {
            timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
          }
          return this._cache.data = this.normalize(timestamps);
        }
        getLabelTimestamps() {
          const timestamps = this._cache.labels || [];
          let i, ilen;
          if (timestamps.length) {
            return timestamps;
          }
          const labels = this.getLabels();
          for (i = 0, ilen = labels.length; i < ilen; ++i) {
            timestamps.push(parse(this, labels[i]));
          }
          return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
        }
        normalize(values) {
          return _arrayUnique(values.sort(sorter));
        }
      }
      TimeScale2.id = "time";
      TimeScale2.defaults = {
        bounds: "data",
        adapters: {},
        time: {
          parser: false,
          unit: false,
          round: false,
          isoWeekday: false,
          minUnit: "millisecond",
          displayFormats: {}
        },
        ticks: {
          source: "auto",
          major: {
            enabled: false
          }
        }
      };
      function interpolate(table, val, reverse) {
        let lo = 0;
        let hi = table.length - 1;
        let prevSource, nextSource, prevTarget, nextTarget;
        if (reverse) {
          if (val >= table[lo].pos && val <= table[hi].pos) {
            ({ lo, hi } = _lookupByKey(table, "pos", val));
          }
          ({ pos: prevSource, time: prevTarget } = table[lo]);
          ({ pos: nextSource, time: nextTarget } = table[hi]);
        } else {
          if (val >= table[lo].time && val <= table[hi].time) {
            ({ lo, hi } = _lookupByKey(table, "time", val));
          }
          ({ time: prevSource, pos: prevTarget } = table[lo]);
          ({ time: nextSource, pos: nextTarget } = table[hi]);
        }
        const span = nextSource - prevSource;
        return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
      }
      class TimeSeriesScale extends TimeScale2 {
        constructor(props) {
          super(props);
          this._table = [];
          this._minPos = void 0;
          this._tableRange = void 0;
        }
        initOffsets() {
          const timestamps = this._getTimestampsForTable();
          const table = this._table = this.buildLookupTable(timestamps);
          this._minPos = interpolate(table, this.min);
          this._tableRange = interpolate(table, this.max) - this._minPos;
          super.initOffsets(timestamps);
        }
        buildLookupTable(timestamps) {
          const { min, max } = this;
          const items = [];
          const table = [];
          let i, ilen, prev, curr, next;
          for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
            curr = timestamps[i];
            if (curr >= min && curr <= max) {
              items.push(curr);
            }
          }
          if (items.length < 2) {
            return [
              { time: min, pos: 0 },
              { time: max, pos: 1 }
            ];
          }
          for (i = 0, ilen = items.length; i < ilen; ++i) {
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) {
              table.push({ time: curr, pos: i / (ilen - 1) });
            }
          }
          return table;
        }
        _getTimestampsForTable() {
          let timestamps = this._cache.all || [];
          if (timestamps.length) {
            return timestamps;
          }
          const data = this.getDataTimestamps();
          const label = this.getLabelTimestamps();
          if (data.length && label.length) {
            timestamps = this.normalize(data.concat(label));
          } else {
            timestamps = data.length ? data : label;
          }
          timestamps = this._cache.all = timestamps;
          return timestamps;
        }
        getDecimalForValue(value) {
          return (interpolate(this._table, value) - this._minPos) / this._tableRange;
        }
        getValueForPixel(pixel) {
          const offsets = this._offsets;
          const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
          return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
        }
      }
      TimeSeriesScale.id = "timeseries";
      TimeSeriesScale.defaults = TimeScale2.defaults;
      var scales = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        CategoryScale,
        LinearScale: LinearScale2,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale: TimeScale2,
        TimeSeriesScale
      });
      Chart2.register(controllers, scales, elements, plugins);
      Chart2.helpers = { ...helpers };
      Chart2._adapters = _adapters;
      Chart2.Animation = Animation;
      Chart2.Animations = Animations;
      Chart2.animator = animator;
      Chart2.controllers = registry.controllers.items;
      Chart2.DatasetController = DatasetController;
      Chart2.Element = Element;
      Chart2.elements = elements;
      Chart2.Interaction = Interaction;
      Chart2.layouts = layouts;
      Chart2.platforms = platforms;
      Chart2.Scale = Scale;
      Chart2.Ticks = Ticks;
      Object.assign(Chart2, controllers, scales, elements, plugins, platforms);
      Chart2.Chart = Chart2;
      if (typeof window !== "undefined") {
        window.Chart = Chart2;
      }
      return Chart2;
    });
  }
});

// pnp:/home/mamluk/.yarn/berry/cache/moment-npm-2.29.4-902943305d-9.zip/node_modules/moment/moment.js
var require_moment = __commonJS({
  "pnp:/home/mamluk/.yarn/berry/cache/moment-npm-2.29.4-902943305d-9.zip/node_modules/moment/moment.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
    })(exports, function() {
      "use strict";
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn) {
        var res = [], i, arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }
      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }
        if (hasOwnProp(b, "toString")) {
          a.toString = b.toString;
        }
        if (hasOwnProp(b, "valueOf")) {
          a.valueOf = b.valueOf;
        }
        return a;
      }
      function createUTC(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }
        return m._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
            return i != null;
          }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
          }
          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m._isValid;
      }
      function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }
        return m;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to2, from2) {
        var i, prop, val, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from2._isAMomentObject)) {
          to2._isAMomentObject = from2._isAMomentObject;
        }
        if (!isUndefined(from2._i)) {
          to2._i = from2._i;
        }
        if (!isUndefined(from2._f)) {
          to2._f = from2._f;
        }
        if (!isUndefined(from2._l)) {
          to2._l = from2._l;
        }
        if (!isUndefined(from2._strict)) {
          to2._strict = from2._strict;
        }
        if (!isUndefined(from2._tzm)) {
          to2._tzm = from2._tzm;
        }
        if (!isUndefined(from2._isUTC)) {
          to2._isUTC = from2._isUTC;
        }
        if (!isUndefined(from2._offset)) {
          to2._offset = from2._offset;
        }
        if (!isUndefined(from2._pf)) {
          to2._pf = getParsingFlags(from2);
        }
        if (!isUndefined(from2._locale)) {
          to2._locale = from2._locale;
        }
        if (momentPropertiesLen > 0) {
          for (i = 0; i < momentPropertiesLen; i++) {
            prop = momentProperties[i];
            val = from2[prop];
            if (!isUndefined(val)) {
              to2[prop] = val;
            }
          }
        }
        return to2;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key, argLen = arguments.length;
            for (i = 0; i < argLen; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(
              msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
            );
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }, fn);
      }
      var deprecations = {};
      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key, mom, now2) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now2) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
        return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token2, padded, ordinal2, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token2) {
          formatTokenFunctions[token2] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal2) {
          formatTokenFunctions[ordinal2] = function() {
            return this.localeData().ordinal(
              func.apply(this, arguments),
              token2
            );
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format2) {
        var array = format2.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }
        return function(mom) {
          var output = "", i2;
          for (i2 = 0; i2 < length; i2++) {
            output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
          }
          return output;
        };
      }
      function formatMoment(m, format2) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }
        format2 = expandFormat(format2, m.localeData());
        formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
        return formatFunctions[format2](m);
      }
      function expandFormat(format2, locale2) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale2.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format2)) {
          format2 = format2.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
          );
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }
        return format2;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key) {
        var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format2 || !formatUpper) {
          return format2;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        }).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff2, output) {
        var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
        return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
      }
      var aliases = {};
      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
      }
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {};
      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }
      function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
          }
        }
        units.sort(function(a, b) {
          return a.priority - b.priority;
        });
        return units;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }
        return value;
      }
      function makeGetSet(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }
      function get(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
      }
      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt(value);
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
              value,
              mom.month(),
              daysInMonth(value, mom.month())
            );
          } else {
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
          }
        }
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
          for (i = 0; i < prioritizedLen; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
      regexes = {};
      function addRegexToken(token2, regex, strictRegex) {
        regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token2, config) {
        if (!hasOwnProp(regexes, token2)) {
          return new RegExp(unescapeFormat(token2));
        }
        return regexes[token2](config._strict, config._locale);
      }
      function unescapeFormat(s) {
        return regexEscape(
          s.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(matched, p1, p2, p3, p4) {
              return p1 || p2 || p3 || p4;
            }
          )
        );
      }
      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var tokens = {};
      function addParseToken(token2, callback) {
        var i, func = callback, tokenLen;
        if (typeof token2 === "string") {
          token2 = [token2];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        tokenLen = token2.length;
        for (i = 0; i < tokenLen; i++) {
          tokens[token2[i]] = func;
        }
      }
      function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token3) {
          config._w = config._w || {};
          callback(input, config._w, config, token3);
        });
      }
      function addTimeToArrayFromToken(token2, input, config) {
        if (input != null && hasOwnProp(tokens, token2)) {
          tokens[token2](input, config._a, config, token2);
        }
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      function mod(n, x) {
        return (n % x + x) % x;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      });
      addFormatToken("MMM", 0, 0, function(format2) {
        return this.localeData().monthsShort(this, format2);
      });
      addFormatToken("MMMM", 0, 0, function(format2) {
        return this.localeData().months(this, format2);
      });
      addUnitAlias("month", "M");
      addUnitPriority("month", 8);
      addRegexToken("M", match1to2);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", function(isStrict, locale2) {
        return locale2.monthsShortRegex(isStrict);
      });
      addRegexToken("MMMM", function(isStrict, locale2) {
        return locale2.monthsRegex(isStrict);
      });
      addParseToken(["M", "MM"], function(input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
        var month = config._locale.monthsParse(input, token2, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      });
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m, format2) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
      }
      function localeMonthsShort(m, format2) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
      }
      function handleStrictParse(monthName, format2, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([2e3, i]);
            this._shortMonthsParse[i] = this.monthsShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format2, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format2, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
              "^" + this.months(mom, "").replace(".", "") + "$",
              "i"
            );
            this._shortMonthsParse[i] = new RegExp(
              "^" + this.monthsShort(mom, "").replace(".", "") + "$",
              "i"
            );
          }
          if (!strict && !this._monthsParse[i]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber(value)) {
              return mom;
            }
          }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
      }
      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          shortPieces.push(this.monthsShort(mom, ""));
          longPieces.push(this.months(mom, ""));
          mixedPieces.push(this.months(mom, ""));
          mixedPieces.push(this.monthsShort(mom, ""));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._monthsShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
      }
      addFormatToken("Y", 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
      });
      addFormatToken(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      });
      addFormatToken(0, ["YYYY", 4], 0, "year");
      addFormatToken(0, ["YYYYY", 5], 0, "year");
      addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
      addUnitAlias("year", "y");
      addUnitPriority("year", 1);
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken(["YYYYY", "YYYYYY"], YEAR);
      addParseToken("YYYY", function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken("YY", function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken("Y", function(input, array) {
        array[YEAR] = parseInt(input, 10);
      });
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function createDate(y, m, d, h, M, s, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m, d, h, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }
        return date;
      }
      function createUTCDate(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", ["ww", 2], "wo", "week");
      addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
      addUnitAlias("week", "w");
      addUnitAlias("isoWeek", "W");
      addUnitPriority("week", 5);
      addUnitPriority("isoWeek", 5);
      addRegexToken("w", match1to2);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken(
        ["w", "ww", "W", "WW"],
        function(input, week, config, token2) {
          week[token2.substr(0, 1)] = toInt(input);
        }
      );
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
        doy: 6
      };
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, function(format2) {
        return this.localeData().weekdaysMin(this, format2);
      });
      addFormatToken("ddd", 0, 0, function(format2) {
        return this.localeData().weekdaysShort(this, format2);
      });
      addFormatToken("dddd", 0, 0, function(format2) {
        return this.localeData().weekdays(this, format2);
      });
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addUnitAlias("day", "d");
      addUnitAlias("weekday", "e");
      addUnitAlias("isoWeekday", "E");
      addUnitPriority("day", 11);
      addUnitPriority("weekday", 11);
      addUnitPriority("isoWeekday", 11);
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", function(isStrict, locale2) {
        return locale2.weekdaysMinRegex(isStrict);
      });
      addRegexToken("ddd", function(isStrict, locale2) {
        return locale2.weekdaysShortRegex(isStrict);
      });
      addRegexToken("dddd", function(isStrict, locale2) {
        return locale2.weekdaysRegex(isStrict);
      });
      addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
        var weekday = config._locale.weekdaysParse(input, token2, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
        week[token2] = toInt(input);
      });
      function parseWeekday(input, locale2) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale2.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale2) {
        if (typeof input === "string") {
          return locale2.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m, format2) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }
      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format2, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC([2e3, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
              mom,
              ""
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format2, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format2, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
              "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._shortWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._minWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
          }
          if (!this._weekdaysParse[i]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._weekdaysShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
        this._weekdaysMinStrictRegex = new RegExp(
          "^(" + minPieces.join("|") + ")",
          "i"
        );
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", ["HH", 2], 0, "hour");
      addFormatToken("h", ["hh", 2], 0, hFormat);
      addFormatToken("k", ["kk", 2], 0, kFormat);
      addFormatToken("hmm", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken("hmmss", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      function meridiem(token2, lowercase) {
        addFormatToken(token2, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
          );
        });
      }
      meridiem("a", true);
      meridiem("A", false);
      addUnitAlias("hour", "h");
      addUnitPriority("hour", 13);
      function matchMeridiem(isStrict, locale2) {
        return locale2._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2);
      addRegexToken("h", match1to2);
      addRegexToken("k", match1to2);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken(["H", "HH"], HOUR);
      addParseToken(["k", "kk"], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      });
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours2, minutes2, isLower) {
        if (hours2 > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names) {
        var i = 0, j, next, locale2, split;
        while (i < names.length) {
          split = normalizeLocale(names[i]).split("-");
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale2 = loadLocale(split.slice(0, j).join("-"));
            if (locale2) {
              return locale2;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function isLocaleNameSane(name) {
        return name.match("^[^/\\\\]*$") != null;
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = __require;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            locales[name] = null;
          }
        }
        return locales[name];
      }
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn(
                "Locale " + key + " not found. Did you forget to load it?"
              );
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name, config) {
        if (config !== null) {
          var locale2, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            );
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale2 = loadLocale(config.parentLocale);
              if (locale2 != null) {
                parentConfig = locale2._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name,
                  config
                });
                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function(x) {
              defineLocale(x.name, x.config);
            });
          }
          getSetGlobalLocale(name);
          return locales[name];
        } else {
          delete locales[name];
          return null;
        }
      }
      function updateLocale(name, config) {
        if (config != null) {
          var locale2, tmpLocale, parentConfig = baseConfig;
          if (locales[name] != null && locales[name].parentLocale != null) {
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale2 = new Locale(config);
            locale2.parentLocale = locales[name];
            locales[name] = locale2;
          }
          getSetGlobalLocale(name);
        } else {
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }
      function getLocale(key) {
        var locale2;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray(key)) {
          locale2 = loadLocale(key);
          if (locale2) {
            return locale2;
          }
          key = [key];
        }
        return chooseLocale(key);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m).overflow = overflow;
        }
        return m;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false]
      ], isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i = 0, l = isoDatesLen; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimesLen; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s) {
        return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
            parsedInput[0],
            parsedInput[1],
            parsedInput[2]
          ).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
          return h * 60 + m;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
          );
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(config) {
          config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
        }
      );
      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }
      function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(
          null,
          input
        );
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(
            w.GG,
            config._a[YEAR],
            weekOfYear(createLocal(), 1, 4).year
          );
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
          week = defaults(w.w, curWeek.week);
          if (w.d != null) {
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {
      };
      hooks.RFC_2822 = function() {
      };
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
        tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens2.length;
        for (i = 0; i < tokenLen; i++) {
          token2 = tokens2[i];
          parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(
              string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token2]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token2);
            }
            addTimeToArrayFromToken(token2, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token2);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(
          config._locale,
          config._a[HOUR],
          config._meridiem
        );
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale2, hour, meridiem2) {
        var isPm;
        if (meridiem2 == null) {
          return hour;
        }
        if (locale2.meridiemHour != null) {
          return locale2.meridiemHour(hour, meridiem2);
        } else if (locale2.isPM != null) {
          isPm = locale2.isPM(meridiem2);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }
        for (i = 0; i < configfLen; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
        config._a = map(
          [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
          function(obj) {
            return obj && parseInt(obj, 10);
          }
        );
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = void 0;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format2 = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format2 === void 0 && input === "") {
          return createInvalid({ nullInput: true });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format2)) {
          configFromStringAndArray(config);
        } else if (format2) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function(obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
        var c = {};
        if (format2 === true || format2 === false) {
          strict = format2;
          format2 = void 0;
        }
        if (locale2 === true || locale2 === false) {
          strict = locale2;
          locale2 = void 0;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = void 0;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale2;
        c._i = input;
        c._f = format2;
        c._strict = strict;
        return createFromConfig(c);
      }
      function createLocal(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, false);
      }
      var prototypeMin = deprecate(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }
      ), prototypeMax = deprecate(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }
      );
      function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : +new Date();
      };
      var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function isDurationValid(m) {
        var key, unitHasDecimal = false, i, orderLen = ordering.length;
        for (key in m) {
          if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }
        for (i = 0; i < orderLen; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
        this._days = +days2 + weeks2 * 7;
        this._months = +months2 + quarters * 3 + years2 * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token2, separator) {
        addFormatToken(token2, 0, 0, function() {
          var offset2 = this.utcOffset(), sign2 = "+";
          if (offset2 < 0) {
            offset2 = -offset2;
            sign2 = "-";
          }
          return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
        });
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      });
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes2;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
        minutes2 = +(parts[1] * 60) + toInt(parts[2]);
        return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
      }
      function cloneWithOffset(input, model) {
        var res, diff2;
        if (model._isUTC) {
          res = model.clone();
          diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff2);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {
      };
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset2 = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset2 !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(
                this,
                createDuration(input - offset2, "m"),
                1,
                false
              );
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset2 : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key) {
        var duration = input, match = null, sign2, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign2,
            h: toInt(match[HOUR]) * sign2,
            m: toInt(match[MINUTE]) * sign2,
            s: toInt(match[SECOND]) * sign2,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
          };
        } else if (match = isoRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign2),
            M: parseIso(match[3], sign2),
            w: parseIso(match[4], sign2),
            d: parseIso(match[5], sign2),
            h: parseIso(match[6], sign2),
            m: parseIso(match[7], sign2),
            s: parseIso(match[8], sign2)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(
            createLocal(duration.from),
            createLocal(duration.to)
          );
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign2) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign2;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(
              name,
              "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            );
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months2) {
          setMonth(mom, get(mom, "Month") + months2 * isAdding);
        }
        if (days2) {
          set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
        }
        if (milliseconds2) {
          mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days2 || months2);
        }
      }
      var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], i, property, propertyLen = properties.length;
        for (i = 0; i < propertyLen; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], i, property;
        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now2) {
        var diff2 = myMoment.diff(now2, "days", true);
        return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = void 0;
            formats = void 0;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = void 0;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = void 0;
          }
        }
        var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
        return this.format(
          output || this.localeData().calendar(format2, this, createLocal(now2))
        );
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from2, to2, units, inclusivity) {
        var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
          case "year":
            output = monthDiff(this, that) / 12;
            break;
          case "month":
            output = monthDiff(this, that);
            break;
          case "quarter":
            output = monthDiff(this, that) / 3;
            break;
          case "second":
            output = (this - that) / 1e3;
            break;
          case "minute":
            output = (this - that) / 6e4;
            break;
          case "hour":
            output = (this - that) / 36e5;
            break;
          case "day":
            output = (this - that - zoneDelta) / 864e5;
            break;
          case "week":
            output = (this - that - zoneDelta) / 6048e5;
            break;
          default:
            output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          return -monthDiff(b, a);
        }
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(
            m,
            utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
          }
        }
        return formatMoment(
          m,
          utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key) {
        var newLocaleData;
        if (key === void 0) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(key) {
          if (key === void 0) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        }
      );
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }
      function utcStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }
      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year(), 0, 1);
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            time = startOfDate(this.year(), this.month(), 1);
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date());
            break;
          case "hour":
            time = this._d.valueOf();
            time -= mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            );
            break;
          case "minute":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;
          case "second":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            ) - 1;
            break;
          case "minute":
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;
          case "second":
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m = this;
        return [
          m.year(),
          m.month(),
          m.date(),
          m.hour(),
          m.minute(),
          m.second(),
          m.millisecond()
        ];
      }
      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", ["y", 1], "yo", "eraYear");
      addFormatToken("y", ["yy", 2], 0, "eraYear");
      addFormatToken("y", ["yyy", 3], 0, "eraYear");
      addFormatToken("y", ["yyyy", 4], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(input, array, config, token2) {
          var era = config._locale.erasParse(input, token2, config._strict);
          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        }
      );
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
      addParseToken(["yo"], function(input, array, config, token2) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });
      function localeEras(m, format2) {
        var i, l, date, eras = this._eras || getLocale("en")._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
            case "string":
              date = hooks(eras[i].since).startOf("day");
              eras[i].since = date.valueOf();
              break;
          }
          switch (typeof eras[i].until) {
            case "undefined":
              eras[i].until = Infinity;
              break;
            case "string":
              date = hooks(eras[i].until).startOf("day").valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format2, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format2) {
              case "N":
              case "NN":
              case "NNN":
                if (abbr === eraName) {
                  return eras[i];
                }
                break;
              case "NNNN":
                if (name === eraName) {
                  return eras[i];
                }
                break;
              case "NNNNN":
                if (narrow === eraName) {
                  return eras[i];
                }
                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === void 0) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? 1 : -1;
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale2) {
        return locale2.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale2) {
        return locale2.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale2) {
        return locale2.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale2) {
        return locale2._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name));
          abbrPieces.push(regexEscape(eras[i].abbr));
          narrowPieces.push(regexEscape(eras[i].narrow));
          mixedPieces.push(regexEscape(eras[i].name));
          mixedPieces.push(regexEscape(eras[i].abbr));
          mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp(
          "^(" + narrowPieces.join("|") + ")",
          "i"
        );
      }
      addFormatToken(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function addWeekYearFormatToken(token2, getter) {
        addFormatToken(0, [token2, token2.length], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addUnitAlias("weekYear", "gg");
      addUnitAlias("isoWeekYear", "GG");
      addUnitPriority("weekYear", 1);
      addUnitPriority("isoWeekYear", 1);
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(input, week, config, token2) {
          week[token2.substr(0, 2)] = toInt(input);
        }
      );
      addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
        week[token2] = hooks.parseTwoDigitYear(input);
      });
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addUnitAlias("quarter", "Q");
      addUnitPriority("quarter", 7);
      addRegexToken("Q", match1);
      addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      });
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", ["DD", 2], "Do", "date");
      addUnitAlias("date", "D");
      addUnitPriority("date", 9);
      addRegexToken("D", match1to2);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", function(isStrict, locale2) {
        return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(["D", "DD"], DATE);
      addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      });
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
      addUnitAlias("dayOfYear", "DDD");
      addUnitPriority("dayOfYear", 4);
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt(input);
      });
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", ["mm", 2], 0, "minute");
      addUnitAlias("minute", "m");
      addUnitPriority("minute", 14);
      addRegexToken("m", match1to2);
      addRegexToken("mm", match1to2, match2);
      addParseToken(["m", "mm"], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", ["ss", 2], 0, "second");
      addUnitAlias("second", "s");
      addUnitPriority("second", 15);
      addRegexToken("s", match1to2);
      addRegexToken("ss", match1to2, match2);
      addParseToken(["s", "ss"], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ["SSS", 3], 0, "millisecond");
      addFormatToken(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      });
      addFormatToken(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      });
      addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      });
      addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      });
      addUnitAlias("millisecond", "ms");
      addUnitPriority("millisecond", 16);
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
        "dates accessor is deprecated. Use date instead.",
        getSetDayOfMonth
      );
      proto.months = deprecate(
        "months accessor is deprecated. Use month instead",
        getSetMonth
      );
      proto.years = deprecate(
        "years accessor is deprecated. Use year instead",
        getSetYear
      );
      proto.zone = deprecate(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        getSetZone
      );
      proto.isDSTShifted = deprecate(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        isDaylightSavingTimeShifted
      );
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string) {
        return string;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format2, index, field, setter) {
        var locale2 = getLocale(), utc = createUTC().set(setter, index);
        return locale2[field](utc, format2);
      }
      function listMonthsImpl(format2, index, field) {
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
        if (index != null) {
          return get$1(format2, index, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format2, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format2, index, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        } else {
          format2 = localeSorted;
          index = format2;
          localeSorted = false;
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        }
        var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
        if (index != null) {
          return get$1(format2, (index + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format2, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format2, index) {
        return listMonthsImpl(format2, index, "months");
      }
      function listMonthsShort(format2, index) {
        return listMonthsImpl(format2, index, "monthsShort");
      }
      function listWeekdays(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format2, index) {
        return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [
          {
            since: "0001-01-01",
            until: Infinity,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -Infinity,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate(
        "moment.lang is deprecated. Use moment.locale instead.",
        getSetGlobalLocale
      );
      hooks.langData = deprecate(
        "moment.langData is deprecated. Use moment.localeData instead.",
        getLocale
      );
      var mathAbs = Math.abs;
      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }
      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
        if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
          milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
          days2 = 0;
          months2 = 0;
        }
        data.milliseconds = milliseconds2 % 1e3;
        seconds2 = absFloor(milliseconds2 / 1e3);
        data.seconds = seconds2 % 60;
        minutes2 = absFloor(seconds2 / 60);
        data.minutes = minutes2 % 60;
        hours2 = absFloor(minutes2 / 60);
        data.hours = hours2 % 24;
        days2 += absFloor(hours2 / 24);
        monthsFromDays = absFloor(daysToMonths(days2));
        months2 += monthsFromDays;
        days2 -= absCeil(monthsToDays(monthsFromDays));
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        data.days = days2;
        data.months = months2;
        data.years = years2;
        return this;
      }
      function daysToMonths(days2) {
        return days2 * 4800 / 146097;
      }
      function monthsToDays(months2) {
        return months2 * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days2, months2, milliseconds2 = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days2 = this._days + milliseconds2 / 864e5;
          months2 = this._months + daysToMonths(days2);
          switch (units) {
            case "month":
              return months2;
            case "quarter":
              return months2 / 3;
            case "year":
              return months2 / 12;
          }
        } else {
          days2 = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
            case "week":
              return days2 / 7 + milliseconds2 / 6048e5;
            case "day":
              return days2 + milliseconds2 / 864e5;
            case "hour":
              return days2 * 24 + milliseconds2 / 36e5;
            case "minute":
              return days2 * 1440 + milliseconds2 / 6e4;
            case "second":
              return days2 * 86400 + milliseconds2 / 1e3;
            case "millisecond":
              return Math.floor(days2 * 864e5) + milliseconds2;
            default:
              throw new Error("Unknown unit " + units);
          }
        }
      }
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
      };
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
        return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
        var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
        if (thresholds2.w != null) {
          a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
        }
        a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale2;
        return substituteTimeAgo.apply(null, a);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === void 0) {
          return round;
        }
        if (typeof roundingFunction === "function") {
          round = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === void 0) {
          return false;
        }
        if (limit === void 0) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale2, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale2 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale2);
        if (withSuffix) {
          output = locale2.pastFuture(+this, output);
        }
        return locale2.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes2 = absFloor(seconds2 / 60);
        hours2 = absFloor(minutes2 / 60);
        seconds2 %= 60;
        minutes2 %= 60;
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        toISOString$1
      );
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      });
      addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
      });
      hooks.version = "2.29.4";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      };
      return hooks;
    });
  }
});

// pnp:/home/mamluk/Projects/pwapp/.yarn/__virtual__/chartjs-adapter-moment-virtual-5f6cf95f3a/3/.yarn/berry/cache/chartjs-adapter-moment-npm-1.0.0-78981519cb-9.zip/node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.js
var require_chartjs_adapter_moment = __commonJS({
  "pnp:/home/mamluk/Projects/pwapp/.yarn/__virtual__/chartjs-adapter-moment-virtual-5f6cf95f3a/3/.yarn/berry/cache/chartjs-adapter-moment-npm-1.0.0-78981519cb-9.zip/node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(require_moment(), require_chart()) : typeof define === "function" && define.amd ? define(["moment", "chart.js"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.moment, global.Chart));
    })(exports, function(moment, chart_js) {
      "use strict";
      function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && "default" in e ? e : { "default": e };
      }
      var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
      const FORMATS = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY"
      };
      chart_js._adapters._date.override(typeof moment__default["default"] === "function" ? {
        _id: "moment",
        formats: function() {
          return FORMATS;
        },
        parse: function(value, format) {
          if (typeof value === "string" && typeof format === "string") {
            value = moment__default["default"](value, format);
          } else if (!(value instanceof moment__default["default"])) {
            value = moment__default["default"](value);
          }
          return value.isValid() ? value.valueOf() : null;
        },
        format: function(time, format) {
          return moment__default["default"](time).format(format);
        },
        add: function(time, amount, unit) {
          return moment__default["default"](time).add(amount, unit).valueOf();
        },
        diff: function(max, min, unit) {
          return moment__default["default"](max).diff(moment__default["default"](min), unit);
        },
        startOf: function(time, unit, weekday) {
          time = moment__default["default"](time);
          if (unit === "isoWeek") {
            weekday = Math.trunc(Math.min(Math.max(0, weekday), 6));
            return time.isoWeekday(weekday).startOf("day").valueOf();
          }
          return time.startOf(unit).valueOf();
        },
        endOf: function(time, unit) {
          return moment__default["default"](time).endOf(unit).valueOf();
        }
      } : {});
    });
  }
});

// pnp:/home/mamluk/Projects/pwapp/vendors/charts/charts.mjs
var import_chart = __toESM(require_chart(), 1);
var import_chartjs_adapter_moment = __toESM(require_chartjs_adapter_moment(), 1);
var export_ArcElement = import_chart.ArcElement;
var export_BarController = import_chart.BarController;
var export_BarElement = import_chart.BarElement;
var export_Chart = import_chart.Chart;
var export_DoughnutController = import_chart.DoughnutController;
var export_Filler = import_chart.Filler;
var export_Legend = import_chart.Legend;
var export_LineController = import_chart.LineController;
var export_LineElement = import_chart.LineElement;
var export_LinearScale = import_chart.LinearScale;
var export_PieController = import_chart.PieController;
var export_PointElement = import_chart.PointElement;
var export_TimeScale = import_chart.TimeScale;
var export_Tooltip = import_chart.Tooltip;
export {
  export_ArcElement as ArcElement,
  export_BarController as BarController,
  export_BarElement as BarElement,
  export_Chart as Chart,
  export_DoughnutController as DoughnutController,
  export_Filler as Filler,
  export_Legend as Legend,
  export_LineController as LineController,
  export_LineElement as LineElement,
  export_LinearScale as LinearScale,
  export_PieController as PieController,
  export_PointElement as PointElement,
  export_TimeScale as TimeScale,
  export_Tooltip as Tooltip
};
/*!
  * chartjs-adapter-moment v1.0.0
  * https://www.chartjs.org
  * (c) 2021 chartjs-adapter-moment Contributors
  * Released under the MIT license
  */
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! moment.js
//! momentjs.com
//! version : 2.29.4
