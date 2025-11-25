globalThis.process ??= {}; globalThis.process.env ??= {};
import { y as decodeKey } from './chunks/astro/server_DsMU5Xpt.mjs';
import './chunks/astro-designed-error-pages_DkuVrgcu.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_pVvIjUU6.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///home/sarvin/SwiftRootBus/","cacheDir":"file:///home/sarvin/SwiftRootBus/node_modules/.astro/","outDir":"file:///home/sarvin/SwiftRootBus/dist/","srcDir":"file:///home/sarvin/SwiftRootBus/src/","publicDir":"file:///home/sarvin/SwiftRootBus/public/","buildClientDir":"file:///home/sarvin/SwiftRootBus/dist/","buildServerDir":"file:///home/sarvin/SwiftRootBus/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CL7jKl1B.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sarvin/SwiftRootBus/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DtV-cMXi.mjs","/home/sarvin/SwiftRootBus/node_modules/astro/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/home/sarvin/SwiftRootBus/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dc1xOSWL.mjs","@/components/sections/hero":"_astro/hero.Cbam9yur.js","@/components/sections/about":"_astro/about.Cos2ihM6.js","@/components/sections/features":"_astro/features.BVgTq-bU.js","@/components/sections/services":"_astro/services.Bt4jYlCt.js","@/components/sections/team":"_astro/team.d5RY5ct3.js","@/components/sections/appointment":"_astro/appointment.DgLEntWv.js","@/components/sections/clinic-hours":"_astro/clinic-hours.0G7pY6n3.js","@/components/sections/testimonials":"_astro/testimonials.sbAB0QJR.js","@/components/sections/contact":"_astro/contact.BZPJrUJl.js","@/components/navbar.tsx":"_astro/navbar.ChrLb5-r.js","@/components/footer.tsx":"_astro/footer.GQG0elqR.js","@/components/ui/sonner":"_astro/sonner.BQDw6RZP.js","@astrojs/react/client.js":"_astro/client.BE8KMHbB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CL7jKl1B.css","/_astro/about.Cos2ihM6.js","/_astro/appointment.DgLEntWv.js","/_astro/button.Cz4i8o6x.js","/_astro/client.BE8KMHbB.js","/_astro/clinic-hours.0G7pY6n3.js","/_astro/constants.Df0Tr3fE.js","/_astro/contact.BZPJrUJl.js","/_astro/createLucideIcon.CzLEsX_9.js","/_astro/data.BO8k9KLv.js","/_astro/features.BVgTq-bU.js","/_astro/footer.GQG0elqR.js","/_astro/hero.Cbam9yur.js","/_astro/index.B8rMjqGQ.js","/_astro/index.DrAYhtg2.js","/_astro/index.Wh4efXhX.js","/_astro/input.DqizVZRL.js","/_astro/jsx-runtime.DMLPoDJ3.js","/_astro/map-pin.CqAFfzTy.js","/_astro/motion.nRIfz7La.js","/_astro/navbar.ChrLb5-r.js","/_astro/services.Bt4jYlCt.js","/_astro/sonner.BQDw6RZP.js","/_astro/team.d5RY5ct3.js","/_astro/testimonials.sbAB0QJR.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_astro/index.CL7jKl1B.css","/_worker.js/chunks/_@astro-renderers_89owTJsp.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_DPjqFveQ.mjs","/_worker.js/chunks/astro-designed-error-pages_DkuVrgcu.mjs","/_worker.js/chunks/astro_Bvl7_hAt.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_UZPiR76r.mjs","/_worker.js/chunks/index_Bkcqoc3X.mjs","/_worker.js/chunks/noop-middleware_pVvIjUU6.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_Dc1xOSWL.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/astro/server_DsMU5Xpt.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"fYm4cbHVfNgbYKSZNGNxa71JS325nGuDRbGgVYAtc84=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
