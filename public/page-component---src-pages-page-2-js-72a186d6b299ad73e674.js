webpackJsonp([0xc0c18720bcc62800],{"./node_modules/gatsby-link/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.navigateTo=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o("./node_modules/react/react.js"),d=n(c),p=o("./node_modules/react-router-dom/index.js"),f=o("./node_modules/prop-types/index.js"),b=n(f),h="",g=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={to:h+e.to},o}return s(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.props.to!==e.to&&(this.setState({to:h+e.to}),___loader.enqueue(this.state.to))}},{key:"componentDidMount",value:function(){___loader.enqueue(this.state.to)}},{key:"render",value:function(){var e=this,t=this.props,o=t.onClick,n=i(t,["onClick"]);if(this.props.activeStyle||this.props.activeClassName)var r=p.NavLink;else var r=p.Link;return d.default.createElement(r,l({onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(t){if(o&&o(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.to;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var i=e.state.to.split("#").slice(1).join("#"),r=document.getElementById(i);if(null!==r)return r.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}})},n,{to:this.state.to}))}}]),t}(d.default.Component);g.contextTypes={router:b.default.object},t.default=g;t.navigateTo=function(e){window.___navigateTo(h+e)}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Projects/ashikul.github.io/gatsby-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Projects/ashikul.github.io/gatsby-site/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Projects/ashikul.github.io/gatsby-site/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Projects/ashikul.github.io/gatsby-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["C:/Projects/ashikul.github.io/gatsby-site/node_modules/babel-preset-env/lib/index.js","C:/Projects/ashikul.github.io/gatsby-site/node_modules/babel-preset-stage-0/lib/index.js","C:/Projects/ashikul.github.io/gatsby-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/react/react.js"),r=n(i),a=o("./node_modules/gatsby-link/index.js"),s=n(a),l=function(){return r.default.createElement("div",null,r.default.createElement("h1",null,"Hi people"),r.default.createElement("p",null,"Welcome to page 2"),r.default.createElement(s.default,{to:"/"},"Go back to the homepage"))};t.default=l,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-page-2-js-72a186d6b299ad73e674.js.map