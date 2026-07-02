// Allow Astro client directives (client:load, client:idle, etc.) on JSX/TSX props
declare namespace JSX {
  interface IntrinsicAttributes {
    'client:load'?: boolean;
    'client:idle'?: boolean;
    'client:visible'?: boolean;
    'client:media'?: string;
    'client:only'?: string;
  }
}
