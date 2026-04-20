const src = `${import.meta.env.BASE_URL}salon-logo.svg`;

/**
 * Site navy (#1e3a5f) in the SVG. On dark backgrounds, CSS invert yields a light mark.
 */
const Logo = ({ className = "", onDark = false, ...rest }) => (
  <img
    src={src}
    alt=""
    role="presentation"
    decoding="async"
    className={`block h-auto w-auto max-w-full bg-transparent [background:none] ${
      onDark ? "brightness-0 invert" : ""
    } ${className}`.trim()}
    {...rest}
  />
);

export default Logo;
