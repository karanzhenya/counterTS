import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Settings from "./Settings";
import InformationPanel from "./InformationPanel";


const App = () => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [value, setValue] = useState<number>(0);
    const [disabledStartValue, setDisabledStartValue] = useState(false)
    const [disabledMaxValue, setDisabledMaxValue] = useState(false)

    useEffect(() => {
        let localStorageStartValue = Number(localStorage.getItem("startValue"))
        let localStorageMaxValue = Number(localStorage.getItem("maxValue"))
        setStartValue(localStorageStartValue)
        setMaxValue(localStorageMaxValue)
    }, [])

    const startValueSuccess = (propStartValue: number) => {
        if (propStartValue < 0) {
            setDisabledStartValue(true)
        }
        if (propStartValue >= 0) {
            setDisabledStartValue(false)
        }
        propStartValue > startValue ? setStartValue(startValue + 1) : setStartValue(startValue - 1)
    };
    const maxValueSuccess = (propMaxValue: number) => {
        if (propMaxValue <= startValue){
            setDisabledMaxValue(true)
        }
        if (propMaxValue > startValue) {
            setDisabledMaxValue(false)
        }
        propMaxValue > maxValue ? setMaxValue(maxValue + 1) : setMaxValue(maxValue - 1)
    };
    const valueSuccess = () => {
        setValue(startValue)
        localStorage.setItem("startValue", String(startValue))
        localStorage.setItem("maxValue", String(maxValue))
    };
    return <div className={s.appWrapper}>
        <div className={s.settingsBlock}>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      startValueSuccess={startValueSuccess}
                      maxValueSuccess={maxValueSuccess}
                      valueSuccess={valueSuccess}
                      disabledMax={disabledMaxValue}
                      disabledStart={disabledStartValue}
            />
        </div>
        <div className={s.informationPanelBlock}>
            <InformationPanel value={value}
                              maxValue={maxValue}
                              disabledMax={disabledMaxValue}
                              disabledStart={disabledStartValue}/>
        </div>
    </div>
}

export default App;