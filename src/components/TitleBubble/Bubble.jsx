import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Bubble = ({
	as: TtlBbbl,
	className,
	n,
	w,
	e,
	s,
	title,
	...props
}) => {
  const classes = classNames('c-title-bubble', {
	'c-title-bubble--n': n,
	'c-title-bubble--w': w,
	'c-title-bubble--e': e,
	'c-title-bubble--s': s,
	
  }, className)
  
  return <TtlBbbl className={classes} {...props} data-title={title}/>
}

Bubble.displayName = 'Bubble'

Bubble.defaultProps = {
	as: 'span'
}

Bubble.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
	n: PropTypes.bool,
	w: PropTypes.bool,
	e: PropTypes.bool,
	s: PropTypes.bool,
}

export default Bubble
