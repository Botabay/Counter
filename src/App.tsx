import './App.css';
import { CountView } from './components/CountView'
import { Button } from './components/Button'
import { useEffect, useState } from 'react'
import { SettingsWindow } from './components/SettingsWindow'

export type SettingsType = {
    minValue: number
    maxValue: number
    currentValue: number
}
export const App = () => {
    const [settingsSt, setSettingsSt] = useState<SettingsType>({ minValue: 0, maxValue: 10, currentValue: 0 });

    let error = settingsSt.currentValue >= settingsSt.maxValue || settingsSt.minValue === settingsSt.maxValue || settingsSt.maxValue < 0 || settingsSt.minValue < 0;
    useEffect(() => {
        window.localStorage.setItem('myCounter', settingsSt.currentValue.toString());
    }, [settingsSt.currentValue])
    // useEffect(() => {
    //     setCountSt(countSettings.start);
    //     console.log(countSettings);

    // }, [countSettings])
    const toInc = () => {
        if (settingsSt.currentValue <= settingsSt.maxValue)
            setSettingsSt({ ...settingsSt, currentValue: ++settingsSt.currentValue })
        //localStorage.setItem('myCounter',countSt.toString())
    }
    const toReset = () => {
        setSettingsSt({ ...settingsSt, currentValue: settingsSt.minValue });
        // localStorage.setItem('myCounter',countSt.toString())
    }
    // const callback = () => {

    // }
    return (
        <div className="App">
            <SettingsWindow callback={setSettingsSt} state={settingsSt}/>
            <div className='counterWindow'>
                <CountView count={settingsSt.currentValue} error={error} correctValue={true} />
                <div>
                    <Button
                        name={'inc'}
                        onClick={toInc}
                        disabled={settingsSt.currentValue === settingsSt.maxValue}
                    />
                    <Button
                        name={'reset'}
                        onClick={toReset}
                        disabled={settingsSt.currentValue === settingsSt.minValue}
                    />
                </div>
            </div>
        </div>
    );
}

// export const App = () => {
//     const [countSt, setCountSt] = useState<number>(0);
//     const [disabledIncSt, setDisabledIncSt] = useState<boolean>(false);
//     const [disabledResetSt, setDisabledResetSt] = useState<boolean>(true);
//     const toInc = () => {
//         let count = countSt + 1;
//         if (count>5) {count =5;setDisabledIncSt(true)}
//         setCountSt(count);
//         setDisabledResetSt(false)
//     }
//     const toReset = () => {
//         setCountSt(0);
//         setDisabledIncSt(false)
//         setDisabledResetSt(true)
//     }
//     return (
//         <div className="App">
//             <CountView count={countSt} />
//             <div>
//                 <Button name={'inc'} onClick={toInc} disabled={disabledIncSt}/>
//                 <Button name={'reset'} onClick={toReset} disabled={disabledResetSt}/>
//             </div>
//         </div>
//     );
// }

