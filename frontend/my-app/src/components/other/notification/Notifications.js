import React from 'react'
import classNames from 'classnames'
import './notification.css'

const Notification = (props) => {
    const classes = classNames('notification', {
      'notification--type-success'  : (props.type === 'success'),
      'notification--type-error'  : (props.type === 'error'),
      'notification--type-notify'  : (props.type === 'notify'),
    });
    
    return (
      <div className={classes}>
        <div className="notification__body">
          {props.children}
        </div>
        <i className="notification__close fa fa-times"></i>
      </div>
    );
  };
  
 

  export default Notification