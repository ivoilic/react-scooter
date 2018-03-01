import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({
	as: Btn,
	primary,
	secondary,
	tertiary,
	disabled,
	full,
	big,
	enabled,
	className,
	...props
}) => {
  const classes = classNames('c-btn', {
	'c-btn--primary': primary,
	'c-btn--secondary': secondary,
	'c-btn--tertiary': tertiary,
	'c-btn--disabled': disabled,
	'c-btn--full': full,
	'c-btn--big': big
  }, className)
  
  return <Btn className={classes} {...props} disabled={disabled && !enabled}/>
}

Button.displayName = 'Button'

Button.defaultProps = {
	as: 'button'
}

Button.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	big: PropTypes.bool,
	enabled: PropTypes.bool,

}

export default Button
