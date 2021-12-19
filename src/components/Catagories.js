import React from 'react'
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import {Historical,Horror,Fantasy,Detective} from '../Redux/actions/cataActions.js/cataAction'
import { useSelector } from 'react-redux'



export default function Catagories() {
    const dispatch = useDispatch()
    const globalState=useSelector((state)=>state.CataReducer)
    console.log('globalState',globalState);

    return (
        <div>

<Button onClick={()=> dispatch(Historical()) } style={{background:'#6B4F4F'}}  variant="contained">Historical Fiction.</Button>{' '}
<Button onClick={()=> dispatch(Horror())} style={{background:'#6B4F4F'}} variant="contained">Horror</Button>{' '}
<Button onClick={()=> dispatch(Fantasy())} style={{background:'#6B4F4F'}} variant="contained">Fantasy</Button>{' '}
<Button onClick={()=> dispatch(Detective())} style={{background:'#6B4F4F'}} variant="contained">Detective and Mystery</Button>{' '}

<div>
    <br/>
    <br/>
    <br/>
    <br/>


    {globalState.normalized_name}
    <br/>
    {globalState.Description}
    
</div>


         
            
        </div>
    )
}

