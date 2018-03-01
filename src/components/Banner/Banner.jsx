import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Banner = ({
	as: Bnnr,
	success,
	warning,
	error,
	unpinned,
	className,
	...props
}) => {
  const classes = classNames('c-banner', {
	'c-banner--success': success,
	'c-banner--warning': warning,
	'c-banner--error': error,
	'c-banner--unpinned': unpinned
  }, className)
  
  return <Bnnr className={classes} {...props}/>
}

Banner.displayName = 'Banner'

Banner.defaultProps = {
	as: 'div'
}

Banner.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	success: PropTypes.bool,
	warning: PropTypes.bool,
	error: PropTypes.bool,
	unpinned: PropTypes.bool,

}

export default Banner
