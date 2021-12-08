import React from 'react';
import s from './App.module.css';
import Button from "./utils/Button";

type EnterCustomizationPropsType = {
    valueSuccess: () => void
    disabledMax?: boolean
    disabledStart?: boolean
}

const EnterCustomization = React.memo((props: EnterCustomizationPropsType) => {
        const disabled = props.disabledMax === true || props.disabledStart === true
        return <div className={s.enterCuztomization}>
            <Button onClick={() => props.valueSuccess()} disabled={disabled}>Set</Button>
        </div>
    }
)

export default EnterCustomization;