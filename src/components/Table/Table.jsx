import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Table = ({
	as: Tbl,
	zebra,
	selectable,
	className,
	...props
}) => {
  const classes = classNames('c-table', {
	'c-table--zebra': zebra,
	 'c-table--selectable': selectable
  }, className)
  
  return <Tbl className={classes} {...props}/>
}

Table.displayName = 'Table'

Table.defaultProps = {
	as: 'table'
}

Table.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	zebra: PropTypes.bool,
	selectable: PropTypes.bool
}

export default Table