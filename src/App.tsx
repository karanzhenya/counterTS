import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Settings from "./Settings";
import InformationPanel from "./InformationPanel";


const App = () => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        let localStorageStartValue = Number(localStorage.getItem("startValue"))
        let localStorageMaxValue = Number(localStorage.getItem("maxValue"))
        setStartValue(localStorageStartValue)
        setMaxValue(localStorageMaxValue)
    }, [])

    const startValueSuccess = (propStartValue: number) => {
        setStartValue(propStartValue)
        localStorage.setItem("startValue", String(propStartValue))
    };
    const maxValueSuccess = (propMaxValue: number) => {
        setMaxValue(propMaxValue)
        localStorage.setItem("maxValue", String(propMaxValue))
    };
    const valueSuccess = () => {
        setValue(startValue)
    };

    return <div className={s.appWrapper}>
        <div className={s.settingsBlock}>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      startValueSuccess={startValueSuccess}
                      maxValueSuccess={maxValueSuccess}
                      valueSuccess={valueSuccess}
            />
        </div>
        <div className={s.informationPanelBlock}>
            <InformationPanel value={value} maxValue={maxValue}/>
        </div>
    </div>
}

export default App;