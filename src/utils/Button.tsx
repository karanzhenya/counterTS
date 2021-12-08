import React from 'react';
import s from '../App.module.css';


type ButtonPropsType = {
    onClick: () => void
    children?: string
    disabled?: boolean
}

const Button = React.memo((props: ButtonPropsType) => {
    return <div>
        <button disabled={props.disabled} className={s.button} onClick={props.onClick}>{props.children}</button>
    </div>
})

export default Button;