/************
Processor: ts
************/

import * as __beyond_dep_ns_0 from '@beyond-js/react-18-widgets/page';
import * as __beyond_dep_ns_1 from 'react';
// control.ts
declare namespace ns_0 {
  import PageReactWidgetController = __beyond_dep_ns_0.PageReactWidgetController;
  import Main = ns_1.Main;
  export class Controller extends PageReactWidgetController {
    get Widget(): typeof Main;
  }
}


// view\index.tsx
declare namespace ns_1 {
  import React = __beyond_dep_ns_1;
  export function Main(): React.JSX.Element;
}


export import Controller = ns_0.Controller;
export import Main = ns_1.Main;

export declare const hmr: {on: (event: string, listener: any) => void, off: (event: string, listener: any) => void };