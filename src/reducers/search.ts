import actions, { ISearchSetFilter } from '../actions/search';

export interface ISearchReducer {
  filter: string;
}

const initialState: ISearchReducer = {
  filter: '',
};

function searchReducer(state: ISearchReducer = initialState, action: ISearchSetFilter): ISearchReducer {
  switch (action.type) {
    case actions.types.SEARCH_SET_FILTER:
      return { filter: action.payload.filter };
    default:
      return state;
  }
}

export default searchReducer;
