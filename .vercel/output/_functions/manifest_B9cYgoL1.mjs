import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BwzKAyNM.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bp9gJGTK.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/einargudjonsson/personal/eggo-agency/","cacheDir":"file:///Users/einargudjonsson/personal/eggo-agency/node_modules/.astro/","outDir":"file:///Users/einargudjonsson/personal/eggo-agency/dist/","srcDir":"file:///Users/einargudjonsson/personal/eggo-agency/src/","publicDir":"file:///Users/einargudjonsson/personal/eggo-agency/public/","buildClientDir":"file:///Users/einargudjonsson/personal/eggo-agency/dist/client/","buildServerDir":"file:///Users/einargudjonsson/personal/eggo-agency/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BoDRbftG.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BoDRbftG.css"},{"type":"inline","content":".custom-grid[data-astro-cid-qzn24t3o]{grid-template:auto auto}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BoDRbftG.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BoDRbftG.css"},{"type":"inline","content":".form-checkbox[data-astro-cid-2lkv3ujd]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:28px;height:28px;border:1px solid #000;border-radius:50%;outline:none;cursor:pointer;position:relative}.form-checkbox[data-astro-cid-2lkv3ujd]:before{content:\"\";display:block;width:100%;height:100%;border-radius:50%;position:absolute;top:0;left:0;background:var(--green);transform:scale(0);transition:transform .1s ease-in-out}.form-checkbox[data-astro-cid-2lkv3ujd]:checked:before{transform:scale(.6)}\n.custom-grid[data-astro-cid-qzn24t3o]{grid-template:auto auto}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://positivustheme.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/einargudjonsson/personal/eggo-agency/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/einargudjonsson/personal/eggo-agency/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/einargudjonsson/personal/eggo-agency/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/einargudjonsson/personal/eggo-agency/src/pages/pricing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/einargudjonsson/personal/eggo-agency/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DQiRMuSa.mjs","\u0000@astrojs-manifest":"manifest_B9cYgoL1.mjs","/Users/einargudjonsson/personal/eggo-agency/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.DJ_3ciAv.js","/Users/einargudjonsson/personal/eggo-agency/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts":"_astro/Form.astro_astro_type_script_index_0_lang.BQuMnSiW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/einargudjonsson/personal/eggo-agency/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts","function n(){var e=document.getElementById(\"checkbox1\"),c=document.getElementById(\"checkbox2\"),t=document.getElementById(\"message\");e&&c&&(e.checked=!0,c.addEventListener(\"change\",function(){c.checked?(e.checked=!1,t.value=\"We're interested in your services! Please contact us\"):(t.value=\"\",e.checked=!0)}),e.addEventListener(\"change\",function(){e.checked?(c.checked=!1,t.value=\"\"):(c.checked=!0,t.value=\"We're interested in your services! Please contact us\")}))}n();document.addEventListener(\"astro:after-swap\",n);"]],"assets":["/_astro/company-logo2.CREQfids.svg","/_astro/company-logo1.syO998vd.svg","/_astro/company-logo3.c2biK_9v.svg","/_astro/company-logo5.BbmFav3z.svg","/_astro/company-logo4.COtkDUvM.svg","/_astro/proposal-pic.DC7YnBHg.png","/_astro/company-logo6.BTRoJjnx.svg","/_astro/hero.Cc0GD7y9.svg","/_astro/card-pic2.BeQ4x_k2.png","/_astro/card-pic3.D4d3JTsx.png","/_astro/card-pic5.CqK5dBMJ.png","/_astro/card-pic4.CPZGvqT8.png","/_astro/card-pic6.CXJkFMY0.png","/_astro/card-pic1.LmmlwL7_.png","/_astro/contact-pic.BrB0SfUf.png","/_astro/linkedin.eKpMB-Du.svg","/_astro/twitter.CkIHlicD.svg","/_astro/facebook.D0JOV-zG.svg","/_astro/about.BoDRbftG.css","/404.svg","/Logo.svg","/cover.png","/favicon.svg","/_astro/MainLayout.astro_astro_type_script_index_0_lang.DJ_3ciAv.js","/fonts/grotesk/SpaceGrotesk-Medium.woff","/fonts/grotesk/SpaceGrotesk-Regular.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2RGXWGugj/juEFbqTNgt3GcdHdZjpJYDqTgI1VHp8TM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
