import React from 'react';
import s from './App.module.css';
import Customization from "./Customization";
import EnterCustomization from "./EnterCustomization";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    startValueSuccess: (propStartValue: number) => void
    maxValueSuccess: (propMaxValue: number) => void
    valueSuccess: () => void
}

const Settings = React.memo((props: SettingsPropsType) => {
    return <div className={s.settings}>
        <Customization maxValue={props.maxValue}
                       startValue={props.startValue}
                       startValueSuccess={props.startValueSuccess}
                       maxValueSuccess={props.maxValueSuccess}
        />
        <EnterCustomization valueSuccess={props.valueSuccess}/>
    </div>
})

export default Settings;