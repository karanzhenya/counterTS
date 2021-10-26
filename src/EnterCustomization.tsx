import React from 'react';
import s from './App.module.css';
import Button from "./Button";

type EnterCustomizationPropsType = {
    valueSuccess: () => void
}

const EnterCustomization = React.memo((props: EnterCustomizationPropsType) => {
        return <div className={s.enterCuztomization}>
            <Button onClick={() => props.valueSuccess()}>Set</Button>
        </div>
    }
)

export default EnterCustomization;