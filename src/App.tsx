import React, {useState} from 'react';
import s from './App.module.css';
import Settings from "./Settings";
import InformationPanel from "./InformationPanel";


const App = () => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [value, setValue] = useState<number>(0);

    const startValueSuccess = (propStartValue: number) => {
        setStartValue(propStartValue)
    };
    const maxValueSuccess = (propMaxValue: number) => {
        setMaxValue(propMaxValue)
    };
    const valueSuccess = () => {
       setValue(startValue)
    };

    return <div className={s.appWrapper}>
        <div>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      startValueSuccess={startValueSuccess}
                      maxValueSuccess={maxValueSuccess}
                      valueSuccess={valueSuccess}
            />
        </div>
        <div>
            <InformationPanel value={value} maxValue={maxValue}/>
        </div>
    </div>
}

export default App;