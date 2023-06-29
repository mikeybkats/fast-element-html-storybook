import { ViewTemplate } from "@microsoft/fast-element";

export declare type Args = {
  [name: string]: any;
};

/**
 * A helper that returns a function to bind a Storybook story to a ViewTemplate.
 *
 * @param template - The ViewTemplate to render
 * @returns - a function to bind a Storybook story
 */
export function renderComponent<TArgs = Args>(
  template: ViewTemplate
): (args: TArgs) => Element | DocumentFragment | null {
  return function (args) {
    const storyFragment = new DocumentFragment();
    template.render(args, storyFragment);
    if (storyFragment.childElementCount === 1) {
      return storyFragment.firstElementChild;
    }
    return storyFragment;
  };
}
