/* eslint-disable no-array-constructor */
/* eslint-disable eqeqeq */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
class FPTPlay {
  static init() {
    this.api_token = "WEBv6Dkdsad90dasdjlALDDDS";
    this.suffix = "/api/v6.2_w/";
    this.api_url = "https://api.fptplay.net/api/v6.2_w/";
  }

  static getUrl(e, t = null) {
    t || (t = {}), "/" === e[0] && (e = e.slice(1));
    var a = -1 != e.indexOf("?") ? e.substr(0, e.indexOf("?")) : e,
      o = Math.floor(new Date().getTime()) + 10800,
      u = this.api_token + o + this.suffix + a,
      s = Object(second)(Object(first)(u))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    const query = `${serialize(t)}&`;

    return `${this.api_url}${e}?${query}st=${s}&e=${o}&device=Chrome(version:84)`;
  }
}

export default FPTPlay;

function first(e) {
  var t,
    n,
    r,
    a,
    i,
    o,
    u,
    s,
    c,
    d,
    l,
    h = function (e, t) {
      return (e << t) | (e >>> (32 - t));
    },
    f = function (e, t) {
      var n, r, a, i, o;
      return (
        (a = 2147483648 & e),
        (i = 2147483648 & t),
        (o = (1073741823 & e) + (1073741823 & t)),
        (n = 1073741824 & e) & (r = 1073741824 & t)
          ? 2147483648 ^ o ^ a ^ i
          : n | r
          ? 1073741824 & o
            ? 3221225472 ^ o ^ a ^ i
            : 1073741824 ^ o ^ a ^ i
          : o ^ a ^ i
      );
    },
    p = function (e, t, n, r, a, i, o) {
      return (
        (e = f(
          e,
          f(
            f(
              (function (e, t, n) {
                return (e & t) | (~e & n);
              })(t, n, r),
              a
            ),
            o
          )
        )),
        f(h(e, i), t)
      );
    },
    m = function (e, t, n, r, a, i, o) {
      return (
        (e = f(
          e,
          f(
            f(
              (function (e, t, n) {
                return (e & n) | (t & ~n);
              })(t, n, r),
              a
            ),
            o
          )
        )),
        f(h(e, i), t)
      );
    },
    v = function (e, t, n, r, a, i, o) {
      return (
        (e = f(
          e,
          f(
            f(
              (function (e, t, n) {
                return e ^ t ^ n;
              })(t, n, r),
              a
            ),
            o
          )
        )),
        f(h(e, i), t)
      );
    },
    g = function (e, t, n, r, a, i, o) {
      return (
        (e = f(
          e,
          f(
            f(
              (function (e, t, n) {
                return t ^ (e | ~n);
              })(t, n, r),
              a
            ),
            o
          )
        )),
        f(h(e, i), t)
      );
    },
    y = function (e) {
      var t,
        n = "",
        r = "";
      for (t = 0; t <= 3; t++)
        n += (r = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(
          r.length - 2,
          2
        );
      return n;
    };
  for (
    s = 1732584193,
      c = 4023233417,
      d = 2562383102,
      l = 271733878,
      t = (n = (function (e) {
        for (
          var t,
            n = e.length,
            r = n + 8,
            a = 16 * ((r - (r % 64)) / 64 + 1),
            i = new Array(a - 1),
            o = 0,
            u = 0;
          u < n;

        )
          (o = (u % 4) * 8),
            (i[(t = (u - (u % 4)) / 4)] = i[t] | (e.charCodeAt(u) << o)),
            u++;
        return (
          (o = (u % 4) * 8),
          (i[(t = (u - (u % 4)) / 4)] = i[t] | (128 << o)),
          (i[a - 2] = n << 3),
          (i[a - 1] = n >>> 29),
          i
        );
      })(e)).length,
      r = 0;
    r < t;
    r += 16
  )
    (a = s),
      (i = c),
      (o = d),
      (u = l),
      (c = g(
        (c = g(
          (c = g(
            (c = g(
              (c = v(
                (c = v(
                  (c = v(
                    (c = v(
                      (c = m(
                        (c = m(
                          (c = m(
                            (c = m(
                              (c = p(
                                (c = p(
                                  (c = p(
                                    (c = p(
                                      c,
                                      (d = p(
                                        d,
                                        (l = p(
                                          l,
                                          (s = p(
                                            s,
                                            c,
                                            d,
                                            l,
                                            n[r + 0],
                                            7,
                                            3614090360
                                          )),
                                          c,
                                          d,
                                          n[r + 1],
                                          12,
                                          3905402710
                                        )),
                                        s,
                                        c,
                                        n[r + 2],
                                        17,
                                        606105819
                                      )),
                                      l,
                                      s,
                                      n[r + 3],
                                      22,
                                      3250441966
                                    )),
                                    (d = p(
                                      d,
                                      (l = p(
                                        l,
                                        (s = p(
                                          s,
                                          c,
                                          d,
                                          l,
                                          n[r + 4],
                                          7,
                                          4118548399
                                        )),
                                        c,
                                        d,
                                        n[r + 5],
                                        12,
                                        1200080426
                                      )),
                                      s,
                                      c,
                                      n[r + 6],
                                      17,
                                      2821735955
                                    )),
                                    l,
                                    s,
                                    n[r + 7],
                                    22,
                                    4249261313
                                  )),
                                  (d = p(
                                    d,
                                    (l = p(
                                      l,
                                      (s = p(
                                        s,
                                        c,
                                        d,
                                        l,
                                        n[r + 8],
                                        7,
                                        1770035416
                                      )),
                                      c,
                                      d,
                                      n[r + 9],
                                      12,
                                      2336552879
                                    )),
                                    s,
                                    c,
                                    n[r + 10],
                                    17,
                                    4294925233
                                  )),
                                  l,
                                  s,
                                  n[r + 11],
                                  22,
                                  2304563134
                                )),
                                (d = p(
                                  d,
                                  (l = p(
                                    l,
                                    (s = p(
                                      s,
                                      c,
                                      d,
                                      l,
                                      n[r + 12],
                                      7,
                                      1804603682
                                    )),
                                    c,
                                    d,
                                    n[r + 13],
                                    12,
                                    4254626195
                                  )),
                                  s,
                                  c,
                                  n[r + 14],
                                  17,
                                  2792965006
                                )),
                                l,
                                s,
                                n[r + 15],
                                22,
                                1236535329
                              )),
                              (d = m(
                                d,
                                (l = m(
                                  l,
                                  (s = m(s, c, d, l, n[r + 1], 5, 4129170786)),
                                  c,
                                  d,
                                  n[r + 6],
                                  9,
                                  3225465664
                                )),
                                s,
                                c,
                                n[r + 11],
                                14,
                                643717713
                              )),
                              l,
                              s,
                              n[r + 0],
                              20,
                              3921069994
                            )),
                            (d = m(
                              d,
                              (l = m(
                                l,
                                (s = m(s, c, d, l, n[r + 5], 5, 3593408605)),
                                c,
                                d,
                                n[r + 10],
                                9,
                                38016083
                              )),
                              s,
                              c,
                              n[r + 15],
                              14,
                              3634488961
                            )),
                            l,
                            s,
                            n[r + 4],
                            20,
                            3889429448
                          )),
                          (d = m(
                            d,
                            (l = m(
                              l,
                              (s = m(s, c, d, l, n[r + 9], 5, 568446438)),
                              c,
                              d,
                              n[r + 14],
                              9,
                              3275163606
                            )),
                            s,
                            c,
                            n[r + 3],
                            14,
                            4107603335
                          )),
                          l,
                          s,
                          n[r + 8],
                          20,
                          1163531501
                        )),
                        (d = m(
                          d,
                          (l = m(
                            l,
                            (s = m(s, c, d, l, n[r + 13], 5, 2850285829)),
                            c,
                            d,
                            n[r + 2],
                            9,
                            4243563512
                          )),
                          s,
                          c,
                          n[r + 7],
                          14,
                          1735328473
                        )),
                        l,
                        s,
                        n[r + 12],
                        20,
                        2368359562
                      )),
                      (d = v(
                        d,
                        (l = v(
                          l,
                          (s = v(s, c, d, l, n[r + 5], 4, 4294588738)),
                          c,
                          d,
                          n[r + 8],
                          11,
                          2272392833
                        )),
                        s,
                        c,
                        n[r + 11],
                        16,
                        1839030562
                      )),
                      l,
                      s,
                      n[r + 14],
                      23,
                      4259657740
                    )),
                    (d = v(
                      d,
                      (l = v(
                        l,
                        (s = v(s, c, d, l, n[r + 1], 4, 2763975236)),
                        c,
                        d,
                        n[r + 4],
                        11,
                        1272893353
                      )),
                      s,
                      c,
                      n[r + 7],
                      16,
                      4139469664
                    )),
                    l,
                    s,
                    n[r + 10],
                    23,
                    3200236656
                  )),
                  (d = v(
                    d,
                    (l = v(
                      l,
                      (s = v(s, c, d, l, n[r + 13], 4, 681279174)),
                      c,
                      d,
                      n[r + 0],
                      11,
                      3936430074
                    )),
                    s,
                    c,
                    n[r + 3],
                    16,
                    3572445317
                  )),
                  l,
                  s,
                  n[r + 6],
                  23,
                  76029189
                )),
                (d = v(
                  d,
                  (l = v(
                    l,
                    (s = v(s, c, d, l, n[r + 9], 4, 3654602809)),
                    c,
                    d,
                    n[r + 12],
                    11,
                    3873151461
                  )),
                  s,
                  c,
                  n[r + 15],
                  16,
                  530742520
                )),
                l,
                s,
                n[r + 2],
                23,
                3299628645
              )),
              (d = g(
                d,
                (l = g(
                  l,
                  (s = g(s, c, d, l, n[r + 0], 6, 4096336452)),
                  c,
                  d,
                  n[r + 7],
                  10,
                  1126891415
                )),
                s,
                c,
                n[r + 14],
                15,
                2878612391
              )),
              l,
              s,
              n[r + 5],
              21,
              4237533241
            )),
            (d = g(
              d,
              (l = g(
                l,
                (s = g(s, c, d, l, n[r + 12], 6, 1700485571)),
                c,
                d,
                n[r + 3],
                10,
                2399980690
              )),
              s,
              c,
              n[r + 10],
              15,
              4293915773
            )),
            l,
            s,
            n[r + 1],
            21,
            2240044497
          )),
          (d = g(
            d,
            (l = g(
              l,
              (s = g(s, c, d, l, n[r + 8], 6, 1873313359)),
              c,
              d,
              n[r + 15],
              10,
              4264355552
            )),
            s,
            c,
            n[r + 6],
            15,
            2734768916
          )),
          l,
          s,
          n[r + 13],
          21,
          1309151649
        )),
        (d = g(
          d,
          (l = g(
            l,
            (s = g(s, c, d, l, n[r + 4], 6, 4149444226)),
            c,
            d,
            n[r + 11],
            10,
            3174756917
          )),
          s,
          c,
          n[r + 2],
          15,
          718787259
        )),
        l,
        s,
        n[r + 9],
        21,
        3951481745
      )),
      (s = f(s, a)),
      (c = f(c, i)),
      (d = f(d, o)),
      (l = f(l, u));
  return (y(s) + y(c) + y(d) + y(l)).toLowerCase();
}

function second(e) {
  let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var t = (function (e, t) {
    (e = e.toUpperCase()), t && (e = e.replace(/0x/gi, ""));
    var n = e;
    (e = e.replace(/[^A-Fa-f0-9]/g, "")),
      n != e &&
        console.log("Warning! Non-hex characters in input string ignored.");
    return e;
  })(e, !0);
  if (t.length % 2) return;
  for (var n = new Array(), a = 0; a < t.length / 2; a++) {
    var i = t.substr(2 * a, 2);
    n[a] = parseInt(i, 16);
  }
  return (function (e) {
    var t = new Array(),
      n = 0,
      a = 0,
      i = new Array(3),
      o = new Array(4),
      u = e.length,
      s = 0;
    for (; u--; )
      if (((i[n++] = e[s++]), 3 == n)) {
        for (
          o[0] = (252 & i[0]) >> 2,
            o[1] = ((3 & i[0]) << 4) + ((240 & i[1]) >> 4),
            o[2] = ((15 & i[1]) << 2) + ((192 & i[2]) >> 6),
            o[3] = 63 & i[2],
            n = 0;
          n < 4;
          n++
        )
          t += r.charAt(o[n]);
        n = 0;
      }
    if (n) {
      for (a = n; a < 3; a++) i[a] = 0;
      for (
        o[0] = (252 & i[0]) >> 2,
          o[1] = ((3 & i[0]) << 4) + ((240 & i[1]) >> 4),
          o[2] = ((15 & i[1]) << 2) + ((192 & i[2]) >> 6),
          o[3] = 63 & i[2],
          a = 0;
        a < n + 1;
        a++
      )
        t += r.charAt(o[a]);
      for (; n++ < 3; ) t += "=";
    }
    return t;
  })(n);
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

FPTPlay.init();
