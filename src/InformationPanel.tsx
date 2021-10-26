import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Button from "./Button";


type InformationPanelType = {
    value: number
    maxValue: number
    disabled?: boolean
}

const InformationPanel = React.memo((props: InformationPanelType) => {
    const [workingValue, setWorkingValue] = useState(props.value)
    const [disabledInc, setDisabledInc] = useState(false)
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
        if (props.maxValue >= workingValue +1) {
            setWorkingValue(workingValue + 1)
        }
        if (props.maxValue - 1 === workingValue) {
            setDisabledInc(true)
        }



    }
    const Reset = () => {
        setWorkingValue(valueLocalSorage)
        setDisabledInc(false)
    }
    console.log(disabledInc)
    return <div className={s.controlInformationPanel}>
        <div className={disabledInc? s.errorInfo: s.info}>
            {props.disabled ? <div>enter correct values</div>: <h1>{workingValue}</h1>
            }
        </div>
        <div className={s.control}>
            <Button onClick={Increment} disabled={disabledInc}>Inc</Button>
            <Button onClick={Reset}>Reset</Button>
        </div>
    </div>
})

export default InformationPanel;