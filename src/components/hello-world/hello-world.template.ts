import { html } from "@microsoft/fast-element";
import { HelloWorld } from "./hello-world";

export const template = html<HelloWorld>`
  <div>Inside component template: ${(x) => JSON.stringify(x)}</div>
  <div>
    Open: ${(x) => x.open} </br>
    Wild: ${(x) => x.wild} </br> 
    Disabled: ${(x) => x.disabled} </br>
    Size: ${(x) => x.size} </br>
  </div>
`;
