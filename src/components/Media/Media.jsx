import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Media = ({
	as: Md,
	className,
	children,
	image,
	...props
}) => {
  const classes = classNames('o-media',className)
  
  return <Md className={classes} {...props}><div className="o-media__img" >{image}</div><div className="o-media__body">{children}</div></Md>
}

Media.displayName = 'Media'

Media.defaultProps = {
	as: 'div'
}

Media.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	image: PropTypes.object
}

export default Media