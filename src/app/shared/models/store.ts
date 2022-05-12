import { ADD_TODO} from 'src/app/actions';
import { Acronime } from './acronime';
import { tassign } from "tassign";

export interface IAppState {

  acronimes:Acronime[]

}

export const INITIAL_STATE: IAppState = {

acronimes:[]

};

export function rootReducer(state:any, action:any) {

  switch (action.type) {
    case ADD_TODO: return tassign(state,{acronimes:action.data});
  }

  return state;
  
}
