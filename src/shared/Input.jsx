import React from 'react'

export default function Input({id,title,value,type,name,changeData,customClasses,errors}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{title}</label>
            <input type={type} name={name} className={`form-control ${customClasses}`} id={id} onChange={changeData} value={value} />  
            {errors[name] && <p className="text-danger">{errors[name]}</p>}

        </div>
    )
}
