import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Grid = ({
	as: Grd,
	className,
	...props
}) => {
  const classes = classNames('o-grid', {
  }, className)
  
  return <Grd className={classes} {...props}/>
}

Grid.displayName = 'Grid'

Grid.defaultProps = {
	as: 'div'
}

Grid.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string

}

export default Grid
