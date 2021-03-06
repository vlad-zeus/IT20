!(function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var a = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var n = {};
    (t.m = e),
        (t.c = n),
        (t.d = function (e, n, r) {
            t.o(e, n) ||
                Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                });
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 0));
})([
    function (e, t, n) {
        "use strict";
        window.formatGoogleCalendar = (function () {
            var e,
                t = function (e, t) {
                    var n = [];
                    n = e.items
                        .filter(function (e) {
                            return (
                                e &&
                                e.hasOwnProperty("status") &&
                                "cancelled" !== e.status
                            );
                        })
                        .sort(l)
                        .reverse();
                    var r,
                        a = 0,
                        o = 0,
                        u = [],
                        c = [],
                        m = [],
                        p = document.querySelector(t.upcomingSelector),
                        d = document.querySelector(t.pastSelector);
                    -1 === t.pastTopN && (t.pastTopN = n.length),
                        -1 === t.upcomingTopN && (t.upcomingTopN = n.length),
                        !1 === t.past && (t.pastTopN = 0),
                        !1 === t.upcoming && (t.upcomingTopN = 0);
                    for (r in n)
                        s(n[r].end.dateTime || n[r].end.date)
                            ? a < t.pastTopN && (u.push(n[r]), a++)
                            : m.push(n[r]);
                    m.reverse();
                    for (r in m) o < t.upcomingTopN && (c.push(m[r]), o++);
                    for (r in u)
                        d.insertAdjacentHTML(
                            "beforeend",
                            i(u[r], t.itemsTagName, t.format)
                        );
                    for (r in c)
                        p.insertAdjacentHTML(
                            "beforeend",
                            i(c[r], t.itemsTagName, t.format)
                        );
                    p.firstChild &&
                        p.insertAdjacentHTML("beforebegin", t.upcomingHeading),
                        d.firstChild &&
                            d.insertAdjacentHTML("beforebegin", t.pastHeading);
                },
                n = function (n) {
                    e = n;
                    var r = n.calendarUrl;
                    n.recurringEvents &&
                        (r = r.concat("&singleEvents=true&orderBy=starttime")),
                        n.timeMin && (r = r.concat("&timeMin=" + n.timeMin)),
                        n.timeMax && (r = r.concat("&timeMax=" + n.timeMax));
                    var a = new XMLHttpRequest();
                    a.open("GET", r, !0),
                        (a.onload = function () {
                            if (a.status >= 200 && a.status < 400) {
                                var e = JSON.parse(a.responseText);
                                t(e, n);
                            } else console.error(err);
                        }),
                        (a.onerror = function () {
                            console.error(err);
                        }),
                        a.send();
                },
                r = function (e, t) {
                    var n,
                        r = {};
                    for (n in e) r[n] = e[n];
                    for (n in t) r[n] = t[n];
                    return r;
                },
                a = function (e, t) {
                    for (var n = g(t), r = !0, a = 0; a < 3; a++)
                        e[a] !== n[a] && (r = !1);
                    return r;
                },
                o = function (e, t) {
                    for (var n = !0, r = 0; r < 3; r++)
                        e[r] !== t[r] && (n = !1);
                    return n;
                },
                i = function (t, n, r) {
                    var i = u(t.start.dateTime || t.start.date),
                        s = u(t.end.dateTime || t.end.date),
                        c = e.dayNames,
                        m = !0,
                        p = a(i, s);
                    void 0 !== t.end.date && (s = g(s)), o(i, s) && (m = !1);
                    var d,
                        f = h(i, s, c, m, p),
                        l = "<" + n + ">",
                        v = t.summary || "",
                        T = t.description || "",
                        y = t.location || "";
                    for (d = 0; d < r.length; d++)
                        (r[d] = r[d].toString()),
                            "*summary*" === r[d]
                                ? (l = l.concat(
                                      '<span class="summary">' + v + "</span>"
                                  ))
                                : "*date*" === r[d]
                                ? (l = l.concat(
                                      '<span class="date">' + f + "</span>"
                                  ))
                                : "*description*" === r[d]
                                ? (l = l.concat(
                                      '<span class="description">' +
                                          T +
                                          "</span>"
                                  ))
                                : "*location*" === r[d]
                                ? (l = l.concat(
                                      '<span class="location">' + y + "</span>"
                                  ))
                                : (("*location*" === r[d + 1] && "" !== y) ||
                                      ("*summary*" === r[d + 1] && "" !== v) ||
                                      ("*date*" === r[d + 1] && "" !== f) ||
                                      ("*description*" === r[d + 1] &&
                                          "" !== T)) &&
                                  (l = l.concat(r[d]));
                    return l + "</" + n + ">";
                },
                s = function (e) {
                    var t = new Date(e);
                    return new Date().getTime() > t.getTime();
                },
                u = function (e) {
                    return (
                        (e = new Date(e)),
                        [
                            e.getDate(),
                            e.getMonth(),
                            e.getFullYear(),
                            e.getHours(),
                            e.getMinutes(),
                            0,
                            0,
                        ]
                    );
                },
                c = function (e) {
                    return [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ][e];
                },
                m = function (e) {
                    return [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                    ][e];
                },
                p = function (e, t) {
                    var n = f(e);
                    return n.setTime(n.getTime() + t), u(n);
                },
                d = function (e) {
                    return m(f(e).getDay()) + " ";
                },
                f = function (e) {
                    return new Date(e[2], e[1], e[0], e[3], e[4] + 0, 0);
                },
                l = function (e, t) {
                    return (
                        new Date(e.start.dateTime || e.start.date).getTime() -
                        new Date(t.start.dateTime || t.start.date).getTime()
                    );
                },
                g = function (e) {
                    return p(e, -864e5);
                },
                v = function (t, n, r, a, o) {
                    var i = "",
                        s = "";
                    return (
                        r && (s = d(t)),
                        !e.sameDayTimes ||
                            a ||
                            o ||
                            (i = " from " + N(t) + " - " + N(n)),
                        s + c(t[1]) + " " + t[0] + ", " + t[2] + i
                    );
                },
                T = function (e, t, n) {
                    var r = "",
                        a = "";
                    return (
                        n && ((r = d(e)), (a = d(t))),
                        r + c(e[1]) + " " + e[0] + "-" + a + t[0] + ", " + e[2]
                    );
                },
                y = function (e, t, n) {
                    var r = "",
                        a = "";
                    return (
                        n && ((r = d(e)), (a = d(t))),
                        r +
                            c(e[1]) +
                            " " +
                            e[0] +
                            "-" +
                            a +
                            c(t[1]) +
                            " " +
                            t[0] +
                            ", " +
                            e[2]
                    );
                },
                M = function (e, t, n) {
                    var r = "",
                        a = "";
                    return (
                        n && ((r = d(e)), (a = d(t))),
                        r +
                            c(e[1]) +
                            " " +
                            e[0] +
                            ", " +
                            e[2] +
                            "-" +
                            a +
                            c(t[1]) +
                            " " +
                            t[0] +
                            ", " +
                            t[2]
                    );
                },
                h = function (e, t, n, r, a) {
                    return e[0] === t[0]
                        ? e[1] === t[1]
                            ? e[2] === t[2]
                                ? v(e, t, n, r, a)
                                : M(e, t, n)
                            : e[2] === t[2]
                            ? y(e, t, n)
                            : M(e, t, n)
                        : e[1] === t[1]
                        ? e[2] === t[2]
                            ? T(e, t, n)
                            : M(e, t, n)
                        : e[2] === t[2]
                        ? y(e, t, n)
                        : M(e, t, n);
                },
                N = function (e) {
                    var t = "AM",
                        n = e[3],
                        r = e[4];
                    return (
                        n >= 12 && ((t = "PM"), n >= 13 && (n -= 12)),
                        0 === n && (n = 12),
                        (r = (r < 10 ? "0" : "") + r),
                        n + ":" + r + t
                    );
                };
            return {
                init: function (e) {
                    var t = {
                        calendarUrl:
                            "https://www.googleapis.com/calendar/v3/calendars/vgorodetsky@gmail.com/events?key=AIzaSyCWGk2otBltS3FbSdEEimN4FypzUGokk3Q",
                        past: !0,
                        upcoming: !0,
                        sameDayTimes: !0,
                        dayNames: !0,
                        pastTopN: -1,
                        upcomingTopN: -1,
                        recurringEvents: !0,
                        itemsTagName: "li",
                        upcomingSelector: "#events-upcoming",
                        pastSelector: "#events-past",
                        upcomingHeading: "<h2>Upcoming events</h2>",
                        pastHeading: "<h2>Past events</h2>",
                        format: [
                            "*date*",
                            ": ",
                            "*summary*",
                            " &mdash; ",
                            "*description*",
                            " in ",
                            "*location*",
                        ],
                        timeMin: void 0,
                        timeMax: void 0,
                    };
                    (t = r(t, e)), n(t);
                },
            };
        })();
    },
]);
