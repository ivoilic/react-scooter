import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Loader = ({
	as: Ldr,
	className,
	...props
}) => {
  const classes = classNames('c-loader', className)
  
  return <Ldr className={classes} {...props}/>
}

Loader.displayName = 'Loader'

Loader.defaultProps = {
	as: 'div'
}

Loader.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
}

export default Loader