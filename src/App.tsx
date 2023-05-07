import './App.css';
import { CountView } from './components/CountView'
import { Button } from './components/Button'
import { useEffect, useState } from 'react'
import { error } from 'console';

export const App = () => {
    let countSettings = {start:0,max:10};
    const [countSt, setCountSt] = useState<number>(countSettings.start);
    let error= countSt>=countSettings.max || countSettings.start===countSettings.max || countSettings.max<0 || countSettings.start<0;
    useEffect(() => {
        window.localStorage.setItem('myCounter', countSt.toString());
    }, [countSt])
    // useEffect(() => {
    //     setCountSt(countSettings.start);
    //     console.log(countSettings);
        
    // }, [countSettings])
    const toInc = () => {
        setCountSt(countSt >= countSettings.max ? countSettings.max : countSt + 1)
        //localStorage.setItem('myCounter',countSt.toString())
    }
    const toReset = () => {
        setCountSt(0);
        // localStorage.setItem('myCounter',countSt.toString())
    }
    const toSet=()=>{
        countSettings={start:2,max:12};
        setCountSt(countSettings.start);
    }
    
    return (
        <div className="App">
            <div className='settingsWindow'>
                <div className='maxField'>
                    <span>max value:</span> <input type="number" />
                </div>
                <div className='startField'>
                    <span>start value:</span> <input type="number" />
                </div>
                <div>
                    <Button name={'set'} onClick={toSet} disabled={false} />
                </div>
            </div>
            =======================
            <div className='counterWindow'>
                <CountView count={countSt} error={error}/>
                <div>
                    <Button name={'inc'} onClick={toInc} disabled={countSt === countSettings.max} />
                    <Button name={'reset'} onClick={toReset} disabled={countSt === countSettings.start} />
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

