// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"UZvcg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "fe7fa9bdb3500f3c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var _sdpTransform = require("sdp-transform");
var inputElem = document.getElementById("input");
function handleInput() {
    var SDP_Text = inputElem.value;
    var SDP_Object = _sdpTransform.parse(SDP_Text);
    // create json tree object
    const tree = JsonView.createTree(SDP_Object);
    // render tree into dom element\
    var view_area = document.querySelector('#json_view_area');
    console.log("rendering tree:", SDP_Object, " to ", view_area);
    view_area.innerHTML = '';
    JsonView.render(tree, view_area);
    JsonView.expandChildren(tree);
}
inputElem.addEventListener("input", handleInput);
handleInput();

},{"sdp-transform":"eCHXa"}],"eCHXa":[function(require,module,exports) {
var parser = require('./parser');
var writer = require('./writer');
exports.write = writer;
exports.parse = parser.parse;
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;

},{"./parser":"cACvs","./writer":"RqT4y"}],"cACvs":[function(require,module,exports) {
var toIntIfInt = function(v) {
    return String(Number(v)) === v ? Number(v) : v;
};
var attachProperties = function(match, location, names, rawName) {
    if (rawName && !names) location[rawName] = toIntIfInt(match[1]);
    else {
        for(var i = 0; i < names.length; i += 1)if (match[i + 1] != null) location[names[i]] = toIntIfInt(match[i + 1]);
    }
};
var parseReg = function(obj, location, content) {
    var needsBlank = obj.name && obj.names;
    if (obj.push && !location[obj.push]) location[obj.push] = [];
    else if (needsBlank && !location[obj.name]) location[obj.name] = {
    };
    var keyLocation = obj.push ? {
    } : needsBlank ? location[obj.name] : location; // otherwise, named location or root
    attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);
    if (obj.push) location[obj.push].push(keyLocation);
};
var grammar = require('./grammar');
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
exports.parse = function(sdp) {
    var session = {
    }, media = [], location = session; // points at where properties go under (one of the above)
    // parse lines we understand
    sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l) {
        var type = l[0];
        var content = l.slice(2);
        if (type === 'm') {
            media.push({
                rtp: [],
                fmtp: []
            });
            location = media[media.length - 1]; // point at latest media line
        }
        for(var j = 0; j < (grammar[type] || []).length; j += 1){
            var obj = grammar[type][j];
            if (obj.reg.test(content)) return parseReg(obj, location, content);
        }
    });
    session.media = media; // link it up
    return session;
};
var paramReducer = function(acc, expr) {
    var s = expr.split(/=(.+)/, 2);
    if (s.length === 2) acc[s[0]] = toIntIfInt(s[1]);
    else if (s.length === 1 && expr.length > 1) acc[s[0]] = undefined;
    return acc;
};
exports.parseParams = function(str) {
    return str.split(/;\s?/).reduce(paramReducer, {
    });
};
// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;
exports.parsePayloads = function(str) {
    return str.toString().split(' ').map(Number);
};
exports.parseRemoteCandidates = function(str) {
    var candidates = [];
    var parts = str.split(' ').map(toIntIfInt);
    for(var i = 0; i < parts.length; i += 3)candidates.push({
        component: parts[i],
        ip: parts[i + 1],
        port: parts[i + 2]
    });
    return candidates;
};
exports.parseImageAttributes = function(str) {
    return str.split(' ').map(function(item) {
        return item.substring(1, item.length - 1).split(',').reduce(paramReducer, {
        });
    });
};
exports.parseSimulcastStreamList = function(str) {
    return str.split(';').map(function(stream) {
        return stream.split(',').map(function(format) {
            var scid, paused = false;
            if (format[0] !== '~') scid = toIntIfInt(format);
            else {
                scid = toIntIfInt(format.substring(1, format.length));
                paused = true;
            }
            return {
                scid: scid,
                paused: paused
            };
        });
    });
};

},{"./grammar":"kBTYh"}],"kBTYh":[function(require,module,exports) {
var grammar = module.exports = {
    v: [
        {
            name: 'version',
            reg: /^(\d*)$/
        }
    ],
    o: [
        {
            // o=- 20518 0 IN IP4 203.0.113.1
            // NB: sessionId will be a String in most cases because it is huge
            name: 'origin',
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: [
                'username',
                'sessionId',
                'sessionVersion',
                'netType',
                'ipVer',
                'address'
            ],
            format: '%s %s %d %s IP%d %s'
        }
    ],
    // default parsing of these only (though some of these feel outdated)
    s: [
        {
            name: 'name'
        }
    ],
    i: [
        {
            name: 'description'
        }
    ],
    u: [
        {
            name: 'uri'
        }
    ],
    e: [
        {
            name: 'email'
        }
    ],
    p: [
        {
            name: 'phone'
        }
    ],
    z: [
        {
            name: 'timezones'
        }
    ],
    r: [
        {
            name: 'repeats'
        }
    ],
    // k: [{}], // outdated thing ignored
    t: [
        {
            // t=0 0
            name: 'timing',
            reg: /^(\d*) (\d*)/,
            names: [
                'start',
                'stop'
            ],
            format: '%d %d'
        }
    ],
    c: [
        {
            // c=IN IP4 10.47.197.26
            name: 'connection',
            reg: /^IN IP(\d) (\S*)/,
            names: [
                'version',
                'ip'
            ],
            format: 'IN IP%d %s'
        }
    ],
    b: [
        {
            // b=AS:4000
            push: 'bandwidth',
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: [
                'type',
                'limit'
            ],
            format: '%s:%s'
        }
    ],
    m: [
        {
            // m=video 51744 RTP/AVP 126 97 98 34 31
            // NB: special - pushes to session
            // TODO: rtp/fmtp should be filtered by the payloads found here?
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: [
                'type',
                'port',
                'protocol',
                'payloads'
            ],
            format: '%s %d %s %s'
        }
    ],
    a: [
        {
            // a=rtpmap:110 opus/48000/2
            push: 'rtp',
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: [
                'payload',
                'codec',
                'rate',
                'encoding'
            ],
            format: function(o) {
                return o.encoding ? 'rtpmap:%d %s/%s/%s' : o.rate ? 'rtpmap:%d %s/%s' : 'rtpmap:%d %s';
            }
        },
        {
            // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
            // a=fmtp:111 minptime=10; useinbandfec=1
            push: 'fmtp',
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: [
                'payload',
                'config'
            ],
            format: 'fmtp:%d %s'
        },
        {
            // a=control:streamid=0
            name: 'control',
            reg: /^control:(.*)/,
            format: 'control:%s'
        },
        {
            // a=rtcp:65179 IN IP4 193.84.77.194
            name: 'rtcp',
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: [
                'port',
                'netType',
                'ipVer',
                'address'
            ],
            format: function(o) {
                return o.address != null ? 'rtcp:%d %s IP%d %s' : 'rtcp:%d';
            }
        },
        {
            // a=rtcp-fb:98 trr-int 100
            push: 'rtcpFbTrrInt',
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: [
                'payload',
                'value'
            ],
            format: 'rtcp-fb:%s trr-int %d'
        },
        {
            // a=rtcp-fb:98 nack rpsi
            push: 'rtcpFb',
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: [
                'payload',
                'type',
                'subtype'
            ],
            format: function(o) {
                return o.subtype != null ? 'rtcp-fb:%s %s %s' : 'rtcp-fb:%s %s';
            }
        },
        {
            // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
            // a=extmap:1/recvonly URI-gps-string
            // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
            push: 'ext',
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: [
                'value',
                'direction',
                'encrypt-uri',
                'uri',
                'config'
            ],
            format: function(o) {
                return 'extmap:%d' + (o.direction ? '/%s' : '%v') + (o['encrypt-uri'] ? ' %s' : '%v') + ' %s' + (o.config ? ' %s' : '');
            }
        },
        {
            // a=extmap-allow-mixed
            name: 'extmapAllowMixed',
            reg: /^(extmap-allow-mixed)/
        },
        {
            // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
            push: 'crypto',
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: [
                'id',
                'suite',
                'config',
                'sessionConfig'
            ],
            format: function(o) {
                return o.sessionConfig != null ? 'crypto:%d %s %s %s' : 'crypto:%d %s %s';
            }
        },
        {
            // a=setup:actpass
            name: 'setup',
            reg: /^setup:(\w*)/,
            format: 'setup:%s'
        },
        {
            // a=connection:new
            name: 'connectionType',
            reg: /^connection:(new|existing)/,
            format: 'connection:%s'
        },
        {
            // a=mid:1
            name: 'mid',
            reg: /^mid:([^\s]*)/,
            format: 'mid:%s'
        },
        {
            // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
            name: 'msid',
            reg: /^msid:(.*)/,
            format: 'msid:%s'
        },
        {
            // a=ptime:20
            name: 'ptime',
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: 'ptime:%d'
        },
        {
            // a=maxptime:60
            name: 'maxptime',
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: 'maxptime:%d'
        },
        {
            // a=sendrecv
            name: 'direction',
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
        },
        {
            // a=ice-lite
            name: 'icelite',
            reg: /^(ice-lite)/
        },
        {
            // a=ice-ufrag:F7gI
            name: 'iceUfrag',
            reg: /^ice-ufrag:(\S*)/,
            format: 'ice-ufrag:%s'
        },
        {
            // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
            name: 'icePwd',
            reg: /^ice-pwd:(\S*)/,
            format: 'ice-pwd:%s'
        },
        {
            // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
            name: 'fingerprint',
            reg: /^fingerprint:(\S*) (\S*)/,
            names: [
                'type',
                'hash'
            ],
            format: 'fingerprint:%s %s'
        },
        {
            // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
            // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
            // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
            push: 'candidates',
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: [
                'foundation',
                'component',
                'transport',
                'priority',
                'ip',
                'port',
                'type',
                'raddr',
                'rport',
                'tcptype',
                'generation',
                'network-id',
                'network-cost'
            ],
            format: function(o) {
                var str = 'candidate:%s %d %s %d %s %d typ %s';
                str += o.raddr != null ? ' raddr %s rport %d' : '%v%v';
                // NB: candidate has three optional chunks, so %void middles one if it's missing
                str += o.tcptype != null ? ' tcptype %s' : '%v';
                if (o.generation != null) str += ' generation %d';
                str += o['network-id'] != null ? ' network-id %d' : '%v';
                str += o['network-cost'] != null ? ' network-cost %d' : '%v';
                return str;
            }
        },
        {
            // a=end-of-candidates (keep after the candidates line for readability)
            name: 'endOfCandidates',
            reg: /^(end-of-candidates)/
        },
        {
            // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
            name: 'remoteCandidates',
            reg: /^remote-candidates:(.*)/,
            format: 'remote-candidates:%s'
        },
        {
            // a=ice-options:google-ice
            name: 'iceOptions',
            reg: /^ice-options:(\S*)/,
            format: 'ice-options:%s'
        },
        {
            // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
            push: 'ssrcs',
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: [
                'id',
                'attribute',
                'value'
            ],
            format: function(o) {
                var str = 'ssrc:%d';
                if (o.attribute != null) {
                    str += ' %s';
                    if (o.value != null) str += ':%s';
                }
                return str;
            }
        },
        {
            // a=ssrc-group:FEC 1 2
            // a=ssrc-group:FEC-FR 3004364195 1080772241
            push: 'ssrcGroups',
            // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: [
                'semantics',
                'ssrcs'
            ],
            format: 'ssrc-group:%s %s'
        },
        {
            // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
            name: 'msidSemantic',
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: [
                'semantic',
                'token'
            ],
            format: 'msid-semantic: %s %s' // space after ':' is not accidental
        },
        {
            // a=group:BUNDLE audio video
            push: 'groups',
            reg: /^group:(\w*) (.*)/,
            names: [
                'type',
                'mids'
            ],
            format: 'group:%s %s'
        },
        {
            // a=rtcp-mux
            name: 'rtcpMux',
            reg: /^(rtcp-mux)/
        },
        {
            // a=rtcp-rsize
            name: 'rtcpRsize',
            reg: /^(rtcp-rsize)/
        },
        {
            // a=sctpmap:5000 webrtc-datachannel 1024
            name: 'sctpmap',
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: [
                'sctpmapNumber',
                'app',
                'maxMessageSize'
            ],
            format: function(o) {
                return o.maxMessageSize != null ? 'sctpmap:%s %s %s' : 'sctpmap:%s %s';
            }
        },
        {
            // a=x-google-flag:conference
            name: 'xGoogleFlag',
            reg: /^x-google-flag:([^\s]*)/,
            format: 'x-google-flag:%s'
        },
        {
            // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
            push: 'rids',
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: [
                'id',
                'direction',
                'params'
            ],
            format: function(o) {
                return o.params ? 'rid:%s %s %s' : 'rid:%s %s';
            }
        },
        {
            // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
            // a=imageattr:* send [x=800,y=640] recv *
            // a=imageattr:100 recv [x=320,y=240]
            push: 'imageattrs',
            reg: new RegExp(// a=imageattr:97
            "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
            names: [
                'pt',
                'dir1',
                'attrs1',
                'dir2',
                'attrs2'
            ],
            format: function(o) {
                return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
            }
        },
        {
            // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
            // a=simulcast:recv 1;4,5 send 6;7
            name: 'simulcast',
            reg: new RegExp(// a=simulcast:
            "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
            names: [
                'dir1',
                'list1',
                'dir2',
                'list2'
            ],
            format: function(o) {
                return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
            }
        },
        {
            // old simulcast draft 03 (implemented by Firefox)
            //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
            // a=simulcast: recv pt=97;98 send pt=97
            // a=simulcast: send rid=5;6;7 paused=6,7
            name: 'simulcast_03',
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: [
                'value'
            ],
            format: 'simulcast: %s'
        },
        {
            // a=framerate:25
            // a=framerate:29.97
            name: 'framerate',
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: 'framerate:%s'
        },
        {
            // RFC4570
            // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
            name: 'sourceFilter',
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: [
                'filterMode',
                'netType',
                'addressTypes',
                'destAddress',
                'srcList'
            ],
            format: 'source-filter: %s %s %s %s %s'
        },
        {
            // a=bundle-only
            name: 'bundleOnly',
            reg: /^(bundle-only)/
        },
        {
            // a=label:1
            name: 'label',
            reg: /^label:(.+)/,
            format: 'label:%s'
        },
        {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
            name: 'sctpPort',
            reg: /^sctp-port:(\d+)$/,
            format: 'sctp-port:%s'
        },
        {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
            name: 'maxMessageSize',
            reg: /^max-message-size:(\d+)$/,
            format: 'max-message-size:%s'
        },
        {
            // RFC7273
            // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
            push: 'tsRefClocks',
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: [
                'clksrc',
                'clksrcExt'
            ],
            format: function(o) {
                return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
            }
        },
        {
            // RFC7273
            // a=mediaclk:direct=963214424
            name: 'mediaClk',
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: [
                'id',
                'mediaClockName',
                'mediaClockValue',
                'rateNumerator',
                'rateDenominator'
            ],
            format: function(o) {
                var str = 'mediaclk:';
                str += o.id != null ? 'id=%s %s' : '%v%s';
                str += o.mediaClockValue != null ? '=%s' : '';
                str += o.rateNumerator != null ? ' rate=%s' : '';
                str += o.rateDenominator != null ? '/%s' : '';
                return str;
            }
        },
        {
            // a=keywds:keywords
            name: 'keywords',
            reg: /^keywds:(.+)$/,
            format: 'keywds:%s'
        },
        {
            // a=content:main
            name: 'content',
            reg: /^content:(.+)/,
            format: 'content:%s'
        },
        // BFCP https://tools.ietf.org/html/rfc4583
        {
            // a=floorctrl:c-s
            name: 'bfcpFloorCtrl',
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: 'floorctrl:%s'
        },
        {
            // a=confid:1
            name: 'bfcpConfId',
            reg: /^confid:(\d+)/,
            format: 'confid:%s'
        },
        {
            // a=userid:1
            name: 'bfcpUserId',
            reg: /^userid:(\d+)/,
            format: 'userid:%s'
        },
        {
            // a=floorid:1
            name: 'bfcpFloorId',
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: [
                'id',
                'mStream'
            ],
            format: 'floorid:%s mstrm:%s'
        },
        {
            // any a= that we don't understand is kept verbatim on media.invalid
            push: 'invalid',
            names: [
                'value'
            ]
        }
    ]
};
// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function(key) {
    var objs = grammar[key];
    objs.forEach(function(obj) {
        if (!obj.reg) obj.reg = /(.*)/;
        if (!obj.format) obj.format = '%s';
    });
});

},{}],"RqT4y":[function(require,module,exports) {
var grammar = require('./grammar');
// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function(formatStr) {
    var i = 1;
    var args = arguments;
    var len = args.length;
    return formatStr.replace(formatRegExp, function(x) {
        if (i >= len) return x; // missing argument
        var arg = args[i];
        i += 1;
        switch(x){
            case '%%':
                return '%';
            case '%s':
                return String(arg);
            case '%d':
                return Number(arg);
            case '%v':
                return '';
        }
    });
// NB: we discard excess arguments - they are typically undefined from makeLine
};
var makeLine = function(type, obj, location) {
    var str = obj.format instanceof Function ? obj.format(obj.push ? location : location[obj.name]) : obj.format;
    var args = [
        type + '=' + str
    ];
    if (obj.names) for(var i = 0; i < obj.names.length; i += 1){
        var n = obj.names[i];
        if (obj.name) args.push(location[obj.name][n]);
        else args.push(location[obj.names[i]]);
    }
    else args.push(location[obj.name]);
    return format.apply(null, args);
};
// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
    'v',
    'o',
    's',
    'i',
    'u',
    'e',
    'p',
    'c',
    'b',
    't',
    'r',
    'z',
    'a'
];
var defaultInnerOrder = [
    'i',
    'c',
    'b',
    'a'
];
module.exports = function(session, opts) {
    opts = opts || {
    };
    // ensure certain properties exist
    if (session.version == null) session.version = 0; // 'v=0' must be there (only defined version atm)
    if (session.name == null) session.name = ' '; // 's= ' must be there if no meaningful name set
    session.media.forEach(function(mLine) {
        if (mLine.payloads == null) mLine.payloads = '';
    });
    var outerOrder = opts.outerOrder || defaultOuterOrder;
    var innerOrder = opts.innerOrder || defaultInnerOrder;
    var sdp = [];
    // loop through outerOrder for matching properties on session
    outerOrder.forEach(function(type) {
        grammar[type].forEach(function(obj) {
            if (obj.name in session && session[obj.name] != null) sdp.push(makeLine(type, obj, session));
            else if (obj.push in session && session[obj.push] != null) session[obj.push].forEach(function(el) {
                sdp.push(makeLine(type, obj, el));
            });
        });
    });
    // then for each media line, follow the innerOrder
    session.media.forEach(function(mLine) {
        sdp.push(makeLine('m', grammar.m[0], mLine));
        innerOrder.forEach(function(type) {
            grammar[type].forEach(function(obj) {
                if (obj.name in mLine && mLine[obj.name] != null) sdp.push(makeLine(type, obj, mLine));
                else if (obj.push in mLine && mLine[obj.push] != null) mLine[obj.push].forEach(function(el) {
                    sdp.push(makeLine(type, obj, el));
                });
            });
        });
    });
    return sdp.join('\r\n') + '\r\n';
};

},{"./grammar":"kBTYh"}]},["UZvcg","hD4hw"], "hD4hw", "parcelRequire71b7")

//# sourceMappingURL=index.b3500f3c.js.map
