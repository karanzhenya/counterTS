import React, {useCallback, useEffect, useState} from 'react';
import s from './App.module.css';
import Button from "./Button";


type InformationPanelType = {
    value: number
    maxValue: number
    disabled?: boolean
    disabledMax?: boolean
    disabledStart?: boolean
}

const InformationPanel = React.memo((props: InformationPanelType) => {
    const [workingValue, setWorkingValue] = useState(props.value)
    const [disabledInc, setDisabledIncButton] = useState(false)

    let valueLocalSorage = Number(localStorage.getItem("startValue"))
    useEffect(() => {
        setWorkingValue(props.value)
    }, [props.value])

    useEffect(() => {
        if (workingValue !== valueLocalSorage) {
            setWorkingValue(valueLocalSorage)
        }
    }, [])

    const Increment = () => {
        if (props.maxValue >= workingValue + 1) {
            setWorkingValue(workingValue + 1)
        }
        if (props.maxValue - 1 === workingValue) {
            setDisabledIncButton(true)
        }
    }
    const Reset = () => {
        setWorkingValue(valueLocalSorage)
        setDisabledIncButton(false)
    }
    let disabled = props.disabledMax || props.disabledStart || disabledInc;

    return <div className={s.controlInformationPanel}>
        <div className={disabledInc ? s.errorInfo : s.info}>
            {props.disabledMax ?
                <div className={s.error}>maximum value cannot be equal to the starting</div> : props.disabledStart ?
                    <div className={s.error}>starting value cannot be less than zero</div> : <h1>{workingValue}</h1>
            }
        </div>
        <div className={s.control}>
            <Button onClick={Increment} disabled={disabled}>Inc</Button>
            <Button onClick={Reset}>Reset</Button>
        </div>
    </div>
})

export default InformationPanel;