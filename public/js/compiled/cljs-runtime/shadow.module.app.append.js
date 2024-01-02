
shadow.cljs.devtools.client.env.module_loaded('app');

try { work_app.core.init(); } catch (e) { console.error("An error occurred when calling (work-app.core/init)"); throw(e); }