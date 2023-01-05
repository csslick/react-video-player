import React from 'react'
import style from './Progress.module.css'

function Progress({val}) {

  return (
    <>
      <div className={style.progressBox}>
        <div 
          className={style.bar}
          style={{width: val + '%'}}
        ></div>
        <small>{val}%</small>
      </div>
    </>
  )
}

export default Progress