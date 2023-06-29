import {
  ElementStyles,
  FASTElement,
  attr,
  css,
  observable,
} from "@microsoft/fast-element";

export type size = "small" | "medium" | "large";

export class HelloWorld extends FASTElement {
  @attr
  public size?: size;

  @attr({ attribute: "disabled", mode: "boolean" })
  public disabled: boolean = false;

  @attr({ attribute: "wild", mode: "boolean" })
  public wild: boolean = false;

  @attr({ attribute: "open", mode: "boolean" })
  public open: boolean = false;

  openChanged() {
    console.log("open:", this.open);
  }
}
