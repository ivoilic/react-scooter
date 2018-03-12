import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Card = ({
	as: Crd,
	floating,
	selected,
	arrow,
	className,
	...props
}) => {
  const classes = classNames('c-card', {
	'c-card--floating': floating,
	'c-card--selected': selected,
	'c-card--arrow': arrow,
	
  }, arrow ? 'c-card--arrow-'+arrow:"",className)
  
  return <Crd className={classes} {...props} />
}

Card.displayName = 'Card'

Card.defaultProps = {
	as: 'div'
}

Card.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	floating: PropTypes.bool,
	selected: PropTypes.bool,
	arrow: PropTypes.string
}

export default Card
