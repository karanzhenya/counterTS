import React, {useEffect, useState} from 'react';
import Button from "./utils/Button";
import Info from "./utils/Info";
import s from './App.module.css';


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

    useEffect(() => {
        setWorkingValue(props.value)
    }, [props.value])

    useEffect(() => {
        if (workingValue !== valueLocalStorage) {
            setWorkingValue(valueLocalStorage)
        }
    }, [])

    let valueLocalStorage = Number(localStorage.getItem("startValue"))

    const Increment = () => {
        if (props.maxValue >= workingValue + 1) {
            setWorkingValue(workingValue + 1)
        }
        if (props.maxValue - 1 === workingValue) {
            setDisabledIncButton(true)
        }
    }
    const Reset = () => {
        setWorkingValue(valueLocalStorage)
        setDisabledIncButton(false)
    }
    let disabled = props.disabledMax || props.disabledStart || disabledInc;

    return <div className={s.controlInformationPanel}>
        <Info disabledInc={disabledInc} disabledStart={props.disabledStart} disabledMax={props.disabledMax} workingValue={workingValue}/>
        <div className={s.control}>
            <Button onClick={Increment} disabled={disabled}>Inc</Button>
            <Button onClick={Reset}>Reset</Button>
        </div>
    </div>
})

export default InformationPanel;