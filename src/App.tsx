import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Settings from "./Settings";
import InformationPanel from "./InformationPanel";


const App = () => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [value, setValue] = useState<number>(0);
    const [disabledStartValue, setDisabledStartValue] = useState(false)
    const [disabledMaxValue, setDisabledMaxValue] = useState(false)

    useEffect(() => {
        let localStorageStartValue = Number(localStorage.getItem("startValue"))
        let localStorageMaxValue = Number(localStorage.getItem("maxValue"))
        setStartValue(localStorageStartValue)
        setMaxValue(localStorageMaxValue)
    }, [])

    const startValueSuccess = (newStartValue: number) => {
        if (newStartValue < 0) {
            setDisabledStartValue(true)
        }
        if (newStartValue >= maxValue) {
            setDisabledStartValue(true)
        }
        if (newStartValue >= 0 && newStartValue < maxValue) {
            setDisabledStartValue(false)
        }
        newStartValue > startValue ? setStartValue(startValue + 1) : setStartValue(startValue - 1)
    };
    const maxValueSuccess = (newMaxValue: number) => {
        if (newMaxValue <= startValue) {
            setDisabledMaxValue(true)
        }
        if (newMaxValue > startValue) {
            setDisabledMaxValue(false)
        }
        newMaxValue > maxValue ? setMaxValue(maxValue + 1) : setMaxValue(maxValue - 1)
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