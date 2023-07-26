import {Link} from "react-router-dom";

function sizeClass(size) {
  let classes = 'px-5 py-2';

  switch(size) {
    case 'sm':
      classes = 'px-3 py-1';
      break;
    case 'lg':
      classes = 'px-7 py-3'
      break;
  }

  return classes;
}

function variantClass(variant) {
  let classes = 'rounded';

  if (variant && variant.includes('pill')) {
    classes = 'rounded-full';
  }

  if (variant && variant.includes('outlined')) {
    classes += ' border'
  }

  return classes;
}

function Button({ children, size, variant, colors, className, ...rest }) {
  const colorClasses = colors || 'bg-blue-500 hover:bg-blue-700 text-white';
  const sizeClasses = sizeClass(size);
  const variantClasses = variantClass(variant);

  return (
    <button {...rest} className={[colorClasses, sizeClasses, variantClasses, className].join(' ')}>
      {children}
    </button>
  );
}

function LinkButton({ children, size, variant, colors, className, ...rest }) {
  const colorClasses = colors || 'bg-blue-500 hover:bg-blue-700 text-white';
  const sizeClasses = sizeClass(size);
  const variantClasses = variantClass(variant);

  return (
    <Link {...rest} className={[colorClasses, sizeClasses, variantClasses, className].join(' ')}>
      {children}
    </Link>
  );
}

export default Button;
export { LinkButton };
