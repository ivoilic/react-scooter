import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Card = ({
	as: Crd,
	floating,
	selected,
	arrow,
	className,
	n,
	nw,
	ne,
	s,
	sw,
	se,
	...props
}) => {
  const classes = classNames('c-card', {
	'c-card--floating': floating,
	'c-card--selected': selected,
	'c-card--arrow': arrow,
	'c-card--arrow-n': n,
	'c-card--arrow-nw': nw,
	'c-card--arrow-ne': ne,
	'c-card--arrow-s': s,
	'c-card--arrow-sw': sw,
	'c-card--arrow-se': se,
	
  }, className)
  
  return <Crd className={classes} {...props}/>
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
	arrow: PropTypes.bool,
	n: PropTypes.bool,
	nw: PropTypes.bool,
	ne: PropTypes.bool,
	s: PropTypes.bool,
	sw: PropTypes.bool,
	se: PropTypes.bool,
}

export default Card
