import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Media = ({
	as: Md,
	className,
	children,
	src,
	width,
	height,
	alt,
	...props
}) => {
  const classes = classNames('o-media',className)
  
  return <Md className={classes} {...props}><img className="o-media__img" src={src} width={width} height={height} alt={alt} /><div className="o-media__body">{children}</div></Md>
}

Media.displayName = 'Media'

Media.defaultProps = {
	as: 'div'
}

Media.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	alt: PropTypes.string,
	src: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
}

export default Media