if (!self.define) {
  let e,
    s = {};
  const r = (r, c) => (
    (r = new URL(r + ".js", c).href),
    s[r] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = s), document.head.appendChild(e);
        } else (e = r), importScripts(r), s();
      }).then(() => {
        let e = s[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[o]) return;
    let a = {};
    const n = (e) => r(e, o),
      d = { module: { uri: o }, exports: a, require: n };
    s[o] = Promise.all(c.map((e) => d[e] || n(e))).then((e) => (i(...e), a));
  };
}
define(["./workbox-17862d8c"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "../src/App.js", revision: "4b570ba5fedc95afcdbc1d2847562615" },
        {
          url: "../src/components/Card.js",
          revision: "4a99f15c11bc51a9656edb57d6f7cca5",
        },
        {
          url: "../src/components/Form.js",
          revision: "930427f225e41cda8d9077c6696b8931",
        },
        {
          url: "../src/components/Header.js",
          revision: "79aa0b72278f2fa0b081c1b28b5bc602",
        },
        {
          url: "../src/img/poster.jpg",
          revision: "b707ca8d553c5a3cde980539eb8948e3",
        },
        {
          url: "../src/index.js",
          revision: "4d7a54b7ad107c38a823925433a3e5d4",
        },
        {
          url: "../src/pages/Home.js",
          revision: "e5afdd681594b53692ddcf14d33d6e4a",
        },
        {
          url: "../src/pages/UserList.js",
          revision: "897dcff22809b96ef6a3e12f926c6b24",
        },
        {
          url: "../src/styles/_settings.scss",
          revision: "1b1edcf02da6a2d7ad3a7980abb96bb3",
        },
        {
          url: "../src/styles/components/_card.scss",
          revision: "25a57e682868743814f584f027c5310e",
        },
        {
          url: "../src/styles/components/_form.scss",
          revision: "bcd7a8ea8a28df2188731d75bdd2c25a",
        },
        {
          url: "../src/styles/components/_header.scss",
          revision: "df1fa504baac916c9129f5e8e70bee11",
        },
        {
          url: "../src/styles/index.scss",
          revision: "c5618795ff26bd1f745f886123aae8be",
        },
        {
          url: "../src/styles/pages/_home.scss",
          revision: "e221545e1a9346aa759717bfa3196de7",
        },
        {
          url: "../src/styles/pages/_userList.scss",
          revision: "1991d26000266caadcfab109f19ac208",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
