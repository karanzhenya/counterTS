import React from 'react';
import s from './App.module.css';


type ButtonPropsType = {
    onClick: () => void
    children?: string
}

const Button = React.memo((props: ButtonPropsType) => {
    return <div>
        <button className={s.button} onClick={props.onClick}>{props.children}</button>
    </div>
})

export default Button;