/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';


export namespace Components {
  interface ODemoBar {
    'backgroundColor': string;
    'caseOptionSelected': number;
    'device': string;
    'deviceEmulate': boolean;
    'deviceSize': string;
    'events': string;
    'name': string;
    'pattern': boolean;
  }
  interface ODemoBarButtons {}
  interface ODemoBarSelect {
    'options': any;
  }
  interface ODemoBarToolbar {
    'name': string;
    'options': any;
  }
  interface ODemoCase {
    'name': string;
  }
  interface ODemoDevices {}
  interface ODemoFab {
    'close': boolean;
  }
  interface ODemoModal {
    'closeDialog': () => Promise<void>;
    'code': any;
    'open': boolean;
    'openDialog': () => Promise<void>;
  }
  interface ODemoResizer {
    'setActiveViewPort': (size?: string) => Promise<void>;
    'size': string;
    'viewport': string;
  }
  interface ODemoSnackbar {
    'events': any;
  }
}

declare namespace LocalJSX {
  interface ODemoBar extends JSXBase.HTMLAttributes {
    'backgroundColor'?: string;
    'caseOptionSelected'?: number;
    'device'?: string;
    'deviceEmulate'?: boolean;
    'deviceSize'?: string;
    'events'?: string;
    'name'?: string;
    'pattern'?: boolean;
  }
  interface ODemoBarButtons extends JSXBase.HTMLAttributes {
    'onToolbarButtonClicked'?: (event: CustomEvent<any>) => void;
  }
  interface ODemoBarSelect extends JSXBase.HTMLAttributes {
    'onSelectedCaseChanged'?: (event: CustomEvent<any>) => void;
    'options'?: any;
  }
  interface ODemoBarToolbar extends JSXBase.HTMLAttributes {
    'name'?: string;
    'options'?: any;
  }
  interface ODemoCase extends JSXBase.HTMLAttributes {
    'name'?: string;
  }
  interface ODemoDevices extends JSXBase.HTMLAttributes {}
  interface ODemoFab extends JSXBase.HTMLAttributes {
    'close'?: boolean;
    'onChange-device'?: (event: CustomEvent<any>) => void;
    'onRotate-device'?: (event: CustomEvent<any>) => void;
  }
  interface ODemoModal extends JSXBase.HTMLAttributes {
    'code'?: any;
    'onCode-editor-changed'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
  }
  interface ODemoResizer extends JSXBase.HTMLAttributes {
    'onResizeButtonClicked'?: (event: CustomEvent<any>) => void;
    'size'?: string;
    'viewport'?: string;
  }
  interface ODemoSnackbar extends JSXBase.HTMLAttributes {
    'events'?: any;
  }

  interface ElementInterfaces {
    'ODemoBar': Components.ODemoBar;
    'ODemoBarButtons': Components.ODemoBarButtons;
    'ODemoBarSelect': Components.ODemoBarSelect;
    'ODemoBarToolbar': Components.ODemoBarToolbar;
    'ODemoCase': Components.ODemoCase;
    'ODemoDevices': Components.ODemoDevices;
    'ODemoFab': Components.ODemoFab;
    'ODemoModal': Components.ODemoModal;
    'ODemoResizer': Components.ODemoResizer;
    'ODemoSnackbar': Components.ODemoSnackbar;
  }

  interface IntrinsicElements {
    'ODemoBar': LocalJSX.ODemoBar;
    'ODemoBarButtons': LocalJSX.ODemoBarButtons;
    'ODemoBarSelect': LocalJSX.ODemoBarSelect;
    'ODemoBarToolbar': LocalJSX.ODemoBarToolbar;
    'ODemoCase': LocalJSX.ODemoCase;
    'ODemoDevices': LocalJSX.ODemoDevices;
    'ODemoFab': LocalJSX.ODemoFab;
    'ODemoModal': LocalJSX.ODemoModal;
    'ODemoResizer': LocalJSX.ODemoResizer;
    'ODemoSnackbar': LocalJSX.ODemoSnackbar;
  }
}
export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface ElementInterfaces extends LocalJSX.ElementInterfaces {}
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {


  interface HTMLODemoBarElement extends Components.ODemoBar, HTMLStencilElement {}
  var HTMLODemoBarElement: {
    prototype: HTMLODemoBarElement;
    new (): HTMLODemoBarElement;
  };

  interface HTMLODemoBarButtonsElement extends Components.ODemoBarButtons, HTMLStencilElement {}
  var HTMLODemoBarButtonsElement: {
    prototype: HTMLODemoBarButtonsElement;
    new (): HTMLODemoBarButtonsElement;
  };

  interface HTMLODemoBarSelectElement extends Components.ODemoBarSelect, HTMLStencilElement {}
  var HTMLODemoBarSelectElement: {
    prototype: HTMLODemoBarSelectElement;
    new (): HTMLODemoBarSelectElement;
  };

  interface HTMLODemoBarToolbarElement extends Components.ODemoBarToolbar, HTMLStencilElement {}
  var HTMLODemoBarToolbarElement: {
    prototype: HTMLODemoBarToolbarElement;
    new (): HTMLODemoBarToolbarElement;
  };

  interface HTMLODemoCaseElement extends Components.ODemoCase, HTMLStencilElement {}
  var HTMLODemoCaseElement: {
    prototype: HTMLODemoCaseElement;
    new (): HTMLODemoCaseElement;
  };

  interface HTMLODemoDevicesElement extends Components.ODemoDevices, HTMLStencilElement {}
  var HTMLODemoDevicesElement: {
    prototype: HTMLODemoDevicesElement;
    new (): HTMLODemoDevicesElement;
  };

  interface HTMLODemoFabElement extends Components.ODemoFab, HTMLStencilElement {}
  var HTMLODemoFabElement: {
    prototype: HTMLODemoFabElement;
    new (): HTMLODemoFabElement;
  };

  interface HTMLODemoModalElement extends Components.ODemoModal, HTMLStencilElement {}
  var HTMLODemoModalElement: {
    prototype: HTMLODemoModalElement;
    new (): HTMLODemoModalElement;
  };

  interface HTMLODemoResizerElement extends Components.ODemoResizer, HTMLStencilElement {}
  var HTMLODemoResizerElement: {
    prototype: HTMLODemoResizerElement;
    new (): HTMLODemoResizerElement;
  };

  interface HTMLODemoSnackbarElement extends Components.ODemoSnackbar, HTMLStencilElement {}
  var HTMLODemoSnackbarElement: {
    prototype: HTMLODemoSnackbarElement;
    new (): HTMLODemoSnackbarElement;
  };
  interface HTMLElementTagNameMap {
    'o-demo-bar': HTMLODemoBarElement
    'o-demo-bar-buttons': HTMLODemoBarButtonsElement
    'o-demo-bar-select': HTMLODemoBarSelectElement
    'o-demo-bar-toolbar': HTMLODemoBarToolbarElement
    'o-demo-case': HTMLODemoCaseElement
    'o-demo-devices': HTMLODemoDevicesElement
    'o-demo-fab': HTMLODemoFabElement
    'o-demo-modal': HTMLODemoModalElement
    'o-demo-resizer': HTMLODemoResizerElement
    'o-demo-snackbar': HTMLODemoSnackbarElement
  }

  interface ElementTagNameMap {
    'o-demo-bar': HTMLODemoBarElement;
    'o-demo-bar-buttons': HTMLODemoBarButtonsElement;
    'o-demo-bar-select': HTMLODemoBarSelectElement;
    'o-demo-bar-toolbar': HTMLODemoBarToolbarElement;
    'o-demo-case': HTMLODemoCaseElement;
    'o-demo-devices': HTMLODemoDevicesElement;
    'o-demo-fab': HTMLODemoFabElement;
    'o-demo-modal': HTMLODemoModalElement;
    'o-demo-resizer': HTMLODemoResizerElement;
    'o-demo-snackbar': HTMLODemoSnackbarElement;
  }
}

