import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Calendar = ({
	as: Clndr,
	className,
	title,
	dates,
	children,
	...props
}) => {
  const classes = classNames('c-calendar','c-card', 'u-pad-xs', className)
  
  return <Clndr className="c-calendar c-card u-pad-xs" className={classes} {...props}>
    <nav className="c-calendar__nav  u-cf u-font-center u-mar-bottom-s">
      <div className="u-l-fl">
        <a title="Previous month" href="#" className="u-thide  c-arrow c-arrow--left">Previous</a>
      </div>
      <div className="u-l-fr">
        <a title="Next month" href="#" className="u-thide  c-arrow c-arrow--right">Next</a>
      </div>
      <strong>{title}</strong>
    </nav>

    <table className="c-calendar__picker">
      <thead className="ax-visually-hidden">
        <tr>
          <th><abbr title="Sunday">Sun</abbr></th>
          <th><abbr title="Monday">Mon</abbr></th>
          <th><abbr title="Tuesday">Tue</abbr></th>
          <th><abbr title="Wednesday">Wed</abbr></th>
          <th><abbr title="Thursday">Thu</abbr></th>
          <th><abbr title="Friday">Fri</abbr></th>
          <th><abbr title="Saturday">Sat</abbr></th>
        </tr>
      </thead>
      <tbody>
<tr>{children}</tr>
		  	</tbody>
    		</table>
		</Clndr>
	 
}

Calendar.displayName = 'Calendar'

Calendar.defaultProps = {
	as: 'div'
}

Calendar.propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string
}

export default Calendar