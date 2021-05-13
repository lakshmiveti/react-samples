import React, {useState} from 'react';
import LightWindow from './LiteWindow';


const AppSegment = () => {
  const [ modalFlag, setmodalFlag ] = useState(false);
  return (
  <div >
  <button type="button" className="btn btn-primary" onClick={() => setmodalFlag((modalFlag) => !modalFlag)}>
    Launch modal
  </button>
   <LightWindow params={{show:modalFlag, success:true, title:"Preview", list:['Object one','Object two','Object three']}}/>
  </div>
  )
}

export default AppSegment
