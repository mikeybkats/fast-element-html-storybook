import { html } from "@microsoft/fast-element";
import { renderComponent } from "../../../util/render";

const template = html`
  <div class="large-container">
    Inside stories template: ${(x) => JSON.stringify(x)}
    <hwc-hello-world
      size="${(x) => x.size}"
      ?open="${(x) => x.open}"
      ?wild="${(x) => x.wild}"
      ?disabled="${(x) => x.disabled}"
    />
  </div>
`;

export default {
  title: "Hello World",
  args: {
    size: "small",
    text: "Hello World!",
    disabled: false,
    wild: false,
    open: false,
  },
  argTypes: {
    size: {
      description: "The size of hello world",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Disables hello world",
      control: {
        type: "boolean",
      },
    },
    wild: {
      description: "Makes the control style wild!",
      control: {
        type: "boolean",
      },
    },
    open: {
      description: "Opens Drawer",
      control: {
        type: "boolean",
      },
    },
  },
};

export const HelloWorld = renderComponent(template).bind({});
