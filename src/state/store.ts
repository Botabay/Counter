import { combineReducers, createStore, legacy_createStore } from 'redux'
import { loadState, saveState } from '../localStorage/localStorage';
import { settingsReducer } from './settings-reducer';

const rootReducer = combineReducers({
    settigs: settingsReducer
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

const persistedState = loadState();
export const store = legacy_createStore(rootReducer, persistedState)
store.subscribe(() => {
    saveState({
        minValue: store.getState().settigs.minValue,
        maxValue: store.getState().settigs.minValue
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

