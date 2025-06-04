const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.bbfc0d4d.js","app":"_app/immutable/entry/app.6e99e7f6.js","imports":["_app/immutable/entry/start.bbfc0d4d.js","_app/immutable/chunks/index.b8b3c275.js","_app/immutable/chunks/singletons.f5e6619c.js","_app/immutable/entry/app.6e99e7f6.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.b8b3c275.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f5bc434e.js')),
			__memo(() => import('./chunks/1-5826e71a.js')),
			__memo(() => import('./chunks/2-d1651de5.js')),
			__memo(() => import('./chunks/3-1d97812c.js')),
			__memo(() => import('./chunks/4-31511e77.js')),
			__memo(() => import('./chunks/5-6ffa54b6.js')),
			__memo(() => import('./chunks/6-a5ef582e.js')),
			__memo(() => import('./chunks/7-56725465.js')),
			__memo(() => import('./chunks/8-79a03d6a.js')),
			__memo(() => import('./chunks/9-6a094d70.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/api/reports/[report]",
				pattern: /^\/admin\/api\/reports\/([^/]+?)\/?$/,
				params: [{"name":"report","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-19ef2326.js'))
			},
			{
				id: "/admin/reports",
				pattern: /^\/admin\/reports\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/assets/[sha256]",
				pattern: /^\/api\/assets\/([^/]+?)\/?$/,
				params: [{"name":"sha256","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-a8c2c536.js'))
			},
			{
				id: "/api/projects/new",
				pattern: /^\/api\/projects\/new\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-ef74cc8e.js'))
			},
			{
				id: "/api/projects/[project]",
				pattern: /^\/api\/projects\/([^/]+?)\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-26e82fa5.js'))
			},
			{
				id: "/api/projects/[project]/assets/[md5ext]",
				pattern: /^\/api\/projects\/([^/]+?)\/assets\/([^/]+?)\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false},{"name":"md5ext","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-5577c6d1.js'))
			},
			{
				id: "/api/projects/[project]/complete",
				pattern: /^\/api\/projects\/([^/]+?)\/complete\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-5cf19346.js'))
			},
			{
				id: "/api/projects/[project]/report",
				pattern: /^\/api\/projects\/([^/]+?)\/report\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-ceb8bd8d.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/deleted",
				pattern: /^\/deleted\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects/[project]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
