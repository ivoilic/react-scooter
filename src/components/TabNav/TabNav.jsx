import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TabNav = ({
	as: TbNv,
	className,
	children,
	...props
}) => {
  const classes = classNames(className)
  
  return <TbNv className={classes} {...props}><ul className="c-tab-nav" role="tablist">{children}</ul></TbNv>
}

TabNav.displayName = 'TabNav'

TabNav.defaultProps = {
	as: 'nav'
}

TabNav.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
}

export default TabNav