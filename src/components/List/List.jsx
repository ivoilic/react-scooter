import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const List = ({
	as: Lst,
	className,
	ordered,
	dividers,
	...props
}) => {
  const classes = classNames('o-list-ui', {
	  "o-list-ui--dividers": dividers
  }, className)
  
  if (ordered){
	 return <ol className={classes} {...props}/>
  }else{
	 return <ul className={classes} {...props}/> 
  }
  
}

List.displayName = 'List'


List.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	ordered: PropTypes.bool,
	dividers: PropTypes.bool
}

export default List