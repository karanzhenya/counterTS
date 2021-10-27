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

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueSuccess(e.currentTarget.valueAsNumber)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueSuccess(e.currentTarget.valueAsNumber)
    }
    return <div className={s.customization}>
        <div className={s.maxValue}><h3>
            max value: <input className={props.disabledMax ? s.inputError : s.input}
                              value={props.maxValue}
                              type={'number'}
                              onChange={onChangeMaxValue}/>
        </h3></div>
        <div className={s.startValue}><h3>
            start value: <input className={props.disabledStart ? s.inputError : s.input}
                                value={props.startValue}
                                type={'number'}
                                onChange={onChangeStartValue}/>
        </h3>
        </div>
    </div>
})

export default Customization;