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

  return classes + ' border';
}

function TextField({ size, variant, colors, className, ...rest }) {
  const colorClasses = colors || 'bg-transparent focus:outline-blue-500 focus:outline';
  const sizeClasses = sizeClass(size);
  const variantClasses = variantClass(variant);

  return (
    <input {...rest} className={[colorClasses, sizeClasses, variantClasses, className].join(' ')} />
  );
}

export default TextField;
