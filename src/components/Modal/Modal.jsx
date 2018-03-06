import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Modal = ({
	as: Mdl,
	className,
	unibody,
	title,
	children,
	size,
	...props
}) => {
  const classes = classNames('c-modal-overlay', className)
  
  return <Mdl className={classes} {...props}><div className={"c-modal"+(unibody ? " c-modal--unibody":"")}><div className="c-modal__header">{title}</div><div class="c-modal__content">{children}</div></div></Mdl>
}

Modal.displayName = 'Modal'

Modal.defaultProps = {
	as: 'div'
}

Modal.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.object,
	unibody: PropTypes.bool

}

export default Modal
