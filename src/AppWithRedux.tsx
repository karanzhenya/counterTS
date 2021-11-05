import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Settings from "./Settings";
import InformationPanel from "./InformationPanel";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from './redux/store';
import {changeMaxValueAC, changeStartValueAC, changeValueAC, stateType} from "./redux/counterReducer";


const AppWithRedux = () => {

    const dispatch = useDispatch();
    const state = useSelector<RootStateType, stateType>(state => state.counter)
    //const [dataValues, setDatasValues] = useState({startValue: state.startValue, maxValue: state.maxValue})
    const [disabledStartValue, setDisabledStartValue] = useState(false)
    const [disabledMaxValue, setDisabledMaxValue] = useState(false)

    /*useEffect(() => {
        dispatch(changeStartValueAC(Number(localStorage.getItem("startValue"))))
        dispatch(changeMaxValueAC(Number(localStorage.getItem("maxValue"))))
    }, [])*/


    const startValueSuccess = (newStartValue: number) => {
        if (newStartValue < 0) {
            setDisabledStartValue(true)
        }
        if (newStartValue >= state.maxValue) {
            setDisabledStartValue(true)
        }
        if (newStartValue >= 0 && newStartValue < state.maxValue) {
            setDisabledStartValue(false)
        }
        dispatch(changeStartValueAC(newStartValue))
    };
    const maxValueSuccess = (newMaxValue: number) => {
        if (newMaxValue <= state.startValue) {
            setDisabledMaxValue(true)
        }
        if (newMaxValue > state.startValue) {
            setDisabledMaxValue(false)
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

export default AppWithRedux;