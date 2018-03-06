import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Flag = ({
	as: Flg,
	className,
	children,
	image,
	reversed,
	top,
	bottom,
	...props
}) => {
  const classes = classNames('o-flag',{
	  "o-flag--top": top,
	  "o-flag--bottom": bottom,
	  "o-flag--rev": reversed
  }, className)
  
  let md = <div class="o-flag__fix">{image}</div>;
  
	if (reversed){
		return <Flg className={classes} {...props}><div className="o-flag__flex">{children}</div>{md}</Flg>
	}else{
  		return <Flg className={classes} {...props}>{md}<div className="o-flag__flex">{children}</div></Flg>
	}
}

Flag.displayName = 'Flag'

Flag.defaultProps = {
	as: 'div'
}

Flag.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	image: PropTypes.object,
	top: PropTypes.bool,
	reversed: PropTypes.bool,
	bottom: PropTypes.bool,
}

export default Flag