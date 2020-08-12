import React from 'react';

export default function Button(props){
return <button className={props.className} onClick={() => { props.SetState(props.value) }}> {props.value}</button>
}