import React from 'react'
import './Programs.css'
import p1 from '../../assets/program-1.png'
import p2 from '../../assets/program-2.png'
import p3 from '../../assets/program-3.png'
import p_icon1 from '../../assets/program-icon-1.png'
import p_icon2 from '../../assets/program-icon-2.png'
import p_icon3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' id='program'>
      <div className="program">
        <img src={p1} alt="" />
        <div className="caption">
            <img src={p_icon1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p2} alt="" />
        <div className="caption">
            <img src={p_icon2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p3} alt="" />
        <div className="caption">
            <img src={p_icon3} alt="" />
            <p>Post Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
