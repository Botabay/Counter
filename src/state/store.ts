import { combineReducers, createStore, legacy_createStore } from 'redux'
import { saveState } from '../localStorage/localStorage';
import { settingsReducer } from './settings-reducer';
import { numberOrTextModeReducer } from './numberOrTextMode-reducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
    numberOrTextMode: numberOrTextModeReducer
})

// const persistedState = loadState();
// const store = createStore(
//   app,
//   persistedState
// );
// store.subscribe(() => {
//   saveState({
//     todos: store.getState().todos
//   });
// });

// const persistedState = loadState();
// export const store = legacy_createStore(rootReducer, persistedState)//??
export const store = legacy_createStore(rootReducer)
store.subscribe(() => {
    saveState({
        minValue: store.getState().settings.minValue,
        maxValue: store.getState().settings.maxValue
    });
});

export type AppRootStateType = ReturnType<typeof rootReducer>


// import throttle from 'lodash.throttle';
// ...
// store.subscribe(throttle(() => {
//   saveState({
//     todos: store.getState().todos
//   });
// }, 1000));

