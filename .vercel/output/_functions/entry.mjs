import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Y1Bk0fm_.mjs';
import { manifest } from './manifest_Dp6WRLFV.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/add-contact.astro.mjs');
const _page4 = () => import('./pages/api/contact-form.astro.mjs');
const _page5 = () => import('./pages/pricing.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/add-contact.ts", _page3],
    ["src/pages/api/contact-form.ts", _page4],
    ["src/pages/pricing.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dbc98730-c869-4573-8abe-0e5d5e6e95bb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
