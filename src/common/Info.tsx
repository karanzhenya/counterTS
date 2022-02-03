import React from 'react';
import s from '../App.module.css';


type ErrorMessagePropType = {
    disabledInc: boolean,
    disabledMax?: boolean,
    disabledStart?: boolean,
    workingValue: number
}

const Info = (props: ErrorMessagePropType) => {
    return <div className={props.disabledInc ? s.errorInfo : s.info}>
        {props.disabledMax ?
            <div className={s.error}>Максимальное значение не может быть меньше или равно
                начальному</div> : props.disabledStart ?
                <div className={s.error}>Начальное значение не может быть меньше нуля, а также больше либо равно
                    максимальному значению</div> : <h1>{props.workingValue}</h1>
        }
    </div>
}

export default Info;