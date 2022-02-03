import React from 'react';
import Customization from "./Customization";
import EnterCustomization from "./EnterCustomization";
import s from '../App.module.css';


type SettingsPropsType = {
    maxValue: number
    startValue: number
    startValueSuccess: (propStartValue: number) => void
    maxValueSuccess: (propMaxValue: number) => void
    valueSuccess: () => void
    disabledMax?: boolean
    disabledStart?: boolean
}

const Settings = React.memo((props: SettingsPropsType) => {
    return <div className={s.settings}>
        <Customization maxValue={props.maxValue}
                       startValue={props.startValue}
                       startValueSuccess={props.startValueSuccess}
                       maxValueSuccess={props.maxValueSuccess}
                       disabledMax={props.disabledMax}
                       disabledStart={props.disabledStart}
        />
        <EnterCustomization valueSuccess={props.valueSuccess}
                            disabledMax={props.disabledMax}
                            disabledStart={props.disabledStart}/>
    </div>
})

export default Settings;