import { css } from "@microsoft/fast-element";

export const styles = css`
  :host {
    --drawerOffsetXClosed: 2500px;
  }

  h1,
  h2,
  h3,
  button,
  p ::slotted(*) {
    font-family: var(--fontFamilyBase);
    font-size: unset;
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  h1 {
    display: inline-block;
    border: 1px solid var(--colorBrandBackground);
    border-radius: var(--borderRadiusMedium);
    background-color: var(--colorBrandBackground);
    color: var(--colorNeutralBackground1);
    padding: var(--spacingHorizontalM);
  }

  :host([size="small"]) button {
    font-size: var(--fontSizeBase200);
  }
  :host([size="medium"]) button {
    font-size: var(--fontSizeBase400);
  }
  :host([size="large"]) button {
    font-size: var(--fontSizeBase600);
  }

  :host button.drawer-toggle {
    display: inline-block;
    border: 1px solid var(--colorBrandBackground);
    border-radius: var(--borderRadiusMedium);
    background-color: var(--colorBrandBackground);
    color: var(--colorNeutralBackground1);
    padding: var(--spacingHorizontalM);
  }
  :host button:hover {
    cursor: pointer;
  }

  :host([wild]) button {
    color: magenta;
    border: none;
    background-position: 0%;
    background: linear-gradient(
      45deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
  }

  :host([disabled]) button {
    background: unset;
    color: var(--colorNeutralForegroundDisabled) !important;
    background-color: var(--colorNeutralBackgroundDisabled) !important;
    border: 1px solid var(--colorNeutralBackgroundDisabled) !important;
    pointer-events: none;
  }

  :host .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }

  :host .container {
    position: absolute;
    overflow: hidden;
    inset: 0;
  }

  :host .drawer {
    position: absolute;
    height: 100%;
    width: 320px;
    top: 0;
    border: 1px solid var(--colorNeutralForeground1);
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: var(--curveAccelerateMax);
    transform-origin: left;
    transform: translateX(var(--drawerOffsetXClosed));
  }

  :host([open]) .drawer {
    transform: translateX(var(--drawerOffsetXOpen));
  }
`;
