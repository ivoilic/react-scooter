import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonGroup = ({
	as: BtnGroup,
	justify,
	className,
	...props
}) => {
  const classes = classNames('c-btn-group', {
	'c-btn-group--justify': justify
  }, className)
  
  return <BtnGroup className={classes} {...props}/>
}

ButtonGroup.displayName = 'ButtonGroup'

ButtonGroup.defaultProps = {
	as: 'div'
}

ButtonGroup.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	justify: PropTypes.bool,
}

export default ButtonGroup
