Package.describe({
  name: "vulcan:users-manager"
});

Package.onUse(api => {
  api.use([
    "vulcan:core",
    "vulcan:users",
    "vulcan:backoffice-builder",
    "vulcan:menu"
  ]);

  api.mainModule("lib/server/main.js", "server");
  api.mainModule("lib/client/main.js", "client");
});
