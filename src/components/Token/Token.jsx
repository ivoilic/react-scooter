import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Avatar from '../Avatar/Avatar'

const Token = ({
	as: Tkn,
	pending,
	warning,
	invalid,
	name,
	color,
	initials,
	src,
	selected,
	noImg,
	className,
	...props
}) => {
  const classes = classNames('c-token', {
	'c-token--pending': pending,
	'c-token--warning': warning,
	'c-token--invalid': invalid,
	'is-selected': selected
  }, className)
  
  return <Tkn className={classes} {...props}><Avatar xs alt={name} noImg={noImg} color={color} src={src} initials={initials}></Avatar><span className="c-token__name">{name}</span><span className="c-token__delete">&times;</span></Tkn>
}

Token.displayName = 'Token'

Token.defaultProps = {
	as: 'div'
}

Token.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	pending: PropTypes.bool,
	warning: PropTypes.bool,
	invalid: PropTypes.bool,
	selected: PropTypes.bool,
	name: PropTypes.string,
	noImg: PropTypes.bool,
	color: PropTypes.string,
	initials: PropTypes.string,
	src: PropTypes.string

}

export default Token
