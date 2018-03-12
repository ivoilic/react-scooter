import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Tab = ({
	as: Tb,
	className,
	children,
	active,
	...props
}) => {
  const classes = classNames("c-tab-nav__tab",{
	  "is-active": active
  },className)
  
  return <Tb className={classes} {...props}><button role="tab" aria-selected={active} tabIndex={(active ? 0 : -1)}>{children}</button></Tb>
}

Tab.displayName = 'Tab'

Tab.defaultProps = {
	as: 'li'
}

Tab.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
}

export default Tab