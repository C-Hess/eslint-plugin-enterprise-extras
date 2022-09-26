import noHrefAssignment from "./rules/no-href-assignment";
import noUnhandledScheduling from "./rules/no-unhandled-scheduling";
import privateComponentMethods from "./rules/private-component-methods";
import requireStatePropertyDefinition from "./rules/require-state-property-definition";
import unregisterEvents from "./rules/unregister-events";
import noUnstableDependencies from "./rules/no-unstable-dependencies";

export = {
  rules: {
    "no-href-assignment": noHrefAssignment,
    "private-component-methods": privateComponentMethods,
    "no-unhandled-scheduling": noUnhandledScheduling,
    "unregister-events": unregisterEvents,
    "no-unstable-dependencies": noUnstableDependencies,
    "require-state-property-definition": requireStatePropertyDefinition,
  },
  configs: {
    recommended: {
      plugins: ["enterprise-extras"],
      rules: {
        "enterprise-extras/no-href-assignment": "error",
        "enterprise-extras/private-component-methods": "error",
        "enterprise-extras/no-unhandled-scheduling": "warn",
        "enterprise-extras/unregister-events": "error",
        "enterprise-extras/no-unstable-dependencies": "warn",
        "enterprise-extras/require-state-property-definition": "warn",
      },
    },
    all: {
      plugins: ["enterprise-extras"],
      rules: {
        "enterprise-extras/no-href-assignment": "error",
        "enterprise-extras/private-component-methods": "error",
        "enterprise-extras/no-unhandled-scheduling": "error",
        "enterprise-extras/unregister-events": "error",
        "enterprise-extras/no-unstable-dependencies": "error",
        "enterprise-extras/require-state-property-definition": "error",
      },
    },
  },
};
