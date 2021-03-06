import { Dispatch as ReduxDispatch } from 'redux';
// import { ThunkAction as ReduxThunkAction } from 'redux-thunk';

import { RootState, RootAction } from '@src/redux';

export type Dispatch = ReduxDispatch<RootState>;
export type Reducer<S> = (state: S, action: RootAction) => S;

export type Api = {};
// export type ThunkAction<T> = ReduxThunkAction<T, RootState, Api>;


// OLD ACTION MERGING
// import { returntypeof } from 'react-redux-typescript';

// const actions = Object.values({
//   ...converterActionCreators,
// }).map(returntypeof);

// export type IRootAction = typeof actions[number];
