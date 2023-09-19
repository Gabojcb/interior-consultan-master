/************
Processor: ts
************/

import * as __beyond_dep_ns_0 from '@beyond-js/react-18-widgets/page';
import * as __beyond_dep_ns_1 from 'react';
// control.ts
declare namespace ns_0 {
  import PageReactWidgetController = __beyond_dep_ns_0.PageReactWidgetController;
  import Header = ns_1.Header;
  export class Controller extends PageReactWidgetController {
    get Widget(): typeof Header;
  }
}


// view\indext.tsx
declare namespace ns_1 {
  import React = __beyond_dep_ns_1;
  export function Header({
    title,
    children
  }: {
    title: any;
    children: any;
  }): React.JSX.Element;
}


export import Controller = ns_0.Controller;
export import Header = ns_1.Header;

export declare const hmr: {on: (event: string, listener: any) => void, off: (event: string, listener: any) => void };