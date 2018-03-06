import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Col = ({
	as: Grd,
	className,
	size,
	...props
}) => {
  const classes = classNames('o-grid__col', {
  }, "o-grid__col--"+size+"-of-12", className)
  
  return <Grd className={classes} {...props}/>
}

Col.displayName = 'Col'

Col.defaultProps = {
	as: 'div'
}

Col.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	size: PropTypes.string

}

export default Col
