import React from 'react';
import s from './App.module.css';

type EnterCustomizationPropsType = {
    valueSuccess: () => void
}

const EnterCustomization = React.memo((props: EnterCustomizationPropsType) => {
        return <div className={s.enterCuztomization}>
            <button onClick={() => props.valueSuccess()}>Set</button>
        </div>
    }
)

export default EnterCustomization;