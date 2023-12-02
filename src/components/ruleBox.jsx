import React from 'react'
import "../style/ruleBox.css"

function RuleBox({image,rule}) {
  return (
    <div className='w-60 mx-auto my-4'>
      <div className='box rounded-2xl row'>
        <div className="col-3 p-0 flex items-center justify-center bg-ruleBox2">
            <img className='ruleImg ml-2 rounded-lg' src={image} alt="" />
        </div>
        <div className="col-9 bg-ruleBox">
            <h3 className='text-black p-4'>{rule}</h3>
        </div>
      </div>
    </div>
  )
}

export default RuleBox
