import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Avatar = ({
	as: Vtr,
	xl,
	l,
	m,
	s,
	xs,
	alt,
	src,
	noImg,
	className,
	color,
	initials,
	...props
}) => {
  const classes = classNames('c-avatar', {
	'c-avatar--no-img': noImg,
	  'c-avatar--xl': xl,
	  'c-avatar--l': l,
	  'c-avatar--m': m,
	  'c-avatar--s': s,
	  'c-avatar--xs': xs,
  }, className)
  	//Thanks ShanShan on StackOverflow for this initial generating solution
  	var ini = alt.match(/\b\w/g) || [];
	ini = initials ? initials : ((ini.shift() || '') + (ini.pop() || '')).toUpperCase();
	
  var VtrInner = noImg ? <span className="ax-visually-hidden">{alt}</span>: <img src={src} alt={alt} />;
  return <Vtr className={classes} {...props} src={src} data-initials={noImg && ini} style={noImg &&{"backgroundColor":color}}>{VtrInner}</Vtr>
}

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
	as: 'figure',
	size: ''
}

Avatar.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	xl: PropTypes.bool,
	l: PropTypes.bool,
	m: PropTypes.bool,
	s: PropTypes.bool,
	xs: PropTypes.bool,
	alt: PropTypes.string,
	src: PropTypes.string,
	noImg: PropTypes.bool,
	initials: PropTypes.string,
	color: PropTypes.string

}

export default Avatar
