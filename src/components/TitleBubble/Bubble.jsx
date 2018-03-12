import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Bubble = ({
	as: TtlBbbl,
	className,
	arrow,
	title,
	...props
}) => {
  const classes = classNames('c-title-bubble', arrow ? 'c-title-bubble--'+arrow : "", className)
  
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
	arrow: PropTypes.string
}

export default Bubble
