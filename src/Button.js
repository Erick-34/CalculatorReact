import React from 'react';

export default function Button(props){
return <button onClick={() => 
         {props.SetState(props.value)}
        }>
          {props.value}
      </button>
}