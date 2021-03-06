import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Settings from "./components/Settings";
import InformationPanel from "./components/InformationPanel";
import {changeMaxValueAC, changeStartValueAC, changeValueAC, stateType} from "./redux/counterReducer";
import {RootStateType} from './redux/store';
import s from './App.module.css';


const App = () => {

    const dispatch = useDispatch();
    const state = useSelector<RootStateType, stateType>(state => state.counter)
    const [disabledStartValue, setDisabledStartValue] = useState(false)
    const [disabledMaxValue, setDisabledMaxValue] = useState(false)

    const startValueSuccess = (newStartValue: number) => {
        if (newStartValue < 0) {
            setDisabledStartValue(true)
        }
        if (newStartValue >= state.maxValue) {
            setDisabledStartValue(true)
        }
        if (newStartValue >= 0 && newStartValue < state.maxValue) {
            setDisabledStartValue(false)
            setDisabledMaxValue(false)
        }
        dispatch(changeStartValueAC(newStartValue))
    };
    const maxValueSuccess = (newMaxValue: number) => {
        if (newMaxValue <= state.startValue) {
            setDisabledMaxValue(true)
        }
        if (newMaxValue > state.startValue) {
            setDisabledMaxValue(false)
            setDisabledStartValue(false)
        }
        dispatch(changeMaxValueAC(newMaxValue))
    };
    const valueSuccess = () => {
        dispatch(changeValueAC(state.startValue))
        localStorage.setItem("startValue", String(state.startValue))
        localStorage.setItem("maxValue", String(state.maxValue))
    };
    return <div className={s.appWrapper}>
        <div className={s.settingsBlock}>
            <Settings maxValue={state.maxValue}
                      startValue={state.startValue}
                      startValueSuccess={startValueSuccess}
                      maxValueSuccess={maxValueSuccess}
                      valueSuccess={valueSuccess}
                      disabledMax={disabledMaxValue}
                      disabledStart={disabledStartValue}
            />
        </div>
        <div className={s.informationPanelBlock}>
            <InformationPanel value={state.value}
                              maxValue={state.maxValue}
                              disabledMax={disabledMaxValue}
                              disabledStart={disabledStartValue}/>
        </div>
    </div>
}

export default App;