import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Input = ({
	as: Inpt,
	label,
	error,
	disabled,
	valid,
	invalid,
	type,
	value,
	placeholder,
	className,
	children,
	pattern,
	...props
}) => {
  const classes = classNames('c-label', {
  }, className)
  
  const inputClasses = classNames('c-input', {
	'is-valid': valid,
	  'is-invalid': invalid
  }, className)
  
  var inptInner  = <input className={inputClasses} {...props}  placeholder={placeholder} type={type} value={value} pattern={pattern} disabled={disabled}>{children}</input>;

	if(type === "textarea"){
		inptInner  = <textarea className={inputClasses} {...props}  placeholder={placeholder} value={value} pattern={pattern} disabled={disabled}>{children}</textarea>;
	}else if(type === "select"){
		inptInner  = <select className={inputClasses} {...props} value={value} disabled={disabled}>{children}</select>;
	}
  
  return <Inpt className={classes}>
	  {label}{error ? <span className="u-font-error"> {error}</span>:""}
	  {inptInner}
  </Inpt>
}

Input.displayName = 'Input'

Input.defaultProps = {
	as: 'label'
}

Input.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	disabled: PropTypes.bool,
	valid: PropTypes.bool,
	invalid: PropTypes.bool,
	type: PropTypes.string,
	pattern: PropTypes.string,
	value: PropTypes.string,
	placholder: PropTypes.string,

}

export default Input
