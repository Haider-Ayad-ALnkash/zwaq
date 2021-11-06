import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function Work() {
    const [work,setWork]=useState([]);
    useEffect(()=>{
        axios.get('../../js/data.json').then(res=>{setWork(res.data.works)})

    },[])
    const workList=work.map(workItem=>{
        return(
            <div className="part" key={workItem.id}>
                <a href={workItem.href} target="_blank" rel="noreferrer">
                    <i className={workItem.icon_name}></i>
                    <h4 className="part-title">{workItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                        {workItem.body}
                    </p>
                </a>
            </div>
        )
    })

    return (
        <div className="work">
        <div className="container">
            <h2 className="work-title">MY WORK</h2>
                {workList}
        </div>
    </div>
    )
}

