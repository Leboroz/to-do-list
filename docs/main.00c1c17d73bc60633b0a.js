;(() => {
  'use strict'
  var e = {
      693: (e, t, r) => {
        r.d(t, { Z: () => s })
        var i = r(81),
          n = r.n(i),
          a = r(645),
          o = r.n(a)()(n())
        o.push([
          e.id,
          '*{box-sizing:border-box;padding:0;margin:0;font-family:Poppins, "Courier New", Courier, monospace}.btn{padding:1rem;border:0;background-color:rgba(0,0,0,0.1);color:#000;width:100%;height:100%}.btn:hover{background-color:rgba(0,0,0,0.8);color:#fff}.list{margin:10px 0 0 10px;width:90%;list-style:none;box-shadow:5px 2px 10px 2px rgba(0,0,0,0.1)}@media screen and (min-width: 992px){.list{width:600px}}.list .list-item{width:100%;border-bottom:1px solid rgba(0,0,0,0.1);padding:1rem;display:flex;justify-content:space-between;align-items:center}.list .list-item .wrapper{width:100%;display:flex;align-items:center;gap:10px}.list .list-item .wrapper .label{display:flex;width:100%;justify-content:space-between;position:relative}.list .list-item .wrapper .label .fas{position:absolute;right:10px;top:50%;transform:translateY(-50%)}.list .list-item .wrapper .label .fa-ellipsis-v{cursor:grab}.list .list-item .wrapper .label .fa-trash-alt{cursor:pointer}.list .list-item .wrapper .label .fa-trash-alt:hover{color:red}.list .list-item .wrapper .label .todo-item-description{width:100%;border:0;outline:none}.list .list-item .wrapper .label .todo-item-description:disabled{background-color:#fff;color:rgba(0,0,0,0.3);text-decoration:line-through}.list .list-item__button-wrapper{padding:0}.list .list-item .add-item{border:0;width:100%;height:100%;outline:none}.error{background-color:#fff}\n',
          '',
        ])
        const s = o
      },
      645: (e) => {
        e.exports = function (e) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = '',
                  i = void 0 !== t[5]
                return (
                  t[4] && (r += '@supports ('.concat(t[4], ') {')),
                  t[2] && (r += '@media '.concat(t[2], ' {')),
                  i &&
                    (r += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (r += e(t)),
                  i && (r += '}'),
                  t[2] && (r += '}'),
                  t[4] && (r += '}'),
                  r
                )
              }).join('')
            }),
            (t.i = function (e, r, i, n, a) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var o = {}
              if (i)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0]
                  null != l && (o[l] = !0)
                }
              for (var c = 0; c < e.length; c++) {
                var d = [].concat(e[c])
                ;(i && o[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = a)),
                  r &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = r))
                      : (d[2] = r)),
                  n &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = n))
                      : (d[4] = ''.concat(n))),
                  t.push(d))
              }
            }),
            t
          )
        }
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1]
        }
      },
      379: (e) => {
        var t = []
        function r(e) {
          for (var r = -1, i = 0; i < t.length; i++)
            if (t[i].identifier === e) {
              r = i
              break
            }
          return r
        }
        function i(e, i) {
          for (var a = {}, o = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = i.base ? l[0] + i.base : l[0],
              d = a[c] || 0,
              u = ''.concat(c, ' ').concat(d)
            a[c] = d + 1
            var p = r(u),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              }
            if (-1 !== p) t[p].references++, t[p].updater(m)
            else {
              var f = n(m, i)
              ;(i.byIndex = s),
                t.splice(s, 0, { identifier: u, updater: f, references: 1 })
            }
            o.push(u)
          }
          return o
        }
        function n(e, t) {
          var r = t.domAPI(t)
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return
                r.update((e = t))
              } else r.remove()
            }
          )
        }
        e.exports = function (e, n) {
          var a = i((e = e || []), (n = n || {}))
          return function (e) {
            e = e || []
            for (var o = 0; o < a.length; o++) {
              var s = r(a[o])
              t[s].references--
            }
            for (var l = i(e, n), c = 0; c < a.length; c++) {
              var d = r(a[c])
              0 === t[d].references && (t[d].updater(), t.splice(d, 1))
            }
            a = l
          }
        }
      },
      569: (e) => {
        var t = {}
        e.exports = function (e, r) {
          var i = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e)
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head
                } catch (e) {
                  r = null
                }
              t[e] = r
            }
            return t[e]
          })(e)
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          i.appendChild(r)
        }
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style')
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      565: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc
          t && e.setAttribute('nonce', t)
        }
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e)
          return {
            update: function (r) {
              !(function (e, t, r) {
                var i = ''
                r.supports && (i += '@supports ('.concat(r.supports, ') {')),
                  r.media && (i += '@media '.concat(r.media, ' {'))
                var n = void 0 !== r.layer
                n &&
                  (i += '@layer'.concat(
                    r.layer.length > 0 ? ' '.concat(r.layer) : '',
                    ' {'
                  )),
                  (i += r.css),
                  n && (i += '}'),
                  r.media && (i += '}'),
                  r.supports && (i += '}')
                var a = r.sourceMap
                a &&
                  'undefined' != typeof btoa &&
                  (i +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  t.styleTagTransform(i, e, t.options)
              })(t, e, r)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(t)
            },
          }
        }
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(e))
          }
        }
      },
    },
    t = {}
  function r(i) {
    var n = t[i]
    if (void 0 !== n) return n.exports
    var a = (t[i] = { id: i, exports: {} })
    return e[i](a, a.exports, r), a.exports
  }
  ;(r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return r.d(t, { a: t }), t
  }),
    (r.d = (e, t) => {
      for (var i in t)
        r.o(t, i) &&
          !r.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] })
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = r(379),
        t = r.n(e),
        i = r(795),
        n = r.n(i),
        a = r(569),
        o = r.n(a),
        s = r(565),
        l = r.n(s),
        c = r(216),
        d = r.n(c),
        u = r(589),
        p = r.n(u),
        m = r(693),
        f = {}
      ;(f.styleTagTransform = p()),
        (f.setAttributes = l()),
        (f.insert = o().bind(null, 'head')),
        (f.domAPI = n()),
        (f.insertStyleElement = d()),
        t()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals
      class h {
        constructor(e, t, r = !1) {
          ;(this.description = e), (this.completed = r), (this.id = t)
        }
        createTodoElement() {
          const e = document.createElement('li')
          return (
            (e.id = this.id),
            (e.className = 'list-item list-item__item'),
            e.setAttribute('aria-current', 'false'),
            (e.innerHTML = `<div class="wrapper">\n    <input id="check"  class="checkbox" type="checkbox" name="completed">\n    <label class="label">\n      <input id="todo_item_description" class="todo-item-description" name="todoItemDescription" type="text" value="${this.description}">\n      <i class="fas fa-ellipsis-v"></i>\n    </label>\n  </div>\n  `),
            e
          )
        }
      }
      class v {
        static list = []
        static uniqueId = 0
        static addTodoItem(e, t = !1) {
          return !(e.length < 1 || (this.list.push(new h(e, t)), 0))
        }
        static remove(e) {
          return !(e < 0 || (this.list.splice(e, 1), 0))
        }
        static getFromId(e) {
          return this.list.findIndex((t) => t.id === e)
        }
        static removeFromId(e) {
          return this.remove(this.getFromId(e))
        }
        static check(e) {
          this.list[e].completed = !this.list[e].completed
        }
        static update(e, t) {
          return !(e < 0 || null === t || ((this.list[e].description = t), 0))
        }
      }
      class b {
        static update() {
          if (v.list && 0 === v.list.length) return void localStorage.clear()
          const e = JSON.stringify(v.list)
          localStorage.setItem('list', e)
        }
        static get() {
          return JSON.parse(localStorage.getItem('list'))
        }
      }
      const g = (e) => {
          const t = e.target.parentNode.parentNode.parentNode,
            r = Array.from(
              document.querySelectorAll('.list-item__item')
            ).indexOf(t)
          t.remove(), v.remove(r), b.update()
        },
        y = () => {},
        x = document.querySelector('#list'),
        w = b.get(),
        k = (e) => {
          e.querySelector('#todo_item_description').addEventListener(
            'change',
            (t) => {
              const r = v.getFromId(Number(e.id))
              '' === t.target.value
                ? (v.removeFromId(Number(e.id)),
                  t.target.parentNode.parentNode.parentNode.remove())
                : t.target.value !== v.list[r].description &&
                  ((v.list[r].description = t.target.value), b.update())
            }
          )
          const t = e.querySelector('#check'),
            r = e.querySelector('#todo_item_description'),
            i = v.getFromId(Number(e.id)),
            { completed: n } = v.list[i]
          n && ((t.checked = !0), r.setAttribute('disabled', 'true')),
            t.addEventListener('change', (e) => {
              v.check(i),
                ((e, t) => {
                  e.target.checked
                    ? t.setAttribute('disabled', 'true')
                    : e.target.checked || t.removeAttribute('disabled')
                })(e, r),
                b.update()
            }),
            x.insertBefore(e, x.lastChild)
        }
      w &&
        w.length > 0 &&
        ((v.list = w.map((e) => new h(e.description, e.id, e.completed))),
        (v.uniqueId = v.list[v.list.length - 1].id + 1),
        v.list.forEach((e) => {
          const t = e.createTodoElement()
          k(t)
        })),
        document.querySelector('#add_input').addEventListener('keyup', (e) => {
          if ('Enter' === e.key && v.addTodoItem(e.target.value, v.uniqueId)) {
            v.uniqueId += 1
            const t = v.list[v.list.length - 1].createTodoElement()
            k(t), b.update(), (e.target.value = '')
          }
        })
      const E = (e) => {
        const t = e.querySelector('.fas')
        t.classList.toggle('fa-ellipsis-v'),
          t.classList.toggle('fa-trash-alt'),
          t.className.includes('fa-ellipsis-v') &&
            (t.removeEventListener('click', g), t.addEventListener('click', y)),
          t.className.includes('fa-trash-alt') &&
            (t.removeEventListener('click', y), t.addEventListener('click', g))
      }
      document.addEventListener('click', (e) => {
        const t = e.target.closest('.list-item__item'),
          r = x.querySelector('li[aria-current="true"]')
        t
          ? 'false' === t.ariaCurrent && r
            ? (r.setAttribute('aria-current', 'false'),
              t.setAttribute('aria-current', 'true'),
              E(r),
              E(t))
            : 'false' === t.ariaCurrent &&
              (t.setAttribute('aria-current', 'true'), E(t))
          : r && (r.setAttribute('aria-current', 'false'), E(r))
      })
      const I = document.createElement('li')
      ;(I.className = 'list-item list-item__button-wrapper'),
        (I.innerHTML =
          '\n<button class="btn" type="button">Clear all completed</button>'),
        I.addEventListener('click', () => {
          Array.from(x.querySelectorAll('.list-item__item')).forEach((e) => {
            e.querySelector('#check').checked &&
              (v.removeFromId(Number(e.id)), e.remove())
          }),
            b.update()
        }),
        x.appendChild(I)
    })()
})()
