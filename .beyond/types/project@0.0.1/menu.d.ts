/************
Processor: ts
************/

import * as __beyond_dep_ns_0 from 'react';
// control.ts
declare namespace ns_0 {
  export class Control {
    constructor();
  }
}


// view\context.ts
declare namespace ns_1 {
  import React = __beyond_dep_ns_0;
  export const CreateContext: React.Context<any>;
  export const createUseContext: () => any;
}


// view\icon-button.tsx
declare namespace ns_2 {
  import React = __beyond_dep_ns_0;
  export function IconButton(): React.JSX.Element;
}


// view\icon-remove.tsx
declare namespace ns_3 {
  import React = __beyond_dep_ns_0;
  export function IconRemove(): React.JSX.Element;
}


// view\indext.tsx
declare namespace ns_4 {
  /// <reference types="react" />
  export function Menu({
    items
  }: {
    items: string[];
  }): JSX.Element;
}


// view\item.tsx
declare namespace ns_5 {
  import React = __beyond_dep_ns_0;
  export function Item({
    item
  }: {
    item: any;
  }): React.JSX.Element;
}


export import Control = ns_0.Control;
export import Menu = ns_4.Menu;

export declare const hmr: {on: (event: string, listener: any) => void, off: (event: string, listener: any) => void };