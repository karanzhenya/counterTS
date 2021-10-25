import React, {ChangeEvent} from 'react';
import s from './App.module.css';

type CustomizationPropsType = {
    maxValue: number
    startValue: number
    startValueSuccess: (propStartValue: number) => void
    maxValueSuccess: (propMaxValue: number) => void
}

const Customization = React.memo((props: CustomizationPropsType) => {

    const startValueSuccess = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueSuccess(e.currentTarget.valueAsNumber)
    }
    const maxValueSuccess = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueSuccess(e.currentTarget.valueAsNumber)
    }
    return <div className={s.customization}>
        <div className={s.maxValue}><h3>
            max value: <input value={props.maxValue} type={'number'} onChange={maxValueSuccess}></input>
        </h3></div>
        <div className={s.startValue}><h3>
            start value: <input value={props.startValue} type={'number'} onChange={startValueSuccess}></input>
        </h3>
        </div>
    </div>
})

export default Customization;