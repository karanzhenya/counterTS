import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';

type CustomizationPropsType = {
    maxValue: number
    startValue: number
    startValueSuccess: (propStartValue: number) => void
    maxValueSuccess: (propMaxValue: number) => void
    disabled?: boolean
}

const Customization = React.memo((props: CustomizationPropsType) => {

    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        if(props.startValue < 0) {
            setDisabled(true)
        }
    }, [props.startValue])

    const startValueSuccess = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueSuccess(e.currentTarget.valueAsNumber)
    }
    const maxValueSuccess = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueSuccess(e.currentTarget.valueAsNumber)
    }
    return <div className={s.customization}>
        <div className={s.maxValue}><h3>
            max value: <input className={s.input}
                              value={props.maxValue}
                              type={'number'}
                              onChange={maxValueSuccess}/>
        </h3></div>
        <div className={s.startValue}><h3>
            start value: <input className={s.input}
                                value={props.startValue}
                                type={'number'}
                                disabled={disabled}
                                onChange={startValueSuccess}/>
        </h3>
        </div>
    </div>
})

export default Customization;