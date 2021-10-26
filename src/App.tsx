import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Settings from "./Settings";
import InformationPanel from "./InformationPanel";


const App = () => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [value, setValue] = useState<number>(0);
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        let localStorageStartValue = Number(localStorage.getItem("startValue"))
        let localStorageMaxValue = Number(localStorage.getItem("maxValue"))
        setStartValue(localStorageStartValue)
        setMaxValue(localStorageMaxValue)
    }, [])

    const startValueSuccess = (propStartValue: number) => {

        setStartValue(propStartValue)
    };
    const maxValueSuccess = (propMaxValue: number) => {
        if (propMaxValue <= startValue) {
            setDisabled(true)
        }
        if (propMaxValue > startValue) {
            setDisabled(false)
        }
        setMaxValue(propMaxValue)
    };
    const valueSuccess = () => {
        setValue(startValue)
        localStorage.setItem("startValue", String(startValue))

        localStorage.setItem("maxValue", String(maxValue))

    };
    console.log(disabled)
    return <div className={s.appWrapper}>
        <div className={s.settingsBlock}>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      startValueSuccess={startValueSuccess}
                      maxValueSuccess={maxValueSuccess}
                      valueSuccess={valueSuccess}
                      disabled={disabled}
            />
        </div>
        <div className={s.informationPanelBlock}>
            <InformationPanel value={value} maxValue={maxValue} disabled={disabled}/>
        </div>
    </div>
}

export default App;