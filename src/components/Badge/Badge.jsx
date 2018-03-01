import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Badge = ({
	as: Bdge,
	topRight,
	className,
	...props
}) => {
  const classes = classNames('c-badge', {
	'c-badge--top-right': topRight
  }, className)
  
  return <Bdge className={classes} {...props}/>
}

Badge.displayName = 'Badge'

Badge.defaultProps = {
	as: 'div'
}

Badge.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	topRight: PropTypes.bool,
}

export default Badge