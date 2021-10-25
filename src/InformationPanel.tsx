import React, {useEffect, useState} from 'react';
import s from './App.module.css';


type InformationPanelType = {
    value: number
    maxValue: number
}

const InformationPanel = React.memo((props: InformationPanelType) => {
    const [workingValue, setWorkingValue] = useState(props.value)
    useEffect(() => {
        setWorkingValue(props.value)
    }, [props.value])
    useEffect(() => {
        let valueLocalSorage = Number(localStorage.getItem("startValue"))
        if (workingValue !== valueLocalSorage) {
            setWorkingValue(valueLocalSorage)
        }
    }, [])


    const Increment = () => {
        if (props.maxValue > workingValue) {
            setWorkingValue(workingValue + 1)
        }
    }
    const Reset = () => {
        setWorkingValue(props.value)
    }

    return <div className={s.controlInformationPanel}>
        <div className={s.info}>
            <h1>{workingValue}</h1>
        </div>
        <div className={s.control}>
            <button onClick={Increment}>Inc</button>
            <button onClick={Reset}>Reset</button>
        </div>
    </div>
})

export default InformationPanel;