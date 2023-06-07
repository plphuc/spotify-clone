import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export default function Button({
  to,
  href,
  children,
  className,
  titleClassName,
  disabled = false,
  leftIcon,
  rightIcon,
  primary = false,
  inheritColor = false,
  outline = false,
  zoominHover = false,
  onClick,
  ...passprops
}) {
  let Comp = 'button'

  const props = {
    onClick,
    ...passprops,
  }

    // Disabled button
    if (disabled) {
      Object.keys(props).forEach(key => {
        if (key.startsWith('on') && typeof props[key] === 'function'){
          delete props[key]
        }
      })
    }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    inheritColor,
    outline,
    zoominHover
  });

  const title_classes = cx('title', {
    [titleClassName]: titleClassName,
  })

  if(to) {
    Comp = Link;
    props.to = to;
  }
  else if (href) {
    Comp = 'a';
    props.href = href;
  }
  return (
    <Comp className={classes} {...props} disabled = {disabled}>
      {leftIcon && <span className={classNames(styles.icon)}>{leftIcon}</span>}

      <span className={title_classes}>{children}</span>
      
      {rightIcon && (<span className={classNames(styles.icon)}>{rightIcon}</span>
      )}
    </Comp>
  );
}
