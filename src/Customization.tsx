import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';

type CustomizationPropsType = {
    maxValue: number
    startValue: number
    startValueSuccess: (propStartValue: number) => void
    maxValueSuccess: (propMaxValue: number) => void
    disabledMax?: boolean
    disabledStart?: boolean
}

const Customization = React.memo((props: CustomizationPropsType) => {

    const [startValue, setStartValue] = useState(props.startValue)
    const [maxValue, setMaxValue] = useState(props.maxValue)


    useEffect(() => {
        setStartValue(Number(localStorage.getItem("startValue")))
        setMaxValue(Number(localStorage.getItem("maxValue")))
        props.startValueSuccess(Number(localStorage.getItem("startValue")))
        props.maxValueSuccess(Number(localStorage.getItem("maxValue")))
    }, [])

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        props.startValueSuccess(e.currentTarget.valueAsNumber)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        props.maxValueSuccess(e.currentTarget.valueAsNumber)
    }
    return <div className={s.customization}>
        <div className={s.maxValue}><h3>
            max value: <input className={props.disabledMax ? s.inputError : s.input}
                              value={maxValue}
                              type={'number'}
                              onChange={onChangeMaxValue}/>
        </h3></div>
        <div className={s.startValue}><h3>
            start value: <input className={props.disabledStart ? s.inputError : s.input}
                                value={startValue}
                                type={'number'}
                                onChange={onChangeStartValue}/>
        </h3>
        </div>
    </div>
})

export default Customization;