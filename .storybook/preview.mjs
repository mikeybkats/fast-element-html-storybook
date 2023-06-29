import { HelloWorldDefinition } from "../src/components/hello-world/index";

HelloWorldDefinition.define(customElements);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
