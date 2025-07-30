/* eslint-disable no-unused-vars */

export {};

declare global {
  var moxfieldOnLoad: (event: Event<HTMLIFrameElement, Event>) => void;
}

// Type declarations for static assets
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
